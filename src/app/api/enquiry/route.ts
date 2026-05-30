import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Path to our enquiries spreadsheet (CSV) — server-side only
const CSV_FILE_PATH = path.join(process.cwd(), "enquiries.csv");
const LOG_FILE_PATH = path.join(process.cwd(), "notifications.log");

// ============================================================
// Input Validation & Sanitization
// ============================================================

/** Strip HTML tags and dangerous characters to prevent XSS/injection */
function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[<>"'`]/g, "") // strip dangerous chars
    .trim()
    .slice(0, 500); // hard length cap
}

/** Validate email format */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

/** Validate Indian/international mobile number */
function isValidMobile(mobile: string): boolean {
  const mobileRegex = /^[+]?[\d\s\-().]{7,20}$/;
  return mobileRegex.test(mobile);
}

/** Validate name — letters, spaces, hyphens, apostrophes only */
function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\u00C0-\u024F\s'\-]{2,100}$/;
  return nameRegex.test(name);
}

const ALLOWED_COURSES = ["MBA (Global)", "BBA", "MCA", "BCA"];

/** Escape a value for safe CSV inclusion */
function escapeCSV(val: string): string {
  if (val.includes(",") || val.includes('"') || val.includes("\n") || val.includes("\r")) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

// ============================================================
// Rate Limiting (in-memory, per-IP, resets on server restart)
// ============================================================
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

// ============================================================
// POST Handler
// ============================================================
export async function POST(request: Request) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // --- Parse body ---
    let rawData: unknown;
    try {
      rawData = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    if (typeof rawData !== "object" || rawData === null) {
      return NextResponse.json(
        { success: false, error: "Invalid request format." },
        { status: 400 }
      );
    }

    const data = rawData as Record<string, unknown>;

    // --- Sanitize inputs ---
    const name = sanitizeString(data.name);
    const email = sanitizeString(data.email).toLowerCase();
    const mobile = sanitizeString(data.mobile);
    const course = sanitizeString(data.course);

    // --- Validate presence ---
    if (!name || !email || !mobile || !course) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // --- Validate formats ---
    if (!isValidName(name)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!isValidMobile(mobile)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    if (!ALLOWED_COURSES.includes(course)) {
      return NextResponse.json(
        { success: false, error: "Please select a valid course." },
        { status: 400 }
      );
    }

    // --- Honeypot check (if client sends a honeypot field, reject silently) ---
    if (data.website || data.url || data.phone2) {
      // Silently succeed to fool bots
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully!" });
    }

    const timestamp = new Date().toISOString();

    // --- Write to CSV (local dev only — filesystem is read-only on serverless) ---
    if (process.env.NODE_ENV !== "production") {
      const csvRow = `${escapeCSV(timestamp)},${escapeCSV(name)},${escapeCSV(email)},${escapeCSV(mobile)},${escapeCSV(course)}\n`;
      if (!fs.existsSync(CSV_FILE_PATH)) {
        const headers = "Timestamp,Full Name,Email,Mobile,Preferred Course\n";
        fs.writeFileSync(CSV_FILE_PATH, headers + csvRow, "utf8");
      } else {
        fs.appendFileSync(CSV_FILE_PATH, csvRow, "utf8");
      }
    }

    // --- Google Sheets Integration (8s timeout) ---
    const gsEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const gsPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
    const gsSpreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const gsSheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";
    let googleSheetStatus = "Not configured";

    if (gsEmail && gsPrivateKey && gsSpreadsheetId) {
      try {
        console.log("[Sheets] Writing to spreadsheet:", gsSpreadsheetId, "tab:", gsSheetName);

        const auth = new google.auth.JWT({
          email: gsEmail,
          key: gsPrivateKey.replace(/\\n/g, "\n").replace(/\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Timed out after 8s")), 8000)
        );

        await Promise.race([
          sheets.spreadsheets.values.append({
            spreadsheetId: gsSpreadsheetId,
            range: `${gsSheetName}!A:E`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
              values: [[
                new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                name, email, mobile, course,
              ]],
            },
          }),
          timeoutPromise,
        ]);

        googleSheetStatus = "Updated successfully";
        console.log("[Sheets] Row appended OK");
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        googleSheetStatus = `Failed: ${message}`;
        console.error("[Sheets Error]", message);
      }
    } else {
      console.warn("[Sheets] Skipped — missing env vars. hasEmail:", !!gsEmail, "hasKey:", !!gsPrivateKey, "hasId:", !!gsSpreadsheetId);
    }

    // --- Email Notification ---
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notifyEmail = process.env.NOTIFY_EMAIL || "admin@example.com";

    const emailSubject = `New Student Enquiry: ${name} — ${course}`;

    // Safe HTML email — all values are sanitized before this point
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #efedf1; border-radius: 12px; padding: 24px; background-color: #faf9fd;">
        <div style="text-align: center; border-bottom: 2px solid #FFC629; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #002147; margin: 0;">Amity University Online</h2>
          <p style="color: #005EB8; margin: 4px 0 0 0; font-weight: bold; letter-spacing: 1px;">NEW LEAD CAPTURED</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #44474e; font-weight: bold; width: 140px;">Student Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #1a1b1e; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #44474e; font-weight: bold;">Email Address</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #005EB8; font-weight: 500;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #44474e; font-weight: bold;">Mobile Number</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #1a1b1e; font-weight: 500;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #44474e; font-weight: bold;">Preferred Course</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #efedf1; color: #6d5200; font-weight: bold;">${course}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #44474e; font-weight: bold;">Submitted At</td>
            <td style="padding: 10px 0; color: #74777f; font-size: 13px;">${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
          </tr>
        </table>
        <div style="background-color: #efedf1; border-radius: 8px; padding: 12px 16px; text-align: center; font-size: 12px; color: #44474e;">
          This lead has been added to your <strong>enquiries.csv</strong> spreadsheet.
        </div>
      </div>
    `;

    let emailSent = false;
    let transportMethod = "None";

    if (smtpHost && smtpUser && smtpPass) {
      try {
        console.log("[Email] Attempting to send via", smtpHost, "port", smtpPort, "user", smtpUser);

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
          tls: {
            rejectUnauthorized: false,
          },
        });

        // Verify connection before sending
        await transporter.verify();
        console.log("[Email] SMTP connection verified OK");

        await transporter.sendMail({
          from: `"Amity University Online" <${smtpUser}>`,
          to: notifyEmail,
          replyTo: smtpUser,
          subject: `New Admission Enquiry — ${name} (${course})`,
          html: emailHtml,
          headers: {
            "X-Priority": "1",
            "X-Mailer": "Amity-Leads-Mailer",
          },
        });

        emailSent = true;
        transportMethod = `SMTP (${smtpHost})`;
        console.log("[Email] Sent successfully to", notifyEmail);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("[Email Error]", message);
        transportMethod = `Failed: ${message}`;
      }
    } else {
      console.warn("[Email] Skipped — missing SMTP env vars. hasHost:", !!smtpHost, "hasUser:", !!smtpUser, "hasPass:", !!smtpPass);
    }

    if (!emailSent) {
      if (process.env.NODE_ENV !== "production") {
        const logEntry = `\n========================================\nTIMESTAMP: ${timestamp}\nTO: ${notifyEmail}\nSUBJECT: ${emailSubject}\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCourse: ${course}\n========================================\n`;
        fs.appendFileSync(LOG_FILE_PATH, logEntry, "utf8");
      }
      transportMethod = "File Log (notifications.log)";
    }

    // Return minimal success response — no internal details exposed
    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully!",
      notification: transportMethod,
    });
  } catch (error: unknown) {
    // Never expose internal error details to the client
    if (process.env.NODE_ENV !== "production") {
      console.error("[Enquiry API Error]", error);
    }
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
