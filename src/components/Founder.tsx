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
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function Founder() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="founder" ref={ref} className="py-24 lg:py-32 bg-bg-dark">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Section label */}
          <span className="inline-block text-[13px] font-semibold text-accent uppercase tracking-widest mb-6">
            The Founders
          </span>

          {/* Card */}
          <div className="relative p-8 lg:p-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
            {/* Accent left border */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-tertiary rounded-l-2xl" />

            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              {/* Opening quote mark */}
              <svg
                className="w-10 h-10 text-primary/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-text-light/80 leading-[1.8] mb-8">
                We started SolveMPire because we were tired of watching real
                problems go unsolved. Not because there weren&apos;t solutions
                — but because no one built them properly.
              </p>
              <p className="text-[16px] sm:text-[17px] text-text-light/50 leading-[1.8] mb-12">
                We don&apos;t pitch decks. We don&apos;t consult. We
                don&apos;t &quot;strategize.&quot; If you have a real problem,
                we sit down and build the thing that fixes it. That&apos;s it.
                That&apos;s the company.
              </p>

              {/* Founder info */}
              <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row gap-8 lg:gap-12">
                {/* Hanish */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                    <span className="text-[18px] font-bold text-white">H</span>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-text-light">
                      Hanish Jyosyabhatla
                    </div>
                    <div className="text-[13px] text-text-light/40">
                      Founder
                    </div>
                  </div>
                </div>

                {/* Co-founders */}
                <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <span className="text-[18px] font-bold text-text-light/70">L</span>
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-text-light/80">
                        Lohith Medisetti
                      </div>
                      <div className="text-[13px] text-text-light/40">
                        Co-founder
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <span className="text-[18px] font-bold text-text-light/70">T</span>
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-text-light/80">
                        Teja Mandapalli
                      </div>
                      <div className="text-[13px] text-text-light/40">
                        Co-founder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
