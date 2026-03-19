export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-light-blue/15 blur-[100px] animate-pulse-soft" />

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
          <span className="w-2 h-2 rounded-full bg-light-blue animate-pulse-soft" />
          <span className="text-[13px] font-medium text-white/70 tracking-wide uppercase">
            Software · Hardware · Innovation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
          Building the Future
          <br />
          <span className="bg-gradient-to-r from-light-blue to-primary bg-clip-text text-transparent">
            One Solution at a Time
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-[16px] sm:text-[18px] text-white/55 leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          We develop cutting-edge software, hardware, and IT solutions — from
          AI/ML and cloud platforms to IoT devices and robotics — empowering
          businesses to thrive in the digital era.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3.5 text-[15px] font-semibold text-white bg-primary rounded-full hover:shadow-[0_4px_30px_rgba(33,72,186,0.45)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Our Work
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 text-[15px] font-semibold text-white/80 border border-white/15 rounded-full hover:bg-white/5 hover:border-white/25 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "3+", label: "Projects Delivered" },
            { value: "4+", label: "Trusted Partners" },
            { value: "1K+", label: "Clients Impacted" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-[12px] sm:text-[13px] text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
