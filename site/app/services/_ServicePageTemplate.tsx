import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/MotionWrappers";
import type { Service } from "./_data";

export default function ServicePageTemplate({
  service,
  relatedServices,
}: {
  service: Service;
  relatedServices: Service[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[219px] sm:pt-[235px] pb-[100px] sm:pb-[120px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/services-hero-bg.jpg"
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e28]/95 via-[#0c2e28]/80 to-[#0c2e28]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-6"
              >
                <ArrowRight size={14} className="rotate-180" />
                All Services
              </Link>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 border border-white/20"
                style={{ background: `${service.color}30` }}
              >
                <service.icon size={16} className="text-white" />
                <span className="text-white text-sm font-medium">Service {service.number}</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {service.title}
              </h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <SlideIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon size={28} style={{ color: service.color }} />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.title}
                </h2>
                <div className="w-16 h-1 rounded-full mb-6" style={{ background: service.color }} />
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-3 rounded-xl p-4 border border-white/30"
                      style={{ background: `${service.color}08` }}
                    >
                      <CheckCircle size={18} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  style={{ background: service.color }}
                >
                  {service.cta ? "Request Your Free Audit" : "Get Started"}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#F15200] font-semibold text-sm uppercase tracking-widest mb-3">
                Explore More
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Related Services
              </h2>
              <div className="w-16 h-1 bg-[#137868] mx-auto mt-4 rounded-full" />
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rs) => (
              <StaggerItem key={rs.slug}>
                <Link href={`/services/${rs.slug}/`} className="block h-full">
                  <article
                    className="relative h-full rounded-2xl p-6 border border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${rs.color}12 0%, ${rs.color}08 50%, ${rs.color}18 100%)` }}
                  >
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ background: rs.color }} />
                    <div className="relative">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${rs.color}18` }}
                      >
                        <rs.icon size={22} style={{ color: rs.color }} />
                      </div>
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {rs.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{rs.desc}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: rs.color }}>
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/cta-bg.jpg" alt="Healthcare revenue cycle management" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#80010A]/80 via-[#6a0108]/75 to-[#80010A]/80" />
        </div>
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Start with a free audit. Michelle will review your billing setup at no cost, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us/"
                className="px-8 py-4 rounded-full bg-white text-[#80010A] font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
              >
                Request a Free Audit
              </Link>
              <Link
                href="/services/"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#80010A] hover:scale-105 transition-all duration-300 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
