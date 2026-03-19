"use client";

import { useEffect, useRef, useState } from "react";

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

export default function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-off-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-[13px] font-semibold text-primary uppercase tracking-widest mb-3">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark leading-tight">
            Our Mission & Vision
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission */}
          <div
            className={`relative p-8 lg:p-10 rounded-2xl bg-white border border-gray-100 overflow-hidden transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Accent gradient */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-light-blue rounded-l-2xl" />
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-[60px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-[15px] text-dark/55 leading-[1.75]">
                To revolutionize the education system by making it more
                accessible, engaging, and understandable for students. We
                believe that with the right tools and technology, every learner
                can unlock their full potential and thrive in an ever-evolving
                world.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`relative p-8 lg:p-10 rounded-2xl bg-white border border-gray-100 overflow-hidden transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-light-blue to-primary rounded-l-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-light-blue/5 blur-[60px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-light-blue/15 text-light-blue flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-[15px] text-dark/55 leading-[1.75]">
                To produce innovative products and solutions that genuinely help
                people by solving their real-world problems. We envision a
                future where technology bridges the gap between complexity and
                simplicity, making life better for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
