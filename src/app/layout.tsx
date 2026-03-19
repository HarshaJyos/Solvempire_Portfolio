import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SolvMPire — Bring Us a Problem. We'll Build the Solution.",
  description:
    "SolvMPire doesn't sell services. We solve problems. From digital products and AI to IoT systems — tell us what's broken, we'll build what fixes it.",
  keywords: [
    "SolvMPire",
    "problem solving",
    "software development",
    "AI",
    "ML",
    "IoT",
    "web development",
    "digital products",
    "startup",
  ],
  openGraph: {
    title: "SolvMPire — Bring Us a Problem. We'll Build the Solution.",
    description:
      "Most companies sell services. We solve problems. Tell us what's broken.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
