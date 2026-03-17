import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Clear Claim RCM",
  description:
    "Full-cycle medical billing and revenue cycle management services: coding, claim submission, denial management, payment posting, patient billing, AR follow-up, reporting, and compliance auditing.",
};

const services = [
  {
    number: "01",
    title: "Medical Claim Coding",
    img: "/products/claim-1.png",
    desc: "We translate diagnoses, procedures, and treatments into standardized ICD, CPT, and HCPCS codes following AAPC-compliant coding standards. Accurate coding at the source means fewer denials, faster payments, and maximum reimbursement for every encounter.",
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
    img: "/products/accountant-1.png",
    desc: "Every patient visit is carefully entered into your practice management system with complete patient demographics, insurance information, and service details. Clean charge entry is the foundation of a clean claim, and we get it right from the start.",
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
    img: "/products/statements.png",
    desc: "We send completed claims to insurance companies electronically or via paper, depending on payer requirements. Our focus is on timely, error-free submissions that move through payer systems quickly and get your practice paid faster.",
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
    img: "/products/paid-content.png",
    desc: "Every insurance and patient payment is recorded accurately in your system, with full documentation of allowed amounts, patient responsibility, adjustments, and denials. Accurate payment posting is critical for identifying underpayments and tracking financial performance.",
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
    img: "/products/search.png",
    desc: "When claims are denied, we do not let them sit. We identify the denial reason, correct any issues, and aggressively resubmit or appeal every claim. Our team tracks every denied claim through resolution so your practice recovers the full amount earned.",
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
    img: "/products/statements.png",
    desc: "After insurance payment is applied, we send clear and professional statements to patients for outstanding balances. We also handle billing inquiries, making it easy for your patients to understand their responsibility and resolve balances.",
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
    img: "/products/accountant-1.png",
    desc: "Unpaid claims and patient balances are tracked and followed up on systematically. We reduce your outstanding AR and improve cash flow by ensuring nothing slips through the cracks, whether it is an aging insurance claim or an overdue patient balance.",
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
    img: "/products/business-report.png",
    desc: "Every month, we deliver detailed financial reports that show collections, denials, AR trends, and practice performance. These reports give you full visibility into your revenue cycle so you can make informed business decisions with confidence.",
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
    img: "/products/search.png",
    desc: "We review your processes, claims, and documentation for adherence to HIPAA, payer requirements, and AAPC coding regulations. Proactive compliance auditing prevents legal exposure, reduces payer audits, and maintains high billing standards across your practice.",
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
    img: "/products/business-report.png",
    desc: "Not sure if your current billing team is performing at the highest level? Michelle Recek personally offers a complimentary review of your existing billing services. If things are going well, she will tell you. If there are gaps, she will show you exactly where improvement is possible, with no obligation to switch.",
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
            From coding to collections, ClearClaim RCM handles every step of
            your revenue cycle with AAPC-certified accuracy and HIPAA-compliant
            processes. Specialists, not generalists.
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
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
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
                <div className="bg-gray-50 rounded-2xl p-10 flex items-center justify-center min-h-64">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={200}
                    height={200}
                    className="object-contain opacity-80"
                  />
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
                desc: "Michelle reviews your current billing setup at no cost. No obligation. Just honest, expert feedback.",
              },
              {
                step: "2",
                title: "Practice Onboarding",
                desc: "We integrate with your practice management system and establish billing workflows designed for your practice.",
              },
              {
                step: "3",
                title: "Ongoing Revenue Cycle Management",
                desc: "Clean claims go out. Denials get fought. Reports come in. You focus on patients. We handle the rest.",
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
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Contact us today to schedule your free, no-obligation billing audit
            or book a consultation with Michelle directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 transition-colors"
            >
              Contact Us
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
