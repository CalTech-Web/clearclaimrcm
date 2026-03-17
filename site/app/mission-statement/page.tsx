import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission Statement | Clear Claim RCM",
  description:
    "The mission of Clear Claim RCM: Helping providers get paid, fully, ethically, and on time, through transparent and integrity-driven revenue cycle management.",
};

const pillars = [
  {
    icon: "/products/claim-1.png",
    title: "Specialists, Not Generalists",
    desc: "ClearClaim RCM exists solely for medical billing and revenue cycle management. We are not a generalist firm that handles billing on the side. Every process, every team member, and every tool is focused on one thing: maximizing your reimbursements.",
  },
  {
    icon: "/products/business-report.png",
    title: "Transparency First",
    desc: "Providers deserve to know exactly where every dollar in their revenue cycle is going. We provide clear monthly reports, open communication, and honest assessments, so there are never any surprises.",
  },
  {
    icon: "/products/search.png",
    title: "Fighter Mentality",
    desc: "We fight for every dollar you have earned. No denial goes unchallenged. No underpayment goes unaddressed. Every claim is treated with individual attention from submission through reimbursement.",
  },
  {
    icon: "/products/paid-content.png",
    title: "Partnership, Not Vendor",
    desc: "We are your revenue cycle partner, not just another vendor in your stack. Your financial health is our ongoing responsibility, and we are with you at every stage of your practice's growth.",
  },
  {
    icon: "/products/accountant-1.png",
    title: "Clean Claims as the Foundation",
    desc: "AAPC-compliant coding and error-free first submissions are the bedrock of everything we do. Fewer rejections mean faster payments and a healthier cash flow for your practice.",
  },
  {
    icon: "/products/statements.png",
    title: "Provider-Centric Outcomes",
    desc: "Everything we do is oriented around one goal: freeing you to focus on patient care, not paperwork. The less time you spend on billing, the more time you have for what matters most.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#137868] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Purpose
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Mission Statement
          </h1>
        </div>
      </section>

      {/* Mission statement hero */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-6">
            Why We Exist
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Helping Providers Get Paid,
            <br />
            <span className="text-[#137868]">Fully, Ethically, and On Time.</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At ClearClaim RCM, our mission is to be the revenue cycle partner
            that independent providers and small to mid-sized clinics deserve.
            We combine payer-side expertise, AAPC-certified coding standards,
            and an unwavering commitment to transparency to ensure that every
            dollar you earn finds its way into your account.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            We believe that when billing is done right, providers can focus on
            patients. When denials are fought aggressively, practices grow. And
            when revenue cycle management is built on trust and integrity, the
            entire healthcare ecosystem is stronger.
          </p>
        </div>
      </section>

      {/* Visual break */}
      <section className="py-0">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src="/products/28.png"
            alt="Healthcare professionals collaborating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#80010A]/75 flex items-center justify-center">
            <blockquote className="max-w-3xl px-8 text-center text-white text-xl sm:text-2xl font-semibold italic leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              &ldquo;I offer more than billing services. I help you understand
              your revenue cycle. I&rsquo;ll show you where every dollar is
              going and make sure you&rsquo;re getting the maximum reimbursement
              for the hard work you put in every day.&rdquo;
              <footer className="mt-4 text-base font-normal text-white/80 not-italic">
                Michelle Recek, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              The Principles Behind Our Work
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Six Pillars of Our Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-[#137868]/10 rounded-xl">
                  <Image src={p.icon} alt={p.title} width={36} height={36} className="object-contain" />
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/products/25.png"
                alt="Payment received confirmation"
                width={540}
                height={480}
                className="rounded-2xl object-cover w-full"
              />
            </div>
            <div>
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Commitment to You
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Your Practice Deserves a Billing Partner Who Gets Results
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                ClearClaim RCM was founded because too many independent providers
                were leaving money on the table, not because of poor patient care,
                but because of inefficient billing, unchallenged denials, and a
                lack of visibility into their revenue cycle.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Our commitment is simple: we will manage your revenue cycle with
                the same level of attention and dedication that you bring to your
                patients every day. Every claim matters. Every dollar matters.
                Every provider we serve matters.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                We start with a free, no-obligation billing audit so you can see
                exactly what we offer before making any commitment. That is the
                transparency we stand for.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#137868] text-white font-semibold hover:bg-[#0f5f54] transition-colors"
                >
                  Request a Free Audit
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#137868] text-[#137868] font-semibold hover:bg-[#137868] hover:text-white transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#137868]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Join Practices That Trust ClearClaim RCM
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Let us show you what transparent, ethical, and results-driven
            revenue cycle management looks like.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#137868] font-semibold text-base hover:bg-gray-100 transition-colors"
          >
            Get Started Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
