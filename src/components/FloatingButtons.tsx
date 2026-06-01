"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

// ── Configuration ──────────────────────────────────────────────
const PHONE_NUMBER = "917037010407"; // Update with actual number
const WHATSAPP_NUMBER = "917037010407"; // Update with actual number (include country code, no +)
const WHATSAPP_MESSAGE = "Hi! I'm interested in Amity Online programs. Can you help me?";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  // Delay appearance so the page loads first
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50 flex flex-col items-end gap-3 no-print"
          aria-label="Quick contact options"
          role="complementary"
        >
          {/* Talk to Expert */}
          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2.5 bg-[#1565D8] hover:bg-[#1255b5] text-white font-semibold text-sm sm:text-[15px] pl-5 pr-6 py-3 rounded-full shadow-[0_8px_32px_rgba(21,101,216,0.35)] hover:shadow-[0_12px_40px_rgba(21,101,216,0.5)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1565D8] min-h-[48px]"
            aria-label="Call us to talk to an expert"
          >
            <span className="relative flex items-center justify-center w-7 h-7">
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: "2s" }} />
              <Phone className="w-[18px] h-[18px] stroke-[2.5] relative z-10 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            </span>
            <span className="tracking-wide">Talk to Expert</span>
          </motion.a>

          {/* Chat with Us (WhatsApp) */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fba59] text-white font-semibold text-sm sm:text-[15px] pl-5 pr-6 py-3 rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] min-h-[48px]"
            aria-label="Chat with us on WhatsApp"
          >
            <span className="relative flex items-center justify-center w-7 h-7">
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: "2.5s" }} />
              <MessageCircle className="w-[18px] h-[18px] stroke-[2.5] relative z-10 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            </span>
            <span className="tracking-wide">Chat with Us</span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
