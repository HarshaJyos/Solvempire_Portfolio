"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rate-limited">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    // 1. Rate Limiting Check (1 minute)
    const lastSubmission = localStorage.getItem("last_contact_submission");
    const now = Date.now();

    if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
      setStatus("rate-limited");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      site_key: "solvempire_secret_2026",
      fullname: formData.get("fullname") as string,
      emailaddress: formData.get("email") as string,
      whatsbroken: formData.get("message") as string,
    };

    try {
      // We use URLSearchParams for application/x-www-form-urlencoded which works best with Apps Script e.parameter
      const params = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => params.append(key, value));

      const response = await fetch("https://script.google.com/macros/s/AKfycbw9mYVKp4xnUowaSVyYcW8hQIC1LVRSVGWyl7ARSc7FsnNwd5r4YgWakrq725m-rTc/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      // Google Apps Script usually returns a redirect (302) which fetch follows.
      // If CORS is not handled by the script, fetch might throw an error here.
      // We will try to parse the JSON if possible.
      const result = await response.json();

      if (result.status === "success" || result.status === "rate_limited" || result.status === "invalid") {
        if (result.status === "success") {
          setStatus("success");
          localStorage.setItem("last_contact_submission", now.toString());
          (e.target as HTMLFormElement).reset();
        } else if (result.status === "rate_limited") {
          setStatus("rate-limited");
        } else {
          setStatus("error");
          setErrorMsg("Invalid data. Please check your fields.");
        }
      } else {
        throw new Error(result.status || "Unknown error");
      }

      setStatus("success");
      localStorage.setItem("last_contact_submission", now.toString());
      (e.target as HTMLFormElement).reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-bg-dark">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <div
            className={`transition-all duration-700 ${inView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
          >
            <span className="inline-block text-[13px] font-semibold text-accent uppercase tracking-widest mb-3">
              Let&apos;s Talk
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-[46px] text-text-light leading-tight mb-6">
              Got a Problem?
              <br />
              <span className="text-secondary">Tell Us.</span>
            </h2>
            <p className="text-[15px] text-text-light/45 leading-relaxed mb-10 max-w-md">
              Don&apos;t pitch us. Don&apos;t send a brief. Just tell us
              what&apos;s broken or what needs to exist — we&apos;ll handle the
              rest.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:founder@solvempire.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-text-light/30 mb-0.5">
                    Email
                  </div>
                  <div className="text-[15px] font-medium text-text-light/70 group-hover:text-secondary transition-colors">
                    founder@solvempire.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919701341323"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-text-light/30 mb-0.5">
                    Phone
                  </div>
                  <div className="text-[15px] font-medium text-text-light/70 group-hover:text-secondary transition-colors">
                    +91 9701 341 323
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${inView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-[13px] font-medium text-text-light/50 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    className="w-full px-4 py-3 text-[14px] text-text-light bg-white/[0.04] rounded-xl border border-white/[0.08] outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all duration-200 placeholder:text-text-light/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-medium text-text-light/50 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 text-[14px] text-text-light bg-white/[0.04] rounded-xl border border-white/[0.08] outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all duration-200 placeholder:text-text-light/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-text-light/50 mb-2"
                  >
                    What&apos;s broken?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-[14px] text-text-light bg-white/[0.04] rounded-xl border border-white/[0.08] outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all duration-200 resize-none placeholder:text-text-light/20"
                    placeholder="What's broken? What needs to exist?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-3.5 text-[14px] font-semibold text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                      ${status === "success"
                        ? "bg-green-600 shadow-[0_4px_20px_rgba(22,163,74,0.3)]"
                        : status === "error"
                          ? "bg-red-600 shadow-[0_4px_20px_rgba(220,38,38,0.3)]"
                          : status === "rate-limited"
                            ? "bg-amber-600 shadow-[0_4px_20px_rgba(217,119,6,0.3)]"
                            : "bg-primary hover:bg-secondary hover:shadow-[0_4px_25px_rgba(33,72,186,0.4)]"
                      }
                      ${status === "loading" ? "opacity-70 cursor-wait" : ""}
                    `}
                  >
                    {status === "loading" && (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {status === "idle" && "Let's Build"}
                    {status === "loading" && "Sending..."}
                    {status === "success" && "✓ Message Received!"}
                    {status === "error" && "✕ Try Again"}
                    {status === "rate-limited" && "⌚ One message per minute"}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 text-[12px] text-red-500 text-center animate-fade-in">
                      {errorMsg}
                    </p>
                  )}
                  {status === "rate-limited" && (
                    <p className="mt-3 text-[12px] text-amber-500 text-center animate-fade-in">
                      Slow down! You can send another message in a bit.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
