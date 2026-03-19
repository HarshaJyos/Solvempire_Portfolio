import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SolvEmpire Pvt Ltd — Software, Hardware & IT Solutions",
  description:
    "SolvEmpire develops cutting-edge software, hardware, and IT solutions including web, mobile, cloud, AI/ML, data analytics, cybersecurity, IoT, and robotics.",
  keywords: [
    "SolvEmpire",
    "software development",
    "IT solutions",
    "AI",
    "ML",
    "IoT",
    "robotics",
    "cybersecurity",
    "cloud",
    "web development",
    "mobile development",
  ],
  openGraph: {
    title: "SolvEmpire Pvt Ltd",
    description:
      "Building the future, one solution at a time. Software, hardware, and IT solutions.",
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
      <body className="font-helvetica antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
