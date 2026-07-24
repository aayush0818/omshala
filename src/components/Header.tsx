import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import InstagramColorIcon from "@/components/InstagramColorIcon";
import logoAsset from "@/assets/omshala-logo-full.png.asset.json";

const INSTAGRAM_URL = "https://www.instagram.com/omshala.official";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-purple shadow-sm">
        <nav className="container mx-auto px-6 py-3 grid grid-cols-3 items-center">
          {/* Left: desktop nav / mobile menu button */}
          <div className="flex items-center justify-start">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm text-bone/90 hover:text-bone transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <button
              className="md:hidden p-2 text-bone hover:opacity-80 transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center: logo */}
          <div className="flex items-center justify-center">
            <Link to="/" aria-label="Om Shala home" className="block">
              <img
                src={logoAsset.url}
                alt="Om Shala"
                className="h-12 md:h-14 w-auto block"
              />
            </Link>
          </div>

          {/* Right: instagram */}
          <div className="flex items-center justify-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <InstagramColorIcon className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-brand-purple transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Om Shala home">
            <img src={logoAsset.url} alt="Om Shala" className="h-12 w-auto block" />
          </Link>
          <button
            className="p-2 text-bone hover:opacity-80 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl text-bone hover:opacity-80 transition-all duration-500 ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-4 transition-all duration-500 ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            <InstagramColorIcon className="w-8 h-8" />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
