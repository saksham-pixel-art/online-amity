"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

type CTATestimonialProps = {
  onOpenEnquiry?: () => void;
};

export default function CTATestimonial({ onOpenEnquiry }: CTATestimonialProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#faf9fd]" aria-label="Student success story">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Testimonial */}
          <motion.div
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-outline-variant/20 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-excellence-gold rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-trust-navy" aria-hidden="true" />
            </div>

            <div className="space-y-6">
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-excellence-gold text-excellence-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-trust-navy text-lg sm:text-xl font-medium leading-relaxed">
                "Amity Online's MBA program transformed my career. The flexibility allowed me to study while working, and the curriculum was incredibly relevant to real-world challenges. Within 6 months of graduation, I got promoted to Senior Manager."
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <div className="w-14 h-14 bg-gradient-to-br from-trust-navy to-[#0B2E59] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  PS
                </div>
                <div>
                  <div className="font-bold text-trust-navy text-base">Priya Sharma</div>
                  <div className="text-on-surface-variant text-sm font-medium">MBA Graduate '23 • Senior Manager at TCS</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-excellence-gold/10 text-trust-navy font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
                <span>Success Stories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy leading-tight">
                Your Success Story Starts Here
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg font-medium leading-relaxed">
                Join thousands of professionals who've advanced their careers with Amity Online. Our proven track record speaks for itself.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              {[
                { value: "87%", label: "Career Advancement" },
                { value: "4.8/5", label: "Student Rating" },
                { value: "92%", label: "Completion Rate" },
                { value: "3.5L+", label: "Alumni Network" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="space-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-trust-navy">
                    {stat.value}
                  </div>
                  <div className="text-on-surface-variant text-sm font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="group bg-trust-navy hover:bg-[#0B2E59] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                aria-label="Start your journey"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={onOpenEnquiry}
                className="bg-white hover:bg-gray-50 text-trust-navy font-bold px-8 py-4 rounded-xl border-2 border-trust-navy/20 hover:border-trust-navy/40 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
                aria-label="Read more stories"
              >
                <span>Read More Stories</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
