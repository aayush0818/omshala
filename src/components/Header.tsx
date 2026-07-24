import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import InstagramColorIcon from "@/components/InstagramColorIcon";
import wordmark from "@/assets/omshala-wordmark-transparent.png.asset.json";

const INSTAGRAM_URL = "https://www.instagram.com/omshala.official";
const HEADER_BG = "#322E4F";
const BONE = "#CEBFB5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: HEADER_BG }}
      >
        <nav className="container mx-auto px-6 py-4 grid grid-cols-3 items-center">
          <div />

          <Link to="/" className="justify-self-center inline-flex items-center hover:opacity-90 transition-opacity duration-300">
            <img src={wordmark.url} alt="om shāla" className="h-8 md:h-9 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-10 justify-self-end">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm transition-colors duration-300 link-underline hover:text-white"
                style={{ color: BONE }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <InstagramColorIcon className="w-5 h-5" />
            </a>
          </div>

          <button
            className="md:hidden p-2 justify-self-end transition-opacity duration-300 hover:opacity-80"
            style={{ color: BONE }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: HEADER_BG }}
      >
        <div className="container mx-auto px-6 py-4 grid grid-cols-3 items-center">
          <div />
          <Link to="/" className="justify-self-center inline-flex items-center">
            <img src={wordmark.url} alt="om shāla" className="h-8 w-auto" />
          </Link>
          <button
            className="p-2 justify-self-end transition-opacity duration-300 hover:opacity-80"
            style={{ color: BONE }}
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
              className={`font-serif text-3xl transition-all duration-500 hover:text-white ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, color: BONE }}
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
            className={`mt-4 transition-all duration-500 hover:opacity-80 ${
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
