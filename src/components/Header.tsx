import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string; hash?: boolean; cta?: boolean };

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCorporate = pathname.startsWith("/events/public");
  const isPrivate = pathname.startsWith("/events/private");

  let navLinks: NavItem[];
  if (isCorporate || isPrivate) {
    navLinks = [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "#enquire", label: "Enquire", hash: true, cta: true },
    ];
  } else {
    navLinks = [
      { href: "/about", label: "About" },
      { href: "/events/public", label: "Corporate" },
      { href: "/events/private", label: "Private" },
      { href: "/contact", label: "Contact" },
    ];
  }

  const renderLink = (link: NavItem, onClick?: () => void) => {
    const base =
      "text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline";
    const cta =
      "text-sm px-5 py-2 border border-clay/40 text-clay hover:bg-clay hover:text-bone transition-all duration-300";
    if (link.hash) {
      return (
        <a key={link.href} href={link.href} onClick={onClick} className={link.cta ? cta : base}>
          {link.label}
        </a>
      );
    }
    return (
      <Link key={link.href} to={link.href} onClick={onClick} className={link.cta ? cta : base}>
        {link.label}
      </Link>
    );
  };

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
            className="font-serif text-base tracking-[0.25em] text-foreground hover:text-clay transition-colors duration-300"
          >
            OM SHALA
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => renderLink(l))}
          </div>

          <button
            className="md:hidden p-2 text-foreground hover:text-clay transition-colors duration-300"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="font-serif text-base tracking-[0.25em] text-foreground">
            OM SHALA
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
          {navLinks.map((link, i) => {
            const cls = `font-serif text-3xl transition-all duration-500 ${
              link.cta ? "text-clay" : "text-foreground hover:text-clay"
            } ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;
            const style = { transitionDelay: `${i * 100}ms` };
            const close = () => setMobileMenuOpen(false);
            return link.hash ? (
              <a key={link.href} href={link.href} onClick={close} className={cls} style={style}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} onClick={close} className={cls} style={style}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Header;
