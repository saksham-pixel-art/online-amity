"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Amity University Online?",
    a: "Amity University Online is the digital learning wing of the world-renowned Amity Education Group, offering top-tier accredited degree programs that combine academic rigor with the flexibility of online learning.",
  },
  {
    q: "Is the degree valid for government jobs?",
    a: "Yes, all our programs are recognized by the UGC-DEB (Distance Education Bureau), ensuring that your degree is valid for government services, higher education, and corporate careers worldwide.",
  },
  {
    q: "How are exams conducted?",
    a: "Exams are conducted online through a secure, AI-enabled proctoring system, allowing you to complete your assessments from the comfort of your home or office.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-16 lg:py-20 max-w-3xl mx-auto px-5 sm:px-8 bg-background"
      aria-labelledby="faq-heading"
    >
      <motion.h2
        id="faq-heading"
        className="text-section-title font-bold text-trust-navy text-center mb-10 sm:mb-12 tracking-tight"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <dl className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const btnId = `faq-btn-${index}`;

          return (
            <motion.div
              key={index}
              className="border-b border-outline-variant/40"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <dt>
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex justify-between items-center py-5 sm:py-6 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold rounded-sm min-h-[44px]"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-trust-navy group-hover:text-academic-blue transition-colors leading-snug pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="text-trust-navy group-hover:text-academic-blue transition-all duration-300 flex-shrink-0"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 sm:pb-6 text-sm sm:text-base font-medium text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </dl>
    </section>
  );
}
