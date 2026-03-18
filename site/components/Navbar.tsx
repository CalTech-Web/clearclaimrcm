"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "./MotionWrappers";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Mission", href: "/mission-statement/" },
  { label: "Services", href: "/services/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              {navLinks.map((link) => (
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
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-3 text-gray-700 font-semibold hover:text-[#137868] border-b border-gray-50 last:border-0 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
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
