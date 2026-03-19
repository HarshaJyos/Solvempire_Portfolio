"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#founder" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-bg-dark/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(33,72,186,0.12)]"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-[1280px] flex items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="SolveMPire"
            width={160}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-[15px] font-medium text-text-light/70 hover:text-text-light transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-[14px] font-semibold text-white bg-primary rounded-full hover:bg-secondary transition-all duration-200 hover:shadow-[0_4px_20px_rgba(33,72,186,0.45)]"
            >
              Bring Us Your Problem
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-text-light transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-light transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-light transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-bg-dark/95 backdrop-blur-xl ${mobileOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium text-text-light/70 hover:text-text-light hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-3 text-[14px] font-semibold text-white bg-primary rounded-full hover:bg-secondary transition-all"
            >
              Bring Us Your Problem
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
