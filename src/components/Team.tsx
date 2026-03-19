"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const founders = [
  { name: "Hanish Jyosyabhatla", role: "Founder", initial: "H" },
  { name: "Lohith Medisetti", role: "Co-founder", initial: "L" },
  { name: "Teja Mandapalli", role: "Co-founder", initial: "T" },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="founder" ref={ref} className="py-24 lg:py-32 bg-bg-dark">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Label */}
          <span className="inline-block text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-12">
            The Builders
          </span>

          {/* Card */}
          <div className="relative p-10 lg:p-16 rounded-[3rem] bg-white/[0.02] border border-white/[0.08] overflow-hidden backdrop-blur-3xl shadow-2xl">
            {/* Accent border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent via-primary to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Text */}
              <div className="lg:col-span-12">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-light/90 leading-tight mb-12">
                  &quot;We don&apos;t pitch decks. We don&apos;t consult. If you have a real problem, 
                  we sit down and build the thing that fixes it. That&apos;s the company.&quot;
                </p>

                {/* Team grid */}
                <div className="pt-12 border-t border-white/[0.06] flex flex-wrap gap-12 sm:gap-16">
                   {founders.map((member) => (
                      <div key={member.name} className="flex items-center gap-5">
                         <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl font-black text-white shadow-xl">
                            {member.initial}
                         </div>
                         <div>
                            <div className="text-[15px] font-black text-text-light uppercase tracking-widest">{member.name}</div>
                            <div className="text-[11px] font-bold text-text-light/25 uppercase tracking-widest">{member.role}</div>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="mt-16 flex items-center gap-6">
                   <Link href="/about" className="text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-secondary transition-colors group">
                      Meet the Full Team <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
