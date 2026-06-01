"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";

type Course = {
  title: string;
  img: string;
  tag: string;
  dur: string;
};

const courses: Record<string, Course[]> = {
  ug: [
    {
      title: "BBA with Specialization",
      img: "/assets/c7abe7272e77f2aacdd14533a588dc55.jpg",
      tag: "UG PROGRAM",
      dur: "3 Years",
    },
    {
      title: "Bachelor of Computer Applications",
      img: "/assets/51b8a5ebfe36fb6d6f436d12fb993920.jpg",
      tag: "UG PROGRAM",
      dur: "3 Years",
    },
    {
      title: "Bachelor of Commerce",
      img: "/assets/9fcd5a57b3f5c479456174527e7b99f2.jpg",
      tag: "UG PROGRAM",
      dur: "3 Years",
    },
  ],
  mba: [
    {
      title: "MBA Global Management",
      img: "/assets/9fcd5a57b3f5c479456174527e7b99f2.jpg",
      tag: "PG PROGRAM",
      dur: "2 Years",
    },
    {
      title: "MBA Digital Marketing",
      img: "/assets/c7abe7272e77f2aacdd14533a588dc55.jpg",
      tag: "PG PROGRAM",
      dur: "2 Years",
    },
    {
      title: "MBA Business Analytics",
      img: "/assets/51b8a5ebfe36fb6d6f436d12fb993920.jpg",
      tag: "PG PROGRAM",
      dur: "2 Years",
    },
  ],
  mca: [
    {
      title: "MCA in Blockchain Tech",
      img: "/assets/51b8a5ebfe36fb6d6f436d12fb993920.jpg",
      tag: "PG PROGRAM",
      dur: "2 Years",
    },
    {
      title: "MCA in Artificial Intelligence",
      img: "/assets/9fcd5a57b3f5c479456174527e7b99f2.jpg",
      tag: "PG PROGRAM",
      dur: "2 Years",
    },
    {
      title: "MCA in Cloud Computing",
      img: "/assets/c7abe7272e77f2aacdd14533a588dc55.jpg",
      tag: "PG PROGRAM",
      dur: "2 Years",
    },
  ],
};

const tabs = [
  { id: "ug", label: "UG Programs" },
  { id: "mba", label: "MBA Programs" },
  { id: "mca", label: "MCA Programs" },
];

type ProgramsProps = {
  onOpenEnquiry?: (course?: string) => void;
};

function getCourseValue(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("mba")) return "MBA (Master of Business Administration)";
  if (t.includes("bba")) return "BBA (Bachelor of Business Administration)";
  if (t.includes("mca")) return "MCA (Master of Computer Applications)";
  if (t.includes("bca") || t.includes("computer applications")) return "BCA (Bachelor of Computer Applications)";
  if (t.includes("bcom") || t.includes("b.com")) return "BCOM (Bachelor of Commerce)";
  if (t.includes("ba") || t.includes("bachelor of arts")) return "BA (Bachelor of Arts)";
  if (t.includes("mcom") || t.includes("m.com")) return "MCOM (Master of Commerce)";
  if (t.includes("ma") || t.includes("master of arts")) return "MA (Master of Arts)";
  return "Select a course";
}

export default function Programs({ onOpenEnquiry }: ProgramsProps) {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <section
      id="programs"
      className="py-14 sm:py-16 lg:py-20 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 bg-background"
      aria-labelledby="programs-heading"
    >
      {/* Section Header with Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6 sm:gap-8 border-b border-outline-variant/30 pb-px">
        <div className="text-left space-y-2">
          <h2
            id="programs-heading"
            className="text-section-title font-bold text-trust-navy tracking-tight"
          >
            Explore Our Programs
          </h2>
          <p className="text-on-surface-variant font-medium text-sm sm:text-base">
            Industry-aligned curriculum for the future leaders.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          className="flex gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none"
          role="tablist"
          aria-label="Program categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              className={`px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap transition-all duration-300 font-bold text-xs sm:text-sm tracking-wide border-b-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold rounded-t-sm min-h-[44px] ${
                activeTab === tab.id
                  ? "border-excellence-gold text-trust-navy"
                  : "border-transparent text-on-surface-variant/80 hover:text-trust-navy"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 min-h-[320px] sm:min-h-[380px]"
        >
          <AnimatePresence mode="popLayout">
            {courses[activeTab].map((course) => (
              <motion.article
                layout
                key={course.title}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 group flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Thumbnail */}
                <div className="relative h-44 sm:h-48 overflow-hidden select-none">
                  <img
                    src={course.img}
                    alt={`${course.title} — ${course.tag}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-excellence-gold text-trust-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {course.tag}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 sm:p-6 space-y-4 sm:space-y-6 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-trust-navy tracking-tight line-clamp-2 min-h-[52px] sm:min-h-[56px] text-left">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span className="text-xs font-bold">{course.dur}</span>
                    </div>

                    <button
                      className="text-academic-blue font-bold flex items-center gap-1 group/btn text-sm tracking-wide cursor-pointer hover:text-trust-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic-blue rounded-sm min-h-[44px] px-1"
                      onClick={() => onOpenEnquiry?.(getCourseValue(course.title))}
                      aria-label={`Know more about ${course.title}`}
                    >
                      Know More{" "}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
