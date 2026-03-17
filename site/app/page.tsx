import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, ChevronDown } from "lucide-react";

const services = [
  {
    title: "Medical Claim Coding",
    icon: "/products/claim-1.png",
    desc: "AAPC-compliant coding of diagnoses, procedures, and treatments into standardized ICD, CPT, and HCPCS codes for maximum reimbursement.",
  },
  {
    title: "Charge Entry",
    icon: "/products/accountant-1.png",
    desc: "Accurate input of patient and billing information into your practice management system so every claim is built correctly before submission.",
  },
  {
    title: "Claim Submission",
    icon: "/products/statements.png",
    desc: "Timely electronic submission of clean claims to insurance companies, reducing rejections and accelerating payment.",
  },
  {
    title: "Payment Posting",
    icon: "/products/paid-content.png",
    desc: "Recording of insurance and patient payments with full documentation of allowed amounts, patient responsibility, denials, and adjustments.",
  },
  {
    title: "Denial and Appeals Management",
    icon: "/products/search.png",
    desc: "Aggressive review, correction, resubmission, and appeal of every denied or underpaid claim so you recover every dollar earned.",
  },
  {
    title: "End-of-Month Reporting",
    icon: "/products/business-report.png",
    desc: "Transparent financial reports showing collections, denials, AR trends, and practice performance so you can make informed decisions.",
  },
];

const differentiators = [
  "Founded by a 20-year healthcare veteran with payer-side experience",
  "AAPC-certified coding for maximum compliance and reimbursement accuracy",
  "Every claim tracked individually from submission to reimbursement",
  "Transparent reporting so you see exactly where every dollar goes",
  "Free billing audit with no obligation to switch",
  "U.S.-based team serving practices of all sizes nationwide",
  "HIPAA-compliant and secure throughout every process",
];

const testimonials = [
  {
    quote:
      "ClearClaim RCM has transformed our billing process, maximizing our reimbursements with clean, efficient claims every time.",
    name: "Dr. Smith",
    role: "Provider",
  },
  {
    quote:
      "Their team diligently reviews and follows up on denials, ensuring we get every dollar we've earned.",
    name: "Janet Lee",
    role: "Provider",
  },
];

const process = [
  {
    phase: "Step 1",
    title: "Free Billing Audit",
    desc: "Michelle reviews your current billing setup at no charge and identifies gaps or improvement opportunities.",
    img: "/products/22.png",
  },
  {
    phase: "Step 2",
    title: "Practice Setup",
    desc: "ClearClaim RCM integrates with your practice management system and establishes billing workflows from day one.",
    img: "/products/28.png",
  },
  {
    phase: "Step 3",
    title: "Clean Claim Submission",
    desc: "Every claim is coded to AAPC standards and submitted electronically for timely, error-free reimbursement.",
    img: "/products/23.png",
  },
  {
    phase: "Step 4",
    title: "Denial Management",
    desc: "Any denied or underpaid claims are reviewed, corrected, and aggressively appealed to recover full payment.",
    img: "/products/24.png",
  },
  {
    phase: "Step 5",
    title: "Reporting and Review",
    desc: "End-of-month reports give providers full visibility into collections, AR trends, and practice financial performance.",
    img: "/products/26.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/02.jpg"
            alt="Medical billing professionals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#137868]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p
              className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Revenue Cycle Specialists Since 2025
            </p>
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Helping Providers Get Paid, Fully, Ethically, and On Time.
            </h1>
            <p
              className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ClearClaim RCM is a U.S.-based full-cycle medical billing company
              founded by a 20-year healthcare veteran. We help independent
              providers and small to mid-sized clinics get paid faster, reduce
              denials, and focus on patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us/"
                className="px-8 py-4 rounded-full bg-[#137868] text-white font-semibold text-base hover:bg-[#0f5f54] transition-colors text-center"
              >
                Get Started
              </Link>
              <a
                href="https://calendly.com/michelle-clearclaimrcm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#137868] transition-colors text-center"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#80010A] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>20+</p>
              <p className="text-sm mt-1 text-white/80">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>AAPC</p>
              <p className="text-sm mt-1 text-white/80">Certified Coding</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>HIPAA</p>
              <p className="text-sm mt-1 text-white/80">Compliant</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Free</p>
              <p className="text-sm mt-1 text-white/80">Billing Audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Full-Cycle Revenue Cycle Management
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              From coding to collections, we handle every step of your revenue
              cycle so you can focus on what matters most: patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-[#137868]/10 rounded-xl">
                  <Image src={s.icon} alt={s.title} width={36} height={36} className="object-contain" />
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#137868] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#137868] text-white font-semibold hover:bg-[#0f5f54] transition-colors"
            >
              Explore Full Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Why Clear Claim RCM
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Your Revenue Cycle Partner, Not Just a Billing Service
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                With payer-side experience at the VP level and 20 years across
                healthcare operations, ClearClaim RCM brings an insider advantage
                that most billing companies simply cannot offer.
              </p>
              <ul className="space-y-4">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#137868] shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/about-us/"
                  className="px-6 py-3 rounded-full border-2 border-[#137868] text-[#137868] font-semibold text-sm hover:bg-[#137868] hover:text-white transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/products/21.png"
                alt="Healthcare professional"
                width={540}
                height={600}
                className="rounded-2xl object-cover w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block">
                <p className="text-[#137868] font-bold text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>Free Audit</p>
                <p className="text-gray-600 text-sm mt-1">No obligation review of your current billing performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              A Clear, Proven Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-[#137868] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {i + 1}
                </div>
                <h3
                  className="font-semibold text-gray-900 text-base mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#137868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              What Providers Say
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Trusted by Independent Practices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#F15200] text-[#F15200]" />
                  ))}
                </div>
                <p className="text-white text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                  <p className="text-white/70 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder snippet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/team/michelle-recek.png"
                  alt="Michelle Recek, Founder"
                  width={380}
                  height={420}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Meet Our Founder
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Michelle Recek
              </h2>
              <p className="text-[#137868] font-semibold text-base mb-6">
                Founder and Director of Revenue Cycle Operations
              </p>
              <blockquote className="border-l-4 border-[#137868] pl-5 italic text-gray-700 text-base leading-relaxed mb-6">
                &ldquo;I offer more than billing services. I help you understand
                your revenue cycle. I&rsquo;ll show you where every dollar is
                going and make sure you&rsquo;re getting the maximum
                reimbursement for the hard work you put in every day.&rdquo;
              </blockquote>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                With over 20 years of experience in healthcare operations,
                credentialing, and revenue cycle management, Michelle brings a
                unique payer-side perspective gained from her time as Vice
                President of an insurance company, giving her an insider
                understanding of how claims are processed, evaluated, and denied.
              </p>
              <Link
                href="/about-us/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#137868] text-white font-semibold hover:bg-[#0f5f54] transition-colors"
              >
                Learn More About Michelle
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-[#80010A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Maximize Your Reimbursements?
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Start with a free, no-obligation billing audit. If your current team
            is performing well, Michelle will tell you. If there are gaps, she
            will show you exactly where improvement is possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 transition-colors"
            >
              Request a Free Audit
            </Link>
            <a
              href="https://calendly.com/michelle-clearclaimrcm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#80010A] transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
