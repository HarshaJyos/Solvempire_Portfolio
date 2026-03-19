export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px] animate-pulse-soft" />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] animate-pulse-soft" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
          <span className="text-[13px] font-medium text-text-light/60 tracking-wide uppercase">
            Builders · Problem Solvers · Engineers
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-bebas text-5xl sm:text-6xl lg:text-8xl text-text-light leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
          Most companies sell services.
          <br />
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            We solve problems.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto text-[17px] sm:text-[19px] text-text-light/50 leading-relaxed mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Tell us what&apos;s broken. We&apos;ll build what fixes it.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-[15px] font-semibold text-white bg-primary rounded-full hover:bg-secondary hover:shadow-[0_4px_30px_rgba(33,72,186,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Bring Us Your Problem
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
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 text-[15px] font-semibold text-text-light/70 border border-white/15 rounded-full hover:bg-white/5 hover:border-white/25 hover:text-text-light transition-all duration-300"
          >
            See What We&apos;ve Built
          </a>
        </div>
      </div>

      {/* Subtle bottom gradient — dark to slightly different dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent" />
    </section>
  );
}
