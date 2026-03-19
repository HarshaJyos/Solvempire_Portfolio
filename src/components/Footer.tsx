export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white/80">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Solv<span className="text-light-blue">Empire</span>
            </h3>
            <p className="text-[14px] leading-relaxed text-white/60 max-w-xs">
              Developing innovative software, hardware, and IT solutions that
              empower businesses and transform education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Partners", href: "#partners" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-white/50 hover:text-light-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@solvempire.com"
                  className="text-[14px] text-white/50 hover:text-light-blue transition-colors duration-200"
                >
                  support@solvempire.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919701341323"
                  className="text-[14px] text-white/50 hover:text-light-blue transition-colors duration-200"
                >
                  +91 9701 341 323
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-[13px] text-white/40 text-center">
            &copy; {new Date().getFullYear()} SolvEmpire Pvt Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
