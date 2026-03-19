export default function Footer() {
  return (
    <footer className="bg-tertiary/30 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-text-light mb-4">
              Solv<span className="text-secondary">MPire</span>
            </h3>
            <p className="text-[14px] leading-relaxed text-text-light/40 max-w-xs">
              Bring us a problem. We&apos;ll build the solution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-text-light/70 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#founder" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-text-light/35 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-semibold text-text-light/70 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:founder@solvmpire.com"
                  className="text-[14px] text-text-light/35 hover:text-secondary transition-colors duration-200"
                >
                  founder@solvmpire.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919701341323"
                  className="text-[14px] text-text-light/35 hover:text-secondary transition-colors duration-200"
                >
                  +91 9701 341 323
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-14 pt-8 border-t border-white/[0.06]">
          <p className="text-[13px] text-text-light/25 text-center">
            &copy; {new Date().getFullYear()} SolvMPire Pvt Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
