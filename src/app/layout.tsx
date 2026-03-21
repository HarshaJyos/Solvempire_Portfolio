import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/blog/AuthContext";

export const metadata: Metadata = {
  title: "SolveMPire — Bring Us a Problem. We'll Build the Solution.",
  description:
    "SolveMPire builds software, AI systems, hardware, and digital strategies for businesses with real problems worth solving. Founded by engineers. Built for builders.",
  keywords: [
    "solvempire",
    "software development company india",
    "AI solutions india",
    "hardware and IoT development",
    "tech startup india",
    "web development company",
    "machine learning solutions",
    "digital strategy india",
    "embedded systems company",
    "robotics development india",
    "startup software company",
    "build software india",
  ],
  openGraph: {
    title: "SolveMPire — We Build Outcomes, Not Just Products",
    description:
      "A technology company founded by engineers who stopped waiting. We build software, AI, hardware, and digital strategy for clients serious about solving real problems.",
    type: "website",
    siteName: "SolveMPire",
    url: "https://solvempire.com",
    images: [
      {
        url: "https://solvempire.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SolveMPire Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolveMPire — Bring Us a Problem. We'll Build the Solution.",
    description: "We build software, AI, hardware & digital strategy for real problems.",
    site: "@solvempire",
    creator: "@solvempire",
    images: ["https://solvempire.com/logo.png"],
  },
  metadataBase: new URL("https://solvempire.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SolveMPire Pvt Ltd",
    "alternateName": "SolveMPire",
    "url": "https://solvempire.com",
    "logo": "https://solvempire.com/logo.png",
    "description": "SolveMPire is a technology company that builds software, hardware, and intelligent systems for businesses and individuals with real problems worth solving.",
    "foundingDate": "2025",
    "foundingLocation": "India",
    "email": "support@solvempire.com",
    "telephone": "+919701341323",
    "sameAs": [
      "https://x.com/solvempire",
      "https://www.instagram.com/solvempire"
    ],
    "knowsAbout": [
      "Software Development",
      "Artificial Intelligence",
      "Machine Learning",
      "IoT Systems",
      "Embedded Systems",
      "Robotics",
      "Cloud Computing",
      "Cybersecurity",
      "Digital Marketing",
      "Web Development",
      "Mobile Development",
      "Data Analytics"
    ],
    "slogan": "Bring us a problem. We'll build the solution."
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
