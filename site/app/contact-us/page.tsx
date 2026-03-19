import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Linkedin, Clock, ArrowRight, HelpCircle, Printer } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { FadeIn, SlideIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Contact Us | ClearClaim RCM",
  description:
    "Contact ClearClaim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 424-600-5948 or email info@clearclaimrcm.com.",
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    type: "website",
    siteName: "ClearClaim RCM",
    title: "Contact Us | ClearClaim RCM",
    description:
      "Contact ClearClaim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 424-600-5948 or email info@clearclaimrcm.com.",
    url: "https://clearclaimrcm.com/contact-us/",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "ClearClaim RCM - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ClearClaim RCM",
    description:
      "Contact ClearClaim RCM for a free billing audit or to schedule a consultation with Michelle Recek. Call 424-600-5948 or email info@clearclaimrcm.com.",
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
    a: "Book through Calendly, fill out the form on this page, or call 424-600-5948. You can also email info@clearclaimrcm.com directly. Either way, the first step is a free audit with no obligation attached.",
  },
  {
    q: "Do you offer a free billing audit?",
    a: "Yes, and Michelle does it herself. She reviews your denial rate, AR aging, and coding accuracy at no cost. If your current setup is running well, she will tell you that. If there are gaps, you will see exactly where the money is going.",
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
      <section className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] pt-[219px] sm:pt-[235px] pb-[146px] sm:pb-[162px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/contact-hero.jpg"
            alt="Medical billing professionals at ClearClaim RCM"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#F15200] font-bold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Most providers know something is off with their billing. They just
              have not had time to look closely. The free audit is where we start.
              No pitch. Just an honest look at what you are leaving on the table.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute -right-32 top-1/3 w-[500px] h-[500px] bg-[#137868]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact info */}
            <SlideIn direction="left">
              <div className="flex flex-col gap-8">
                {/* Free Billing Audit card */}
                <div className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] rounded-2xl p-8 text-white order-first lg:order-last hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
                  <div className="relative">
                    <h2
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Free Billing Audit
                    </h2>
                    <div className="w-12 h-1 bg-white/30 rounded-full mb-4" />
                    <p className="text-white/90 text-sm leading-relaxed mb-5">
                      Michelle reviews your denial rate, AR aging, and coding
                      accuracy at no cost. If your current setup is running well,
                      she will tell you that. If there are gaps, you will see
                      exactly where the money is going.
                    </p>
                    <a
                      href="https://calendly.com/michelle-clearclaimrcm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#137868] font-semibold text-sm hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Book via Calendly
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Talk to Michelle About Your Revenue Cycle
                  </h2>
                  <div className="w-16 h-1 bg-[#137868] rounded-full mb-6" />
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    Call, email, or book through Calendly. If you have questions
                    about a{" "}
                    <Link href="/services/" className="text-[#137868] hover:underline font-medium">
                      specific billing or revenue cycle service
                    </Link>{" "}
                    or want to know whether ClearClaim RCM is the right fit, fill
                    out the form and we will be in touch quickly.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Phone,
                        label: "Phone",
                        content: (
                          <a
                            href="tel:4246005948"
                            className="text-[#137868] hover:underline text-base font-medium"
                          >
                            424-600-5948
                          </a>
                        ),
                      },
                      {
                        icon: Printer,
                        label: "Fax",
                        content: (
                          <span className="text-[#137868] text-base font-medium">
                            424-666-3798
                          </span>
                        ),
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        content: (
                          <a
                            href="mailto:info@clearclaimrcm.com"
                            className="text-[#137868] hover:underline text-base font-medium"
                          >
                            info@clearclaimrcm.com
                          </a>
                        ),
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        content: (
                          <a
                            href="https://linkedin.com/company/clearclaim-rcm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#137868] hover:underline text-base font-medium"
                          >
                            linkedin.com/company/clearclaim-rcm
                          </a>
                        ),
                      },
                      {
                        icon: Clock,
                        label: "Schedule Online",
                        content: (
                          <a
                            href="https://calendly.com/michelle-clearclaimrcm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#137868] hover:underline text-base font-medium"
                          >
                            calendly.com/michelle-clearclaimrcm
                          </a>
                        ),
                      },
                    ].map((item, index) => (
                      <FadeIn key={item.label} delay={index * 0.08}>
                        <div className="flex items-start gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                          <div className="w-10 h-10 rounded-full bg-[#137868]/10 flex items-center justify-center shrink-0">
                            <item.icon size={18} className="text-[#137868]" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                            {item.content}
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Contact form */}
            <SlideIn direction="right">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
                <h2
                  className="text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Send Us a Message
                </h2>
                <div className="w-12 h-1 bg-[#137868] rounded-full mb-6" />
                <ContactForm />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#137868]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <FadeIn delay={0.1}>
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </FadeIn>
          </div>
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const colors = ["#137868", "#2563eb", "#7c3aed", "#F15200", "#dc2626", "#0891b2", "#137868"];
              const color = colors[index % colors.length];
              return (
                <FadeIn key={faq.q} delay={index * 0.08}>
                  <article
                    className="relative rounded-2xl p-8 border border-white/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${color}12 0%, ${color}08 50%, ${color}18 100%)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{ background: `linear-gradient(135deg, ${color}20 0%, ${color}10 50%, ${color}25 100%)` }}
                    />
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{ background: color }} />
                    <div className="relative flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${color}18` }}
                      >
                        <HelpCircle size={20} style={{ color }} />
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold text-gray-900 mb-3"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {faq.q}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
