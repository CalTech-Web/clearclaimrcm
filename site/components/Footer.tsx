import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Mission Statement", href: "/mission-statement/" },
  { label: "Services", href: "/services/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logos/Logo.png"
              alt="Clear Claim RCM Logo"
              width={160}
              height={60}
              className="object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-400 mt-4">
              Helping Providers Get Paid, Fully, Ethically, and On Time.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              U.S.-based full-cycle medical billing and revenue cycle management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-semibold text-base mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#137868] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-semibold text-base mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-[#137868] shrink-0" />
                <a href="tel:3034341355" className="hover:text-[#137868] transition-colors">
                  303-434-1355
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-[#137868] shrink-0" />
                <a
                  href="mailto:michelle@clearclaimRCM.com"
                  className="hover:text-[#137868] transition-colors"
                >
                  michelle@clearclaimRCM.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Linkedin size={16} className="text-[#137868] shrink-0" />
                <a
                  href="https://linkedin.com/company/clearclaim-rcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#137868] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2025 Clear Claim RCM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
