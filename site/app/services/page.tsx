import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ClipboardList, FilePlus, Send, CreditCard, RotateCcw, FileText, TrendingUp, BarChart2, ShieldCheck, SearchCheck, type LucideIcon } from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem, ScaleIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Medical Billing Services | ClearClaim RCM",
  description:
    "AAPC-certified medical billing and revenue cycle management services: claim coding, submission, denial management, payment posting, AR follow-up, and compliance auditing.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    type: "website",
    siteName: "ClearClaim RCM",
    title: "Medical Billing Services | ClearClaim RCM",
    description:
      "AAPC-certified medical billing and revenue cycle management services: claim coding, submission, denial management, payment posting, AR follow-up, and compliance auditing.",
    url: "https://clearclaimrcm.com/services/",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "ClearClaim RCM Medical Billing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Billing Services | ClearClaim RCM",
    description:
      "AAPC-certified medical billing and revenue cycle management services: claim coding, submission, denial management, payment posting, AR follow-up, and compliance auditing.",
    images: ["/gallery/02.jpg"],
  },
};

const services: { number: string; title: string; icon: LucideIcon; img: string; desc: string; bullets: string[]; cta?: boolean }[] = [
  {
    number: "01",
    title: "Medical Claim Coding",
    icon: ClipboardList,
    img: "/products/claim-1.png",
    desc: "Every dollar starts with a code. If it is wrong or imprecise, the claim gets denied or underpaid and most practices never know why. Our AAPC-certified coders assign ICD, CPT, and HCPCS codes to the standard, specialty by specialty.",
    bullets: [
      "ICD, CPT, and HCPCS code assignment",
      "AAPC-certified coding standards",
      "Specialty-focused coding accuracy",
      "Reduces downstream rejections and denials",
    ],
  },
  {
    number: "02",
    title: "Charge Entry",
    icon: FilePlus,
    img: "/products/22.png",
    desc: "A clean claim starts before the claim is even built. Patient demographics, insurance details, and service data all have to be entered correctly, or the claim goes out with a flaw baked in. We verify before we submit.",
    bullets: [
      "Complete patient and insurance data entry",
      "Verification before claim submission",
      "Reduces errors that cause rejections",
      "Compatible with major practice management platforms",
    ],
  },
  {
    number: "03",
    title: "Claim Submission",
    icon: Send,
    img: "/products/23.png",
    desc: "Claims go out electronically to all major payers, with paper submission where required. Before they go, every claim gets scrubbed for errors. Timely filing windows are tracked. Nothing ages out.",
    bullets: [
      "Electronic and paper claim submission",
      "Timely filing compliance tracking",
      "Pre-submission scrubbing for errors",
      "Submission to all major payers",
    ],
  },
  {
    number: "04",
    title: "Payment Posting",
    icon: CreditCard,
    img: "/products/paid-content.png",
    desc: "Every payment that comes in gets posted with full detail, allowed amounts, patient responsibility, adjustments, and denials. That level of documentation is how you catch underpayments before they become a pattern.",
    bullets: [
      "Insurance EOB and ERA posting",
      "Patient payment recording",
      "Denial and adjustment documentation",
      "Underpayment identification",
    ],
  },
  {
    number: "05",
    title: "Denial and Appeals Management",
    icon: RotateCcw,
    img: "/products/24.png",
    desc: "Every denial gets a root cause review. We find the reason code, fix the problem, and send it back, either as a corrected claim or a formal appeal. We track each one through to resolution. Nothing gets written off because it was inconvenient to fight.",
    bullets: [
      "Root cause analysis for every denial",
      "Claim correction and resubmission",
      "Formal appeals drafting and filing",
      "Full tracking from denial to resolution",
    ],
  },
  {
    number: "06",
    title: "Patient Billing",
    icon: FileText,
    img: "/products/statements.png",
    desc: "After insurance pays, patients get a clear statement for whatever is left. We also field billing questions so your front desk does not have to. Clear communication reduces disputes and gets balances paid faster.",
    bullets: [
      "Professional patient statements",
      "Balance after insurance billing",
      "Patient billing inquiry support",
      "Clear, easy-to-understand statements",
    ],
  },
  {
    number: "07",
    title: "Accounts Receivable (AR) Follow-Up",
    icon: TrendingUp,
    img: "/products/business-report.png",
    desc: "Aging claims do not fix themselves. We work insurance AR and patient balances systematically, following up before things go stale. Practices that do not track this lose thousands a year to claims that simply expired.",
    bullets: [
      "Insurance AR aging management",
      "Patient balance follow-up",
      "Systematic claim tracking",
      "Improved cash flow outcomes",
    ],
  },
  {
    number: "08",
    title: "End-of-Month Reporting and Analytics",
    icon: BarChart2,
    img: "/products/26.png",
    desc: "At the end of every month, you get a report showing what came in, what was denied, how your AR is aging, and how the practice is performing financially. No black box. You see the full picture.",
    bullets: [
      "Monthly collections reports",
      "Denial trend analysis",
      "AR aging and performance metrics",
      "Practice financial health overview",
    ],
  },
  {
    number: "09",
    title: "Compliance Auditing",
    icon: ShieldCheck,
    img: "/products/28.png",
    desc: "A payer audit is not something you want to be caught unprepared for. We review your claims, coding, and documentation against HIPAA requirements and AAPC standards on an ongoing basis. Catching compliance gaps early prevents the kind of problems that cost real money.",
    bullets: [
      "HIPAA compliance review",
      "Payer regulation adherence",
      "AAPC coding standards audit",
      "Documentation quality assessment",
    ],
  },
  {
    number: "10",
    title: "Free Billing Audit",
    icon: SearchCheck,
    img: "/products/search.png",
    desc: "Michelle reviews your current billing setup at no charge. She will look at your denial rate, your AR aging, your collections against expected reimbursement, and your coding accuracy. If your team is solid, she will tell you. If there are gaps, she will show you where the money is going.",
    bullets: [
      "Complimentary, no-obligation review",
      "Performed personally by Michelle Recek",
      "Identifies revenue leakage and gaps",
      "Risk-free evaluation of your current team",
    ],
    cta: true,
  },
];

export default function ServicesPage() {
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
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Full-Cycle Revenue Cycle Management Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Ten services that cover every point in the revenue cycle, from the
              first code entered to the last dollar collected. All AAPC-certified.
              All HIPAA-compliant. No generalists.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#137868_1px,transparent_1px),linear-gradient(to_bottom,#137868_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.015] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative">
          {services.map((service, idx) => (
            <FadeIn key={service.number}>
              <article className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <SlideIn direction={idx % 2 === 1 ? "right" : "left"}>
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="text-5xl font-bold text-[#137868]/15"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {service.number}
                      </span>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#137868]/10 rounded-xl">
                        <service.icon size={22} className="text-[#137868]" />
                      </div>
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.title}
                    </h2>
                    <div className="w-12 h-1 bg-[#137868] rounded-full mb-5" />
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100">
                          <CheckCircle size={17} className="text-[#137868] shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    {service.cta && (
                      <Link
                        href="/contact-us/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#80010A] text-white font-semibold text-base hover:bg-[#600108] hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Request Your Free Audit
                        <ArrowRight size={18} />
                      </Link>
                    )}
                  </div>
                </SlideIn>
                <SlideIn direction={idx % 2 === 1 ? "left" : "right"}>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-[#137868]/8 to-[#F15200]/8 rounded-3xl blur-xl pointer-events-none" />
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={540}
                      height={400}
                      className="relative rounded-2xl object-cover w-full h-auto shadow-md"
                    />
                  </div>
                </SlideIn>
              </article>
              {idx < services.length - 1 && (
                <div className="mt-20 border-t border-gray-100" />
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <FadeIn delay={0.1}>
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                How It Works
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Getting Started is Simple
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </FadeIn>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#137868]/20 via-[#137868]/40 to-[#137868]/20 pointer-events-none" />
            {[
              {
                step: "1",
                title: "Free Billing Audit",
                desc: "Michelle reviews your denial rate, AR aging, and coding accuracy at no cost. No pitch. Honest feedback, whether or not you decide to work with us.",
              },
              {
                step: "2",
                title: "Practice Onboarding",
                desc: "We connect to your practice management system, establish the workflows, and get everything running before your first claim goes out.",
              },
              {
                step: "3",
                title: "Ongoing Revenue Cycle Management",
                desc: "Claims go out clean. Denials get challenged. Reports land in your inbox every month. You stay focused on patients.",
              },
            ].map((s, index) => (
              <ScaleIn key={s.step} delay={index * 0.15}>
                <div className="relative bg-white rounded-2xl p-8 pt-12 text-center border border-gray-100 hover:border-[#137868]/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#137868] text-white flex items-center justify-center font-bold text-xl ring-4 ring-gray-50 shadow-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {s.step}
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#137868] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-[#80010A] via-[#6a0108] to-[#80010A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Start With a Free Audit
            </h2>
            <div className="w-16 h-1 bg-white/40 mx-auto rounded-full mb-6" />
            <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              <Link href="/about-us/" className="text-white font-semibold hover:underline">
                Michelle Recek
              </Link>{" "}
              reviews your denial rate, AR aging, and coding accuracy at no cost.
              Book a consultation or reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Request a Free Audit
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://calendly.com/michelle-clearclaimrcm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#80010A] hover:scale-105 transition-all duration-300"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
