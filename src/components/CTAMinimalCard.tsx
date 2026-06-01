"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

type CTAMinimalCardProps = {
  onOpenEnquiry?: () => void;
};

export default function CTAMinimalCard({ onOpenEnquiry }: CTAMinimalCardProps) {
  return (
    <section className="py-12 sm:py-16 bg-white" aria-label="Download brochure">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="bg-gradient-to-br from-[#faf9fd] to-white rounded-3xl p-8 sm:p-10 border-2 border-outline-variant/20 hover:border-excellence-gold/30 transition-all duration-300 shadow-sm hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Icon */}
            <motion.div
              className="w-20 h-20 bg-excellence-gold/10 rounded-2xl flex items-center justify-center shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FileText className="w-10 h-10 text-trust-navy" aria-hidden="true" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-trust-navy">
                Want to Learn More About Our Programs?
              </h2>
              <p className="text-on-surface-variant font-medium text-sm sm:text-base">
                Download our comprehensive brochure with detailed program information, fee structure, curriculum, and career outcomes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenEnquiry}
                className="group bg-trust-navy hover:bg-[#0B2E59] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap"
                aria-label="Download brochure"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>Download Brochure</span>
              </button>
              <button
                onClick={onOpenEnquiry}
                className="bg-white hover:bg-gray-50 text-trust-navy font-bold px-6 py-3.5 rounded-xl border-2 border-trust-navy/20 hover:border-trust-navy/40 transition-all duration-300 flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap"
                aria-label="Request callback"
              >
                <span>Request Callback</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
