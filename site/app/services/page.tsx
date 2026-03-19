import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "./_data";
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

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-[#137868] to-[#0f5f54] pt-[219px] sm:pt-[235px] pb-[146px] sm:pb-[162px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/services-hero.jpg"
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Everything Your Revenue Cycle Needs
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </div>
          </FadeIn>

          <div className="space-y-20">
            {services.map((service, i) => (
              <FadeIn key={service.number} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image side */}
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white font-bold text-lg shadow-lg"
                          style={{ fontFamily: "'Poppins', sans-serif", background: service.color }}
                        >
                          {service.number}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
                          style={{ background: `${service.color}30` }}
                        >
                          <service.icon size={16} className="text-white" />
                          <span className="text-white text-sm font-medium">{service.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${service.color}15` }}
                    >
                      <service.icon size={24} style={{ color: service.color }} />
                    </div>
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.bullets.map((b) => (
                        <div
                          key={b}
                          className="flex items-start gap-3 rounded-xl p-3 border border-white/30"
                          style={{ background: `${service.color}08` }}
                        >
                          <CheckCircle size={16} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${service.slug}/`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
                        style={{ background: service.color }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                      {service.cta && (
                        <Link
                          href="/contact-us/"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#80010A] text-white font-semibold text-sm hover:bg-[#600108] hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                          Request Your Free Audit
                          <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
                color: "#137868",
              },
              {
                step: "2",
                title: "Practice Onboarding",
                desc: "We connect to your practice management system, establish the workflows, and get everything running before your first claim goes out.",
                color: "#2563eb",
              },
              {
                step: "3",
                title: "Ongoing Revenue Cycle Management",
                desc: "Claims go out clean. Denials get challenged. Reports land in your inbox every month. You stay focused on patients.",
                color: "#7c3aed",
              },
            ].map((s, index) => (
              <ScaleIn key={s.step} delay={index * 0.15}>
                <div
                  className="relative rounded-2xl p-8 pt-12 text-center border border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                  style={{ background: `linear-gradient(135deg, ${s.color}12 0%, ${s.color}08 50%, ${s.color}18 100%)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${s.color}20 0%, ${s.color}10 50%, ${s.color}25 100%)` }}
                  />
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ background: s.color }} />
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-xl ring-4 ring-gray-50 shadow-lg z-10" style={{ fontFamily: "'Poppins', sans-serif", background: s.color }}>
                    {s.step}
                  </div>
                  <div className="relative">
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-3 transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-white/60 font-semibold text-sm uppercase tracking-widest mb-4">
              No Obligation
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Start With a Free Audit
            </h2>
            <div className="w-20 h-1 bg-white/40 mx-auto rounded-full mb-6" />
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-[pulse-glow-maroon_3s_ease-in-out_infinite]"
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
