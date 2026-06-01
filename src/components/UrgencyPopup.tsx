"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Users, Clock } from "lucide-react";

const INITIAL_DELAY = 3_000; // 3 seconds - first popup
const REOPEN_INTERVAL = 20_000; // 20 seconds - subsequent popups
const FILL_PERCENT = 92;

type UrgencyPopupProps = {
  onOpenEnquiry?: () => void;
};

export default function UrgencyPopup({ onOpenEnquiry }: UrgencyPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = useCallback(() => setIsVisible(true), []);
  const closePopup = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // Show popup after 3 seconds initially
    const initialTimer = setTimeout(openPopup, INITIAL_DELAY);

    return () => {
      clearTimeout(initialTimer);
    };
  }, [openPopup]);

  useEffect(() => {
    // Re-open every 20 seconds after the popup is closed
    if (!isVisible) {
      const reopenTimer = setTimeout(openPopup, REOPEN_INTERVAL);
      return () => clearTimeout(reopenTimer);
    }
  }, [isVisible, openPopup]);

  const handleCTA = () => {
    closePopup();
    onOpenEnquiry?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Premium Backdrop */}
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-trust-navy/60 via-black/50 to-trust-navy/60 backdrop-blur-md z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closePopup}
            aria-hidden="true"
          />

          {/* Popup Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="urgency-popup-title"
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.34, 1.56, 0.64, 1],
              opacity: { duration: 0.3 }
            }}
          >
            {/* Main Popup Card */}
            <div className="pointer-events-auto relative flex flex-col sm:flex-row w-[95vw] sm:w-[90vw] max-w-[900px] sm:max-h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-white">
              
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-excellence-gold via-[#FFD700] to-excellence-gold" />
              
              {/* Close Button */}
              <motion.button
                onClick={closePopup}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-trust-navy shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold backdrop-blur-sm"
                aria-label="Close popup"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </motion.button>

              {/* Left Content Panel */}
              <div className="relative bg-gradient-to-br from-trust-navy via-[#0B2E59] to-[#082244] w-full sm:w-[55%] p-8 sm:p-10 lg:p-12 flex flex-col justify-center overflow-hidden">
                
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-excellence-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <motion.div
                    className="inline-flex items-center gap-1.5 bg-excellence-gold/20 backdrop-blur-sm border border-excellence-gold/30 rounded-full px-3 py-1.5 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-excellence-gold" />
                    <span className="text-xs font-bold text-excellence-gold uppercase tracking-wider">
                      Limited Time Offer
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h3
                    id="urgency-popup-title"
                    className="text-white text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.1] tracking-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Limited Seats
                    <span className="block bg-gradient-to-r from-excellence-gold to-[#FFD700] bg-clip-text text-transparent">
                      Available
                    </span>
                  </motion.h3>

                  {/* Subheading */}
                  <motion.p
                    className="text-white/90 text-base sm:text-lg font-medium leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Join <span className="font-bold text-excellence-gold">50,000+</span> learners worldwide. 
                    <span className="block mt-1">Next batch starts soon!</span>
                  </motion.p>

                  {/* Stats Row */}
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 text-white/80">
                      <Users className="w-4 h-4 text-excellence-gold" />
                      <span className="text-sm font-semibold">50K+ Students</span>
                    </div>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-4 h-4 text-excellence-gold" />
                      <span className="text-sm font-semibold">Batch Closing</span>
                    </div>
                  </motion.div>

                  {/* Progress Bar */}
                  <motion.div
                    className="mb-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-full h-3 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/10">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: "linear-gradient(90deg, #FFC72C 0%, #FFD700 50%, #FFC72C 100%)",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${FILL_PERCENT}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-white font-bold text-sm mb-6 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="text-2xl">{FILL_PERCENT}%</span>
                    <span className="text-white/70">Seats Filled</span>
                  </motion.p>

                  {/* CTA Button */}
                  <motion.button
                    onClick={handleCTA}
                    className="w-full bg-gradient-to-r from-excellence-gold to-[#FFD700] hover:from-[#FFD700] hover:to-excellence-gold text-trust-navy font-bold text-base sm:text-lg py-4 px-6 rounded-xl shadow-[0_8px_24px_rgba(255,199,44,0.4)] hover:shadow-[0_12px_32px_rgba(255,199,44,0.6)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-trust-navy min-h-[56px] relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Secure My Spot Now
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    {/* Button Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>

                  {/* Trust Badge */}
                  <motion.p
                    className="text-white/60 text-xs text-center mt-4 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    ✓ UGC Approved • ✓ NAAC A+ Accredited
                  </motion.p>
                </div>
              </div>

              {/* Right Image Panel */}
              <motion.div
                className="relative w-full sm:w-[45%] h-64 sm:h-auto bg-gradient-to-br from-gray-100 to-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img
                  src="/assets/counselor-popup.png"
                  alt="Amity University counselor ready to assist you"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-trust-navy/10" />
                
                {/* Floating Badge on Image */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-trust-navy font-bold text-sm mb-1">
                    🎓 Expert Counselors Available
                  </p>
                  <p className="text-trust-navy/70 text-xs font-medium">
                    Get personalized guidance for your career
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
