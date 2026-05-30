"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { MapPin, Smartphone, BrainCircuit, BookOpen, Briefcase, Compass, Share2 } from "lucide-react";

const WASCBadge = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-9 sm:h-9 select-none shrink-0 shadow-sm rounded-full border border-[#005EB8]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#005EB8" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FFC629" strokeWidth="1" strokeDasharray="3 3" />
    <text x="50" y="48" fontSize="17" fontWeight="bold" fontFamily="Georgia, serif" fill="#ffffff" textAnchor="middle">WASC</text>
    <text x="50" y="65" fontSize="8.5" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#FFC629" letterSpacing="0.5" textAnchor="middle">USA</text>
    <text x="50" y="78" fontSize="7" fontWeight="medium" fontFamily="system-ui, sans-serif" fill="#ffffff" textAnchor="middle">ACCREDITED</text>
  </svg>
);

const WESBadge = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-9 sm:h-9 select-none shrink-0 shadow-sm rounded-full border border-[#007f5c]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#007f5c" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" strokeWidth="1" />
    <text x="50" y="52" fontSize="17" fontWeight="bold" fontFamily="Georgia, serif" fill="#ffffff" textAnchor="middle">WES</text>
    <text x="50" y="72" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#FFC629" letterSpacing="0.5" textAnchor="middle">APPROVED</text>
  </svg>
);

const QSBadge = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-9 sm:h-9 select-none shrink-0 shadow-sm rounded-full border border-[#f39c12]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#FFC629" />
    <path d="M50,20 L72,30 L50,40 L28,30 Z" fill="#002147" />
    <path d="M38,35 L38,48 C38,54 62,54 62,48 L62,35" fill="#002147" />
    <text x="50" y="68" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" fill="#002147" textAnchor="middle">QS</text>
    <text x="50" y="82" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#002147" letterSpacing="0.5" textAnchor="middle">RANKED</text>
  </svg>
);

const QAABadge = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-9 sm:h-9 select-none shrink-0 shadow-sm rounded-full border border-[#2e7d32]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#4a154b" />
    <path d="M35,42 L42,32 L50,39 L58,32 L65,42 L62,52 L38,52 Z" fill="#FFC629" opacity="0.8" />
    <text x="50" y="68" fontSize="17" fontWeight="bold" fontFamily="Georgia, serif" fill="#ffffff" textAnchor="middle">QAA</text>
    <text x="50" y="80" fontSize="7" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#FFC629" letterSpacing="0.5" textAnchor="middle">UK QUALITY</text>
  </svg>
);

const THEBadge = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-9 sm:h-9 select-none shrink-0 shadow-sm rounded-full border border-[#e11d48]/20 bg-white" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#e11d48" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
    <text x="50" y="46" fontSize="19" fontWeight="bold" fontFamily="Georgia, serif" fill="#ffffff" textAnchor="middle">THE</text>
    <text x="50" y="66" fontSize="7.5" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" letterSpacing="0.5" textAnchor="middle">TIMES HIGHER</text>
    <text x="50" y="78" fontSize="7.5" fontWeight="bold" fontFamily="system-ui, sans-serif" fill="#ffffff" letterSpacing="0.5" textAnchor="middle">EDUCATION</text>
  </svg>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#eaf2f8] flex items-center justify-center text-[#005eb8] select-none shrink-0 shadow-sm border border-[#005eb8]/20" aria-hidden="true">
    {children}
  </div>
);

const features = [
  {
    logo: WASCBadge,
    title: "WASC Accreditation (USA)",
    desc: "Amity Online is India's only university accredited by the Western Association of Schools and Colleges — a distinguished recognition of global academic excellence.",
  },
  {
    logo: WESBadge,
    title: "WES Recognition",
    desc: "Degrees recognised by World Education Services (WES) Canada & USA, enabling smoother pathways for higher studies and global career mobility.",
  },
  {
    logo: QSBadge,
    title: "QS Ranked Online MBA",
    desc: "Amity Online offers India's only Online MBA ranked by QS under Asia Pacific Top 10 — a global recognition for academic strength and digital innovation.",
  },
  {
    logo: QAABadge,
    title: "QAA (UK) Accreditation",
    desc: "Accredited by the UK's Quality Assurance Agency (QAA), assuring students of globally benchmarked academic quality.",
  },
  {
    logo: THEBadge,
    title: "Times Higher Education Rankings",
    desc: "Amity University is ranked among the best globally for graduate employability and employer reputation by Times Higher Education.",
  },
  {
    logo: () => <IconWrapper><MapPin className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "Pan-India Campus Access",
    desc: "Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation.",
  },
  {
    logo: () => <IconWrapper><Smartphone className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "Amigo: Learning On-the-Go",
    desc: "The Amigo app makes learning seamless and mobile — attend live classes, track progress, access materials, and more on your schedule.",
  },
  {
    logo: () => <IconWrapper><BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "Prof. Ami: AI-Powered Tutor",
    desc: "Meet Prof. Ami — your always-on, AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.",
  },
  {
    logo: () => <IconWrapper><BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "Industry Certifications",
    desc: "Gain an edge with in-demand certifications from top industry bodies and partners — integrated within your program to boost your skills and CV.",
  },
  {
    logo: () => <IconWrapper><Briefcase className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "Internship Opportunities",
    desc: "Access curated internships with leading companies through our corporate network, helping you gain real-world experience.",
  },
  {
    logo: () => <IconWrapper><Compass className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "AI-Powered Career Platform",
    desc: "From mock interviews and resume building to job search and easy-apply tools — our AI-powered platform ensures you're career-ready from day one.",
  },
  {
    logo: () => <IconWrapper><Share2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" /></IconWrapper>,
    title: "beSocial App for Campus Life",
    desc: "Your virtual student hub — the beSocial app lets you network, join clubs, attend events, and be part of a vibrant online-first community.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function WhyAmity() {
  return (
    <section
      id="why-amity"
      className="bg-[#faf9fd] py-14 sm:py-16 lg:py-20 border-y border-outline-variant/10"
      aria-labelledby="why-amity-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.h2
            id="why-amity-heading"
            className="text-section-title font-bold text-trust-navy tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Say Yes to Amity Online
          </motion.h2>
          <motion.p
            className="text-on-surface-variant/80 font-semibold text-sm sm:text-base tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Globally recognised | Digitally advanced | Deeply personalised
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
        >
          {features.map((item, index) => {
            const Logo = item.logo;
            return (
              <motion.li
                key={index}
                className="flex flex-col items-start text-left space-y-3 sm:space-y-4 hover:-translate-y-0.5 transition-transform duration-300"
                variants={cardVariants}
              >
                <div aria-hidden="true">
                  <Logo />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-trust-navy tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-on-surface-variant/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
