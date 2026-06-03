import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Amity University Online",
  description:
    "Learn about Amity University Online — India's leading UGC-approved, WASC-accredited online university offering MBA, BBA, MCA and BCA programs with 30+ years of excellence.",
  alternates: {
    canonical: "https://amityonline.learnlith.in/about",
  },
  openGraph: {
    title: "About Amity University Online",
    description:
      "Learn about Amity University Online — India's leading UGC-approved, WASC-accredited online university offering MBA, BBA, MCA and BCA programs.",
    url: "https://amityonline.learnlith.in/about",
    type: "website",
  },
};

export default function AboutPage() {
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
            About Amity University Online
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Empowering learners worldwide with UGC-approved, internationally
            accredited online degrees for over three decades.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main
        id="main-content"
        style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.25rem" }}
      >
        {/* Mission */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Our Mission
          </h2>
          <p style={{ lineHeight: 1.8, color: "#44474e", fontSize: "1rem" }}>
            Amity University Online is dedicated to making world-class education
            accessible to every ambitious learner, regardless of location or
            circumstance. We deliver industry-aligned, research-backed degree
            programs that combine academic rigor with the flexibility of
            100% online learning — enabling students to earn prestigious degrees
            while balancing professional and personal commitments.
          </p>
        </section>

        {/* Who We Are */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Who We Are
          </h2>
          <p style={{ lineHeight: 1.8, color: "#44474e", fontSize: "1rem", marginBottom: "1rem" }}>
            The online division of the Amity Education Group — one of India's
            largest private higher-education systems with over 30 years of
            academic excellence and a global network of 350,000+ alumni across
            150+ countries.
          </p>
          <p style={{ lineHeight: 1.8, color: "#44474e", fontSize: "1rem" }}>
            Our programs are fully approved by the University Grants Commission
            (UGC) Distance Education Bureau (DEB), accredited by WASC Senior
            College and University Commission, and the university holds a
            prestigious NAAC A+ grade — making our degrees globally recognized
            and valued by top employers worldwide.
          </p>
        </section>

        {/* Accreditations */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1.25rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Accreditations &amp; Recognition
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { title: "UGC-DEB Approved", desc: "Fully approved by University Grants Commission for online education." },
              { title: "NAAC A+ Grade", desc: "Highest quality accreditation from the National Assessment &amp; Accreditation Council." },
              { title: "WASC Accredited", desc: "Internationally recognized by WASC Senior College &amp; University Commission." },
              { title: "QS Ranked", desc: "Featured among top universities in QS World University Rankings." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e3e2e6",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  borderTop: "3px solid #FFC629",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#002147",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontSize: "0.875rem", color: "#44474e", lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Our Online Programs
          </h2>
          <p style={{ lineHeight: 1.8, color: "#44474e", fontSize: "1rem", marginBottom: "1rem" }}>
            We offer a comprehensive portfolio of undergraduate and postgraduate
            online degree programs designed for the modern learner:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              "MBA — Master of Business Administration",
              "MCA — Master of Computer Applications",
              "MCOM — Master of Commerce",
              "MA — Master of Arts",
              "BBA — Bachelor of Business Administration",
              "BCA — Bachelor of Computer Applications",
              "BCOM — Bachelor of Commerce",
              "BA — Bachelor of Arts",
            ].map((prog) => (
              <li
                key={prog}
                style={{
                  background: "#f4f3f7",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  fontSize: "0.9rem",
                  color: "#002147",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#FFC629",
                    flexShrink: 0,
                  }}
                />
                {prog}
              </li>
            ))}
          </ul>
        </section>

        {/* Key Stats */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#002147",
              marginBottom: "1.25rem",
              borderLeft: "4px solid #FFC629",
              paddingLeft: "1rem",
            }}
          >
            Amity by Numbers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            {[
              { value: "30+", label: "Years of Excellence" },
              { value: "3.5L+", label: "Alumni Worldwide" },
              { value: "150+", label: "Countries Represented" },
              { value: "4.8★", label: "Average Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#002147",
                  borderRadius: "12px",
                  padding: "1.5rem 1rem",
                  color: "#ffffff",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#FFC629",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.75)",
                    marginTop: "0.5rem",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            background: "linear-gradient(135deg, #002147, #005EB8)",
            borderRadius: "16px",
            padding: "2.5rem 1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "0.75rem",
            }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              marginBottom: "1.5rem",
              fontSize: "1rem",
            }}
          >
            July 2026 admissions are open. Apply today.
          </p>
          <Link
            href="/"
            style={{
              background: "#FFC629",
              color: "#002147",
              fontWeight: 700,
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "1rem",
              display: "inline-block",
            }}
          >
            Apply Now
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
