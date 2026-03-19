import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clearclaimrcm.com"),
  other: { "theme-color": "#137868" },
  title: "ClearClaim RCM | Medical Billing & Revenue Cycle Management",
  description:
    "ClearClaim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "ClearClaim RCM",
    title: "ClearClaim RCM | Medical Billing & Revenue Cycle Management",
    description:
      "ClearClaim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
    url: "https://clearclaimrcm.com",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "ClearClaim RCM - Medical Billing Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearClaim RCM | Medical Billing & Revenue Cycle Management",
    description:
      "ClearClaim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
    images: ["/gallery/02.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClearClaim RCM",
  url: "https://clearclaimrcm.com",
  logo: "https://clearclaimrcm.com/logos/Logo.png",
  description:
    "ClearClaim RCM is a U.S.-based full-cycle medical billing and revenue cycle management company founded by a 20-year healthcare veteran.",
  telephone: "+1-303-434-1355",
  email: "michelle@clearclaimRCM.com",
  foundingDate: "2025",
  sameAs: ["https://www.linkedin.com/company/clearclaim-rcm"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-303-434-1355",
    contactType: "customer service",
    email: "michelle@clearclaimRCM.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#137868] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
