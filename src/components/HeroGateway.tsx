import { Link } from "react-router-dom";

const HERO_BG = "#322E4F";
const LOWER_BG = "#0E0D12";
const TEXT = "#D8C6B7";
const DIVIDER = "#4A4A4A";

const Half = ({ to, label }: { to: string; label: string }) => {
  const [w1, w2] = label.split(" ");
  return (
    <Link
      to={to}
      aria-label={label}
      className="group flex flex-col items-center justify-center w-1/2 h-full transition-opacity duration-500 hover:opacity-80"
    >
      <h2
        className="uppercase text-center leading-[1.15] tracking-[0.04em] text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.75rem]"
        style={{
          color: TEXT,
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontWeight: 400,
        }}
      >
        <span className="block">{w1}</span>
        <span className="block">{w2}</span>
      </h2>
      <svg
        className="mt-8 sm:mt-10 md:mt-14"
        width="52"
        height="14"
        viewBox="0 0 52 14"
        fill="none"
        aria-hidden
        style={{ color: TEXT }}
      >
        <line x1="0" y1="7" x2="48" y2="7" stroke="currentColor" strokeWidth="1" />
        <polyline
          points="40,1 50,7 40,13"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </Link>
  );
};

const HeroGateway = () => {
  return (
    <section className="h-screen w-full flex flex-col overflow-hidden">
      {/* Hero */}
      <div
        className="flex flex-col items-center justify-center basis-[60%] shrink-0 w-full px-6"
        style={{ background: HERO_BG }}
      >
        <h1
          className="text-center leading-none"
          style={{
            color: TEXT,
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 300,
            fontSize: "clamp(3.75rem, 11vw, 9rem)",
            letterSpacing: "-0.01em",
          }}
        >
          om shāla
        </h1>
        <p
          className="mt-5 sm:mt-6 md:mt-8 uppercase text-center"
          style={{
            color: TEXT,
            fontFamily: '"Montserrat", "Inter", sans-serif',
            fontWeight: 300,
            letterSpacing: "0.32em",
            fontSize: "clamp(0.65rem, 1.15vw, 0.95rem)",
          }}
        >
          Sound Healing Experiences
        </p>
      </div>

      {/* Lower */}
      <div
        className="relative flex-1 w-full flex"
        style={{ background: LOWER_BG }}
      >
        <Half to="/events/public" label="CORPORATE EVENTS" />
        <Half to="/events/private" label="PRIVATE EVENTS" />
        {/* Vertical divider — spans full lower section only */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: "1px", backgroundColor: DIVIDER }}
          aria-hidden
        />
      </div>
    </section>
  );
};

export default HeroGateway;