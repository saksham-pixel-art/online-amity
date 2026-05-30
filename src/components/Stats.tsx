"use client";

import { motion, Variants } from "framer-motion";

const stats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "60+", label: "Programs" },
  { value: "1.60L+", label: "Learners" },
  { value: "3.5L+", label: "Strong Alumni" },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Stats() {
  return (
    <section
      className="bg-trust-navy py-10 sm:py-12 relative overflow-hidden"
      aria-label="Key statistics"
    >
      <motion.dl
        className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            variants={itemVariants}
          >
            <motion.dd
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-excellence-gold tracking-tight"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {stat.value}
            </motion.dd>
            <dt className="text-[11px] sm:text-xs font-bold text-on-primary/70 uppercase tracking-widest mt-2 group-hover:text-on-primary transition-colors">
              {stat.label}
            </dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
