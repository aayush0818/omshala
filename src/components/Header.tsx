import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/practices", label: "Practices", isRoute: true },
    { href: "/about", label: "About", isRoute: true },
    { href: "/contact", label: "Contact", isRoute: true },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-tight text-foreground hover:text-clay transition-colors duration-300">
            OmShala
          </Link>
          
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline outline-none">
                Events
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-foreground/10 shadow-lg z-50">
                <DropdownMenuItem className="cursor-pointer hover:bg-muted" asChild>
                  <Link to="/events/public" className="w-full">Public</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted" asChild>
                  <Link to="/events/private" className="w-full">Private</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="hidden md:inline-block px-6 py-2.5 text-sm border border-foreground/20 hover:border-clay hover:text-clay transition-all duration-300"
            >
              Book
            </Link>
            
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
          <div 
            className={`flex flex-col items-center gap-4 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="font-serif text-3xl text-foreground">Events</span>
            <div className="flex gap-6">
              <Link 
                to="/events/public"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-clay transition-colors duration-300"
              >
                Public
              </Link>
              <Link 
                to="/events/private"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-clay transition-colors duration-300"
              >
                Private
              </Link>
            </div>
          </div>
          <Link 
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-4 px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Book a Session
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
