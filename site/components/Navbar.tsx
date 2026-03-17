"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Mission Statement", href: "/mission-statement/" },
  { label: "Services", href: "/services/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/Logo.png"
            alt="Clear Claim RCM Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[#137868] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us/"
            className="ml-2 px-5 py-2.5 rounded-full bg-[#137868] text-white text-sm font-semibold hover:bg-[#0f5f54] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 pb-4" aria-label="Mobile navigation">
          <ul className="list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-gray-700 font-semibold hover:text-[#137868] border-b border-gray-50 last:border-0"
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
        </nav>
      )}
    </header>
  );
}
