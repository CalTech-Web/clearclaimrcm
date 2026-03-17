import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ClipboardList, FilePlus, Send, CreditCard, RotateCcw, FileText, TrendingUp, BarChart2, ShieldCheck, SearchCheck, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Billing Services | Clear Claim RCM",
  description:
    "AAPC-certified medical billing and revenue cycle management services: claim coding, submission, denial management, payment posting, AR follow-up, and compliance auditing.",
};

const services: { number: string; title: string; icon: LucideIcon; desc: string; bullets: string[]; cta?: boolean }[] = [
  {
    number: "01",
    title: "Medical Claim Coding",
    icon: ClipboardList,
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
      <section className="bg-[#137868] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Full-Cycle Revenue Cycle Management Services
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
            Ten services that cover every point in the revenue cycle, from the
            first code entered to the last dollar collected. All AAPC-certified.
            All HIPAA-compliant. No generalists.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-4xl font-bold text-[#137868]/20"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.number}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center bg-[#137868]/10 rounded-xl">
                    <service.icon size={22} className="text-[#137868]" />
                  </div>
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={17} className="text-[#137868] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                {service.cta && (
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#137868] text-white font-semibold hover:bg-[#0f5f54] transition-colors"
                  >
                    Request Your Free Audit
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-gradient-to-br from-[#137868]/10 to-[#137868]/20 rounded-2xl p-10 flex items-center justify-center min-h-64">
                  <service.icon size={120} className="text-[#137868]/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Getting Started is Simple
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#137868] text-white flex items-center justify-center font-bold text-xl mx-auto mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {s.step}
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
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
            Start With a Free Audit
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Michelle reviews your denial rate, AR aging, and coding accuracy at
            no cost. Book a consultation or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 transition-colors"
            >
              Request a Free Audit
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
