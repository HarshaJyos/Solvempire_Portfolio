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

export default function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="relative py-28 lg:py-40 bg-bg-dark overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-accent/5 blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 lg:px-10 text-center">
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Label */}
          <span className="inline-block text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-8">
            The Mission
          </span>

          {/* Manifesto heading */}
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-8xl text-text-light leading-[0.9] mb-12">
            WE EXIST TO BUILD WHAT <br />
            OTHERS <span className="text-secondary italic">ONLY TALK ABOUT.</span>
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-20">
             <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
                <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-6">Manifesto</h3>
                <p className="text-[17px] text-text-light/60 leading-relaxed font-medium">
                  SolveMPire was not built to sell services. It was built because real problems kept 
                  going unsolved — from lack of ideas, but from lack of execution. We take broken systems 
                  and build outcomes that actually move the needle.
                </p>
             </div>
             <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
                <h3 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-6">Vision</h3>
                <p className="text-[17px] text-text-light/60 leading-relaxed font-medium">
                  A world where the gap between a real problem and a working solution is measured 
                  in weeks — not years. We provide the right team, tools, and thinking for anyone 
                  brave enough to ask.
                </p>
             </div>
          </div>
        </div>

        {/* Accent line */}
        <div
          className={`mt-20 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 delay-500 ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
        />
      </div>
    </section>
  );
}
