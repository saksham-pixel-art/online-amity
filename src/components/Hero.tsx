"use client";

import { motion } from "framer-motion";
import React, { useState, useId } from "react";

type HeroProps = {
  onOpenEnquiry?: (course?: string) => void;
};

const ALLOWED_COURSES = [
  "MBA (Master of Business Administration)",
  "MCA (Master of Computer Applications)",
  "MCOM (Master of Commerce)",
  "MA (Master of Arts)",
  "BBA (Bachelor of Business Administration)",
  "BCA (Bachelor of Computer Applications)",
  "BCOM (Bachelor of Commerce)",
  "BA (Bachelor of Arts)",
];

function sanitizeInput(value: string): string {
  return value.replace(/<[^>]*>/g, "").replace(/[<>"'`]/g, "").trim();
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidMobile(mobile: string): boolean {
  return /^[+]?[\d\s\-().]{7,20}$/.test(mobile);
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const formId = useId();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    course: "Select a course",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const name = sanitizeInput(form.name);
    const email = sanitizeInput(form.email);
    const mobile = sanitizeInput(form.mobile);
    const city = sanitizeInput(form.city);

    if (!name || name.length < 2) newErrors.name = "Please enter your full name.";
    if (!email || !isValidEmail(email)) newErrors.email = "Please enter a valid email address.";
    if (!mobile || !isValidMobile(mobile)) newErrors.mobile = "Please enter a valid mobile number.";
    if (!city || city.length < 2) newErrors.city = "Please enter your city.";
    if (form.course === "Select a course") newErrors.course = "Please select a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    setServerError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizeInput(form.name),
          email: sanitizeInput(form.email).toLowerCase(),
          mobile: sanitizeInput(form.mobile),
          city: sanitizeInput(form.city),
          course: form.course,
        }),
      });

      const result = await response.json();
      if (result.success) {
        // Redirect to thank you page with query parameters
        const firstName = sanitizeInput(form.name).split(" ")[0] || "Student";
        const courseName = encodeURIComponent(form.course);
        window.location.href = `/thank-you?name=${encodeURIComponent(firstName)}&course=${courseName}`;
      } else {
        setServerError(result.error || "Submission failed. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[720px] flex items-center pt-10 sm:pt-12 lg:pt-20 pb-16 sm:pb-20 overflow-hidden bg-background"
      aria-label="Hero — Admissions Open"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 lg:to-background/10 z-10" />
        <img
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center sm:object-right"
          src="/assets/6cacedb12d1bd72137add9d5bc727948.png"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Copy and Headline */}
        <motion.div
          className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block bg-excellence-gold/20 text-trust-navy px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            aria-label="Admissions status"
          >
            July &apos;26 Session Admissions Open
          </motion.div>

          <h1 className="font-bold text-hero text-trust-navy tracking-tight max-w-2xl">
            Unlock Global Learning With Our{" "}
            <span className="text-academic-blue bg-clip-text text-transparent bg-gradient-to-r from-academic-blue to-trust-navy">
              Innovative Online
            </span>{" "}
            Degree Programs
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant font-medium max-w-xl leading-relaxed">
            Experience world-class education from anywhere. Accredited by WASC,
            UGC, and NAAC with a prestigious A+ Grade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <motion.button
              className="bg-trust-navy text-on-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:bg-trust-navy/90 transition-all duration-200 text-sm sm:text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy focus-visible:ring-offset-2 min-h-[44px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenEnquiry?.()}
              aria-label="Apply now — open enquiry form"
            >
              Apply Now
            </motion.button>
            <a
              href="#programs"
              className="border-2 border-trust-navy text-trust-navy font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-trust-navy hover:text-white transition-all duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy focus-visible:ring-offset-2 min-h-[44px] flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Programs
            </a>
          </div>
        </motion.div>

        {/* Right Side: Lead Capture Form */}
        <motion.div
          className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[360px] space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-16 h-16 bg-success-green/20 rounded-full flex items-center justify-center text-success-green"
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-trust-navy">Thank You!</h2>
                <p className="text-on-surface-variant font-medium max-w-xs text-sm sm:text-base">
                  Your enquiry has been submitted. An admissions counselor will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-bold text-trust-navy mb-1">
                  Admissions Open
                </h2>
                <p className="text-sm font-semibold text-on-surface-variant mb-5 sm:mb-6">
                  Get a free counseling session today
                </p>

                {serverError && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 font-medium"
                  >
                    {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field — hidden from real users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor={`${formId}-website`}>Website</label>
                    <input
                      id={`${formId}-website`}
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-name`}
                      className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider"
                    >
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={`${formId}-name`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                      className={`w-full bg-white/60 border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.name ? "border-red-400 bg-red-50/30" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter your full name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    {errors.name && (
                      <p id={`${formId}-name-error`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-email`}
                      className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider"
                    >
                      Email <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={`${formId}-email`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                      className={`w-full bg-white/60 border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.email ? "border-red-400 bg-red-50/30" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter your email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {errors.email && (
                      <p id={`${formId}-email-error`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-mobile`}
                      className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider"
                    >
                      Mobile Number <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={`${formId}-mobile`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.mobile}
                      aria-describedby={errors.mobile ? `${formId}-mobile-error` : undefined}
                      className={`w-full bg-white/60 border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.mobile ? "border-red-400 bg-red-50/30" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter mobile number"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={form.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                    />
                    {errors.mobile && (
                      <p id={`${formId}-mobile-error`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-city`}
                      className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider"
                    >
                      City <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={`${formId}-city`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? `${formId}-city-error` : undefined}
                      className={`w-full bg-white/60 border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.city ? "border-red-400 bg-red-50/30" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter your city"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={100}
                      value={form.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                    />
                    {errors.city && (
                      <p id={`${formId}-city-error`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-course`}
                      className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider"
                    >
                      Preferred Course <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <select
                      id={`${formId}-course`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.course}
                      aria-describedby={errors.course ? `${formId}-course-error` : undefined}
                      className={`w-full bg-white/60 border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-semibold text-trust-navy min-h-[44px] ${
                        errors.course ? "border-red-400 bg-red-50/30" : "border-outline-variant/40"
                      }`}
                      value={form.course}
                      onChange={(e) => handleChange("course", e.target.value)}
                    >
                      <option disabled value="Select a course">
                        Select a course
                      </option>
                      {ALLOWED_COURSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.course && (
                      <p id={`${formId}-course-error`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.course}
                      </p>
                    )}
                  </div>

                  <motion.button
                    className="w-full bg-excellence-gold text-trust-navy font-bold py-3 sm:py-4 rounded-xl shadow-md hover:bg-[#ebd01f] transition-colors text-sm sm:text-base mt-2 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed min-h-[44px]"
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1.0 : 1.01 }}
                    whileTap={{ scale: loading ? 1.0 : 0.99 }}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-trust-navy"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
