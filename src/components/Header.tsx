import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

const useContextNav = (): { items: NavItem[]; enquireHref: string | null } => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/corporate")) {
    return {
      items: [
        { href: "/about", label: "About" },
        { href: "/contact?type=corporate", label: "Contact" },
      ],
      enquireHref: "/contact?type=corporate",
    };
  }
  if (pathname.startsWith("/private")) {
    return {
      items: [
        { href: "/about", label: "About" },
        { href: "/contact?type=private", label: "Contact" },
      ],
      enquireHref: "/contact?type=private",
    };
  }
  return {
    items: [
      { href: "/about", label: "About" },
      { href: "/corporate", label: "Corporate" },
      { href: "/private", label: "Private" },
      { href: "/contact", label: "Contact" },
    ],
    enquireHref: null,
  };
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, enquireHref } = useContextNav();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [items]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-sm tracking-[0.35em] uppercase text-foreground hover:text-clay transition-colors duration-300"
          >
            Om Shala
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {items.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {enquireHref && (
              <Link
                to={enquireHref}
                className="hidden md:inline-block px-6 py-2.5 text-xs tracking-[0.25em] uppercase border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
              >
                Enquire
              </Link>
            )}
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
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="font-serif text-sm tracking-[0.35em] uppercase text-foreground">
            Om Shala
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
          {items.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-foreground hover:text-clay transition-colors duration-500"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          {enquireHref && (
            <Link
              to={enquireHref}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-colors duration-500 text-xs tracking-[0.3em] uppercase"
            >
              Enquire
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
