"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="inline-block text-[13px] font-semibold text-primary uppercase tracking-widest mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark leading-tight mb-6">
              Let&apos;s Build Something
              <br />
              <span className="text-primary">Amazing Together</span>
            </h2>
            <p className="text-[15px] text-dark/55 leading-relaxed mb-10 max-w-md">
              Have a project in mind or want to explore how we can help? Reach
              out — we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:support@solvempire.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-dark/40 mb-0.5">Email</div>
                  <div className="text-[15px] font-medium text-dark group-hover:text-primary transition-colors">
                    support@solvempire.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919701341323"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-dark/40 mb-0.5">Phone</div>
                  <div className="text-[15px] font-medium text-dark group-hover:text-primary transition-colors">
                    +91 9701 341 323
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-2xl bg-off-white border border-gray-100"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[13px] font-medium text-dark/70 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 text-[14px] text-dark bg-white rounded-xl border border-gray-200 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-dark/25"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-medium text-dark/70 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 text-[14px] text-dark bg-white rounded-xl border border-gray-200 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-dark/25"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-dark/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-[14px] text-dark bg-white rounded-xl border border-gray-200 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none placeholder:text-dark/25"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-[14px] font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 hover:shadow-[0_4px_25px_rgba(33,72,186,0.35)] transition-all duration-300"
                >
                  {submitted ? "✓ Message Sent!" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
