import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Amity University Online",
  description:
    "Read the Privacy Policy of Amity University Online. Learn how we collect, use, and protect your personal information when you use our website and online degree services.",
  alternates: {
    canonical: "https://amityonline.learnlith.in/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Amity University Online",
    description:
      "Learn how Amity University Online collects, uses, and protects your personal information.",
    url: "https://amityonline.learnlith.in/privacy-policy",
    type: "website",
  },
};

const LAST_UPDATED = "June 3, 2026";
const CONTACT_EMAIL = "admissions@amityonline.com";
const BASE_URL = "https://amityonline.learnlith.in";

const sectionStyle: React.CSSProperties = {
  marginBottom: "2.25rem",
};

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

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf9fd",
        color: "#1a1b1e",
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
          style={{
            color: "#FFC629",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
          }}
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
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
          Last Updated: {LAST_UPDATED}
        </p>
      </section>

      {/* ── Main Content ── */}
      <main
        id="main-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
        }}
      >
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
          This Privacy Policy explains how Amity University Online (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects the personal
          information you provide when you visit{" "}
          <strong>{BASE_URL}</strong> or enquire about our programs.
          By using this website, you consent to the practices described in this
          policy.
        </div>

        {/* 1. Information We Collect */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Information We Collect</h2>
          <p style={pStyle}>
            We collect information you provide directly to us, as well as
            information collected automatically when you visit our website:
          </p>
          <p style={{ ...pStyle, fontWeight: 600, color: "#002147" }}>
            Information You Provide:
          </p>
          <ul style={ulStyle}>
            <li>Full name, email address, and mobile number</li>
            <li>City and state of residence</li>
            <li>Preferred course or program of interest</li>
            <li>Any other information submitted via enquiry forms</li>
          </ul>
          <p style={{ ...pStyle, fontWeight: 600, color: "#002147" }}>
            Automatically Collected Information:
          </p>
          <ul style={ulStyle}>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring URLs and search terms</li>
            <li>Device type and operating system</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>2. How We Use Your Information</h2>
          <p style={pStyle}>
            We use the information collected for the following purposes:
          </p>
          <ul style={ulStyle}>
            <li>
              To contact you regarding your enquiry or application for admission
            </li>
            <li>
              To send you information about programs, fees, scholarships, and
              admissions deadlines
            </li>
            <li>
              To improve our website content, user experience, and services
            </li>
            <li>
              To comply with legal obligations and protect our rights
            </li>
            <li>
              To analyze website usage for internal research and reporting
            </li>
            <li>
              To send periodic emails or SMS messages about updates (you may
              opt out at any time)
            </li>
          </ul>
        </section>

        {/* 3. Cookies */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Cookies &amp; Tracking Technologies</h2>
          <p style={pStyle}>
            Our website uses cookies to enhance your browsing experience.
            Cookies are small text files stored on your device. We use:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function correctly (e.g., form submissions).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors interact with our site (e.g., Google Analytics).
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to show relevant
              advertisements on third-party platforms.
            </li>
          </ul>
          <p style={pStyle}>
            You can control cookies through your browser settings. Disabling
            cookies may affect some functionality of the website.
          </p>
        </section>

        {/* 4. Data Sharing */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Data Sharing &amp; Third Parties</h2>
          <p style={pStyle}>
            We do not sell, rent, or trade your personal information to third
            parties. We may share your information with:
          </p>
          <ul style={ulStyle}>
            <li>
              Authorized Amity University Online counselors and admission staff
            </li>
            <li>
              Trusted service providers who assist in operating our website
              (subject to confidentiality agreements)
            </li>
            <li>
              Government or regulatory authorities if required by law
            </li>
          </ul>
        </section>

        {/* 5. Data Security */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Data Security</h2>
          <p style={pStyle}>
            We implement industry-standard security measures to protect your
            personal data, including HTTPS encryption, secure servers, and
            restricted access to personal data. However, no method of internet
            transmission is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        {/* 6. Data Retention */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Data Retention</h2>
          <p style={pStyle}>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy, or as required by
            applicable law. Enquiry data is typically retained for up to 3
            years from the date of submission.
          </p>
        </section>

        {/* 7. Your Rights */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Your Rights</h2>
          <p style={pStyle}>
            You have the right to:
          </p>
          <ul style={ulStyle}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (subject to legal obligations)</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Lodge a complaint with the relevant data protection authority</li>
          </ul>
          <p style={pStyle}>
            To exercise any of these rights, please contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "#005EB8", fontWeight: 600 }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        {/* 8. Third-Party Links */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Third-Party Links</h2>
          <p style={pStyle}>
            Our website may contain links to external sites. We are not
            responsible for the privacy practices of those websites and
            encourage you to review their privacy policies.
          </p>
        </section>

        {/* 9. Changes */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>9. Changes to This Policy</h2>
          <p style={pStyle}>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated &quot;Last Updated&quot; date.
            Continued use of the website after changes constitutes your
            acceptance of the revised policy.
          </p>
        </section>

        {/* 10. Contact */}
        <section
          style={{
            background: "#f4f3f7",
            borderRadius: "14px",
            padding: "1.75rem",
            marginTop: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "0.75rem",
            }}
          >
            10. Contact Us
          </h2>
          <p style={{ ...pStyle, marginBottom: "0.5rem" }}>
            For privacy-related queries, please contact us:
          </p>
          <p style={{ ...pStyle, marginBottom: "0.25rem" }}>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "#005EB8", fontWeight: 600 }}
            >
              {CONTACT_EMAIL}
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
          <Link href="/terms-and-conditions" style={{ color: "#FFC629", textDecoration: "none" }}>
            Terms &amp; Conditions
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
