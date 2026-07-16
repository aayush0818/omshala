import { Link } from "react-router-dom";

const HERO_BG = "#322E4F";
const LOWER_BG = "#0E0D12";
const TEXT = "#D8C6B7";
const DIVIDER = "#4A4A4A";

const Arrow = () => (
  <svg width="56" height="14" viewBox="0 0 56 14" fill="none" aria-hidden style={{ color: TEXT }}>
    <line x1="0" y1="7" x2="52" y2="7" stroke="currentColor" strokeWidth="1" />
    <polyline
      points="44,1 54,7 44,13"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

const Panel = ({ to, w1, w2, label }: { to: string; w1: string; w2: string; label: string }) => (
  <Link
    to={to}
    aria-label={label}
    className="flex flex-col items-center justify-center px-4 sm:px-6 h-full w-full transition-opacity duration-500 hover:opacity-80"
  >
    <h2
      className="w-full min-w-0 uppercase text-center leading-[1.1] tracking-[0.04em] text-[1.75rem] sm:text-[2.25rem] md:text-[2.9rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]"
      style={{
        color: TEXT,
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontWeight: 400,
      }}
    >
      <span className="block">{w1}</span>
      <span className="block">{w2}</span>
    </h2>

    <div className="mt-8 sm:mt-10 md:mt-14">
      <Arrow />
    </div>
  </Link>
);

const HeroGateway = () => {
  return (
    <section
      className="w-full grid grid-rows-[60fr_40fr] overflow-hidden"
      style={{ height: "100vh", minHeight: "100dvh" }}
    >
      {/* Hero */}
      <div className="flex flex-col items-center justify-center px-6" style={{ background: HERO_BG }}>
        <h1
          className="text-center leading-none"
          style={{
            color: TEXT,
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            fontSize: "clamp(4rem, 10.5vw, 9.5rem)",
            letterSpacing: "-0.01em",
          }}
        >
          om shāla
        </h1>

        <p
          className="mt-3 sm:mt-4 md:mt-5 text-center"
          style={{
            color: TEXT,
            fontFamily: '"Montserrat", "Inter", sans-serif',
            fontWeight: 300,
            letterSpacing: "0.12em",
            fontSize: "clamp(0.9rem, 1.15vw, 1.15rem)",
          }}
        >
          sound healing experiences
        </p>
      </div>

      {/* Lower */}
      <div className="relative grid grid-cols-2" style={{ background: LOWER_BG }}>
        <Panel to="/events/public" w1="Corporate" w2="Events" label="Corporate Events" />

        <Panel to="/events/private" w1="Private" w2="Events" label="Private Events" />

        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "1px",
            backgroundColor: DIVIDER,
          }}
          aria-hidden
        />
      </div>
    </section>
  );
};

export default HeroGateway;
