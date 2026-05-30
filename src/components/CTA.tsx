"use client";

import { motion } from "framer-motion";

type CTAProps = {
  onOpenEnquiry?: () => void;
};

export default function CTA({ onOpenEnquiry }: CTAProps) {
  return (
    <section
      className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-16 lg:py-20"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="relative bg-trust-navy rounded-2xl sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden text-center text-on-primary shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none z-0 select-none" aria-hidden="true">
          <div className="absolute inset-0 bg-trust-navy" />
          <img
            src="/assets/cta_bg.jpg"
            alt=""
            role="presentation"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/70" />
        </div>

        <div className="relative z-10 space-y-5 sm:space-y-6 max-w-2xl mx-auto flex flex-col items-center">
          <h2
            id="cta-heading"
            className="font-bold text-2xl sm:text-3xl lg:text-[48px] lg:leading-[56px] text-white tracking-tight"
          >
            Ready to Join Them?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-on-primary/80 font-medium leading-relaxed max-w-lg">
            Start your journey today and be part of a 3.5 Lakh+ strong global
            network of modern leaders and digital innovators.
          </p>
          <div className="pt-2 sm:pt-4">
            <motion.button
              className="bg-excellence-gold text-trust-navy font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-xl sm:rounded-2xl hover:bg-[#ebd01f] shadow-2xl text-sm sm:text-base lg:text-lg tracking-wide uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-trust-navy min-h-[44px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenEnquiry}
              aria-label="Begin your journey — open enquiry form"
            >
              Begin Your Journey
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
