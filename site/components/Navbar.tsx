"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "./MotionWrappers";

const serviceLinks = [
  { label: "Medical Claim Coding", href: "/services/medical-claim-coding/" },
  { label: "Charge Entry", href: "/services/charge-entry/" },
  { label: "Claim Submission", href: "/services/claim-submission/" },
  { label: "Payment Posting", href: "/services/payment-posting/" },
  { label: "Denial & Appeals", href: "/services/denial-appeals-management/" },
  { label: "Patient Billing", href: "/services/patient-billing/" },
  { label: "AR Follow-Up", href: "/services/accounts-receivable-followup/" },
  { label: "Reporting & Analytics", href: "/services/reporting-analytics/" },
  { label: "Compliance Auditing", href: "/services/compliance-auditing/" },
  { label: "Free Billing Audit", href: "/services/free-billing-audit/" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Mission", href: "/mission-statement/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled
            ? "mt-0 bg-white/95 backdrop-blur-lg shadow-lg rounded-none sm:mt-2 sm:rounded-2xl"
            : "mt-2 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos/Logo.png"
              alt="ClearClaim RCM Logo"
              width={160}
              height={100}
              className={`object-contain h-10 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                      scrolled
                        ? "text-gray-700 hover:text-[#137868] after:bg-[#137868]"
                        : "text-white/90 hover:text-white after:bg-white"
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Services dropdown */}
              <li className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link
                  href="/services/"
                  className={`relative flex items-center gap-1 text-sm font-semibold transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "text-gray-700 hover:text-[#137868] after:bg-[#137868]"
                      : "text-white/90 hover:text-white after:bg-white"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="py-2">
                        <Link
                          href="/services/"
                          className="block px-4 py-2.5 text-sm font-semibold text-[#137868] hover:bg-[#137868]/5 transition-colors border-b border-gray-100"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                          onClick={() => setServicesOpen(false)}
                        >
                          All Services
                        </Link>
                        {serviceLinks.map((sl) => (
                          <Link
                            key={sl.href}
                            href={sl.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#137868] hover:bg-[#137868]/5 transition-colors"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            onClick={() => setServicesOpen(false)}
                          >
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/contact-us/"
                  className={`relative text-sm font-semibold transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "text-gray-700 hover:text-[#137868] after:bg-[#137868]"
                      : "text-white/90 hover:text-white after:bg-white"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link
              href="/contact-us/"
              className={`ml-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                scrolled
                  ? "bg-[#137868] text-white hover:bg-[#0f5f54]"
                  : "bg-white text-[#137868] hover:bg-white/90"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden rounded-b-2xl"
              aria-label="Mobile navigation"
            >
              <div className="px-4 pb-4">
                <ul className="list-none m-0 p-0">
                  {navLinks.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-3 text-gray-700 font-semibold hover:text-[#137868] border-b border-gray-50 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {/* Mobile Services accordion */}
                  <li className="border-b border-gray-50">
                    <button
                      className="flex items-center justify-between w-full py-3 text-gray-700 font-semibold hover:text-[#137868] transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      Services
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <Link
                            href="/services/"
                            className="block py-2 pl-4 text-sm font-semibold text-[#137868] hover:text-[#0f5f54] transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            All Services
                          </Link>
                          {serviceLinks.map((sl) => (
                            <Link
                              key={sl.href}
                              href={sl.href}
                              className="block py-2 pl-4 text-sm text-gray-600 hover:text-[#137868] transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              {sl.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>
                    <Link
                      href="/contact-us/"
                      className="block py-3 text-gray-700 font-semibold hover:text-[#137868] transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/contact-us/"
                  className="mt-3 block text-center px-5 py-2.5 rounded-full bg-[#137868] text-white text-sm font-semibold hover:bg-[#0f5f54] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
