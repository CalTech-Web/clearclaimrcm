import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clearclaimrcm.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about-us/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mission-statement/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
