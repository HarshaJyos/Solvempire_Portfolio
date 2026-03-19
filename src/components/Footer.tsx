"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/[0.06] pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="SolveMPire"
                width={160}
                height={40}
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-text-light/40 max-w-sm font-medium">
              Most companies sell services. We solve problems. 
              <br />
              Bring us what&apos;s broken, we&apos;ll build what fixes it.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[11px] font-black text-text-light/20 uppercase tracking-[0.25em] mb-7">
              Platform
            </h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[14px] font-bold text-text-light/40 hover:text-secondary transition-all uppercase tracking-widest hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/blog" className="text-[14px] font-bold text-text-light/40 hover:text-secondary transition-all uppercase tracking-widest hover:translate-x-1 inline-block">Journal</Link></li>
              <li><Link href="/about" className="text-[14px] font-bold text-text-light/40 hover:text-secondary transition-all uppercase tracking-widest hover:translate-x-1 inline-block">About Us</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-[11px] font-black text-text-light/20 uppercase tracking-[0.25em] mb-7">
              Reach Out
            </h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-[14px] font-bold text-text-light/40 hover:text-secondary transition-all uppercase tracking-widest hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link href="/privacy" className="text-[14px] font-bold text-text-light/40 hover:text-secondary transition-all uppercase tracking-widest hover:translate-x-1 inline-block">Privacy</Link></li>
              <li><Link href="/terms" className="text-[14px] font-bold text-text-light/40 hover:text-secondary transition-all uppercase tracking-widest hover:translate-x-1 inline-block">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-text-light/25 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SolveMPire Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] px-4 py-1.5 rounded-full">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
               <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.15em]">Core Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
