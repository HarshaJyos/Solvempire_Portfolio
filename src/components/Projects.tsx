"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "FreshPod.in",
    url: "https://freshpod.in",
    tag: "Digital Marketing & Dev",
    description:
      "Refactored the entire system architecture and executed a targeted digital marketing strategy for FreshPod — a helmet sanitization machine company.",
    result: "1,000+ potential clients acquired who expressed interest in purchasing the product.",
    color: "from-primary to-blue-600",
  },
  {
    name: "Loah.in",
    url: "https://loah.in",
    tag: "UX Research & Design",
    description:
      "Built a thoughtful journaling platform designed specifically for people living with ADHD. Conducted deep user research to understand the end user's needs, behaviors, and pain points.",
    result: "A purpose-built journaling experience grounded in empathy and research.",
    color: "from-light-blue to-cyan-400",
  },
  {
    name: "CoreBlock.in",
    url: "https://coreblock.in",
    tag: "Personal Blog Platform",
    description:
      "A personal documentation and blog website created for the founder to chronicle the entrepreneurial journey, share insights, and document the growth of SolvEmpire.",
    result: "A living archive of the founder's vision, learnings, and milestones.",
    color: "from-primary to-light-blue",
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-[13px] font-semibold text-primary uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark leading-tight mb-5">
            Projects We&apos;ve Delivered
          </h2>
          <p className="text-[15px] sm:text-[16px] text-dark/55 leading-relaxed">
            Every project is a testament to our commitment to quality,
            innovation, and meaningful impact.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col rounded-2xl border border-gray-100 bg-off-white/60 overflow-hidden hover:shadow-[0_12px_50px_rgba(33,72,186,0.1)] hover:border-primary/10 transition-all duration-500 hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="flex flex-col flex-1 p-7 lg:p-8">
                {/* Tag */}
                <span className="inline-block self-start text-[11px] font-semibold text-primary/80 uppercase tracking-wider px-3 py-1 rounded-full bg-primary/6 mb-4">
                  {project.tag}
                </span>

                {/* Name */}
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Desc */}
                <p className="text-[14px] text-dark/50 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Result */}
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[13px] text-dark/60 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Visit link */}
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Visit Site
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
