import { Link } from "react-router-dom";

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
              <Link to="/" className="font-serif text-sm tracking-[0.35em] uppercase text-foreground hover:text-clay transition-colors duration-300">
                Om Shala
              </Link>
              <span className="text-xs text-muted-foreground/50">
                Sound · Breath · Stillness
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground/70">
              <Link to="/about" className="hover:text-clay transition-colors">About</Link>
              <Link to="/corporate" className="hover:text-clay transition-colors">Corporate</Link>
              <Link to="/private" className="hover:text-clay transition-colors">Private</Link>
              <Link to="/contact" className="hover:text-clay transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground/70">
              <a href="mailto:omshala.official@gmail.com" className="hover:text-clay transition-colors duration-300">
                omshala.official@gmail.com
              </a>
              <a href="https://wa.me/917400361681" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors duration-300">
                WhatsApp +91 74003 61681
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
            <span>Bandra West, Mumbai</span>
            <span>© {currentYear} Om Shala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
