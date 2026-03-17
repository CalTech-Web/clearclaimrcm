import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://clearclaimrcm.com"),
  title: "Clear Claim RCM | Medical Billing & Revenue Cycle Management",
  description:
    "Clear Claim RCM provides full-cycle medical billing and revenue cycle management. AAPC-certified, HIPAA-compliant, and serving independent practices nationwide.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
