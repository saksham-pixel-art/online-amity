"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState } from "react";

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

const quickLinks = [
  { href: "#disclosure", label: "UGC Disclosure" },
  { href: "#terms", label: "Terms & Conditions" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#contact", label: "Contact Us" },
];

const programs = [
  { href: "#programs", label: "MBA" },
  { href: "#programs", label: "BBA" },
  { href: "#programs", label: "MCA" },
  { href: "#programs", label: "BCA" },
  { href: "#programs", label: "BCOM" },
  { href: "#programs", label: "BA" },
  { href: "#programs", label: "MCOM" },
  { href: "#programs", label: "MA" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    if (!email || !isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-trust-navy border-t border-white/5 relative overflow-hidden" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 lg:py-16 max-w-[1280px] mx-auto text-on-primary text-left z-10 relative">

        {/* Brand */}
        <div className="space-y-5 sm:col-span-2 lg:col-span-1">
          <a href="#" aria-label="Amity University Online — Home">
            <img
              src="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"
              alt="Amity University Online"
              style={{ height: "44px", width: "auto", display: "block" }}
              className="select-none transition-transform hover:scale-[1.02]"
              width={228}
              height={80}
              loading="lazy"
            />
          </a>
          <p className="text-sm font-medium text-on-primary/60 leading-relaxed max-w-xs">
            India's No.1 Online University offering UG, PG, and certification programs across various disciplines..
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links">
          <h2 className="text-excellence-gold font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-surface-container-highest hover:text-white transition-all hover:translate-x-1 inline-block duration-200 focus-visible:outline-none focus-visible:text-excellence-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Programs */}
        <nav aria-label="Programs">
          <h2 className="text-excellence-gold font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
            Programs
          </h2>
          <ul className="space-y-2.5">
            {programs.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="text-sm text-surface-container-highest hover:text-white transition-all hover:translate-x-1 inline-block duration-200 focus-visible:outline-none focus-visible:text-excellence-gold"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="space-y-4">
          <h2 className="text-excellence-gold font-bold text-xs sm:text-sm uppercase tracking-wider">
            Stay Updated
          </h2>

          {subscribed ? (
            <motion.p
              className="text-sm text-excellence-gold font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              role="status"
              aria-live="polite"
            >
              Subscribed successfully!
            </motion.p>
          ) : (
            <form onSubmit={handleSubscribe} noValidate aria-label="Newsletter subscription">
              <div className="flex">
                <label htmlFor="footer-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="footer-email"
                  required
                  aria-required="true"
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "footer-email-error" : undefined}
                  className="bg-white/10 text-white placeholder-on-primary/40 border border-white/10 rounded-l-xl px-3 sm:px-4 py-3 w-full outline-none text-sm font-medium focus:bg-white/15 focus:border-white/20 transition-all min-h-[44px]"
                  placeholder="Your email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                />
                <button
                  type="submit"
                  className="bg-excellence-gold text-trust-navy px-3 sm:px-4 rounded-r-xl hover:bg-[#ebd01f] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md min-h-[44px] min-w-[44px]"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                </button>
              </div>
              {emailError && (
                <p id="footer-email-error" role="alert" className="mt-1.5 text-xs text-red-400 font-medium">
                  {emailError}
                </p>
              )}
            </form>
          )}

          <p className="text-xs font-medium text-on-primary/40 leading-relaxed">
            &copy; {new Date().getFullYear()} Amity University Online. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-white border-t border-[#E5E7EB] py-4 sm:py-5 px-5 sm:px-8 md:px-12 lg:px-16 w-full z-10 relative">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[11px] sm:text-[12px] md:text-[13px] text-[#6B7280] leading-relaxed font-normal">
            <span className="font-semibold text-[#374151]">Disclaimer:</span>{" "}
            This website is intended solely for providing information about Amity Online programs.
            All admissions, enrollments, fee payments, academic decisions, and related processes
            are conducted exclusively by Amity Online through its official channels.
            Information is subject to change as per the university&apos;s policies and guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
