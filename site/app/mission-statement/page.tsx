import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap, Users, FileCheck, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission | Clear Claim RCM Medical Billing",
  description:
    "The mission of Clear Claim RCM: Helping providers get paid, fully, ethically, and on time, through transparent and integrity-driven revenue cycle management.",
  alternates: {
    canonical: "/mission-statement/",
  },
};

const pillars: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "Specialists, Not Generalists",
    desc: "We do not do payroll. We do not do bookkeeping. We do medical billing and revenue cycle management, full stop. Every person on our team, every process we run, every dollar of attention we give goes toward one thing.",
  },
  {
    icon: Eye,
    title: "Transparency First",
    desc: "You get a monthly report showing exactly what was submitted, what was paid, what was denied, and what is still outstanding. No vague summaries. If there is a problem with your AR, you will see it before it becomes a cash flow problem.",
  },
  {
    icon: Zap,
    title: "Fighter Mentality",
    desc: "A denied claim is not a closed claim. We pull the reason code, fix the issue, and resubmit or appeal. We track every denial through resolution. Nothing gets written off without a fight.",
  },
  {
    icon: Users,
    title: "Partnership, Not Vendor",
    desc: "We are not a ticket queue. When something changes with your payer mix or your volumes shift, we adjust. Your financial health is something we monitor ongoing, not something we revisit when you call.",
  },
  {
    icon: FileCheck,
    title: "Clean Claims as the Foundation",
    desc: "The fastest way to get paid is to submit a clean claim the first time. AAPC-compliant coding and pre-submission scrubbing mean fewer rejections, fewer resubmissions, and faster cash in your account.",
  },
  {
    icon: Heart,
    title: "Provider-Centric Outcomes",
    desc: "Every process we run is designed so you spend less time on billing. That is the measure. Not just claims submitted, but time you get back for patient care.",
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
          <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
            Providers lose money in ways they rarely see. Denials left
            unchallenged. Claims that age out. Codes that miss by one digit.
            This is what we exist to stop.
          </p>
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
            Most independent providers are not losing money because of bad
            medicine. They are losing it because a denial sat unanswered, a
            code was slightly off, or a claim aged out before anyone noticed.
            ClearClaim RCM was built to close those gaps.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            When billing is done right, providers stop thinking about billing.
            That is the goal. Get paid fully, get paid on time, and have the
            reports to prove it.
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
                  <p.icon size={28} className="text-[#137868]" />
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
                What Accountability Actually Looks Like
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Every month you get a report you can read. One point of contact
                who knows your account. A billing team that tells you about a
                problem before your accountant does. No AR spike at 90 days
                with a shrug. No denial write-offs with a vague explanation.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                When a claim comes back denied, we do not sit on it. We pull
                the reason code, fix the problem, and send it back. When your
                payer mix shifts or volumes change, we adjust before you have
                to ask.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                The free audit is where we start. Come in, let Michelle review
                what you have, and see what we find. No obligation. If your
                current setup is working, she will say so.
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
            Find Out Where the Money Is Going
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Let us show you what billing that actually works looks like. Start
            with a free audit. No obligation.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#137868] font-semibold text-base hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
