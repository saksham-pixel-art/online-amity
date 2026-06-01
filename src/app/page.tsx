"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Highlights from "@/components/Highlights";
import Accreditations from "@/components/Accreditations";
import Programs from "@/components/Programs";
import WhyAmity from "@/components/WhyAmity";
import Marquee from "@/components/Marquee";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingButtons from "@/components/FloatingButtons";
import UrgencyPopup from "@/components/UrgencyPopup";
import CTATrustBased from "@/components/CTATrustBased";
import CTASplitLayout from "@/components/CTASplitLayout";
import CTAMinimalCard from "@/components/CTAMinimalCard";
import CTAMultiOption from "@/components/CTAMultiOption";
import CTATestimonial from "@/components/CTATestimonial";
import CTAInlineBanner from "@/components/CTAInlineBanner";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Select a course");

  const handleOpenEnquiry = (course?: string) => {
    setSelectedCourse(course || "Select a course");
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-excellence-gold selection:text-trust-navy">
      {/* Accessibility: Skip to main content */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <Stats />
        <CTATrustBased onOpenEnquiry={() => handleOpenEnquiry()} />
        <Highlights />
        <CTASplitLayout onOpenEnquiry={() => handleOpenEnquiry()} />
        <Accreditations />
        <CTAMinimalCard onOpenEnquiry={() => handleOpenEnquiry()} />
        <Programs onOpenEnquiry={handleOpenEnquiry} />
        <CTAMultiOption onOpenEnquiry={() => handleOpenEnquiry()} />
        <WhyAmity />
        <CTATestimonial onOpenEnquiry={() => handleOpenEnquiry()} />
        <Marquee />
        <CTAInlineBanner onOpenEnquiry={() => handleOpenEnquiry()} />
        <FAQ />
        <CTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseEnquiry}
        initialCourse={selectedCourse}
      />

      <FloatingButtons />

      <UrgencyPopup onOpenEnquiry={() => handleOpenEnquiry()} />
    </div>
  );
}
