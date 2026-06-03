import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Amity University Online",
  description:
    "Read the official disclaimer for the Amity University Online website. This page clarifies the informational nature of the site and limitations of liability.",
  alternates: {
    canonical: "https://amityonline.learnlith.in/disclaimer",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Disclaimer | Amity University Online",
    description:
      "Official disclaimer for the Amity University Online website regarding information accuracy and limitation of liability.",
    url: "https://amityonline.learnlith.in/disclaimer",
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

export default function DisclaimerPage() {
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
          Disclaimer
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
          This Disclaimer governs your use of{" "}
          <strong>https://amityonline.learnlith.in</strong>. By accessing this
          website, you accept this Disclaimer in full. If you disagree with any
          part of this Disclaimer, please discontinue use of the website.
        </div>

        {/* 1. General */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>1. General Disclaimer</h2>
          <p style={pStyle}>
            This website is operated and maintained solely for the purpose of
            providing information about online degree programs offered by Amity
            University Online. All admissions, enrollments, fee payments,
            academic decisions, and related processes are conducted exclusively
            by Amity University Online through its official channels.
          </p>
          <p style={pStyle}>
            The information on this website is provided in good faith and for
            general informational purposes only. While we strive to keep
            information accurate and up to date, Amity University Online makes
            no representations or warranties of any kind — express or implied —
            about the completeness, accuracy, reliability, suitability, or
            availability of the information, products, services, or related
            graphics contained on this website.
          </p>
        </section>

        {/* 2. No Guarantee */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>2. No Guarantee of Outcomes</h2>
          <p style={pStyle}>
            Amity University Online does not guarantee any specific academic,
            career, employment, or salary outcomes as a result of completing any
            program. Placement support is offered as a value-added service;
            however, job placement is not guaranteed.
          </p>
          <p style={pStyle}>
            Testimonials, statistics, and success stories displayed on the
            website represent individual experiences and may not reflect typical
            results. Results may vary based on individual effort, prior
            experience, market conditions, and other factors.
          </p>
        </section>

        {/* 3. Accuracy */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Accuracy of Information</h2>
          <ul style={ulStyle}>
            <li>
              Program fees, curriculum, duration, and eligibility criteria are
              subject to change without prior notice. Always verify current
              details with the admissions team.
            </li>
            <li>
              Accreditation statuses and rankings are accurate at the time of
              publication and may be subject to change.
            </li>
            <li>
              Scholarship and EMI offers are subject to availability and
              eligibility at the time of enrollment.
            </li>
            <li>
              Batch start dates are indicative and may be revised by the
              university.
            </li>
          </ul>
        </section>

        {/* 4. UGC Disclosure */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>4. UGC-DEB Disclosure</h2>
          <p style={pStyle}>
            Amity University Online programs are approved by the University
            Grants Commission — Distance Education Bureau (UGC-DEB). Prospective
            students are encouraged to verify the current approval status of
            their chosen program at{" "}
            <a
              href="https://deb.ugc.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#005EB8", fontWeight: 600 }}
            >
              deb.ugc.ac.in
            </a>{" "}
            before enrolling.
          </p>
          <p style={pStyle}>
            This website is a marketing and information portal only. It is not
            the official portal of Amity University. For official information,
            please visit the university&apos;s official website.
          </p>
        </section>

        {/* 5. Third-Party Links */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Third-Party Links &amp; Content</h2>
          <p style={pStyle}>
            This website may include links to third-party websites, including
            regulatory bodies, accreditation agencies, and partner organizations.
            These links are provided for convenience only. Amity University
            Online has no control over the nature, content, or availability of
            those sites and accepts no responsibility for any loss or damage
            that may arise from your use of them.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Limitation of Liability</h2>
          <p style={pStyle}>
            To the fullest extent permitted by law, Amity University Online
            shall not be liable for any direct, indirect, incidental,
            consequential, or special damages arising from:
          </p>
          <ul style={ulStyle}>
            <li>Your use of or inability to use this website</li>
            <li>
              Any errors, omissions, or inaccuracies in the content on this
              website
            </li>
            <li>
              Unauthorized access to or alteration of your data or transmissions
            </li>
            <li>
              Any third-party conduct or content linked to from this website
            </li>
          </ul>
        </section>

        {/* 7. Intellectual Property */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Intellectual Property Notice</h2>
          <p style={pStyle}>
            The &quot;Amity University&quot; name, logo, and all associated marks are
            registered trademarks of the Amity Education Group. Unauthorized
            use of these marks is strictly prohibited. All other content on
            this website is the intellectual property of Amity University Online
            and may not be reproduced without written permission.
          </p>
        </section>

        {/* 8. Changes */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Changes to This Disclaimer</h2>
          <p style={pStyle}>
            We reserve the right to update this Disclaimer at any time. Changes
            will be reflected on this page with an updated date. Continued use
            of the website after changes constitutes acceptance of the revised
            Disclaimer.
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
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "0.75rem",
            }}
          >
            Contact Us
          </h2>
          <p style={{ ...pStyle, marginBottom: "0.5rem" }}>
            For clarifications regarding this Disclaimer, please reach out to:
          </p>
          <p style={{ ...pStyle, marginBottom: "0.25rem" }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:admissions@amityonline.com"
              style={{ color: "#005EB8", fontWeight: 600 }}
            >
              admissions@amityonline.com
            </a>
          </p>
          <p style={{ ...pStyle, marginBottom: "0.25rem" }}>
            <strong>Phone:</strong>{" "}
            <a href="tel:+917037010407" style={{ color: "#005EB8", fontWeight: 600 }}>
              +91 7037010407
            </a>
          </p>
          <p style={pStyle}>
            <strong>Address:</strong> Sector 125, Noida, Uttar Pradesh –
            201313, India
          </p>
        </section>

        {/* Quick links to other legal pages */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-and-conditions", label: "Terms & Conditions" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                background: "#ffffff",
                border: "1px solid #e3e2e6",
                borderRadius: "8px",
                padding: "0.6rem 1.1rem",
                fontSize: "0.875rem",
                color: "#002147",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
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
          <Link href="/terms-and-conditions" style={{ color: "#FFC629", textDecoration: "none" }}>
            Terms &amp; Conditions
          </Link>
        </p>
      </footer>
    </div>
  );
}
