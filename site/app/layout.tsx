import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clear Claim RCM | Medical Billing & Revenue Cycle Management",
  description:
    "ClearClaim RCM is a U.S.-based full-cycle medical billing and revenue cycle management company helping independent providers and small to mid-sized clinics get paid faster, reduce denials, and take back time for patient care.",
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
