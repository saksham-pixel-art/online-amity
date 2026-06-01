"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

type CTATrustBasedProps = {
  onOpenEnquiry?: () => void;
};

export default function CTATrustBased({ onOpenEnquiry }: CTATrustBasedProps) {
  return (
    <section className="py-12 sm:py-16 bg-white" aria-label="Start your journey">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="bg-gradient-to-br from-trust-navy to-[#082244] rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-excellence-gold/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <motion.p
                  className="text-excellence-gold font-bold text-sm uppercase tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Join 1.6 Lakh+ Learners
                </motion.p>
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Ready to Transform Your Career?
                </motion.h2>
                <motion.p
                  className="text-white/80 text-base sm:text-lg font-medium leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Start your journey with India's most trusted online university. Get personalized guidance from our expert counselors.
                </motion.p>
              </div>

              {/* Trust Indicators */}
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {[
                  "UGC Approved & NAAC A+ Accredited",
                  "WASC (USA) Accredited Programs",
                  "Flexible EMI Options Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-excellence-gold shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={onOpenEnquiry}
                  className="group bg-excellence-gold hover:bg-[#FFD700] text-trust-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                  aria-label="Get free counseling"
                >
                  <span>Get Free Counseling</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <a
                  href="tel:+917037010407"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                  aria-label="Call us now"
                >
                  <span>Call: +91 7037010407</span>
                </a>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: "98%", label: "Student Satisfaction" },
                { value: "3.5L+", label: "Alumni Network" },
                { value: "60+", label: "Programs Offered" },
                { value: "24/7", label: "Learning Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-excellence-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
