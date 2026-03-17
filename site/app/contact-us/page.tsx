import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Linkedin, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Clear Claim RCM",
  description:
    "Contact Clear Claim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 303-434-1355 or email michelle@clearclaimRCM.com.",
};

const faqs = [
  {
    q: "What types of practices does ClearClaim RCM work with?",
    a: "ClearClaim RCM serves independent healthcare providers, small to mid-sized clinics, group practices, and office managers or practice administrators. The company works across specialties and focuses on practices that want a dedicated billing partner rather than an in-house team.",
  },
  {
    q: "How do I get started?",
    a: "You can schedule a free consultation via Calendly at calendly.com/michelle-clearclaimrcm, fill out the contact form on this page, or call 303-434-1355 or email michelle@clearclaimRCM.com directly.",
  },
  {
    q: "Do you offer a free billing audit?",
    a: "Yes. Michelle Recek personally offers a complimentary audit of your current billing services. If your existing team is performing well, she will tell you. If there are gaps or signs of underperformance, she will identify where improvement is possible, with no obligation to switch.",
  },
  {
    q: "What coding standards do you follow?",
    a: "All billing is performed in strict adherence to AAPC (American Academy of Professional Coders) standards, ensuring accuracy, compliance, and the highest possible reimbursement for every claim submitted.",
  },
  {
    q: "Is my patient data secure?",
    a: "Yes. ClearClaim RCM is fully HIPAA-compliant across all billing processes, and all patient information is handled with the highest standards of security and confidentiality.",
  },
  {
    q: "What happens when a claim is denied?",
    a: "ClearClaim RCM reviews every denial, identifies the reason, corrects any issues, and aggressively resubmits or appeals the claim. The team tracks every claim from submission to reimbursement so nothing slips through the cracks.",
  },
  {
    q: "Do you provide reporting?",
    a: "Yes. End-of-month financial reports show collections, denials, AR trends, and overall practice performance so providers can make informed business decisions and see exactly where every dollar is going.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#137868] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact Us
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
            Ready to see what ClearClaim RCM can do for your practice? Start
            with a free, no-obligation billing audit or schedule a consultation
            with Michelle directly.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Let&rsquo;s Talk About Your Revenue Cycle
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                Whether you want to schedule a free audit, ask about our
                services, or simply learn more, we are here to help. Reach out
                through any of the channels below, or fill out the form and we
                will be in touch promptly.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#137868]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#137868]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Phone</p>
                    <a
                      href="tel:3034341355"
                      className="text-[#137868] hover:underline text-base font-medium"
                    >
                      303-434-1355
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#137868]/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#137868]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <a
                      href="mailto:michelle@clearclaimRCM.com"
                      className="text-[#137868] hover:underline text-base font-medium"
                    >
                      michelle@clearclaimRCM.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#137868]/10 flex items-center justify-center shrink-0">
                    <Linkedin size={18} className="text-[#137868]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com/company/clearclaim-rcm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#137868] hover:underline text-base font-medium"
                    >
                      linkedin.com/company/clearclaim-rcm
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#137868]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#137868]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Schedule Online</p>
                    <a
                      href="https://calendly.com/michelle-clearclaimrcm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#137868] hover:underline text-base font-medium"
                    >
                      calendly.com/michelle-clearclaimrcm
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#137868] rounded-2xl p-8 text-white">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Free Billing Audit
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Michelle Recek personally reviews your current billing setup
                  at no charge. No obligation to switch. Just honest, expert
                  feedback on your revenue cycle performance.
                </p>
                <a
                  href="https://calendly.com/michelle-clearclaimrcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#137868] font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Book via Calendly
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3
                  className="text-base font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
