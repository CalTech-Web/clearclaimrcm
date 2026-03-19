import type { Metadata } from "next";
import { services, getRelatedServices } from "../_data";
import ServicePageTemplate from "../_ServicePageTemplate";

const service = services.find((s) => s.slug === "patient-billing")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDesc,
  alternates: { canonical: `/services/${service.slug}/` },
  openGraph: {
    type: "website",
    siteName: "ClearClaim RCM",
    title: service.seoTitle,
    description: service.seoDesc,
    url: `https://clearclaimrcm.com/services/${service.slug}/`,
    images: [{ url: service.img, width: 1200, height: 630, alt: service.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.seoTitle,
    description: service.seoDesc,
    images: [service.img],
  },
};

export default function PatientBillingPage() {
  const related = getRelatedServices(service.slug);
  return <ServicePageTemplate service={service} relatedServices={related} />;
}
