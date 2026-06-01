"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef, useId, useCallback } from "react";
import { X, Check, Shield, Clock, Award, GraduationCap } from "lucide-react";

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
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

export default function EnquiryModal({
  isOpen,
  onClose,
  initialCourse = "Select a course",
}: EnquiryModalProps) {
  const formId = useId();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    course: "Select a course",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const firstFocusRef = useRef<HTMLInputElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Sync initialCourse prop
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, course: initialCourse }));
      setErrors({});
      setServerError("");
    }
  }, [isOpen, initialCourse]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => firstFocusRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const name = sanitizeInput(form.name);
    const email = sanitizeInput(form.email);
    const mobile = sanitizeInput(form.mobile);
    const city = sanitizeInput(form.city);

    if (!name || name.length < 2)
      newErrors.name = "Please enter your full name.";
    if (!email || !isValidEmail(email))
      newErrors.email = "Please enter a valid email address.";
    if (!mobile || !isValidMobile(mobile))
      newErrors.mobile = "Please enter a valid mobile number.";
    if (!city || city.length < 2) newErrors.city = "Please enter your city.";
    if (form.course === "Select a course")
      newErrors.course = "Please select a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (field: string, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
      setServerError("");
    },
    [errors]
  );

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
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setForm({
            name: "",
            email: "",
            mobile: "",
            city: "",
            course: "Select a course",
          });
          onClose();
        }, 3500);
      } else {
        setServerError(result.error || "Submission failed. Please try again.");
      }
    } catch {
      setServerError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${formId}-modal-title`}
        >
          {/* Premium Backdrop */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-trust-navy/70 via-trust-navy/60 to-black/70 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container - Premium Card Design */}
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,33,71,0.25)] border border-gray-100"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          >
            {/* Close Button */}
            <button
              ref={closeBtnRef}
              className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-trust-navy transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold focus-visible:ring-offset-2"
              onClick={onClose}
              aria-label="Close enquiry form"
            >
              <X className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
            </button>

            {success ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center px-8 py-16 min-h-[400px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                role="status"
                aria-live="polite"
              >
                <motion.div
                  className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-lg mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                  aria-hidden="true"
                >
                  <Check className="w-10 h-10 stroke-[3]" />
                </motion.div>
                <h3 className="text-3xl font-bold text-trust-navy mb-3 tracking-tight">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-base text-gray-600 max-w-md leading-relaxed mb-2">
                  Thank you for your interest in Amity University Online.
                </p>
                <p className="text-sm font-semibold text-trust-navy">
                  Our admission counselor will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header Section with Trust Badge */}
                <div className="relative bg-gradient-to-br from-trust-navy to-[#0B2E59] px-8 pt-8 pb-10 rounded-t-2xl overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-excellence-gold/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    {/* University Logo */}
                    <div className="mb-5">
                      <img
                        src="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"
                        alt="Amity University Online"
                        style={{ height: "34px", width: "auto" }}
                      />
                    </div>

                    <h3
                      id={`${formId}-modal-title`}
                      className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight"
                    >
                      Start Your Admission Journey
                    </h3>
                    <p className="text-base text-white/90 leading-relaxed max-w-xl">
                      Connect with our academic advisors and receive
                      personalized guidance.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="flex items-center gap-2 text-white/90">
                        <Award className="w-4 h-4 text-excellence-gold flex-shrink-0" />
                        <span className="text-xs font-semibold">
                          UGC Recognized
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <Shield className="w-4 h-4 text-excellence-gold flex-shrink-0" />
                        <span className="text-xs font-semibold">
                          Expert Guidance
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <Clock className="w-4 h-4 text-excellence-gold flex-shrink-0" />
                        <span className="text-xs font-semibold">
                          24-Hour Response
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="px-8 py-8">
                  {serverError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      aria-live="assertive"
                      className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg"
                    >
                      <p className="text-sm text-red-700 font-medium">
                        {serverError}
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Two Column Layout on Desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor={`${formId}-name`}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          ref={firstFocusRef}
                          id={`${formId}-name`}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? `${formId}-name-err` : undefined
                          }
                          className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3 focus:bg-white focus:border-excellence-gold focus:ring-2 focus:ring-excellence-gold/20 outline-none transition-all text-sm font-medium placeholder:text-gray-400 ${
                            errors.name
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200"
                          }`}
                          placeholder="Enter your full name"
                          type="text"
                          autoComplete="name"
                          maxLength={100}
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                        {errors.name && (
                          <p
                            id={`${formId}-name-err`}
                            role="alert"
                            className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                          >
                            <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor={`${formId}-email`}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={`${formId}-email`}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? `${formId}-email-err` : undefined
                          }
                          className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3 focus:bg-white focus:border-excellence-gold focus:ring-2 focus:ring-excellence-gold/20 outline-none transition-all text-sm font-medium placeholder:text-gray-400 ${
                            errors.email
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200"
                          }`}
                          placeholder="your.email@example.com"
                          type="email"
                          autoComplete="email"
                          maxLength={254}
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        {errors.email && (
                          <p
                            id={`${formId}-email-err`}
                            role="alert"
                            className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                          >
                            <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label
                          htmlFor={`${formId}-mobile`}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={`${formId}-mobile`}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.mobile}
                          aria-describedby={
                            errors.mobile ? `${formId}-mobile-err` : undefined
                          }
                          className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3 focus:bg-white focus:border-excellence-gold focus:ring-2 focus:ring-excellence-gold/20 outline-none transition-all text-sm font-medium placeholder:text-gray-400 ${
                            errors.mobile
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200"
                          }`}
                          placeholder="+91 98765 43210"
                          type="tel"
                          autoComplete="tel"
                          maxLength={20}
                          value={form.mobile}
                          onChange={(e) =>
                            handleChange("mobile", e.target.value)
                          }
                        />
                        {errors.mobile && (
                          <p
                            id={`${formId}-mobile-err`}
                            role="alert"
                            className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                          >
                            <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                            {errors.mobile}
                          </p>
                        )}
                      </div>

                      {/* City */}
                      <div>
                        <label
                          htmlFor={`${formId}-city`}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={`${formId}-city`}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.city}
                          aria-describedby={
                            errors.city ? `${formId}-city-err` : undefined
                          }
                          className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3 focus:bg-white focus:border-excellence-gold focus:ring-2 focus:ring-excellence-gold/20 outline-none transition-all text-sm font-medium placeholder:text-gray-400 ${
                            errors.city
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200"
                          }`}
                          placeholder="Enter your city"
                          type="text"
                          autoComplete="address-level2"
                          maxLength={100}
                          value={form.city}
                          onChange={(e) => handleChange("city", e.target.value)}
                        />
                        {errors.city && (
                          <p
                            id={`${formId}-city-err`}
                            role="alert"
                            className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                          >
                            <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Course - Full Width */}
                    <div>
                      <label
                        htmlFor={`${formId}-course`}
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Preferred Course <span className="text-red-500">*</span>
                      </label>
                      <select
                        id={`${formId}-course`}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.course}
                        aria-describedby={
                          errors.course ? `${formId}-course-err` : undefined
                        }
                        className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3 focus:bg-white focus:border-excellence-gold focus:ring-2 focus:ring-excellence-gold/20 outline-none transition-all text-sm font-semibold text-trust-navy appearance-none cursor-pointer ${
                          errors.course
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200"
                        }`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23002147'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.75rem center",
                          backgroundSize: "1.25rem",
                          paddingRight: "2.5rem",
                        }}
                        value={form.course}
                        onChange={(e) => handleChange("course", e.target.value)}
                      >
                        <option disabled value="Select a course">
                          Select your preferred course
                        </option>
                        {ALLOWED_COURSES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <p
                          id={`${formId}-course-err`}
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                        >
                          <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                          {errors.course}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-excellence-gold to-[#FFD700] hover:from-[#FFD700] hover:to-excellence-gold text-trust-navy font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
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
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span>Submitting...</span>
                          </span>
                        ) : (
                          <>
                            <span className="relative z-10">
                              Get Admission Guidance
                            </span>
                            {/* Button Shine Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </>
                        )}
                      </button>

                      {/* Trust Microcopy */}
                      <div className="mt-4 space-y-2">
                        <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-gray-400" />
                          Your information is secure and will never be shared.
                        </p>
                        <p className="text-xs text-center text-gray-600 font-medium">
                          Join{" "}
                          <span className="text-trust-navy font-bold">
                            50,000+
                          </span>{" "}
                          learners advancing their careers through flexible
                          online education.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

