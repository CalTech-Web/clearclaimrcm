import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, ChevronDown, Clock, BadgeCheck, Shield, Gift, ClipboardList, FilePlus, Send, CreditCard, RotateCcw, BarChart2, type LucideIcon } from "lucide-react";

const services: { title: string; icon: LucideIcon; desc: string }[] = [
  {
    title: "Medical Claim Coding",
    icon: ClipboardList,
    desc: "Every dollar starts with a code. If it is wrong or imprecise, the claim gets denied or underpaid and most practices never know why. We assign ICD, CPT, and HCPCS codes to AAPC-certified standards, specialty by specialty.",
  },
  {
    title: "Charge Entry",
    icon: FilePlus,
    desc: "A clean claim starts before the claim is even built. Patient demographics, insurance details, and service data all have to be entered correctly, or the claim goes out with a flaw baked in. We verify before we submit.",
  },
  {
    title: "Claim Submission",
    icon: Send,
    desc: "Claims go out electronically to all major payers, with paper submission where required. Before they go, every claim gets scrubbed for errors. Timely filing windows are tracked. Nothing ages out.",
  },
  {
    title: "Payment Posting",
    icon: CreditCard,
    desc: "Every payment that comes in gets posted with full detail, allowed amounts, patient responsibility, adjustments, and denials. That level of documentation is how you catch underpayments before they become a pattern.",
  },
  {
    title: "Denial and Appeals Management",
    icon: RotateCcw,
    desc: "A denied claim is not a closed claim. We find the reason code, fix the issue, and resubmit or appeal. Every denial is tracked through resolution. Nothing gets written off because it was inconvenient to fight.",
  },
  {
    title: "End-of-Month Reporting",
    icon: BarChart2,
    desc: "At the end of every month, you get a report showing what came in, what was denied, how your AR is aging, and how the practice is performing financially. No black box. You see the full picture.",
  },
];

const differentiators = [
  "Founded by a 20-year healthcare veteran with payer-side experience",
  "AAPC-certified coding, specialty by specialty, no generic templates",
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
    role: "Family Medicine, Colorado",
  },
  {
    quote:
      "Their team diligently reviews and follows up on denials, ensuring we get every dollar we've earned.",
    name: "Janet Lee",
    role: "Office Manager, Behavioral Health Clinic",
  },
];

const process = [
  {
    phase: "Step 1",
    title: "Free Billing Audit",
    desc: "Michelle reviews your denial rate, AR aging, and coding accuracy at no cost. Honest feedback either way.",
    img: "/products/22.png",
  },
  {
    phase: "Step 2",
    title: "Practice Setup",
    desc: "We connect to your practice management system, set up the workflows, and get everything running before your first claim goes out.",
    img: "/products/28.png",
  },
  {
    phase: "Step 3",
    title: "Clean Claim Submission",
    desc: "Every claim is coded to AAPC standards and scrubbed before it goes out. Timely filing windows are tracked. Nothing ages out.",
    img: "/products/23.png",
  },
  {
    phase: "Step 4",
    title: "Denial Management",
    desc: "Every denied or underpaid claim gets a root cause review, a fix, and a resubmission or formal appeal. Nothing gets written off.",
    img: "/products/24.png",
  },
  {
    phase: "Step 5",
    title: "Reporting and Review",
    desc: "A full financial report lands in your inbox every month. Collections, denials, AR aging, and practice performance in one place.",
    img: "/products/26.png",
  },
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ClearClaim RCM",
    url: "https://clearclaimrcm.com",
    logo: "https://clearclaimrcm.com/logos/Logo.png",
    image: "https://clearclaimrcm.com/gallery/02.jpg",
    description:
      "ClearClaim RCM is a U.S.-based full-cycle medical billing and revenue cycle management company founded by a 20-year healthcare veteran, helping independent providers and small to mid-sized clinics get paid faster.",
    telephone: "+1-303-434-1355",
    email: "michelle@clearclaimRCM.com",
    foundingDate: "2025",
    priceRange: "$$",
    sameAs: ["https://www.linkedin.com/company/clearclaim-rcm"],
    founder: {
      "@type": "Person",
      name: "Michelle Recek",
      jobTitle: "Founder and Director of Revenue Cycle Operations",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ClearClaim RCM",
    url: "https://clearclaimrcm.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/02.jpg"
            alt="Revenue cycle management professionals helping independent healthcare providers get paid"
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
              Most billing services send your claims and disappear. We track
              every single one, fight every denial, and show you exactly where
              the money went. Founded by Michelle Recek, who spent years on the
              payer side before switching to yours.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
            <div className="flex flex-col items-center gap-2 py-2">
              <Clock size={28} className="text-white" />
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>20+</p>
              <p className="text-sm text-white font-medium">Years Experience</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <BadgeCheck size={28} className="text-white" />
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>AAPC</p>
              <p className="text-sm text-white font-medium">Certified Coding</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <Shield size={28} className="text-white" />
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>HIPAA</p>
              <p className="text-sm text-white font-medium">Compliant</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <Gift size={28} className="text-white" />
              <p className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Free</p>
              <p className="text-sm text-white font-medium">Billing Audit</p>
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
              From the first code entered to the last dollar collected, we own
              the whole cycle. Nothing gets lost. Nothing sits.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-[#137868]/10 rounded-xl">
                  <s.icon size={28} className="text-[#137868]" />
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#137868] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </article>
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
                Why ClearClaim RCM
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Your Revenue Cycle Partner, Not Just a Billing Service
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Michelle spent time as a VP at an insurance company. She knows
                exactly how payers evaluate claims and what triggers a denial.
                That is knowledge most billing companies do not have, and it
                changes how we fight for your reimbursements.
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
            <div className="relative pb-10 lg:pb-0">
              <Image
                src="/products/21.png"
                alt="AAPC-certified medical billing specialist reviewing revenue cycle claims"
                width={540}
                height={600}
                className="rounded-2xl object-cover w-full"
              />
              <div className="mt-6 lg:absolute lg:-bottom-6 lg:left-6 lg:right-6 bg-white rounded-2xl shadow-xl p-6">
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
              Five Steps. No Shortcuts.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {process.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#137868] text-white flex items-center justify-center font-bold text-lg mb-5 shrink-0 ring-4 ring-white shadow-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
              <article key={t.name} className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#F15200] text-[#F15200]" />
                  ))}
                </div>
                <blockquote className="text-white text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="text-white font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                  <p className="text-white/70 text-sm">{t.role}</p>
                </footer>
              </article>
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
                Michelle spent two decades in healthcare operations. Before
                founding ClearClaim RCM, she served as VP of an insurance
                company, which means she knows how payers process claims, what
                triggers a denial, and how to push back effectively. That
                background does not come standard with a billing service.
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
            Get Paid What You&rsquo;ve Already Earned
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Start with a free audit. No pitch, no pressure. If your current
            team is doing fine, Michelle will tell you so. If there are gaps,
            you will see exactly where the money is slipping out.
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
