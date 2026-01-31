import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyDailyTools - Simple Online Tools for Everyday Use",
  description: "Free online tools for everyday use. Age Calculator, BMI Calculator, EMI Calculator, Word Counter, Image Compressor, and more. Fast, simple, and no sign-up required.",
  keywords: ["online tools", "calculator", "converter", "free tools", "daily tools", "utility tools"],
  authors: [{ name: "EasyDailyTools" }],
  openGraph: {
    title: "EasyDailyTools - Simple Online Tools for Everyday Use",
    description: "Free online tools for everyday use. Fast, simple, and no sign-up required.",
    type: "website",
    url: "https://easydailytools.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_CLIENT_ID_HERE"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
