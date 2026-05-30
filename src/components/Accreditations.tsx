"use client";

import { motion } from "framer-motion";
import React from "react";
import { Globe2 } from "lucide-react";

const QSBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#f39c12]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#FFC629" />
    <path d="M50,20 L72,30 L50,40 L28,30 Z" fill="#002147" />
    <path d="M38,35 L38,48 C38,54 62,54 62,48 L62,35" fill="#002147" />
    <path d="M72,30 L72,45" stroke="#002147" strokeWidth="2" fill="none" />
    <circle cx="72" cy="45" r="2" fill="#002147" />
    <text x="50" y="68" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" fill="#002147" textAnchor="middle">QS</text>
    <text x="50" y="82" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#002147" letterSpacing="0.5" textAnchor="middle">RANKED</text>
  </svg>
);

const UGCBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#800020]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#002147" stroke="#FFC629" strokeWidth="2" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FFC629" strokeWidth="1" strokeDasharray="3 3" />
    <text x="50" y="52" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" fill="#FFC629" textAnchor="middle">UGC</text>
    <text x="50" y="68" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" letterSpacing="0.5" textAnchor="middle">DEB</text>
  </svg>
);

const AICTEBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#005EB8]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#800020" stroke="#FFC629" strokeWidth="2" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FFC629" strokeWidth="1" strokeDasharray="3 3" />
    <text x="50" y="62" fontSize="15" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#FFC629" textAnchor="middle">AICTE</text>
    <text x="50" y="75" fontSize="7" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" letterSpacing="0.5" textAnchor="middle">APPROVED</text>
  </svg>
);

const NAACBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#000046]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#002147" stroke="#FFC629" strokeWidth="2" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FFC629" strokeWidth="1.5" />
    <path d="M50,18 L54,32 L68,32 L57,40 L61,54 L50,46 L39,54 L43,40 L32,32 L46,32 Z" fill="#FFC629" />
    <text x="50" y="70" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" textAnchor="middle">NAAC A+</text>
    <text x="50" y="82" fontSize="7" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#FFC629" letterSpacing="0.5" textAnchor="middle">ACCREDITED</text>
  </svg>
);

const AIUBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#a21caf]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#002147" stroke="#FFC629" strokeWidth="2" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FFC629" strokeWidth="1" />
    <text x="50" y="52" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" fill="#FFC629" textAnchor="middle">AIU</text>
    <text x="50" y="70" fontSize="7" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" letterSpacing="0.5" textAnchor="middle">MEMBER</text>
  </svg>
);

const GovtBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#d97706]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#002147" stroke="#FFC629" strokeWidth="2" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FFC629" strokeWidth="1" strokeDasharray="3 3" />
    <text x="50" y="52" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif" fill="#FFC629" textAnchor="middle">GOVT</text>
    <text x="50" y="76" fontSize="6.5" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" letterSpacing="0.3" textAnchor="middle">MINISTRY APP.</text>
  </svg>
);

const WESBadge = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-11 sm:h-11 select-none shrink-0 shadow-sm rounded-full border border-[#007f5c]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#007f5c" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" strokeWidth="1" />
    <text x="50" y="52" fontSize="17" fontWeight="bold" fontFamily="Georgia, serif" fill="#ffffff" textAnchor="middle">WES</text>
    <text x="50" y="72" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#FFC629" letterSpacing="0.5" textAnchor="middle">APPROVED</text>
  </svg>
);

const cards = [
  { logo: QSBadge, text: "India's only online MBA ranked by QS: Asia Pacific Top 10" },
  { logo: UGCBadge, text: "Recognized by UGC-DEB for online education" },
  { logo: AICTEBadge, text: "AICTE-approved programs" },
  { logo: NAACBadge, text: "NAAC A+ accredited university" },
  { logo: AIUBadge, text: "Member of Association of Indian Universities (AIU)" },
  { logo: GovtBadge, text: "Approved by Ministry of Education" },
  { logo: WESBadge, text: "Degrees globally valued and recognized by WES" },
  {
    logo: () => (
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#4f46e5] select-none shrink-0 shadow-sm border border-[#4f46e5]/20" aria-hidden="true">
        <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
      </div>
    ),
    text: "Global partnerships with top institutions",
  },
];

export default function Accreditations() {
  return (
    <section
      id="accreditations"
      className="bg-[#faf9fd] py-12 sm:py-14 lg:py-16 border-y border-outline-variant/10"
      aria-labelledby="accreditations-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden text-center">
        {/* Header */}
        <motion.h2
          id="accreditations-heading"
          className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Accreditations &amp; Recognitions
        </motion.h2>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto"
          role="list"
        >
          {cards.map((item, idx) => {
            const Logo = item.logo;
            return (
              <motion.li
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center gap-3 sm:gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[80px] sm:min-h-[92px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <div className="shrink-0">
                  <Logo />
                </div>
                <p className="text-[12px] sm:text-[13px] font-bold text-trust-navy text-left leading-snug">
                  {item.text}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
