import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Amity University Online",
  description:
    "Get in touch with Amity University Online. Contact our admissions team for enquiries about MBA, BBA, MCA and BCA online degree programs. Call, email or visit us.",
  alternates: {
    canonical: "https://amityonline.learnlith.in/contact",
  },
  openGraph: {
    title: "Contact Amity University Online",
    description:
      "Get in touch with Amity University Online admissions team for enquiries about our online degree programs.",
    url: "https://amityonline.learnlith.in/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Amity University Online",
  url: "https://amityonline.learnlith.in/contact",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    telephone: "+91-7037010407",
    email: "admissions@amityonline.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 125",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201313",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
  },
};

export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf9fd",
        color: "#1a1b1e",
        fontFamily: "var(--font-inter, system-ui, sans-serif)",
      }}
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

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
          padding: "4rem 1.25rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Our admissions counselors are ready to help you choose the right
            program and guide you through enrollment.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main
        id="main-content"
        style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.25rem" }}
      >
        {/* Contact Cards */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1.5rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Get in Touch
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {/* Phone */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e3e2e6",
                borderRadius: "14px",
                padding: "1.5rem",
                borderTop: "4px solid #FFC629",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "0.75rem",
                }}
                aria-hidden="true"
              >
                📞
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#002147",
                  marginBottom: "0.5rem",
                }}
              >
                Call Us
              </h3>
              <a
                href="tel:+917037010407"
                style={{
                  color: "#005EB8",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                +91 7037010407
              </a>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#74777f",
                  marginTop: "0.4rem",
                }}
              >
                Mon–Sat, 9 AM – 6 PM IST
              </p>
            </div>

            {/* Email */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e3e2e6",
                borderRadius: "14px",
                padding: "1.5rem",
                borderTop: "4px solid #FFC629",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }} aria-hidden="true">
                ✉️
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#002147",
                  marginBottom: "0.5rem",
                }}
              >
                Email Us
              </h3>
              <a
                href="mailto:admissions@amityonline.com"
                style={{
                  color: "#005EB8",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  wordBreak: "break-all",
                }}
              >
                admissions@amityonline.com
              </a>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#74777f",
                  marginTop: "0.4rem",
                }}
              >
                Response within 24 hours
              </p>
            </div>

            {/* Address */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e3e2e6",
                borderRadius: "14px",
                padding: "1.5rem",
                borderTop: "4px solid #FFC629",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }} aria-hidden="true">
                📍
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#002147",
                  marginBottom: "0.5rem",
                }}
              >
                Our Address
              </h3>
              <address
                style={{
                  fontStyle: "normal",
                  color: "#44474e",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Amity University Campus<br />
                Sector 125, Noida<br />
                Uttar Pradesh – 201313<br />
                India
              </address>
            </div>
          </div>
        </section>

        {/* Programs CTA */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Enquire About a Program
          </h2>
          <p
            style={{
              color: "#44474e",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Interested in our online degree programs? Visit our homepage and
            fill out the enquiry form — an admissions counselor will contact you
            within one business day to discuss your options, eligibility, fees,
            and scholarships.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              "MBA (Master of Business Administration)",
              "MCA (Master of Computer Applications)",
              "BBA (Bachelor of Business Administration)",
              "BCA (Bachelor of Computer Applications)",
              "MCOM (Master of Commerce)",
              "MA (Master of Arts)",
            ].map((prog) => (
              <div
                key={prog}
                style={{
                  background: "#f4f3f7",
                  borderRadius: "8px",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.85rem",
                  color: "#002147",
                  fontWeight: 600,
                }}
              >
                {prog}
              </div>
            ))}
          </div>
          <Link
            href="/"
            style={{
              background: "#002147",
              color: "#ffffff",
              fontWeight: 700,
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "1rem",
              display: "inline-block",
            }}
          >
            Submit an Enquiry
          </Link>
        </section>

        {/* FAQ shortcut */}
        <section
          style={{
            background: "#f4f3f7",
            borderRadius: "14px",
            padding: "1.75rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "0.5rem",
            }}
          >
            Have Questions?
          </h2>
          <p style={{ color: "#44474e", marginBottom: "1rem" }}>
            Browse our Frequently Asked Questions for instant answers about
            admission, fees, exams, and more.
          </p>
          <Link
            href="/#faq"
            style={{
              color: "#005EB8",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            View FAQs →
          </Link>
        </section>
      </main>

      {/* ── Simple Footer ── */}
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
