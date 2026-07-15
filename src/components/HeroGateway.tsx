import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Side = "corporate" | "private" | null;

// Vertical gradient — lighter purple at top, deeper toward the bottom
const GATEWAY_BG =
  "linear-gradient(180deg, #3B3775 0%, #2E2A5E 45%, #1F1C45 100%)";

const BORDER_IDLE = "rgba(200, 190, 240, 0.35)";
const BORDER_HOVER = "rgba(220, 210, 250, 0.75)";
const SUBTITLE_COLOR = "rgba(200, 190, 240, 0.75)";

const panels = [
  {
    key: "corporate" as const,
    href: "/events/public",
    title: "Corporate Events",
    subtitle:
      "Sound Healing for the office, leadership retreats and employee wellbeing programs.",
  },
  {
    key: "private" as const,
    href: "/events/private",
    title: "Private Events",
    subtitle:
      "Sound Healing for your next celebration or social event, from weddings to baby showers, to birthdays, to festive get togethers.",
  },
];

const HeroGateway = () => {
  const [hovered, setHovered] = useState<Side>(null);
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-bone flex flex-col"
      style={{ background: GATEWAY_BG }}
    >
      {/* Wordmark + tagline (rendered as text, matching the reference exactly) */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-14 md:pb-16 px-4 flex flex-col items-center text-center">
        <h1
          className="font-display text-bone tracking-tight leading-none text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem]"
          style={{ fontWeight: 400 }}
        >
          om shāla
        </h1>
        <p
          className="mt-3 sm:mt-4 font-sans font-light tracking-wide text-[0.95rem] sm:text-lg md:text-xl"
          style={{ color: SUBTITLE_COLOR }}
        >
          sound healing experiences
        </p>
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-10 sm:pb-16">
        <div className="w-full max-w-6xl grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {panels.map((panel) => {
            const isHovered = hovered === panel.key;
            return (
              <motion.button
                key={panel.key}
                type="button"
                onMouseEnter={() => setHovered(panel.key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(panel.href)}
                aria-label={panel.title}
                className="group relative text-left cursor-pointer bg-transparent p-0 m-0 appearance-none rounded-2xl sm:rounded-3xl"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                style={{
                  border: `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}`,
                  transition: "border-color 400ms ease",
                }}
              >
                <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-10 py-10 sm:py-14 md:py-20 min-h-[420px] sm:min-h-[440px] md:min-h-[480px]">
                  <h2
                    className="font-display text-bone tracking-tight leading-[1.05] text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
                    style={{ fontWeight: 400 }}
                  >
                    {panel.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>

                  {/* Small divider line */}
                  <div
                    className="mt-5 sm:mt-6 md:mt-8 h-px w-10 sm:w-12"
                    style={{ backgroundColor: SUBTITLE_COLOR }}
                  />

                  <p
                    className="mt-5 sm:mt-6 md:mt-8 max-w-[220px] sm:max-w-xs md:max-w-sm font-sans font-light text-[0.8rem] sm:text-sm md:text-base leading-relaxed"
                    style={{ color: SUBTITLE_COLOR }}
                  >
                    {panel.subtitle}
                  </p>

                  <div className="flex-1" />

                  <motion.div
                    className="mt-8 sm:mt-10 md:mt-12 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md"
                    animate={{
                      backgroundColor: isHovered
                        ? "rgba(200, 190, 240, 0.08)"
                        : "rgba(200, 190, 240, 0)",
                    }}
                    transition={{ duration: 0.4 }}
                    aria-hidden
                    style={{
                      border: `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}`,
                      transition: "border-color 400ms ease",
                    }}
                  >
                    <svg
                      width="22"
                      height="10"
                      viewBox="0 0 24 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: SUBTITLE_COLOR }}
                    >
                      <line x1="0" y1="5" x2="22" y2="5" stroke="currentColor" strokeWidth="1" />
                      <polyline points="17,0.5 22.5,5 17,9.5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="square" />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroGateway;
