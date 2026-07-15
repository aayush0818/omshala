import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 md:pt-28 pb-10 bg-background text-foreground overflow-hidden border-t border-foreground/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-brand-purple/60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enso brand mark */}
          <div className="flex justify-center mb-12 md:mb-16">
            <svg
              viewBox="0 0 64 64"
              className="w-12 h-12 text-brand-purple/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M48 18 a22 22 0 1 0 6 18" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 pb-12 md:pb-16 border-b border-foreground/15">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <Link
                to="/"
                className="font-serif text-2xl tracking-[0.15em] text-foreground hover:text-brand-purple transition-colors duration-500"
              >
                OM SHALA
              </Link>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Sound Healing Experiences
              </p>
              <p className="text-sm text-muted-foreground italic max-w-xs leading-relaxed pt-2">
                {"\n"}
              </p>
            </div>

            {/* Navigate */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                Navigate
              </span>
              <nav className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground/80">
                <Link to="/" className="hover:text-brand-purple transition-colors duration-300">Home</Link>
                <Link to="/events/public" className="hover:text-brand-purple transition-colors duration-300">Corporate</Link>
                <Link to="/events/private" className="hover:text-brand-purple transition-colors duration-300">Private</Link>
                <Link to="/contact" className="hover:text-brand-purple transition-colors duration-300">Contact</Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                Reach Us
              </span>
              <div className="flex flex-col items-center md:items-start gap-3 text-sm">
                <a
                  href="mailto:omshala.official@gmail.com"
                  className="text-foreground/80 hover:text-brand-purple transition-colors duration-300"
                >
                  omshala.official@gmail.com
                </a>
                <a
                  href="https://wa.me/917400361681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-brand-purple transition-colors duration-300"
                >
                  WhatsApp +91 74003 61681
                </a>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-foreground hover:text-brand-purple transition-colors duration-500"
                >
                  <span>Begin a conversation</span>
                  <span className="w-6 h-px bg-brand-purple" />
                </Link>
              </div>
            </div>
          </div>

          {/* Meta row */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            <span>© {currentYear} Om Shala. All rights reserved.</span>
            <span className="italic tracking-normal text-muted-foreground">
              {"\n"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;