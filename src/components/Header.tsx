import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useExperience } from "@/context/experience";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const experience = useExperience();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks =
    experience === "corporate"
      ? [
          { href: "/about", label: "About" },
          { href: "/corporate", label: "Corporate" },
          { href: "/corporate/contact", label: "Contact" },
        ]
      : experience === "private"
      ? [
          { href: "/about", label: "About" },
          { href: "/private", label: "Private" },
          { href: "/private/contact", label: "Contact" },
        ]
      : [{ href: "/about", label: "About" }];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-tight text-foreground hover:text-clay transition-colors duration-300">
            OmShala
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-foreground hover:text-clay transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
            OmShala
          </Link>
          <button 
            className="p-2 text-foreground hover:text-clay transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl text-foreground hover:text-clay transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
