import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Eye, Shield, Zap, Users, type LucideIcon } from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem, ScaleIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "About ClearClaim RCM | Medical Billing Experts",
  description:
    "Learn about ClearClaim RCM, founded by 20-year healthcare veteran Michelle Recek. AAPC-certified medical billing and revenue cycle management.",
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    type: "website",
    siteName: "ClearClaim RCM",
    title: "About ClearClaim RCM | Medical Billing Experts",
    description:
      "Learn about ClearClaim RCM, founded by 20-year healthcare veteran Michelle Recek. AAPC-certified medical billing and revenue cycle management.",
    url: "https://clearclaimrcm.com/about-us/",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "ClearClaim RCM - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ClearClaim RCM | Medical Billing Experts",
    description:
      "Learn about ClearClaim RCM, founded by 20-year healthcare veteran Michelle Recek. AAPC-certified medical billing and revenue cycle management.",
    images: ["/gallery/02.jpg"],
  },
};

const career = [
  "Vice President, Insurance Company (payer-side operations)",
  "Business Office Manager, Columbine Health Plan (2 locations)",
  "Revenue Cycle Specialist, Denver Health Hospital",
  "Medical Billing Supervisor",
  "Endoscopy Center Management, Rocky Mountain Gastroenterology",
  "Revenue Cycle, Red Rock Recovery Center",
];

const values: { title: string; icon: LucideIcon; desc: string; color: string }[] = [
  {
    title: "Transparency",
    icon: Eye,
    desc: "Most billing reports tell you what happened after it is too late to change anything. Ours show the full picture every month, collections, denials, AR trends, so you can make decisions with real data before problems compound.",
    color: "#137868",
  },
  {
    title: "Integrity",
    icon: Shield,
    desc: "Every claim we submit follows AAPC-certified standards. HIPAA compliance is not a checkbox here, it is the floor. We do not cut corners because your license is on the line along with ours.",
    color: "#2563eb",
  },
  {
    title: "Fighter Mentality",
    icon: Zap,
    desc: "When a payer denies a claim, we do not move on. We pull the EOB, find the reason, fix the problem, and send it back. Most practices lose thousands a year to denials that never got challenged.",
    color: "#F15200",
  },
  {
    title: "Partnership",
    icon: Users,
    desc: "You should not need to chase your billing company for updates. We report proactively, flag problems before they compound, and treat your financial health as an ongoing responsibility.",
    color: "#7c3aed",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] pt-[219px] sm:pt-[235px] pb-[146px] sm:pb-[162px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/about-hero.jpg"
            alt="Medical billing professionals at ClearClaim RCM"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About ClearClaim RCM
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              ClearClaim RCM launched in 2025, but Michelle Recek&rsquo;s 20 years
              in healthcare billing, credentialing, and payer operations had been
              building to it long before that.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { label: "Medical Claim Coding", color: "bg-teal-100 text-teal-700" },
                { label: "Charge Entry", color: "bg-blue-100 text-blue-700" },
                { label: "Claim Submission", color: "bg-violet-100 text-violet-700" },
                { label: "Payment Posting", color: "bg-amber-100 text-amber-700" },
                { label: "Denial & Appeals", color: "bg-rose-100 text-rose-700" },
                { label: "Monthly Reporting", color: "bg-emerald-100 text-emerald-700" },
              ].map((svc) => (
                <Link
                  key={svc.label}
                  href="/services/"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200 ${svc.color}`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
                  </span>
                  {svc.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder bio */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute -right-32 top-1/3 w-[500px] h-[500px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SlideIn direction="left">
              <div className="relative sticky top-28">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#137868]/10 to-[#F15200]/10 rounded-3xl blur-xl pointer-events-none" />
                <Image
                  src="/team/michelle-recek.png"
                  alt="Michelle Recek, Founder of ClearClaim RCM"
                  width={500}
                  height={560}
                  className="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#137868]/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#F15200]/10 rounded-2xl -z-10" />
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div>
                <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                  Meet the Founder
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Michelle Recek
                </h2>
                <div className="w-16 h-1 bg-[#137868] rounded-full mb-4" />
                <p className="text-[#137868] font-semibold text-base mb-6">
                  Founder and Director of Revenue Cycle Operations
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Michelle has spent 20 years inside healthcare revenue cycles,
                  from supervising billing teams to running two locations as a
                  Business Office Manager at Columbine Health Plan to serving as
                  VP at an insurance company. That last role changed how she sees
                  billing. She watched how payers evaluate claims, what reasons
                  get used to deny them, and where providers leave money behind.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  She founded ClearClaim RCM because she had seen enough.
                  Independent practices were losing reimbursements not from bad
                  medicine but from bad billing. Unchallenged denials. Codes that
                  were close but not right. Claims that aged out because nobody
                  followed up. She built this to fix that.
                </p>
                <FadeIn delay={0.3}>
                  <blockquote className="bg-gray-50 border-l-4 border-[#137868] pl-5 pr-5 py-4 rounded-r-xl shadow-sm italic text-gray-700 text-base leading-relaxed mb-8">
                    &ldquo;I offer more than billing services. I help you understand
                    your revenue cycle. I&rsquo;ll show you where every dollar is
                    going and make sure you&rsquo;re getting the maximum
                    reimbursement for the hard work you put in every day.&rdquo;
                  </blockquote>
                </FadeIn>

                <h3
                  className="text-lg font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Career Highlights
                </h3>
                <ul className="space-y-3 mb-10">
                  {career.map((item, index) => (
                    <FadeIn key={item} delay={index * 0.08}>
                      <li className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                        <CheckCircle size={18} className="text-[#137868] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-[#137868]/10 text-[#137868] rounded-full text-sm font-semibold">
                    AAPC Certified
                  </span>
                  <span className="px-4 py-2 bg-[#137868]/10 text-[#137868] rounded-full text-sm font-semibold">
                    HIPAA Compliant
                  </span>
                  <span className="px-4 py-2 bg-[#137868]/10 text-[#137868] rounded-full text-sm font-semibold">
                    20+ Years Experience
                  </span>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Core Values
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                What Drives Everything We Do
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <article
                  className="relative h-full rounded-2xl p-8 border border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col"
                  style={{ background: `linear-gradient(135deg, ${v.color}12 0%, ${v.color}08 50%, ${v.color}18 100%)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${v.color}20 0%, ${v.color}10 50%, ${v.color}25 100%)` }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${v.color}, ${v.color}99)` }} />
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ background: v.color }} />
                  <div className="relative flex flex-col flex-1">
                    <div
                      className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl transition-all duration-300"
                      style={{ background: `${v.color}18` }}
                    >
                      <v.icon size={26} style={{ color: v.color }} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed flex-1">{v.desc}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Industries served */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                  Who We Serve
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Built for Independent Providers and Growing Practices
                </h2>
                <div className="w-16 h-1 bg-[#137868] rounded-full mb-6" />
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  Independent practices often cannot justify a full in-house
                  billing team, and they should not have to. ClearClaim RCM was
                  built for exactly that gap. Michelle brings direct experience in
                  gastroenterology, behavioral health, and hospital-based revenue
                  cycles, so the learning curve is short regardless of your
                  specialty. Our{" "}
                  <Link href="/services/" className="text-[#137868] hover:underline font-medium">
                    full-cycle medical billing and revenue cycle management services
                  </Link>{" "}
                  cover every step from coding to collections.
                </p>
                <ul className="space-y-3">
                  {[
                    "Independent Healthcare Providers",
                    "Small to Mid-Sized Clinics",
                    "Group Practices",
                    "Office Managers and Practice Administrators",
                    "Endoscopy and Gastroenterology Practices",
                    "Behavioral Health and Recovery Centers",
                  ].map((item, index) => (
                    <FadeIn key={item} delay={index * 0.08}>
                      <li className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                        <CheckCircle size={18} className="text-[#137868] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#137868]/10 to-[#F15200]/10 rounded-3xl blur-xl pointer-events-none" />
                <Image
                  src="/products/29.png"
                  alt="Independent healthcare providers and clinical staff served by ClearClaim RCM"
                  width={540}
                  height={480}
                  className="relative rounded-2xl object-cover w-full h-auto shadow-lg"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/cta-bg.jpg"
            alt="Healthcare revenue cycle management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#80010A]/90 via-[#6a0108]/85 to-[#80010A]/90" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-white/60 font-semibold text-sm uppercase tracking-widest mb-4">
              Ready to Get Started
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Work With a Billing Partner Who Fights for You
            </h2>
            <div className="w-20 h-1 bg-white/40 mx-auto rounded-full mb-6" />
            <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Schedule a free consultation or request your billing audit. No
              obligation, and no pitch if your current setup is working.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-[pulse-glow-maroon_3s_ease-in-out_infinite]"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#80010A] hover:scale-105 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
