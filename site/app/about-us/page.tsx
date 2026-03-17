import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Eye, Shield, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Clear Claim RCM",
  description:
    "Learn about Clear Claim RCM, founded by 20-year healthcare veteran Michelle Recek. AAPC-certified medical billing and revenue cycle management.",
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
    desc: "Providers deserve full visibility into where every dollar in their revenue cycle is going. We provide clear, honest reporting on every claim.",
  },
  {
    title: "Integrity",
    icon: Shield,
    desc: "We follow AAPC-certified standards and HIPAA-compliant processes. Every decision is made with ethics and accuracy at the forefront.",
  },
  {
    title: "Fighter Mentality",
    icon: Zap,
    desc: "We fight for every dollar you have earned. No denied claim goes unchallenged. No underpayment goes unaddressed.",
  },
  {
    title: "Partnership",
    icon: Users,
    desc: "We are your revenue cycle partner, not just a billing vendor. Your financial health is our ongoing responsibility.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#137868] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About Clear Claim RCM
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
            Founded in 2025 by a 20-year healthcare veteran, ClearClaim RCM
            exists to give independent providers and small to mid-sized clinics
            a billing partner they can trust, one that fights for every dollar
            they earn.
          </p>
        </div>
      </section>

      {/* Founder bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Image
                src="/team/michelle-recek.png"
                alt="Michelle Recek, Founder of Clear Claim RCM"
                width={500}
                height={560}
                className="rounded-2xl object-cover w-full"
              />
            </div>
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
                With over 20 years of experience in healthcare operations,
                credentialing, and revenue cycle management, Michelle founded
                ClearClaim RCM to help providers streamline their billing and
                get paid faster, with full transparency and integrity.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Her background includes managing endoscopy centers and serving
                as Vice President of an insurance company, where she developed
                a deep understanding of payer processes, claim workflows, and
                contract strategies. That payer-side experience gives ClearClaim
                RCM a unique advantage: we know exactly how insurers evaluate
                and deny claims, and we use that knowledge to advocate for our
                clients at every step.
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
              <ul className="space-y-3 mb-8">
                {career.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#137868] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                ClearClaim RCM was built specifically for practices that need a
                dedicated billing partner rather than an in-house team. We serve
                a wide range of specialties and focus on practices that want
                transparent, high-performance revenue cycle management.
              </p>
              <ul className="space-y-3">
                {[
                  "Independent Healthcare Providers",
                  "Small to Mid-Sized Clinics",
                  "Group Practices",
                  "Office Managers and Practice Administrators",
                  "Endoscopy and Gastroenterology Practices",
                  "Behavioral Health and Recovery Centers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#137868] shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/products/29.png"
                alt="Healthcare team"
                width={540}
                height={480}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#80010A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Work With a Billing Partner Who Fights for You
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Schedule a free consultation or request your no-obligation billing
            audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://calendly.com/michelle-clearclaimrcm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#80010A] transition-colors"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
