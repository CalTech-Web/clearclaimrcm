import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap, Users, FileCheck, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem, ScaleIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Our Mission | ClearClaim RCM Medical Billing",
  description:
    "The mission of ClearClaim RCM: Helping providers get paid, fully, ethically, and on time, through transparent and integrity-driven revenue cycle management.",
  alternates: {
    canonical: "/mission-statement/",
  },
  openGraph: {
    type: "website",
    siteName: "ClearClaim RCM",
    title: "Our Mission | ClearClaim RCM Medical Billing",
    description:
      "The mission of ClearClaim RCM: Helping providers get paid, fully, ethically, and on time, through transparent and integrity-driven revenue cycle management.",
    url: "https://clearclaimrcm.com/mission-statement/",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "ClearClaim RCM Mission Statement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Mission | ClearClaim RCM Medical Billing",
    description:
      "The mission of ClearClaim RCM: Helping providers get paid, fully, ethically, and on time, through transparent and integrity-driven revenue cycle management.",
    images: ["/gallery/02.jpg"],
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
      <section className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] pt-36 sm:pt-40 pb-24 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/02.jpg"
            alt="Medical billing professionals at ClearClaim RCM"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-4">
              Our Purpose
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Mission Statement
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Providers lose money in ways they rarely see. Denials left
              unchallenged. Claims that age out. Codes that miss by one digit.
              This is what we exist to stop.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission statement hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn delay={0.1}>
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-6">
              Why We Exist
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Helping Providers Get Paid, Fully, Ethically, and On Time.
            </h2>
            <div className="w-20 h-1 bg-[#137868] mx-auto rounded-full mb-8" />
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
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
          </FadeIn>
        </div>
      </section>

      {/* Visual break */}
      <section className="py-0">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src="/products/28.png"
            alt="Medical billing professionals collaborating on revenue cycle management solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#80010A]/80 to-[#6a0108]/80 flex items-center justify-center">
            <ScaleIn>
              <blockquote className="max-w-3xl px-8 text-center text-white text-xl sm:text-2xl font-semibold italic leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                &ldquo;I offer more than billing services. I help you understand
                your revenue cycle. I&rsquo;ll show you where every dollar is
                going and make sure you&rsquo;re getting the maximum reimbursement
                for the hard work you put in every day.&rdquo;
                <footer className="mt-4 text-base font-normal text-white/80 not-italic">
                  Michelle Recek, Founder
                </footer>
              </blockquote>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute -right-32 top-1/3 w-[500px] h-[500px] bg-[#137868]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <FadeIn delay={0.1}>
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                The Principles Behind Our Work
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Six Pillars of Our Mission
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </FadeIn>
          </div>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <article className="relative h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#137868]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#137868] to-[#1a9e88] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-[#137868]/10 rounded-xl group-hover:bg-[#137868] transition-all duration-300">
                    <p.icon size={26} className="text-[#137868] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#137868] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Commitment section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left" className="relative w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#137868]/10 to-[#F15200]/10 rounded-3xl blur-xl pointer-events-none" />
                <Image
                  src="/products/25.png"
                  alt="Medical claim payment received confirming successful revenue cycle management"
                  width={540}
                  height={480}
                  className="relative rounded-2xl object-cover w-full h-auto shadow-lg"
                />
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div>
                <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                  Our Commitment to You
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  What Accountability Actually Looks Like
                </h2>
                <div className="w-16 h-1 bg-[#137868] rounded-full mb-6" />
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
                  The free audit is where we start. Come in, let{" "}
                  <Link href="/about-us/" className="text-[#137868] hover:underline font-medium">
                    Michelle Recek
                  </Link>{" "}
                  review what you have, and see what we find. No obligation. If
                  your current setup is working, she will say so.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#137868] text-white font-semibold hover:bg-[#0f5f54] hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Request a Free Audit
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/services/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#137868] text-[#137868] font-semibold hover:bg-[#137868] hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-[#137868] via-[#0f5f54] to-[#137868] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Find Out Where the Money Is Going
            </h2>
            <div className="w-16 h-1 bg-white/40 mx-auto rounded-full mb-6" />
            <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Let us show you what billing that actually works looks like. Start
              with a free audit. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#137868] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services/"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#137868] hover:scale-105 transition-all duration-300 text-center"
              >
                View Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
