const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Enso brand mark */}
          <div className="flex justify-center mb-12">
            <svg
              viewBox="0 0 64 64"
              className="w-10 h-10 text-clay/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M48 18 a22 22 0 1 0 6 18" />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-serif text-xl tracking-tight text-foreground hover:text-clay transition-colors duration-300 cursor-pointer">
                OmShala
              </span>
              <span className="text-xs text-muted-foreground/50">
                Sound · Breath · Stillness
              </span>
            </div>
            
            <div className="flex items-center gap-10">
              <a href="#practices" className="text-sm text-muted-foreground hover:text-clay transition-colors duration-300 link-underline">
                Practices
              </a>
              <a href="#philosophy" className="text-sm text-muted-foreground hover:text-clay transition-colors duration-300 link-underline">
                About
              </a>
              <a href="#booking" className="text-sm text-muted-foreground hover:text-clay transition-colors duration-300 link-underline">
                Contact
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <span className="text-xs text-muted-foreground/50">
                Bandra West, Mumbai
              </span>
              <span className="text-xs text-muted-foreground/40">
                © {currentYear} OmShala
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
