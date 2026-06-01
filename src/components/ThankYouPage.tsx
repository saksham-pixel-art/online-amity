"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, BookOpen, Users, Award, Calendar, Phone, Mail } from "lucide-react";

type ThankYouPageProps = {
  studentName?: string;
  selectedCourse?: string;
  onExplorePrograms?: () => void;
  onClose?: () => void;
};

export default function ThankYouPage({
  studentName = "Student",
  selectedCourse = "",
  onExplorePrograms,
  onClose,
}: ThankYouPageProps) {
  const exploreOptions = [
    {
      icon: BookOpen,
      title: "Explore Programs",
      description: "Discover our range of UGC-approved online degree programs",
      action: () => {
        onClose?.();
        setTimeout(() => {
          document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      },
    },
    {
      icon: Award,
      title: "View Accreditations",
      description: "Learn about our global recognitions and rankings",
      action: () => {
        onClose?.();
        setTimeout(() => {
          document.getElementById("accreditations")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      },
    },
    {
      icon: Users,
      title: "Why Amity Online",
      description: "See what makes us India's leading online university",
      action: () => {
        onClose?.();
        setTimeout(() => {
          document.getElementById("why-amity")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      },
    },
    {
      icon: Calendar,
      title: "Admission Process",
      description: "Understand the simple steps to enroll",
      action: () => {
        onClose?.();
        setTimeout(() => {
          document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      },
    },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Success Header */}
      <div className="relative bg-gradient-to-br from-trust-navy to-[#0B2E59] px-8 pt-12 pb-16 text-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-excellence-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Success Icon */}
          <motion.div
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
          >
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Thank You, {studentName}!
            </h2>
            <p className="text-lg text-white/90 mb-2 max-w-2xl mx-auto">
              Your enquiry has been successfully submitted.
            </p>
            {selectedCourse && (
              <p className="text-sm text-excellence-gold font-semibold">
                Course: {selectedCourse}
              </p>
            )}
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-excellence-gold" />
              What Happens Next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-excellence-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-navy text-xs font-bold">1</span>
                </div>
                <p className="text-sm text-white/90">
                  Our admission counselor will review your enquiry
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-excellence-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-navy text-xs font-bold">2</span>
                </div>
                <p className="text-sm text-white/90">
                  You'll receive a call within 24 hours to discuss your program
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-excellence-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-navy text-xs font-bold">3</span>
                </div>
                <p className="text-sm text-white/90">
                  Get personalized guidance on eligibility, fees, and career opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-6 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-excellence-gold" />
              <span className="text-sm">+91 7037010407</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-excellence-gold" />
              <span className="text-sm">admissions@amityonline.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Explore Options */}
      <div className="flex-1 bg-gray-50 px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-trust-navy mb-2 text-center">
            While You Wait, Explore More
          </h3>
          <p className="text-sm text-gray-600 mb-8 text-center">
            Learn more about Amity University Online and what makes us special
          </p>

          {/* Explore Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exploreOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={option.title}
                  onClick={option.action}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border-2 border-gray-100 hover:border-excellence-gold transition-all text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-trust-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-excellence-gold/10 transition-colors">
                      <Icon className="w-6 h-6 text-trust-navy group-hover:text-excellence-gold transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-trust-navy mb-1 group-hover:text-excellence-gold transition-colors">
                        {option.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-excellence-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Close Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-trust-navy font-medium transition-colors underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold rounded px-2 py-1"
            >
              Close this window
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
