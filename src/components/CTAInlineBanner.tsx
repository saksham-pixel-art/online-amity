"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

type CTAInlineBannerProps = {
  onOpenEnquiry?: () => void;
};

export default function CTAInlineBanner({ onOpenEnquiry }: CTAInlineBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white" aria-label="Special offer">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="relative bg-gradient-to-r from-trust-navy via-[#0B2E59] to-trust-navy rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-excellence-gold/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" aria-hidden="true" />
          
          {/* Floating Icons */}
          <motion.div
            className="absolute top-8 right-8 text-excellence-gold/20"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            aria-hidden="true"
          >
            <Sparkles className="w-16 h-16" />
          </motion.div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 bg-excellence-gold/20 backdrop-blur-sm text-excellence-gold font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-excellence-gold/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Limited Time Offer</span>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Apply Now & Get Up to 30% Scholarship
              </motion.h2>

              <motion.p
                className="text-white/80 text-base sm:text-lg font-medium max-w-2xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Early bird scholarships available for the July 2026 batch. Plus, flexible EMI options starting at ₹5,000/month.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {[
                  "UGC Approved",
                  "NAAC A+ Accredited",
                  "WASC (USA) Accredited",
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                    <svg className="w-5 h-5 text-excellence-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={onOpenEnquiry}
                className="group bg-excellence-gold hover:bg-[#FFD700] text-trust-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px] whitespace-nowrap"
                aria-label="Claim scholarship"
              >
                <span>Claim Your Scholarship</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={onOpenEnquiry}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px] whitespace-nowrap"
                aria-label="Check eligibility"
              >
                <span>Check Eligibility</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
