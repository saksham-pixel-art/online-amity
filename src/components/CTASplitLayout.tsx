"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, ArrowRight } from "lucide-react";

type CTASplitLayoutProps = {
  onOpenEnquiry?: () => void;
};

export default function CTASplitLayout({ onOpenEnquiry }: CTASplitLayoutProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#faf9fd]" aria-label="Explore programs">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy leading-tight">
                Find the Perfect Program for Your Goals
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg font-medium leading-relaxed">
                Whether you're looking to advance your career, switch industries, or gain new skills — we have a program designed for your success.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Industry-Relevant Curriculum",
                  desc: "Programs designed with input from leading employers",
                },
                {
                  icon: Clock,
                  title: "Flexible Learning Schedule",
                  desc: "Study at your own pace without career breaks",
                },
                {
                  icon: Award,
                  title: "Globally Recognized Degrees",
                  desc: "WASC accredited and WES recognized credentials",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-excellence-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-trust-navy" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-trust-navy text-base">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm font-medium">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="group bg-trust-navy hover:bg-[#0B2E59] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                aria-label="Explore all programs"
              >
                <span>Explore All Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={onOpenEnquiry}
                className="bg-white hover:bg-gray-50 text-trust-navy font-bold px-8 py-4 rounded-xl border-2 border-trust-navy/20 hover:border-trust-navy/40 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                aria-label="Talk to an advisor"
              >
                <span>Talk to an Advisor</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Action Panel */}
          <motion.div
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-outline-variant/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-excellence-gold/10 text-trust-navy font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-excellence-gold rounded-full animate-pulse" aria-hidden="true" />
                  <span>Limited Seats Available</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-trust-navy">
                  Get Personalized Program Recommendations
                </h3>
                <p className="text-on-surface-variant font-medium text-sm">
                  Answer a few quick questions and our counselors will help you find the best-fit program for your career goals.
                </p>
              </div>

              {/* Quick Benefits */}
              <ul className="space-y-3 py-4 border-y border-outline-variant/20">
                {[
                  "Free career counseling session",
                  "Detailed program comparison",
                  "Scholarship & EMI guidance",
                  "Instant eligibility check",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-trust-navy font-medium text-sm">
                    <div className="w-5 h-5 bg-excellence-gold rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-trust-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={onOpenEnquiry}
                className="w-full bg-excellence-gold hover:bg-[#FFD700] text-trust-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                aria-label="Get started now"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <p className="text-center text-xs text-on-surface-variant font-medium">
                ✓ No spam, ever • ✓ Response within 2 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
