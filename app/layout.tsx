import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORE SHIELD SERVICES | Elite Security, Manpower & Integrated Solutions",
  description:
    "Premium security services in Delhi, Uttar Pradesh, Punjab, and Haryana. Providing top-tier armed/unarmed guards, VIP personal protection, corporate security, event security, and advanced AI CCTV surveillance.",
  keywords: [
    "Core Shield Services",
    "Security guard services Noida",
    "VIP personal protection Delhi",
    "Corporate security Haryana",
    "Best event security Punjab",
    "CCTV surveillance support",
    "Security manpower solutions",
  ],
  authors: [{ name: "CORE SHIELD SERVICES" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-800 overflow-x-hidden">
        {/* Initialize Animate On Scroll (AOS) */}
        <AosInit />
        
        {/* Sticky Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-[70px] md:pt-[85px]">{children}</main>
        
        {/* Premium Brand Footer */}
        <Footer />
      </body>
    </html>
  );
}
