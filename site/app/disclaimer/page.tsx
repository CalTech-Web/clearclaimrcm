import type { Metadata } from "next";
import { FadeIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Legal Disclaimer | ClearClaim RCM",
  description:
    "Legal disclaimer for ClearClaim RCM. Information about scope of services, professional relationships, limitation of liability, and compliance.",
  alternates: {
    canonical: "/disclaimer/",
  },
};

const sections = [
  {
    number: "1",
    title: "General Information Only",
    content:
      "The content provided on the ClearClaim RCM website, including but not limited to text, graphics, images, downloadable materials, templates, and tools, is for informational purposes only. It does not constitute legal, financial, medical, billing, coding, credentialing, or consulting advice. While ClearClaim RCM strives to keep information accurate and up to date, we make no representations or warranties regarding the completeness, accuracy, reliability, or timeliness of any information on this website.",
  },
  {
    number: "2",
    title: "No Professional-Client Relationship",
    content:
      "Use of this website, submission of contact forms, emails, phone calls, or any other communication with ClearClaim RCM does not create a client, consultant, or professional relationship. A professional relationship is established only after a formal written agreement has been executed and signed by authorized representatives of both parties.",
  },
  {
    number: "3",
    title: "Scope of Services",
    content:
      "ClearClaim RCM provides healthcare administrative, credentialing, contracting, and revenue cycle management services. Not all services described on this website, in marketing materials, or in communications are included in every client engagement. The exact scope of services, deliverables, responsibilities, timelines, and fees are defined solely in the executed Service Agreement, Statement of Work (SOW), or other written contract between ClearClaim RCM and the client. ClearClaim RCM is not responsible for services that are not specifically included in a signed agreement.",
  },
  {
    number: "4",
    title: "No Guarantee of Results",
    content:
      "ClearClaim RCM does not guarantee reimbursement, credentialing approval, payer enrollment, claim payment, network participation, or financial outcomes. Results may vary based on payer policies, provider documentation, regulatory requirements, and other factors outside of our control.",
  },
  {
    number: "5",
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, ClearClaim RCM, its owners, employees, contractors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of this website or from any services provided, including but not limited to loss of revenue, denied claims, payer delays, or credentialing outcomes.",
  },
  {
    number: "6",
    title: "Third-Party Links",
    content:
      "This website may contain links to third-party websites, including payer portals, regulatory agencies, clearinghouses, and external resources. ClearClaim RCM does not control and is not responsible for the content, accuracy, or privacy practices of any third-party website.",
  },
  {
    number: "7",
    title: "Compliance and HIPAA",
    content:
      "ClearClaim RCM provides administrative support services and does not provide medical care or legal advice. Clients are responsible for maintaining compliance with all applicable federal and state laws, including HIPAA, CMS, and payer regulations, unless otherwise stated in a written agreement.",
  },
  {
    number: "8",
    title: "Changes to Disclaimer",
    content:
      "ClearClaim RCM reserves the right to update or modify this disclaimer at any time without prior notice. Continued use of the website constitutes acceptance of the current version.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] pt-[219px] sm:pt-[235px] pb-[100px] sm:pb-[120px] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#F15200] font-bold text-sm uppercase tracking-widest mb-4">
              Legal
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Legal Disclaimer
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <FadeIn key={section.number} delay={0.05}>
                <div>
                  <h2
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {section.number}. {section.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-400 text-sm text-center">
                Last updated: March 2026
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
