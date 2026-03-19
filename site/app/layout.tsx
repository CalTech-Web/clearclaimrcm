import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Script from "next/script";
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
  verification: {
    google: "hmNb26et4UTAb0wD3j76Tff8VUjgG-fkbm4_887YmcY",
  },
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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PHD7RD6H');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ4VZFT7TR"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQ4VZFT7TR');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHD7RD6H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
