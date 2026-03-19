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

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-tertiary overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[80px] translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-10 text-center">
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <span className="inline-block text-[13px] font-semibold text-quaternary uppercase tracking-widest mb-6">
            Why We Exist
          </span>

          {/* Manifesto heading */}
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-text-light leading-[1.1] mb-10">
            We didn&apos;t start this company to sell services.
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[17px] sm:text-[19px] text-text-light/60 leading-[1.85] mb-8 max-w-[750px] mx-auto">
            Most people wait for the right time. The right team. The right
            funding. SolvMPire was built by someone who stopped waiting.
          </p>
          <p className="text-[17px] sm:text-[19px] text-text-light/60 leading-[1.85] max-w-[750px] mx-auto">
            We exist for the ones who have a real problem and need a team that
            actually builds — not consults, not recommends, not advises.{" "}
            <span className="text-accent font-semibold">Builds.</span>
          </p>
        </div>

        {/* Accent line */}
        <div
          className={`mt-12 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-700 delay-500 ${
            inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>
    </section>
  );
}
