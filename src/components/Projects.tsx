"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "FreshPod.in",
    url: "https://freshpod.in",
    tag: "Digital Marketing & Dev",
    problem:
      "A hardware company with no digital presence and zero marketing.",
    action: "We built both.",
    description:
      "Refactored the entire system architecture and executed a targeted digital marketing strategy that brought real, measurable results.",
    result: "1,000+ potential clients acquired who expressed interest in purchasing the product.",
    color: "from-primary to-secondary",
  },
  {
    name: "Loah.in",
    url: "https://loah.in",
    tag: "UX Research & Design",
    problem:
      "ADHD users needed a journaling tool that actually fit how they think.",
    action: "We researched, designed, and built it.",
    description:
      "Conducted deep user research to understand behaviors, needs, and pain points — then built a purpose-designed journaling experience grounded in empathy.",
    result: "A purpose-built journaling experience grounded in empathy and research.",
    color: "from-secondary to-quaternary",
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
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
    <section id="projects" ref={ref} className="py-24 lg:py-32 bg-bg-dark">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[13px] font-semibold text-accent uppercase tracking-widest mb-3">
            Real Problems, Real Solutions
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl lg:text-[46px] text-text-light leading-tight mb-5">
            What We&apos;ve Built
          </h2>
          <p className="text-[15px] sm:text-[16px] text-text-light/45 leading-relaxed">
            Every project starts with someone saying &quot;this is broken&quot;
            — and ends with something that works.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="flex flex-col flex-1 p-7 lg:p-9">
                {/* Tag */}
                <span className="inline-block self-start text-[11px] font-semibold text-secondary uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 mb-5">
                  {project.tag}
                </span>

                {/* Problem statement */}
                <p className="text-[18px] sm:text-[20px] font-medium text-text-light/70 leading-relaxed mb-2 italic">
                  &ldquo;{project.problem}&rdquo;
                </p>

                {/* Action */}
                <p className="text-[17px] font-bold text-accent mb-4">
                  {project.action}
                </p>

                {/* Name */}
                <h3 className="text-xl font-bold text-text-light mb-3 group-hover:text-secondary transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Desc */}
                <p className="text-[14px] text-text-light/40 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Result */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 text-accent shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-[13px] text-text-light/50 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Visit link */}
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Visit Site
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
