"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const partners = [
  { name: "FreshPod", logo: "/partners/freshpod.png" },
  { name: "CoreBlock", logo: "/partners/coreblock.png" },
  { name: "Aditya University", logo: "/partners/aditya-university.png" },
  { name: "Loah", logo: "/partners/loah.svg" },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function Partners() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="partners" ref={ref} className="py-24 lg:py-32 bg-off-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-[13px] font-semibold text-primary uppercase tracking-widest mb-3">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark leading-tight">
            Our Partners
          </h2>
        </div>

        {/* Logo row - equal height, natural width */}
        <div
          className={`flex flex-wrap items-center justify-center gap-10 lg:gap-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={60}
                className="object-contain"
                style={{ height: "60px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
