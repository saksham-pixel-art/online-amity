"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  onOpenEnquiry?: () => void;
};

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#accreditations", label: "Accreditations" },
  { href: "#why-amity", label: "Why Amity" },
  { href: "#placements", label: "Placements" },
  { href: "#faq", label: "FAQs" },
];

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        toggleRef.current && !toggleRef.current.contains(e.target as Node)
      ) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`bg-trust-navy sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      }`}
      role="banner"
    >
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 h-[68px]">

        {/* Logo — fixed pixel height so it never stretches the bar */}
        <a
          href="#"
          aria-label="Amity University Online — Home"
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold rounded"
        >
          <img
            src="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"
            alt="Amity University Online"
            style={{ height: "44px", width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop nav — perfectly centred in remaining space */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-0.5 lg:gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="
                relative px-3.5 lg:px-4 py-2 rounded-md
                text-[13px] lg:text-sm font-semibold tracking-[0.01em]
                text-white/75 hover:text-white
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold
                group
              "
            >
              {link.label}
              {/* Gold underline slides in on hover */}
              <span
                aria-hidden="true"
                className="
                  absolute bottom-0.5 left-3.5 lg:left-4 right-3.5 lg:right-4
                  h-[2px] rounded-full bg-excellence-gold
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-200 origin-left
                "
              />
            </a>
          ))}
        </nav>

        {/* CTA — same vertical rhythm as nav links */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenEnquiry}
            aria-label="Open enquiry form"
            className="
              bg-excellence-gold text-trust-navy
              font-bold text-[13px] lg:text-sm tracking-wide
              px-5 lg:px-6 h-9 rounded-lg
              shadow-sm hover:bg-[#ebd01f] hover:shadow-md
              active:scale-[0.97]
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-white focus-visible:ring-offset-2
              focus-visible:ring-offset-trust-navy
              whitespace-nowrap
            "
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="
            md:hidden flex items-center justify-center
            w-10 h-10 rounded-md
            text-white hover:text-excellence-gold
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold
          "
        >
          {isOpen
            ? <X className="w-5 h-5" aria-hidden="true" />
            : <Menu className="w-5 h-5" aria-hidden="true" />
          }
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          md:hidden absolute top-[68px] left-0 w-full
          bg-[#001a38] border-b border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          transition-all duration-250 ease-in-out
          ${isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-4 pt-3 pb-4 gap-0.5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="
                text-white/80 hover:text-white hover:bg-white/5
                font-semibold text-[15px]
                px-4 py-3 rounded-lg
                min-h-[48px] flex items-center
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excellence-gold
              "
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 pt-3 border-t border-white/10">
            <button
              onClick={() => { setIsOpen(false); onOpenEnquiry?.(); }}
              className="
                w-full bg-excellence-gold text-trust-navy
                font-bold text-[15px] tracking-wide
                py-3.5 rounded-xl
                shadow-md active:scale-[0.98]
                transition-all duration-150
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-white focus-visible:ring-offset-2
                focus-visible:ring-offset-trust-navy
              "
            >
              Enquire Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
