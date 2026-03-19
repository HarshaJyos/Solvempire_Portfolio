"use client";

import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-bg-dark">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-r from-tertiary/50 to-bg-dark px-8 py-12 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-accent/5 blur-[60px] -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 text-center lg:text-left">
            <h3 className="font-bebas text-3xl sm:text-4xl text-text-light mb-2">
              Have a problem? Let&apos;s build.
            </h3>
            <p className="text-[15px] text-text-light/40">
              Stop thinking about it. Tell us what needs to exist.
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 inline-flex items-center px-7 py-3.5 text-[15px] font-semibold text-white bg-primary rounded-full hover:bg-secondary hover:shadow-[0_4px_30px_rgba(33,72,186,0.45)] transition-all duration-300 hover:-translate-y-0.5 shrink-0"
          >
            Tell Us About It
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
