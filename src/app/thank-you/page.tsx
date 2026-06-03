"use client";

import { motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Users, 
  ArrowRight,
  Home
} from "lucide-react";
import Link from "next/link";

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [studentName, setStudentName] = useState("Student");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    // Set page title
    document.title = "Thank You | Amity University Online";
    
    const name = searchParams.get("name");
    const course = searchParams.get("course");
    
    if (name) setStudentName(name);
    if (course) setSelectedCourse(course);
  }, [searchParams]);

  const exploreOptions = [
    {
      id: "programs",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Browse Programs",
      description: "Explore our comprehensive range of online degree programs",
      action: () => router.push("/#programs"),
    },
    {
      id: "accreditations",
      icon: <Award className="w-6 h-6" />,
      title: "Accreditations",
      description: "Learn about our UGC, WASC, and NAAC A+ recognition",
      action: () => router.push("/#accreditations"),
    },
    {
      id: "why-amity",
      icon: <Users className="w-6 h-6" />,
      title: "Why Amity",
      description: "Discover what makes us India's leading online university",
      action: () => router.push("/#why-amity"),
    },
    {
      id: "faq",
      icon: <Calendar className="w-6 h-6" />,
      title: "Admission Process",
      description: "Understand the step-by-step enrollment procedure",
      action: () => router.push("/#faq"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header/Navbar placeholder */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png" 
              alt="Amity University Online" 
              className="h-10 sm:h-12 object-contain"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-trust-navy hover:text-academic-blue transition-colors group"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Success Confirmation */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Success Icon */}
          <motion.div
            className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
          >
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Personalized Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-navy mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Thank You, {studentName}!
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your enquiry has been successfully submitted
          </motion.p>

          {selectedCourse && (
            <motion.p
              className="text-base sm:text-lg font-semibold text-academic-blue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Course: {selectedCourse}
            </motion.p>
          )}
        </motion.div>

        {/* What Happens Next */}
        <motion.section
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-trust-navy mb-6 sm:mb-8 text-center">
            What Happens Next?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-academic-blue to-trust-navy rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-trust-navy mb-2">Counselor Assigned</h3>
                <p className="text-sm text-gray-600">
                  A dedicated admissions counselor will be assigned to guide you through the process
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-academic-blue to-trust-navy rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-trust-navy mb-2">Callback Within 24 Hours</h3>
                <p className="text-sm text-gray-600">
                  We'll contact you within 24 hours to discuss your course, eligibility, and next steps
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-academic-blue to-trust-navy rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-trust-navy mb-2">Fast-Track Admission</h3>
                <p className="text-sm text-gray-600">
                  Complete your enrollment quickly with our simplified online admission process
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          className="bg-gradient-to-br from-trust-navy to-academic-blue rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            Need Immediate Assistance?
          </h2>
          <p className="text-blue-100 text-center mb-8">
            Our admissions team is here to help
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-8 h-8 mb-3 text-excellence-gold" />
              <h3 className="font-bold mb-2 text-lg">Call Us</h3>
              <a
                href="tel:+917037010407"
                className="text-blue-100 hover:text-white font-medium transition-colors"
              >
                +91 7037010407
              </a>
              <p className="text-xs text-blue-200 mt-2">Mon-Sat: 9 AM - 6 PM</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-8 h-8 mb-3 text-excellence-gold" />
              <h3 className="font-bold mb-2 text-lg">Email Us</h3>
              <a
                href="mailto:admissions@amityonline.com"
                className="text-blue-100 hover:text-white font-medium transition-colors break-all"
              >
                admissions@amityonline.com
              </a>
              <p className="text-xs text-blue-200 mt-2">24-hour response time</p>
            </motion.div>

            {/* Address */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-8 h-8 mb-3 text-excellence-gold" />
              <h3 className="font-bold mb-2 text-lg">Visit Us</h3>
              <p className="text-blue-100 text-sm">
                Sector 125, Noida<br />
                Uttar Pradesh 201313
              </p>
              <p className="text-xs text-blue-200 mt-2">By appointment</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Explore Options */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-trust-navy mb-6 sm:mb-8 text-center">
            Explore More About Amity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {exploreOptions.map((option, index) => (
              <motion.button
                key={option.id}
                onClick={option.action}
                className="group bg-white border-2 border-gray-200 hover:border-academic-blue rounded-xl p-6 text-left transition-all shadow-sm hover:shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic-blue focus-visible:ring-offset-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-academic-blue/10 rounded-lg flex items-center justify-center text-academic-blue transition-colors">
                    {option.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-academic-blue group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-bold text-trust-navy mb-2 text-lg group-hover:text-academic-blue transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {option.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Back to Home CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-trust-navy text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-trust-navy/90 hover:shadow-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-navy focus-visible:ring-offset-2"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Return to Homepage</span>
          </Link>
        </motion.div>
      </main>

      {/* Footer CTA Strip */}
      <motion.div
        className="bg-gradient-to-r from-excellence-gold via-yellow-300 to-excellence-gold py-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-trust-navy font-bold text-lg sm:text-xl mb-1">
            🎓 Join 50,000+ Students Learning With Amity Online
          </p>
          <p className="text-trust-navy/80 text-sm sm:text-base">
            UGC Approved | WASC Accredited | NAAC A+ Graded
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-academic-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

// Main export wrapped in Suspense
export default function ThankYouPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ThankYouContent />
    </Suspense>
  );
}
