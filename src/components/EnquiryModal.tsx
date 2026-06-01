"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef, useId, useCallback } from "react";
import { X, Check } from "lucide-react";

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
};

const ALLOWED_COURSES = ["MBA (Global)", "BBA", "MCA", "BCA"];

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

  // Focus management — trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow animation to start
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

  const handleChange = useCallback((field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    setServerError("");
  }, [errors]);

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
          setForm({ name: "", email: "", mobile: "", city: "", course: "Select a course" });
          onClose();
        }, 3500);
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
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${formId}-modal-title`}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-trust-navy/50 backdrop-blur-md cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            className="glass-panel w-full max-w-md rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl relative z-10 border border-white/60 overflow-hidden bg-white/95 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              ref={closeBtnRef}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-trust-navy hover:text-excellence-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold cursor-pointer p-2 rounded-full hover:bg-surface-container-low min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={onClose}
              aria-label="Close enquiry form"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" aria-hidden="true" />
            </button>

            {success ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[380px] space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-16 h-16 bg-success-green/20 rounded-full flex items-center justify-center text-success-green shadow-sm"
                  aria-hidden="true"
                >
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-trust-navy tracking-tight">
                  Enquiry Submitted!
                </h3>
                <p className="text-sm font-semibold text-on-surface-variant max-w-xs leading-relaxed">
                  Your details have been received. A representative will connect with you shortly!
                </p>
              </motion.div>
            ) : (
              <>
                <h3
                  id={`${formId}-modal-title`}
                  className="text-xl sm:text-2xl font-bold text-trust-navy mb-1 tracking-tight pr-10"
                >
                  Admission Enquiry
                </h3>
                <p className="text-sm font-semibold text-on-surface-variant mb-5 sm:mb-6">
                  Fill details to unlock global degree options
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
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-name`}
                      className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider"
                    >
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      ref={firstFocusRef}
                      id={`${formId}-name`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                      className={`w-full bg-white border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.name ? "border-red-400" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter your name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    {errors.name && (
                      <p id={`${formId}-name-err`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
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
                      aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                      className={`w-full bg-white border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.email ? "border-red-400" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter your email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {errors.email && (
                      <p id={`${formId}-email-err`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
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
                      aria-describedby={errors.mobile ? `${formId}-mobile-err` : undefined}
                      className={`w-full bg-white border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.mobile ? "border-red-400" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter mobile number"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={form.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                    />
                    {errors.mobile && (
                      <p id={`${formId}-mobile-err`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
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
                      aria-describedby={errors.city ? `${formId}-city-err` : undefined}
                      className={`w-full bg-white border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-medium min-h-[44px] ${
                        errors.city ? "border-red-400" : "border-outline-variant/40"
                      }`}
                      placeholder="Enter your city"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={100}
                      value={form.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                    />
                    {errors.city && (
                      <p id={`${formId}-city-err`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
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
                      aria-describedby={errors.course ? `${formId}-course-err` : undefined}
                      className={`w-full bg-white border rounded-xl p-3 focus:ring-2 focus:ring-excellence-gold focus:border-transparent outline-none transition-all text-sm font-semibold text-trust-navy min-h-[44px] ${
                        errors.course ? "border-red-400" : "border-outline-variant/40"
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
                      <p id={`${formId}-course-err`} role="alert" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.course}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-excellence-gold text-trust-navy font-bold py-3 sm:py-4 rounded-xl shadow-md hover:bg-[#ebd01f] transition-all text-sm sm:text-base mt-2 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed min-h-[44px]"
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
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
