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
  title: "Clear Claim RCM | Medical Billing & Revenue Cycle Management",
  description:
    "Clear Claim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Clear Claim RCM",
    title: "Clear Claim RCM | Medical Billing & Revenue Cycle Management",
    description:
      "Clear Claim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
    url: "https://clearclaimrcm.com",
    images: [
      {
        url: "/gallery/02.jpg",
        width: 1200,
        height: 630,
        alt: "Clear Claim RCM - Medical Billing Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear Claim RCM | Medical Billing & Revenue Cycle Management",
    description:
      "Clear Claim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
    images: ["/gallery/02.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clear Claim RCM",
  url: "https://clearclaimrcm.com",
  logo: "https://clearclaimrcm.com/logos/Logo.png",
  description:
    "Clear Claim RCM is a U.S.-based full-cycle medical billing and revenue cycle management company founded by a 20-year healthcare veteran.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
