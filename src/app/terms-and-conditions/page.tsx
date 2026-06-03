import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Amity University Online",
  description:
    "Read the Terms & Conditions governing use of the Amity University Online website and enrollment in online MBA, BBA, MCA and BCA degree programs.",
  alternates: {
    canonical: "https://amityonline.learnlith.in/terms-and-conditions",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions | Amity University Online",
    description:
      "Terms and conditions governing use of the Amity University Online website and enrollment in our online degree programs.",
    url: "https://amityonline.learnlith.in/terms-and-conditions",
    type: "website",
  },
};

const LAST_UPDATED = "June 3, 2026";

const h2Style: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  color: "#002147",
  marginBottom: "0.75rem",
  borderLeft: "4px solid #FFC629",
  paddingLeft: "1rem",
};

const pStyle: React.CSSProperties = {
  lineHeight: 1.85,
  color: "#44474e",
  fontSize: "0.975rem",
  marginBottom: "0.85rem",
};

const ulStyle: React.CSSProperties = {
  paddingLeft: "1.5rem",
  marginBottom: "0.85rem",
  color: "#44474e",
  lineHeight: 2,
  fontSize: "0.975rem",
};

const sectionStyle: React.CSSProperties = { marginBottom: "2.25rem" };

export default function TermsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf9fd",
        fontFamily: "var(--font-inter, system-ui, sans-serif)",
      }}
    >
      {/* ── Header ── */}
      <header
        style={{
          background: "#002147",
          padding: "1rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" aria-label="Amity University Online — Home">
          <img
            src="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"
            alt="Amity University Online"
            style={{ height: "36px", width: "auto" }}
          />
        </Link>
        <Link
          href="/"
          style={{ color: "#FFC629", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}
        >
          ← Back to Home
        </Link>
      </header>

      {/* ── Hero Banner ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #002147 0%, #005EB8 100%)",
          padding: "3rem 1.25rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          Terms &amp; Conditions
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
          Last Updated: {LAST_UPDATED}
        </p>
      </section>

      {/* ── Main Content ── */}
      <main
        id="main-content"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.25rem" }}
      >
        {/* Intro notice */}
        <div
          style={{
            background: "#fff8e7",
            border: "1px solid #FFC629",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            marginBottom: "2rem",
            fontSize: "0.9rem",
            color: "#44474e",
            lineHeight: 1.7,
          }}
        >
          Please read these Terms &amp; Conditions carefully before using the
          Amity University Online website at{" "}
          <strong>https://amityonline.learnlith.in</strong> or enrolling in any
          of our programs. By accessing this website, you agree to be bound by
          these terms.
        </div>

        {/* 1. Acceptance */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Acceptance of Terms</h2>
          <p style={pStyle}>
            By accessing or using this website, submitting an enquiry, or
            enrolling in any program offered by Amity University Online, you
            agree to comply with and be bound by these Terms &amp; Conditions
            and all applicable laws. If you do not agree with any of these
            terms, you must discontinue use of this website.
          </p>
        </section>

        {/* 2. Website Use */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Use of the Website</h2>
          <p style={pStyle}>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
          <ul style={ulStyle}>
            <li>Submit false or misleading information in any form</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use the website to transmit any harmful, offensive, or unlawful content</li>
            <li>Copy, reproduce, or distribute website content without written permission</li>
            <li>Use automated tools (bots, scrapers) to access the site without consent</li>
          </ul>
        </section>

        {/* 3. Admissions & Enrollment */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Admissions &amp; Enrollment</h2>
          <p style={pStyle}>
            Submission of an enquiry form or application does not guarantee
            admission. All enrollments are subject to eligibility criteria,
            availability of seats, and the policies of Amity University Online.
            The university reserves the right to accept or reject any
            application at its sole discretion.
          </p>
          <p style={pStyle}>
            Information provided by applicants must be accurate and complete.
            Any misrepresentation may result in cancellation of enrollment.
          </p>
        </section>

        {/* 4. Fees & Payment */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Fees &amp; Payment</h2>
          <ul style={ulStyle}>
            <li>All fees are subject to change without prior notice</li>
            <li>
              Fees displayed on the website are indicative and the final fee
              structure will be communicated by the admissions team
            </li>
            <li>
              EMI and scholarship availability are subject to eligibility and
              availability at the time of enrollment
            </li>
            <li>
              All payments must be made through official channels as directed
              by Amity University Online
            </li>
          </ul>
        </section>

        {/* 5. Refund & Cancellation */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Refund &amp; Cancellation Policy</h2>
          <p style={pStyle}>
            Refunds are governed by the university's official refund policy,
            which is provided at the time of enrollment. Cancellation requests
            must be submitted within the specified cancellation window. Refunds,
            if applicable, will be processed within 30–45 working days of the
            approved cancellation request.
          </p>
          <p style={pStyle}>
            For the complete refund policy details, please contact the
            admissions office at{" "}
            <a
              href="mailto:admissions@amityonline.com"
              style={{ color: "#005EB8", fontWeight: 600 }}
            >
              admissions@amityonline.com
            </a>
            .
          </p>
        </section>

        {/* 6. Intellectual Property */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Intellectual Property</h2>
          <p style={pStyle}>
            All content on this website — including text, images, logos,
            graphics, videos, and course materials — is the property of Amity
            University Online or its licensors and is protected by applicable
            copyright and intellectual property laws. You may not reproduce,
            distribute, or create derivative works without express written
            consent.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Limitation of Liability</h2>
          <p style={pStyle}>
            Amity University Online shall not be liable for any direct,
            indirect, incidental, special, or consequential damages arising from
            your use of this website or reliance on information provided herein.
            The website is provided on an &quot;as is&quot; basis without
            warranties of any kind.
          </p>
        </section>

        {/* 8. Third-Party Services */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Third-Party Services &amp; Links</h2>
          <p style={pStyle}>
            This website may contain links to third-party websites for
            informational purposes. Amity University Online does not endorse,
            control, or assume responsibility for the content, privacy
            practices, or availability of any linked external sites.
          </p>
        </section>

        {/* 9. Code of Conduct */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>9. Student Code of Conduct</h2>
          <p style={pStyle}>
            Enrolled students are required to adhere to the Amity University
            Online Student Code of Conduct. This includes academic integrity,
            respectful interaction with faculty and peers, and compliance with
            all program rules. Violation may result in disciplinary action,
            including suspension or expulsion.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>10. Governing Law &amp; Jurisdiction</h2>
          <p style={pStyle}>
            These Terms &amp; Conditions are governed by the laws of India. Any
            disputes arising from or related to these terms shall be subject to
            the exclusive jurisdiction of the courts located in Noida, Uttar
            Pradesh, India.
          </p>
        </section>

        {/* 11. Changes */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>11. Changes to Terms</h2>
          <p style={pStyle}>
            Amity University Online reserves the right to update or modify
            these Terms &amp; Conditions at any time. Changes will be posted on
            this page with an updated date. Continued use of the website after
            any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        {/* Contact */}
        <section
          style={{
            background: "#f4f3f7",
            borderRadius: "14px",
            padding: "1.75rem",
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#002147", marginBottom: "0.75rem" }}>
            Questions?
          </h2>
          <p style={{ ...pStyle, marginBottom: "0.5rem" }}>
            For any questions regarding these Terms &amp; Conditions, please
            contact:
          </p>
          <p style={{ ...pStyle, marginBottom: "0.25rem" }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:admissions@amityonline.com" style={{ color: "#005EB8", fontWeight: 600 }}>
              admissions@amityonline.com
            </a>
          </p>
          <p style={pStyle}>
            <strong>Phone:</strong>{" "}
            <a href="tel:+917037010407" style={{ color: "#005EB8", fontWeight: 600 }}>
              +91 7037010407
            </a>
          </p>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#002147",
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          padding: "1.5rem 1.25rem",
          fontSize: "0.85rem",
          marginTop: "3rem",
        }}
      >
        <p>
          © {new Date().getFullYear()} Amity University Online. All Rights Reserved.
          &nbsp;|&nbsp;
          <Link href="/privacy-policy" style={{ color: "#FFC629", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link href="/disclaimer" style={{ color: "#FFC629", textDecoration: "none" }}>
            Disclaimer
          </Link>
        </p>
      </footer>
    </div>
  );
}
