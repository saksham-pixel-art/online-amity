"use client";

// Reusable content for different modals
const LAST_UPDATED = "June 3, 2026";
const CONTACT_EMAIL = "admissions@onlineamity.com";

const sectionStyle = "mb-6";
const h2Style = "text-xl md:text-2xl font-bold text-trust-navy mb-3 border-l-4 border-excellence-gold pl-4";
const pStyle = "leading-relaxed text-gray-700 text-sm md:text-base mb-3";
const ulStyle = "pl-6 mb-3 text-gray-700 leading-relaxed text-sm md:text-base list-disc space-y-2";

export function AboutContent() {
  return (
    <div className="space-y-6">
      {/* Mission */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Our Mission</h2>
        <p className={pStyle}>
          Amity University Online is dedicated to making world-class education
          accessible to every ambitious learner, regardless of location or
          circumstance. We deliver industry-aligned, research-backed degree
          programs that combine academic rigor with the flexibility of
          100% online learning — enabling students to earn prestigious degrees
          while balancing professional and personal commitments.
        </p>
      </section>

      {/* Who We Are */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Who We Are</h2>
        <p className={pStyle}>
          The online division of the Amity Education Group — one of India's
          largest private higher-education systems with over 30 years of
          academic excellence and a global network of 350,000+ alumni across
          150+ countries.
        </p>
        <p className={pStyle}>
          Our programs are fully approved by the University Grants Commission
          (UGC) Distance Education Bureau (DEB), accredited by WASC Senior
          College and University Commission, and the university holds a
          prestigious NAAC A+ grade — making our degrees globally recognized
          and valued by top employers worldwide.
        </p>
      </section>

      {/* Accreditations */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Accreditations &amp; Recognition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "UGC-DEB Approved", desc: "Fully approved by University Grants Commission for online education." },
            { title: "NAAC A+ Grade", desc: "Highest quality accreditation from the National Assessment &amp; Accreditation Council." },
            { title: "WASC Accredited", desc: "Internationally recognized by WASC Senior College &amp; University Commission." },
            { title: "QS Ranked", desc: "Featured among top universities in QS World University Rankings." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 border-t-4 border-t-excellence-gold"
            >
              <h3 className="text-base font-bold text-trust-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Our Online Programs</h2>
        <p className={pStyle}>
          We offer a comprehensive portfolio of undergraduate and postgraduate
          online degree programs designed for the modern learner:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
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
              className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-trust-navy font-semibold flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-excellence-gold flex-shrink-0" />
              {prog}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Amity by Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "30+", label: "Years of Excellence" },
            { value: "3.5L+", label: "Alumni Worldwide" },
            { value: "150+", label: "Countries Represented" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-trust-navy rounded-xl p-6"
            >
              <p className="text-3xl font-extrabold text-excellence-gold">
                {stat.value}
              </p>
              <p className="text-xs text-white/75 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ContactContent() {
  return (
    <div className="space-y-6">
      {/* Contact Cards */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Get in Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 border-t-4 border-t-excellence-gold text-center">
            <div className="text-4xl mb-3" aria-hidden="true">📞</div>
            <h3 className="text-base font-bold text-trust-navy mb-2">Call Us</h3>
            <a
              href="tel:+917037010407"
              className="text-blue-600 font-semibold text-lg hover:underline"
            >
              +91 7037010407
            </a>
            <p className="text-xs text-gray-500 mt-2">Mon–Sat, 9 AM – 6 PM IST</p>
          </div>

          {/* Email */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 border-t-4 border-t-excellence-gold text-center">
            <div className="text-4xl mb-3" aria-hidden="true">✉️</div>
            <h3 className="text-base font-bold text-trust-navy mb-2">Email Us</h3>
            <div className="text-blue-600 font-semibold text-sm break-all">
              {CONTACT_EMAIL}
            </div>
            <p className="text-xs text-gray-500 mt-2">Response within 24 hours</p>
          </div>

          {/* Address */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 border-t-4 border-t-excellence-gold text-center">
            <div className="text-4xl mb-3" aria-hidden="true">📍</div>
            <h3 className="text-base font-bold text-trust-navy mb-2">Our Address</h3>
            <address className="text-sm text-gray-700 leading-relaxed not-italic">
              Amity University Campus<br />
              Sector 125, Noida<br />
              Uttar Pradesh – 201313<br />
              India
            </address>
          </div>
        </div>
      </section>

      {/* Programs CTA */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>Enquire About a Program</h2>
        <p className={pStyle}>
          Interested in our online degree programs? Fill out the enquiry form on the homepage,
          and an admissions counselor will contact you within one business day.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
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
              className="bg-gray-100 rounded-lg px-3 py-2 text-xs text-trust-navy font-semibold"
            >
              {prog}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function PrivacyPolicyContent() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-gray-700 leading-relaxed">
        This Privacy Policy explains how Amity University Online collects, uses, and protects
        your personal information. By using this website, you consent to these practices.
        <div className="mt-2 text-xs text-gray-600">Last Updated: {LAST_UPDATED}</div>
      </div>

      {/* 1. Information We Collect */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>1. Information We Collect</h2>
        <p className={pStyle}>
          We collect information you provide directly and information collected automatically:
        </p>
        <p className="font-semibold text-trust-navy mb-2">Information You Provide:</p>
        <ul className={ulStyle}>
          <li>Full name, email address, and mobile number</li>
          <li>City and state of residence</li>
          <li>Preferred course or program of interest</li>
          <li>Any other information submitted via enquiry forms</li>
        </ul>
        <p className="font-semibold text-trust-navy mb-2">Automatically Collected:</p>
        <ul className={ulStyle}>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on the site</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      {/* 2. How We Use Your Information */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>2. How We Use Your Information</h2>
        <ul className={ulStyle}>
          <li>To contact you regarding your enquiry or application</li>
          <li>To send information about programs, fees, and admissions</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
          <li>To analyze website usage</li>
        </ul>
      </section>

      {/* 3. Cookies */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>3. Cookies &amp; Tracking</h2>
        <p className={pStyle}>
          We use cookies to enhance your experience. You can control cookies through your browser settings.
        </p>
      </section>

      {/* 4. Data Sharing */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>4. Data Sharing</h2>
        <p className={pStyle}>
          We do not sell your personal information. We may share data with authorized staff,
          trusted service providers, and regulatory authorities when required by law.
        </p>
      </section>

      {/* 5. Data Security */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>5. Data Security</h2>
        <p className={pStyle}>
          We implement industry-standard security measures including HTTPS encryption and secure servers.
        </p>
      </section>

      {/* 6. Your Rights */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>6. Your Rights</h2>
        <ul className={ulStyle}>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className={pStyle}>
          Contact us at{" "}
          <span className="text-blue-600 font-semibold">
            {CONTACT_EMAIL}
          </span>
          {" "}to exercise these rights.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-trust-navy mb-3">Contact Us</h2>
        <p className={pStyle}>
          <strong>Email:</strong>{" "}
          <span className="text-blue-600 font-semibold">
            {CONTACT_EMAIL}
          </span>
        </p>
        <p className={pStyle}>
          <strong>Phone:</strong>{" "}
          <a href="tel:+917037010407" className="text-blue-600 font-semibold">
            +91 7037010407
          </a>
        </p>
        <p className={pStyle}>
          <strong>Address:</strong> Sector 125, Noida, Uttar Pradesh – 201313, India
        </p>
      </section>
    </div>
  );
}

export function TermsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-gray-700 leading-relaxed">
        By using this website or enrolling in any program, you agree to these Terms &amp; Conditions.
        <div className="mt-2 text-xs text-gray-600">Last Updated: {LAST_UPDATED}</div>
      </div>

      {/* 1. Acceptance */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>1. Acceptance of Terms</h2>
        <p className={pStyle}>
          By accessing this website, you agree to comply with these Terms &amp; Conditions
          and all applicable laws.
        </p>
      </section>

      {/* 2. Website Use */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>2. Use of the Website</h2>
        <p className={pStyle}>You must not:</p>
        <ul className={ulStyle}>
          <li>Submit false or misleading information</li>
          <li>Attempt unauthorized access</li>
          <li>Use the website to transmit harmful content</li>
          <li>Copy or distribute content without permission</li>
        </ul>
      </section>

      {/* 3. Admissions */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>3. Admissions &amp; Enrollment</h2>
        <p className={pStyle}>
          Submission of an enquiry does not guarantee admission. All enrollments are
          subject to eligibility criteria and university policies.
        </p>
      </section>

      {/* 4. Fees */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>4. Fees &amp; Payment</h2>
        <ul className={ulStyle}>
          <li>All fees are subject to change without prior notice</li>
          <li>Final fee structure will be communicated by admissions team</li>
          <li>EMI and scholarships subject to eligibility</li>
        </ul>
      </section>

      {/* 5. Refund */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>5. Refund &amp; Cancellation</h2>
        <p className={pStyle}>
          Refunds are governed by the university's official policy provided at enrollment.
          Contact{" "}
          <span className="text-blue-600 font-semibold">
            {CONTACT_EMAIL}
          </span>
          {" "}for details.
        </p>
      </section>

      {/* 6. Intellectual Property */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>6. Intellectual Property</h2>
        <p className={pStyle}>
          All website content is the property of Amity University Online and protected
          by copyright laws.
        </p>
      </section>

      {/* 7. Limitation of Liability */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>7. Limitation of Liability</h2>
        <p className={pStyle}>
          Amity University Online shall not be liable for any damages arising from
          your use of this website.
        </p>
      </section>

      {/* 8. Governing Law */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>8. Governing Law</h2>
        <p className={pStyle}>
          These terms are governed by the laws of India. Disputes shall be subject to
          the jurisdiction of courts in Noida, Uttar Pradesh.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-trust-navy mb-3">Questions?</h2>
        <p className={pStyle}>
          <strong>Email:</strong>{" "}
          <span className="text-blue-600 font-semibold">
            {CONTACT_EMAIL}
          </span>
        </p>
        <p className={pStyle}>
          <strong>Phone:</strong>{" "}
          <a href="tel:+917037010407" className="text-blue-600 font-semibold">
            +91 7037010407
          </a>
        </p>
      </section>
    </div>
  );
}

export function DisclaimerContent() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-gray-700 leading-relaxed">
        This Disclaimer governs your use of this website. By accessing this website,
        you accept this Disclaimer in full.
        <div className="mt-2 text-xs text-gray-600">Last Updated: {LAST_UPDATED}</div>
      </div>

      {/* 1. General */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>1. General Disclaimer</h2>
        <p className={pStyle}>
          This website provides information about Amity University Online programs.
          All admissions and enrollments are conducted exclusively through official channels.
        </p>
        <p className={pStyle}>
          Information is provided in good faith for general purposes only. We make no
          warranties about completeness, accuracy, or reliability.
        </p>
      </section>

      {/* 2. No Guarantee */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>2. No Guarantee of Outcomes</h2>
        <p className={pStyle}>
          We do not guarantee specific academic, career, or salary outcomes. Placement
          support is offered as a value-added service; job placement is not guaranteed.
        </p>
      </section>

      {/* 3. Accuracy */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>3. Accuracy of Information</h2>
        <ul className={ulStyle}>
          <li>Program fees, curriculum, and eligibility are subject to change</li>
          <li>Accreditation statuses may be subject to change</li>
          <li>Scholarships and EMI subject to availability</li>
          <li>Batch dates are indicative and may be revised</li>
        </ul>
      </section>

      {/* 4. UGC */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>4. UGC-DEB Disclosure</h2>
        <p className={pStyle}>
          Programs are approved by UGC-DEB. Verify current approval status at{" "}
          <a
            href="https://deb.ugc.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            deb.ugc.ac.in
          </a>
          {" "}before enrolling.
        </p>
        <p className={pStyle}>
          This is a marketing portal, not the official university website.
        </p>
      </section>

      {/* 5. Third-Party Links */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>5. Third-Party Links</h2>
        <p className={pStyle}>
          This website may link to external sites. We are not responsible for their
          content or privacy practices.
        </p>
      </section>

      {/* 6. Limitation */}
      <section className={sectionStyle}>
        <h2 className={h2Style}>6. Limitation of Liability</h2>
        <p className={pStyle}>
          Amity University Online shall not be liable for any damages arising from
          your use of this website or reliance on its information.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-trust-navy mb-3">Contact Us</h2>
        <p className={pStyle}>
          <strong>Email:</strong>{" "}
          <span className="text-blue-600 font-semibold">
            {CONTACT_EMAIL}
          </span>
        </p>
        <p className={pStyle}>
          <strong>Phone:</strong>{" "}
          <a href="tel:+917037010407" className="text-blue-600 font-semibold">
            +91 7037010407
          </a>
        </p>
        <p className={pStyle}>
          <strong>Address:</strong> Sector 125, Noida, Uttar Pradesh – 201313, India
        </p>
      </section>
    </div>
  );
}
