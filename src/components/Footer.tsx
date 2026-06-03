"use client";

import { MapPin, Phone, Mail, Award, Shield, Globe } from "lucide-react";
import { useState } from "react";
import ContentModal from "./ContentModal";
import {
  AboutContent,
  ContactContent,
  PrivacyPolicyContent,
  TermsContent,
  DisclaimerContent,
} from "./ModalContents";

type ModalType = "about" | "terms" | "privacy" | "disclaimer" | "contact" | null;

const quickLinks = [
  { id: "about" as ModalType, label: "About Us" },
  { id: "terms" as ModalType, label: "Terms & Conditions" },
  { id: "privacy" as ModalType, label: "Privacy Policy" },
  { id: "disclaimer" as ModalType, label: "Disclaimer" },
  { id: "contact" as ModalType, label: "Contact Us" },
];

const programs = [
  { href: "#programs", label: "MBA", tag: "Popular" },
  { href: "#programs", label: "MCA", tag: null },
  { href: "#programs", label: "MCOM", tag: null },
  { href: "#programs", label: "MA", tag: null },
  { href: "#programs", label: "BBA", tag: null },
];

const accreditations = [
  { icon: Award, label: "UGC Approved" },
  { icon: Shield, label: "NAAC A+ Grade" },
  { icon: Globe, label: "WASC Accredited" },
];

export default function Footer() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const getModalContent = (type: ModalType) => {
    switch (type) {
      case "about":
        return { title: "About Us", content: <AboutContent /> };
      case "contact":
        return { title: "Contact Us", content: <ContactContent /> };
      case "privacy":
        return { title: "Privacy Policy", content: <PrivacyPolicyContent /> };
      case "terms":
        return { title: "Terms & Conditions", content: <TermsContent /> };
      case "disclaimer":
        return { title: "Disclaimer", content: <DisclaimerContent /> };
      default:
        return null;
    }
  };

  const modalData = openModal ? getModalContent(openModal) : null;

  return (
    <>
      <footer className="relative bg-gradient-to-br from-trust-navy via-[#001a3d] to-trust-navy overflow-hidden" role="contentinfo">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-excellence-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12">

        {/* Main Grid - Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-10 pb-10 border-b border-white/10">

          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" aria-label="Amity University Online — Home" className="inline-block">
              <img
                src="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"
                alt="Amity University Online"
                style={{ height: "38px", width: "auto" }}
                className="select-none transition-transform hover:scale-105"
                loading="lazy"
              />
            </a>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              India's No.1 Online University offering UGC-approved, WASC-accredited degree programs with 100% online flexibility and placement support.
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {accreditations.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-excellence-gold" />
                    <span className="text-xs font-semibold text-white/80">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setOpenModal(link.id)}
                    className="text-sm text-white/60 hover:text-excellence-gold transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-excellence-gold transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-label="Programs" className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.slice(0, 5).map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="text-sm text-white/60 hover:text-excellence-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-excellence-gold transition-all" />
                    {p.label}
                    {p.tag && (
                      <span className="text-[9px] bg-excellence-gold/20 text-excellence-gold px-1.5 py-0.5 rounded-full font-bold uppercase">
                        {p.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a href="tel:+917037010407" className="flex items-center gap-2.5 text-white/60 hover:text-excellence-gold transition-colors group text-sm">
                <Phone className="w-4 h-4 text-excellence-gold flex-shrink-0" />
                <span>+91 7037010407</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-excellence-gold flex-shrink-0" />
                <span>admissions@onlineamity.com</span>
              </div>
              <div className="flex items-start gap-2.5 text-white/60 text-sm pt-1">
                <MapPin className="w-4 h-4 text-excellence-gold flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Sector 125, Noida,<br />Uttar Pradesh 201313
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-white/40 font-medium text-center">
            &copy; {new Date().getFullYear()} Amity University Online. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/5 py-6 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs text-white/50 leading-relaxed text-center">
            <span className="font-semibold text-white/70">Disclaimer:</span>{" "}
            This website is intended solely for providing information about Amity Online programs.
            All admissions, enrollments, fee payments, academic decisions, and related processes
            are conducted exclusively by Amity Online through its official channels.
            Information is subject to change as per the university's policies and guidelines.
          </p>
        </div>
      </div>
      </footer>

      {/* Modal */}
      {modalData && (
        <ContentModal
          isOpen={!!openModal}
          onClose={() => setOpenModal(null)}
          title={modalData.title}
        >
          {modalData.content}
        </ContentModal>
      )}
    </>
  );
}
