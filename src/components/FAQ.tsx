"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Amity University Online?",
    a: "Amity University Online is the digital learning wing of the world-renowned Amity Education Group, offering top-tier accredited degree programs that combine academic rigor with the flexibility of online learning. Students can earn UGC-recognized, WASC and NAAC A+ accredited degrees from anywhere in the world.",
  },
  {
    q: "What is the admission process of Amity Online?",
    a: "The admission process is simple and fully online. You can apply by filling out the enquiry form on our website, after which our counselors will guide you through document submission, fee payment, and enrollment. No entrance exam is required for most programs.",
  },
  {
    q: "How do I access my course?",
    a: "Once enrolled, you will receive login credentials to access the Amity Online Learning Management System (LMS). All course materials, lectures, assignments, and resources are available 24/7 on the platform, accessible from any device.",
  },
  {
    q: "How will I get admission confirmation?",
    a: "After completing the application and fee payment, you will receive an official admission confirmation via email along with your student ID and LMS access credentials. Our support team is available to assist you throughout the process.",
  },
  {
    q: "Cancellation of admission",
    a: "Admission cancellation and refund policies are governed by university guidelines. Students can request cancellation within the specified period by contacting the admissions office. Refunds, if applicable, are processed as per the university's refund policy.",
  },
  {
    q: "What academic support services are available to online students?",
    a: "Amity Online provides comprehensive academic support including dedicated faculty mentors, 24/7 LMS access, live doubt-clearing sessions, discussion forums, digital library access, and career counseling services to ensure holistic student development.",
  },
  {
    q: "How are exams and assessments conducted in online programs?",
    a: "Exams are conducted online through a secure, AI-enabled proctoring system, allowing you to complete assessments from the comfort of your home. Assessments include a mix of assignments, quizzes, projects, and semester-end examinations.",
  },
  {
    q: "Are student loans available for online students?",
    a: "Yes, Amity Online programs are eligible for education loans from leading banks and financial institutions. Our team can guide you through the loan application process and provide the necessary documentation for loan approval.",
  },
  {
    q: "How are online classes conducted?",
    a: "Classes are conducted through a blend of pre-recorded video lectures, live interactive sessions, and self-paced learning modules on our advanced LMS platform. Students can access content anytime and interact with faculty during scheduled live sessions.",
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
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="text-trust-navy italic block"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', 'Playfair Display', serif",
            fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem)",
            lineHeight: 1.25,
            fontWeight: 400,
          }}
        >
          Frequently Asked Questions
        </span>
      </motion.h2>

      <dl className="divide-y divide-outline-variant/40">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const btnId = `faq-btn-${index}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <dt>
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex justify-between items-center py-5 sm:py-6 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold rounded-sm min-h-[44px]"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-[15px] sm:text-base lg:text-lg font-medium text-trust-navy/90 group-hover:text-academic-blue transition-colors leading-snug pr-4">
                    <span className="font-semibold text-trust-navy">Q.</span>{" "}
                    {faq.q}
                  </span>
                  <span
                    className="text-trust-navy/60 group-hover:text-academic-blue transition-all duration-300 flex-shrink-0"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.5]" />
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
                    <p className="pb-5 sm:pb-6 text-sm sm:text-base font-medium text-on-surface-variant leading-relaxed pl-6">
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
