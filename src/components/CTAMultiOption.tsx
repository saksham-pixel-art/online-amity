"use client";

import { motion } from "framer-motion";
import { Phone, Video, MessageCircle, ArrowRight } from "lucide-react";

type CTAMultiOptionProps = {
  onOpenEnquiry?: () => void;
};

export default function CTAMultiOption({ onOpenEnquiry }: CTAMultiOptionProps) {
  return (
    <section className="py-12 sm:py-16 bg-white" aria-label="Connect with us">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy leading-tight">
              Still Have Questions? We're Here to Help
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg font-medium">
              Choose your preferred way to connect with our expert counselors
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Schedule a Call",
                desc: "Talk to our counselors at your convenience",
                cta: "Book a Call",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                textColor: "text-blue-600",
              },
              {
                icon: Video,
                title: "Live Demo Session",
                desc: "See our platform and programs in action",
                cta: "Join Demo",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                textColor: "text-purple-600",
              },
              {
                icon: MessageCircle,
                title: "Chat with Expert",
                desc: "Get instant answers to your questions",
                cta: "Start Chat",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                textColor: "text-green-600",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-outline-variant/20 hover:border-trust-navy/30 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${option.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className={`w-8 h-8 ${option.textColor}`} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-trust-navy">
                      {option.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm font-medium">
                      {option.desc}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={onOpenEnquiry}
                    className={`w-full bg-gradient-to-r ${option.color} text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                    aria-label={option.cta}
                  >
                    <span>{option.cta}</span>
                    <ArrowRight className="w-5 h-5 transition-all" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-on-surface-variant text-sm font-semibold">
              Available Monday - Saturday, 9 AM - 8 PM IST • Average response time: 2 minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
