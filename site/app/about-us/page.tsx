import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Eye, Shield, Zap, Users } from "lucide-react";
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

const values = [
  {
    title: "Transparency",
    icon: Eye,
    desc: "Most billing reports tell you what happened after it is too late to change anything. Ours show the full picture every month, collections, denials, AR trends, so you can make decisions with real data before problems compound.",
  },
  {
    title: "Integrity",
    icon: Shield,
    desc: "Every claim we submit follows AAPC-certified standards. HIPAA compliance is not a checkbox here, it is the floor. We do not cut corners because your license is on the line along with ours.",
  },
  {
    title: "Fighter Mentality",
    icon: Zap,
    desc: "When a payer denies a claim, we do not move on. We pull the EOB, find the reason, fix the problem, and send it back. Most practices lose thousands a year to denials that never got challenged.",
  },
  {
    title: "Partnership",
    icon: Users,
    desc: "You should not need to chase your billing company for updates. We report proactively, flag problems before they compound, and treat your financial health as an ongoing responsibility.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/02.jpg"
            alt="Medical billing professionals at ClearClaim RCM"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About ClearClaim RCM
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
              ClearClaim RCM launched in 2025, but Michelle Recek&rsquo;s 20 years
              in healthcare billing, credentialing, and payer operations had been
              building to it long before that.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SlideIn direction="left">
              <div>
                <Image
                  src="/team/michelle-recek.png"
                  alt="Michelle Recek, Founder of ClearClaim RCM"
                  width={500}
                  height={560}
                  className="rounded-2xl object-cover w-full aspect-[4/5]"
                />
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
                <blockquote className="border-l-4 border-[#137868] pl-5 italic text-gray-700 text-base leading-relaxed mb-8">
                  &ldquo;I offer more than billing services. I help you understand
                  your revenue cycle. I&rsquo;ll show you where every dollar is
                  going and make sure you&rsquo;re getting the maximum
                  reimbursement for the hard work you put in every day.&rdquo;
                </blockquote>

                <h3
                  className="text-lg font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Career Highlights
                </h3>
                <ul className="space-y-4 mb-10">
                  {career.map((item, index) => (
                    <FadeIn key={item} delay={index * 0.08}>
                      <li className="flex items-start gap-3">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Core Values
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                What Drives Everything We Do
              </h2>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <article className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[#137868]/10 rounded-xl">
                    <v.icon size={24} className="text-[#137868]" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-[#137868] mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">{v.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                  Who We Serve
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Built for Independent Providers and Growing Practices
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
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
                      <li className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-[#137868] shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="relative w-full">
                <Image
                  src="/products/29.png"
                  alt="Independent healthcare providers and clinical staff served by ClearClaim RCM"
                  width={540}
                  height={480}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#80010A] to-[#6a0108]">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Work With a Billing Partner Who Fights for You
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Schedule a free consultation or request your billing audit. No
              obligation, and no pitch if your current setup is working.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#80010A] hover:scale-105 hover:shadow-lg transition-all duration-300"
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
