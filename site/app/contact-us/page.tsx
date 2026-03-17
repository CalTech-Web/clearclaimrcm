import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Linkedin, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Billing Audit | Clear Claim RCM",
  description:
    "Contact Clear Claim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 303-434-1355 or email michelle@clearclaimRCM.com.",
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    type: "website",
    siteName: "Clear Claim RCM",
    title: "Free Billing Audit | Clear Claim RCM",
    description:
      "Contact Clear Claim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 303-434-1355 or email michelle@clearclaimRCM.com.",
    url: "https://clearclaimrcm.com/contact-us/",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "Clear Claim RCM - Free Billing Audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Billing Audit | Clear Claim RCM",
    description:
      "Contact Clear Claim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 303-434-1355 or email michelle@clearclaimRCM.com.",
    images: ["/gallery/02.jpg"],
  },
};

const faqs = [
  {
    q: "What types of practices does ClearClaim RCM work with?",
    a: "We work with independent healthcare providers, small to mid-sized clinics, group practices, and office managers or practice administrators. Any practice that wants dedicated billing support without the overhead of an in-house team. We work across specialties, and Michelle has direct experience in gastroenterology and behavioral health, so the learning curve is short.",
  },
  {
    q: "How do I get started?",
    a: "Book through Calendly, fill out the form on this page, or call 303-434-1355. You can also email michelle@clearclaimRCM.com directly. Either way, the first step is a free audit with no obligation attached.",
  },
  {
    q: "Do you offer a free billing audit?",
    a: "Yes, and Michelle does it herself. She reviews your denial rate, AR aging, and how your collections compare to expected reimbursement. If your current team is performing well, she will say so. If there are gaps, you will see exactly where they are, with no pressure to switch.",
  },
  {
    q: "What coding standards do you follow?",
    a: "All billing follows AAPC standards, the American Academy of Professional Coders certification. It covers coding accuracy, compliance, and getting the correct reimbursement on every claim we submit. Nothing goes out that hasn't been coded to that standard.",
  },
  {
    q: "Is my patient data secure?",
    a: "Yes. Every part of our process is fully HIPAA-compliant. Patient information is handled with complete security and confidentiality. We do not cut corners on that.",
  },
  {
    q: "What happens when a claim is denied?",
    a: "We pull the EOB, find the reason code, fix the problem, and resubmit or file a formal appeal. Every denial is tracked through to resolution. Nothing gets written off because it was inconvenient to fight.",
  },
  {
    q: "Do you provide reporting?",
    a: "Yes. Every month you get a report covering collections, denials, AR aging, and overall practice performance. It is the same data we use to manage your account. You see exactly what we see.",
  },
];

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            Most providers know something is off with their billing. They just
            have not had time to look closely. The free audit is where we start.
            No pitch. Just an honest look at what you are leaving on the table.
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
                Talk to Michelle About Your Revenue Cycle
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                Call, email, or book through Calendly. If you have questions
                about a specific service or want to know whether ClearClaim RCM
                is the right fit, fill out the form and we will be in touch
                quickly.
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
                  Michelle reviews your denial rate, AR aging, and coding
                  accuracy at no cost. If your current setup is running well,
                  she will tell you that. If there are gaps, you will see
                  exactly where the money is going.
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
              <article key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3
                  className="text-base font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
