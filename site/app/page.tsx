import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, ChevronDown, Clock, BadgeCheck, Shield, Gift, ClipboardList, FilePlus, Send, CreditCard, RotateCcw, BarChart2, Award, UserCheck, Search, FileText, HeartHandshake, Lock, type LucideIcon } from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/MotionWrappers";

const services: { title: string; icon: LucideIcon; desc: string; color: string }[] = [
  {
    title: "Medical Claim Coding",
    icon: ClipboardList,
    desc: "Every dollar starts with a code. If it is wrong or imprecise, the claim gets denied or underpaid and most practices never know why. We assign ICD, CPT, and HCPCS codes to AAPC-certified standards, specialty by specialty.",
    color: "#137868",
  },
  {
    title: "Charge Entry",
    icon: FilePlus,
    desc: "A clean claim starts before the claim is even built. Patient demographics, insurance details, and service data all have to be entered correctly, or the claim goes out with a flaw baked in. We verify before we submit.",
    color: "#2563eb",
  },
  {
    title: "Claim Submission",
    icon: Send,
    desc: "Claims go out electronically to all major payers, with paper submission where required. Before they go, every claim gets scrubbed for errors. Timely filing windows are tracked. Nothing ages out.",
    color: "#7c3aed",
  },
  {
    title: "Payment Posting",
    icon: CreditCard,
    desc: "Every payment that comes in gets posted with full detail, allowed amounts, patient responsibility, adjustments, and denials. That level of documentation is how you catch underpayments before they become a pattern.",
    color: "#F15200",
  },
  {
    title: "Denial and Appeals Management",
    icon: RotateCcw,
    desc: "A denied claim is not a closed claim. We find the reason code, fix the issue, and resubmit or appeal. Every denial is tracked through resolution. Nothing gets written off because it was inconvenient to fight.",
    color: "#dc2626",
  },
  {
    title: "End-of-Month Reporting",
    icon: BarChart2,
    desc: "At the end of every month, you get a report showing what came in, what was denied, how your AR is aging, and how the practice is performing financially. No black box. You see the full picture.",
    color: "#0891b2",
  },
];

const differentiators: { text: string; icon: LucideIcon }[] = [
  { text: "Founded by a 20-year healthcare veteran with payer-side experience", icon: Award },
  { text: "AAPC-certified coding, specialty by specialty, no generic templates", icon: BadgeCheck },
  { text: "Every claim tracked individually from submission to reimbursement", icon: Search },
  { text: "Transparent reporting so you see exactly where every dollar goes", icon: FileText },
  { text: "Free billing audit with no obligation to switch", icon: Gift },
  { text: "U.S.-based team serving practices of all sizes nationwide", icon: HeartHandshake },
  { text: "HIPAA-compliant and secure throughout every process", icon: Lock },
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

const processSteps = [
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

const stats = [
  { icon: Clock, value: "20+", label: "Years Experience" },
  { icon: BadgeCheck, value: "AAPC", label: "Certified Coding" },
  { icon: Shield, value: "HIPAA", label: "Compliant" },
  { icon: Gift, value: "Free", label: "Billing Audit" },
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
            src="/gallery/hero-bg.jpg"
            alt="Revenue cycle management professionals helping independent healthcare providers get paid"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#137868]/90 via-[#137868]/75 to-[#0f5f54]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[171px] pb-[194px] text-center">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <p
                className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Revenue Cycle Specialists Since 2025
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1
                className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Helping Providers Get Paid, Fully, Ethically, and On Time.
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p
                className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Most billing services send your claims and disappear. We track
                every single one, fight every denial, and show you exactly where
                the money went. Founded by Michelle Recek, who spent years on the
                payer side before switching to yours.
              </p>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us/"
                  className="px-8 py-4 rounded-full bg-[#137868] text-white font-semibold text-base hover:bg-[#0f5f54] hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
                <a
                  href="https://calendly.com/michelle-clearclaimrcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#137868] hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
        {/* Stats marquee */}
        <div className="absolute bottom-14 left-0 right-0 z-10 overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] w-max gap-4">
            {[...stats, ...stats, ...stats].map((stat, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold whitespace-nowrap shrink-0"
              >
                <stat.icon size={16} />
                {stat.value} {stat.label}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/60 animate-bounce z-10">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Services overview */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                What We Do
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Full-Cycle Revenue Cycle Management
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
              <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                From the first code entered to the last dollar collected, we own
                the whole cycle. Nothing gets lost. Nothing sits.
              </p>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <article
                  className="relative rounded-2xl p-8 border border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${s.color}12 0%, ${s.color}08 50%, ${s.color}18 100%)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${s.color}20 0%, ${s.color}10 50%, ${s.color}25 100%)` }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${s.color}, ${s.color}99)` }} />
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ background: s.color }} />
                  <div className="relative">
                    <div
                      className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl transition-all duration-300"
                      style={{ background: `${s.color}18` }}
                    >
                      <s.icon size={28} style={{ color: s.color }} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-300"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#137868] text-white font-semibold hover:bg-[#0f5f54] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Explore Full Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2e28] via-[#137868] to-[#0c2e28]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F15200]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#137868]/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-8">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Why ClearClaim RCM
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Your Revenue Cycle Partner, Not Just a Billing Service
              </h2>
              <div className="w-16 h-1 bg-[#F15200] mx-auto rounded-full mb-6" />
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
                Michelle spent time as a VP at an insurance company. She knows
                exactly how payers evaluate claims and what triggers a denial.
                That is knowledge most billing companies do not have, and it
                changes how we fight for your reimbursements.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            <SlideIn direction="left" className="lg:row-span-2 flex">
              <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[300px]">
                <Image
                  src="/products/21.png"
                  alt="AAPC-certified medical billing specialist reviewing revenue cycle claims"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2e28]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="w-10 h-10 rounded-full bg-[#F15200] flex items-center justify-center shrink-0">
                      <Gift size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Free Audit</p>
                      <p className="text-gray-300 text-sm">No obligation review of your billing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
            <StaggerChildren className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d) => (
                <StaggerItem key={d.text}>
                  <div className="flex items-start gap-4 bg-white/[0.07] backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 group h-full">
                    <div className="w-10 h-10 rounded-lg bg-[#F15200]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F15200]/30 transition-colors duration-300">
                      <d.icon size={20} className="text-[#F15200]" />
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">{d.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/about-us/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#137868] font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#137868_1px,transparent_1px),linear-gradient(to_bottom,#137868_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Five Steps. No Shortcuts.
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </div>
          </FadeIn>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#137868]/0 via-[#137868]/30 to-[#137868]/0 pointer-events-none" />

            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.12}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${i > 0 ? "lg:mt-16" : ""}`}>
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#137868] text-white items-center justify-center font-bold text-lg z-10 ring-4 ring-white shadow-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {i + 1}
                    </div>

                    {/* Image */}
                    <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <Image
                          src={step.img}
                          alt={step.title}
                          width={540}
                          height={360}
                          className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2e28]/60 to-transparent" />
                        <div className="absolute top-4 left-4 lg:hidden w-10 h-10 rounded-full bg-[#137868] text-white flex items-center justify-center font-bold text-sm shadow-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {i + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`mt-6 lg:mt-0 ${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                      <p className="text-[#F15200] font-semibold text-xs uppercase tracking-widest mb-2">{step.phase}</p>
                      <h3
                        className="text-xl font-bold text-gray-900 mb-3"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#137868] to-[#0f5f54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
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
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.2}>
                <article className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
                  <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={18} className="fill-[#F15200] text-[#F15200]" />
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder snippet */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/team/michelle-recek.png"
                  alt="Michelle Recek, Founder"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e28]/95 via-[#0c2e28]/80 to-transparent lg:to-[#0c2e28]/30" />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[500px]">
                {/* Content side */}
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                  <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                    Meet Our Founder
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Michelle Recek
                  </h2>
                  <p className="text-[#F15200] font-semibold text-sm mb-6">
                    Founder and Director of Revenue Cycle Operations
                  </p>

                  <blockquote className="bg-white/10 backdrop-blur-md border-l-4 border-[#F15200] pl-5 pr-5 py-4 rounded-r-xl italic text-white/90 text-base leading-relaxed mb-6">
                    &ldquo;I offer more than billing services. I help you understand
                    your revenue cycle. I&rsquo;ll show you where every dollar is
                    going and make sure you&rsquo;re getting the maximum
                    reimbursement for the hard work you put in every day.&rdquo;
                  </blockquote>

                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    Michelle spent two decades in healthcare operations. Before
                    founding ClearClaim RCM, she served as VP of an insurance
                    company, which means she knows how payers process claims, what
                    triggers a denial, and how to push back effectively. That
                    background does not come standard with a billing service.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <Clock size={16} className="text-[#F15200]" />
                      <span className="text-white text-sm font-medium">20+ Years</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <BadgeCheck size={16} className="text-[#F15200]" />
                      <span className="text-white text-sm font-medium">AAPC Certified</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <Shield size={16} className="text-[#F15200]" />
                      <span className="text-white text-sm font-medium">HIPAA Compliant</span>
                    </div>
                  </div>

                  <Link
                    href="/about-us/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F15200] text-white font-semibold hover:bg-[#d94800] hover:scale-105 hover:shadow-lg transition-all duration-300 w-fit"
                  >
                    Learn More About Michelle
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Right side is the visible photo through the gradient */}
                <div className="hidden lg:block" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA banner */}
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(241,82,0,0.15),transparent_40%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/[0.07] backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16">
            <FadeIn>
              <div className="text-center">
                <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-4">
                  Your Next Step
                </p>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Get Paid What You&rsquo;ve Already Earned
                </h2>
                <div className="w-20 h-1 bg-[#F15200] mx-auto rounded-full mb-6" />
                <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                  Start with a free audit. No pitch, no pressure. If your current
                  team is doing fine, Michelle will tell you so. If there are gaps,
                  you will see exactly where the money is slipping out.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="flex flex-col items-center text-center bg-white/[0.08] rounded-xl p-5 border border-white/10">
                  <Gift size={24} className="text-[#F15200] mb-2" />
                  <p className="text-white font-semibold text-sm">100% Free Audit</p>
                  <p className="text-white/60 text-xs mt-1">No cost, no commitment</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white/[0.08] rounded-xl p-5 border border-white/10">
                  <Clock size={24} className="text-[#F15200] mb-2" />
                  <p className="text-white font-semibold text-sm">Quick Turnaround</p>
                  <p className="text-white/60 text-xs mt-1">Results within days</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white/[0.08] rounded-xl p-5 border border-white/10">
                  <CheckCircle size={24} className="text-[#F15200] mb-2" />
                  <p className="text-white font-semibold text-sm">Honest Assessment</p>
                  <p className="text-white/60 text-xs mt-1">Straightforward feedback</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us/"
                  className="px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center animate-[pulse-glow-maroon_3s_ease-in-out_infinite]"
                >
                  Request a Free Audit
                </Link>
                <a
                  href="https://calendly.com/michelle-clearclaimrcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#80010A] hover:scale-105 transition-all duration-300 text-center"
                >
                  Schedule a Consultation
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
