import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/blog/AuthContext";

export const metadata: Metadata = {
  title: "SolveMPire — Bring Us a Problem. We'll Build the Solution.",
  description:
    "SolveMPire doesn't sell services. We solve problems. From digital products and AI to IoT systems — tell us what's broken, we'll build what fixes it.",
  keywords: [
    "SolveMPire",
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
    title: "SolveMPire — Bring Us a Problem. We'll Build the Solution.",
    description:
      "Most companies sell services. We solve problems. Tell us what's broken.",
    type: "website",
    siteName: "SolveMPire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
      <body className="font-inter antialiased bg-bg-dark text-text-light selection:bg-primary/30 selection:text-text-light">
        <AuthProvider>
          <Navbar />
          <main className="relative w-full min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
