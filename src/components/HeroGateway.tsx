import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import wordmark from "@/assets/omshala-wordmark-transparent.png.asset.json";

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
      {/* Wordmark (transparent PNG, centred branding anchor) */}
      <div className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 md:pb-8 px-4 flex justify-center">
        <img
          src={wordmark.url}
          alt="om shāla — sound healing experiences"
          className="w-auto h-24 sm:h-28 md:h-36 lg:h-40 object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-10">
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
                <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 min-h-[340px] sm:min-h-[360px] md:min-h-[400px]">
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
                    className="mt-4 sm:mt-5 md:mt-6 h-px w-10 sm:w-12"
                    style={{ backgroundColor: SUBTITLE_COLOR }}
                  />

                  <p
                    className="mt-4 sm:mt-5 md:mt-6 max-w-[220px] sm:max-w-xs md:max-w-sm font-sans font-light text-[0.8rem] sm:text-sm md:text-base leading-relaxed"
                    style={{ color: SUBTITLE_COLOR }}
                  >
                    {panel.subtitle}
                  </p>

                  <div className="flex-1" />

                  <motion.div
                    className="mt-6 sm:mt-8 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-md"
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
