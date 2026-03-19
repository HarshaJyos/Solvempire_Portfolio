"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/blog/AuthContext";
import { LoginModal } from "@/components/blog/LoginModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = isHomePage
    ? [
        { label: "About", href: "#founder" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Journal", href: "/blog" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Journal", href: "/blog" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ];

  const getLinkHref = (href: string) => {
    if (isHomePage) return href;
    if (href.startsWith("#")) return `/${href}`;
    return href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(33,72,186,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="SolveMPire"
            width={160}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("#") ? (
                <a
                  href={getLinkHref(link.href)}
                  className="relative px-4 py-2 text-[14px] font-bold uppercase tracking-widest text-text-light/40 hover:text-text-light transition-all duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-[14px] font-bold uppercase tracking-widest transition-all duration-200 rounded-lg hover:bg-white/5 ${
                    pathname === link.href ? "text-text-light bg-white/5" : "text-text-light/40 hover:text-text-light"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          {/* Conditional Action Button */}
          <li className="ml-4">
            {isHomePage ? (
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 text-[12px] font-black uppercase tracking-[0.15em] text-white bg-primary rounded-full hover:bg-secondary transition-all duration-300 hover:shadow-[0_4px_25px_rgba(33,72,186,0.4)] active:scale-95"
              >
                Bring Us Your Problem
              </a>
            ) : (
              <div className="flex items-center gap-3">
                {!user ? (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="inline-flex items-center px-6 py-2.5 text-[12px] font-black uppercase tracking-[0.15em] text-white bg-primary rounded-full hover:bg-secondary transition-all active:scale-95"
                  >
                    Login
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all active:scale-95"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                        {user.email?.[0].toUpperCase() || 'U'}
                      </div>
                      <span className="text-[12px] font-bold text-text-light/80 uppercase tracking-widest">Account</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="text-[11px] font-bold text-text-light/20 hover:text-rose-500 transition-colors px-2 uppercase tracking-widest"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2.5px] bg-text-light transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-text-light transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-text-light transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) bg-bg-dark/95 backdrop-blur-2xl ${mobileOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col px-6 py-8 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("#") ? (
                <a
                  href={getLinkHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-4 text-[14px] font-bold uppercase tracking-[0.2em] text-text-light/60 hover:text-text-light hover:bg-white/5 rounded-2xl transition-all"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-4 text-[14px] font-bold uppercase tracking-[0.2em] rounded-2xl transition-all ${
                    pathname === link.href ? "text-text-light bg-white/5" : "text-text-light/60 hover:text-text-light hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="mt-4 pt-4 border-t border-white/5">
            {isHomePage ? (
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-4 text-[12px] font-black uppercase tracking-[0.15em] text-white bg-primary rounded-full hover:bg-secondary transition-all"
              >
                Bring Us Your Problem
              </a>
            ) : (
              <div className="flex flex-col gap-3">
                {!user ? (
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                    className="block text-center px-6 py-4 text-[12px] font-black uppercase tracking-[0.15em] text-white bg-primary rounded-full hover:bg-secondary transition-all"
                  >
                    Login
                  </button>
                ) : (
                  <>
                    <Link
                      href="/account"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center px-6 py-4 text-[12px] font-black uppercase tracking-[0.15em] text-text-light bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-bold"
                    >
                      Account
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="block text-center px-6 py-4 text-[12px] font-black uppercase tracking-[0.15em] text-rose-500 hover:bg-rose-500/10 rounded-full transition-all"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
}
