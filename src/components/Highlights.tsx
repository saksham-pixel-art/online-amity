"use client";

import { motion, Variants } from "framer-motion";

const highlights = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.18" />
      </svg>
    ),
    title: "Emerging Specializations",
    desc: "New-age specializations shaping tomorrow's business landscape and industrial trends.",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="currentColor" fillOpacity="0.18" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="currentColor" fillOpacity="0.18" />
      </svg>
    ),
    title: "Robust Learning Model",
    desc: "250+ hours of video lectures to help you maximize your overall learning outcomes.",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" fill="currentColor" fillOpacity="0.18" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    title: "Personalized Learning",
    desc: "Personalized learning through a unique option of flexible choice-based credits.",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="currentColor" fillOpacity="0.18" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Real World Projects",
    desc: "Real-world projects & case studies to help you succeed in your career domain.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Highlights() {
  return (
    <section
      className="py-14 sm:py-16 lg:py-20 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 bg-background"
      aria-labelledby="highlights-heading"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 space-y-3">
        <motion.h2
          id="highlights-heading"
          className="text-section-title font-bold text-trust-navy tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Program Highlights &amp; Advantages
        </motion.h2>
        <motion.p
          className="text-on-surface-variant max-w-2xl mx-auto font-medium text-base sm:text-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover our Online Degree Programs and begin an exciting, modern educational journey
        </motion.p>
      </div>

      {/* Highlights Grid */}
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        role="list"
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-outline-variant/30 group flex flex-col items-start text-left"
              variants={cardVariants}
            >
              {/* Icon Box */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 bg-surface-container-low rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-excellence-gold group-hover:text-trust-navy transition-all duration-300 text-trust-navy"
                aria-hidden="true"
              >
                <Icon />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-trust-navy mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
