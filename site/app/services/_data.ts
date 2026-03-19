import { ClipboardList, FilePlus, Send, CreditCard, RotateCcw, FileText, TrendingUp, BarChart2, ShieldCheck, SearchCheck, UserCheck, Handshake, Building2, FileSignature, type LucideIcon } from "lucide-react";

export type Service = {
  number: string;
  slug: string;
  title: string;
  icon: LucideIcon;
  img: string;
  color: string;
  desc: string;
  bullets: string[];
  cta?: boolean;
  seoTitle: string;
  seoDesc: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "credentialing-enrollment",
    title: "Credentialing and Enrollment",
    icon: UserCheck,
    img: "/products/28.png",
    color: "#137868",
    desc: "We manage the full credentialing and enrollment process for new and existing providers. From initial applications through CAQH, NPI registration, PECOS enrollment, and payer-specific requirements, we handle the paperwork and follow up with payers until your providers are fully credentialed and billable. Delays in credentialing mean delays in revenue, and we work proactively to prevent that.",
    bullets: [
      "CAQH profile setup and maintenance",
      "NPI registration and PECOS enrollment",
      "Payer-specific credentialing applications",
      "Proactive follow-up until fully billable",
    ],
    seoTitle: "Credentialing & Enrollment Services | ClearClaim RCM",
    seoDesc: "Full-service provider credentialing and enrollment. CAQH, NPI, PECOS, and payer applications managed from start to finish for specialty practices and new providers.",
  },
  {
    number: "02",
    slug: "payer-contracting",
    title: "Payer Contracting and Network Activation",
    icon: Handshake,
    img: "/products/25.png",
    color: "#2563eb",
    desc: "Getting credentialed is only the first step. We help your practice secure contracts with insurance payers and activate network participation so you can begin seeing patients and billing for services. We review fee schedules, negotiate where possible, and ensure your contracts support sustainable revenue from day one.",
    bullets: [
      "Insurance payer contract negotiations",
      "Fee schedule review and analysis",
      "Network participation activation",
      "Contract renewal and renegotiation support",
    ],
    seoTitle: "Payer Contracting & Network Activation | ClearClaim RCM",
    seoDesc: "Payer contracting and network activation services for medical practices. Fee schedule review, contract negotiations, and network participation setup.",
  },
  {
    number: "03",
    slug: "new-practice-setup",
    title: "New Practice and Provider Setup",
    icon: Building2,
    img: "/products/22.png",
    color: "#7c3aed",
    desc: "Starting a new practice involves more than clinical decisions. We help with the full administrative build-out, including credentialing for new providers, contracting with insurance payers, billing system setup and workflow design, and multi-entity or specialty practice configuration. Whether you are opening a single location or expanding into multiple entities, we build the revenue infrastructure your practice needs to get paid from day one.",
    bullets: [
      "New practice administrative build-out",
      "Billing system setup and workflow design",
      "Multi-entity and specialty practice configuration",
      "Credentialing and contracting for new providers",
    ],
    seoTitle: "New Practice Setup Services | ClearClaim RCM",
    seoDesc: "Complete new practice setup services including credentialing, payer contracting, billing system configuration, and multi-entity practice build-out.",
  },
  {
    number: "04",
    slug: "contracts-agreements",
    title: "Contracts and Agreements Consulting",
    icon: FileSignature,
    img: "/products/26.png",
    color: "#F15200",
    desc: "We review existing billing agreements, consult on new practice contracts, and help structure revenue cycle consulting agreements that align with your practice goals. Every engagement is customized based on client needs, and we work with you to define the right scope of services for your situation. Whether you need a full-service partnership or targeted support in a specific area, we tailor the agreement to fit.",
    bullets: [
      "Review of existing billing agreements",
      "Consulting for new practice contracts",
      "Revenue cycle consulting agreements",
      "Customized services based on client needs",
    ],
    seoTitle: "Contracts & Agreements Consulting | ClearClaim RCM",
    seoDesc: "Billing agreement review, new practice contract consulting, and revenue cycle consulting agreements tailored to your practice needs.",
  },
  {
    number: "05",
    slug: "medical-claim-coding",
    title: "Medical Claim Coding",
    icon: ClipboardList,
    img: "/products/claim-1.png",
    color: "#0891b2",
    desc: "Every dollar starts with a code. If it is wrong or imprecise, the claim gets denied or underpaid and most practices never know why. Our AAPC-certified coders assign ICD, CPT, and HCPCS codes to the standard, specialty by specialty.",
    bullets: [
      "ICD, CPT, and HCPCS code assignment",
      "AAPC-certified coding standards",
      "Specialty-focused coding accuracy",
      "Reduces downstream rejections and denials",
    ],
    seoTitle: "Medical Claim Coding Services | ClearClaim RCM",
    seoDesc: "AAPC-certified medical claim coding services. Accurate ICD, CPT, and HCPCS code assignment, specialty by specialty. Reduce denials and maximize reimbursements.",
  },
  {
    number: "06",
    slug: "charge-entry",
    title: "Charge Entry",
    icon: FilePlus,
    img: "/products/22.png",
    color: "#2563eb",
    desc: "A clean claim starts before the claim is even built. Patient demographics, insurance details, and service data all have to be entered correctly, or the claim goes out with a flaw baked in. We verify before we submit.",
    bullets: [
      "Complete patient and insurance data entry",
      "Verification before claim submission",
      "Reduces errors that cause rejections",
      "Compatible with major practice management platforms",
    ],
    seoTitle: "Charge Entry Services | ClearClaim RCM",
    seoDesc: "Accurate charge entry services for healthcare practices. We verify patient demographics, insurance details, and service data before every claim submission.",
  },
  {
    number: "07",
    slug: "claim-submission",
    title: "Claim Submission",
    icon: Send,
    img: "/products/23.png",
    color: "#7c3aed",
    desc: "Claims go out electronically to all major payers, with paper submission where required. Before they go, every claim gets scrubbed for errors. Timely filing windows are tracked. Nothing ages out.",
    bullets: [
      "Electronic and paper claim submission",
      "Timely filing compliance tracking",
      "Pre-submission scrubbing for errors",
      "Submission to all major payers",
    ],
    seoTitle: "Claim Submission Services | ClearClaim RCM",
    seoDesc: "Electronic and paper claim submission to all major payers. Pre-submission scrubbing, timely filing compliance, and error prevention for faster reimbursements.",
  },
  {
    number: "08",
    slug: "payment-posting",
    title: "Payment Posting",
    icon: CreditCard,
    img: "/products/paid-content.png",
    color: "#F15200",
    desc: "Every payment that comes in gets posted with full detail, allowed amounts, patient responsibility, adjustments, and denials. That level of documentation is how you catch underpayments before they become a pattern.",
    bullets: [
      "Insurance EOB and ERA posting",
      "Patient payment recording",
      "Denial and adjustment documentation",
      "Underpayment identification",
    ],
    seoTitle: "Payment Posting Services | ClearClaim RCM",
    seoDesc: "Detailed payment posting services including EOB/ERA processing, patient payment recording, and underpayment identification for healthcare practices.",
  },
  {
    number: "09",
    slug: "denial-appeals-management",
    title: "Denial and Appeals Management",
    icon: RotateCcw,
    img: "/products/24.png",
    color: "#dc2626",
    desc: "Every denial gets a root cause review. We find the reason code, fix the problem, and send it back, either as a corrected claim or a formal appeal. We track each one through to resolution. Nothing gets written off because it was inconvenient to fight.",
    bullets: [
      "Root cause analysis for every denial",
      "Claim correction and resubmission",
      "Formal appeals drafting and filing",
      "Full tracking from denial to resolution",
    ],
    seoTitle: "Denial & Appeals Management | ClearClaim RCM",
    seoDesc: "Aggressive denial and appeals management for healthcare practices. Root cause analysis, claim correction, formal appeals, and full tracking through resolution.",
  },
  {
    number: "10",
    slug: "patient-billing",
    title: "Patient Billing",
    icon: FileText,
    img: "/products/statements.png",
    color: "#0891b2",
    desc: "After insurance pays, patients get a clear statement for whatever is left. We also field billing questions so your front desk does not have to. Clear communication reduces disputes and gets balances paid faster.",
    bullets: [
      "Professional patient statements",
      "Balance after insurance billing",
      "Patient billing inquiry support",
      "Clear, easy-to-understand statements",
    ],
    seoTitle: "Patient Billing Services | ClearClaim RCM",
    seoDesc: "Professional patient billing services with clear statements, balance after insurance billing, and inquiry support. Reduce disputes and collect balances faster.",
  },
  {
    number: "11",
    slug: "accounts-receivable-followup",
    title: "Accounts Receivable (AR) Follow-Up",
    icon: TrendingUp,
    img: "/products/business-report.png",
    color: "#137868",
    desc: "Aging claims do not fix themselves. We work insurance AR and patient balances systematically, following up before things go stale. Practices that do not track this lose thousands a year to claims that simply expired.",
    bullets: [
      "Insurance AR aging management",
      "Patient balance follow-up",
      "Systematic claim tracking",
      "Improved cash flow outcomes",
    ],
    seoTitle: "Accounts Receivable Follow-Up | ClearClaim RCM",
    seoDesc: "Systematic accounts receivable follow-up for healthcare practices. Insurance AR aging management, patient balance tracking, and improved cash flow outcomes.",
  },
  {
    number: "12",
    slug: "reporting-analytics",
    title: "End-of-Month Reporting and Analytics",
    icon: BarChart2,
    img: "/products/26.png",
    color: "#2563eb",
    desc: "At the end of every month, you get a report showing what came in, what was denied, how your AR is aging, and how the practice is performing financially. No black box. You see the full picture.",
    bullets: [
      "Monthly collections reports",
      "Denial trend analysis",
      "AR aging and performance metrics",
      "Practice financial health overview",
    ],
    seoTitle: "Reporting & Analytics | ClearClaim RCM",
    seoDesc: "Transparent monthly reporting and analytics for healthcare practices. Collections, denial trends, AR aging, and practice financial performance in one report.",
  },
  {
    number: "13",
    slug: "compliance-auditing",
    title: "Compliance Auditing",
    icon: ShieldCheck,
    img: "/products/28.png",
    color: "#7c3aed",
    desc: "A payer audit is not something you want to be caught unprepared for. We review your claims, coding, and documentation against HIPAA requirements and AAPC standards on an ongoing basis. Catching compliance gaps early prevents the kind of problems that cost real money.",
    bullets: [
      "HIPAA compliance review",
      "Payer regulation adherence",
      "AAPC coding standards audit",
      "Documentation quality assessment",
    ],
    seoTitle: "Compliance Auditing Services | ClearClaim RCM",
    seoDesc: "Ongoing compliance auditing against HIPAA requirements and AAPC standards. Catch compliance gaps early before they become costly problems for your practice.",
  },
  {
    number: "14",
    slug: "free-billing-audit",
    title: "Free Billing Audit",
    icon: SearchCheck,
    img: "/products/search.png",
    color: "#F15200",
    desc: "Michelle reviews your current billing setup at no charge. She will look at your denial rate, your AR aging, your collections against expected reimbursement, and your coding accuracy. If your team is solid, she will tell you. If there are gaps, she will show you where the money is going.",
    bullets: [
      "Complimentary, no-obligation review",
      "Performed personally by Michelle Recek",
      "Identifies revenue leakage and gaps",
      "Risk-free evaluation of your current team",
    ],
    cta: true,
    seoTitle: "Free Billing Audit | ClearClaim RCM",
    seoDesc: "Get a free, no-obligation billing audit from Michelle Recek. Review your denial rate, AR aging, collections, and coding accuracy at no cost.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  const current = services.findIndex((s) => s.slug === slug);
  const related: Service[] = [];
  for (let i = 1; related.length < count; i++) {
    const next = services[(current + i) % services.length];
    if (next.slug !== slug) related.push(next);
  }
  return related;
}
