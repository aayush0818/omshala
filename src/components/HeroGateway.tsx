import { useNavigate } from "react-router-dom";
import wordmark from "@/assets/omshala-wordmark-transparent.png.asset.json";

const PURPLE = "#322E4F";
const BLACK = "#0B0A10";
const BEIGE = "#C9BFA3";

const HeroGateway = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <section
        className="w-full md:w-1/2 flex items-center justify-center md:min-h-screen py-24 md:py-0"
        style={{ backgroundColor: PURPLE }}
      >
        <img
          src={wordmark.url}
          alt="om shāla — sound healing experiences"
          className="w-auto h-28 sm:h-36 md:h-40 lg:h-48 object-contain select-none pointer-events-none"
          draggable={false}
        />
      </section>

      <section
        className="w-full md:w-1/2 relative flex md:min-h-screen"
        style={{ backgroundColor: BLACK }}
      >
        <div
          aria-hidden
          className="absolute top-[12%] bottom-[12%] left-1/2 -translate-x-1/2 w-px"
          style={{ backgroundColor: "rgba(201, 191, 163, 0.35)" }}
        />
        {[
          { label: ["CORPORATE", "EVENTS"], href: "/events/public" },
          { label: ["PRIVATE", "EVENTS"], href: "/events/private" },
        ].map((p) => (
          <button
            key={p.href}
            type="button"
            onClick={() => navigate(p.href)}
            className="w-1/2 flex flex-col items-center justify-center bg-transparent appearance-none cursor-pointer py-24 md:py-0"
            style={{ color: BEIGE }}
          >
            <h2
              className="font-display text-center leading-[1.1] tracking-[0.02em] text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontWeight: 400 }}
            >
              {p.label.map((w) => (
                <span key={w} className="block">
                  {w}
                </span>
              ))}
            </h2>
            <svg
              width="48"
              height="14"
              viewBox="0 0 48 14"
              fill="none"
              className="mt-10 md:mt-14"
              aria-hidden
            >
              <line x1="0" y1="7" x2="46" y2="7" stroke={BEIGE} strokeWidth="1" />
              <polyline
                points="39,1 46,7 39,13"
                stroke={BEIGE}
                strokeWidth="1"
                fill="none"
                strokeLinecap="square"
              />
            </svg>
          </button>
        ))}
      </section>
    </div>
  );
};

export default HeroGateway;