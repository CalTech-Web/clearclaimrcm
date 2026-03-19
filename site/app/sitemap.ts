import type { MetadataRoute } from "next";
import { services } from "./services/_data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clearclaimrcm.com";

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...servicePages,
    { url: `${base}/about-us/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mission-statement/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/disclaimer/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
