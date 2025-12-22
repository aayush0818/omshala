const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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
