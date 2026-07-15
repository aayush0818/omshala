import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Side = "corporate" | "private" | null;

// Om Shala brand purple, sampled from the official logo
const BRAND_PURPLE = "#2E2A5E";

// Warm grey border tuned against the purple background
const BORDER_IDLE = "rgba(232, 224, 208, 0.28)";
const BORDER_HOVER = "rgba(232, 224, 208, 0.65)";

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
  const [expanding, setExpanding] = useState<Side>(null);
  const navigate = useNavigate();

  const handleClick = (side: Side, href: string) => {
    if (expanding) return;
    setExpanding(side);
    setTimeout(() => navigate(href), 620);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden text-bone"
      style={{ backgroundColor: BRAND_PURPLE }}
    >
      {/* Brand mark + tagline */}
      <div className="absolute top-10 md:top-14 left-0 right-0 z-30 pointer-events-none">
        <div className="flex flex-col items-center gap-3 md:gap-4 px-4">
          <span
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-bone text-center leading-none"
            style={{ letterSpacing: "-0.01em" }}
          >
            om sh<span style={{ fontFeatureSettings: '"liga"' }}>ā</span>la
          </span>
          <span className="text-[11px] md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-bone/70 text-center font-sans font-light lowercase">
            sound healing experiences
          </span>
        </div>
      </div>

      {/* Full-height flex panels so the divider slides with the flex transition */}
      <div className="flex h-full w-full">
        {panels.map((panel, idx) => {
          const isHovered = hovered === panel.key;
          const isExpanding = expanding === panel.key;
          const isRetreating = expanding && expanding !== panel.key;

          // Flex ratios: 3 = expanded (75%), 1 = compressed (25%), default 1:1
          const flexValue = isExpanding
            ? 2
            : isRetreating
            ? 0
            : hovered
            ? isHovered
              ? 3
              : 1
            : 1;

          return (
            <motion.button
              key={panel.key}
              type="button"
              onMouseEnter={() => !expanding && setHovered(panel.key)}
              onMouseLeave={() => !expanding && setHovered(null)}
              onClick={() => handleClick(panel.key, panel.href)}
              className="group relative h-full min-w-0 overflow-hidden text-left cursor-pointer bg-transparent p-0 m-0 appearance-none"
              animate={{
                flex: flexValue,
                opacity: isRetreating ? 0 : 1,
              }}
              transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
              aria-label={panel.title}
              style={{
                borderTop: `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}`,
                borderBottom: `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}`,
                borderLeft: idx === 0 ? `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}` : undefined,
                borderRight: idx === 1 ? `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}` : undefined,
                transition: "border-color 500ms ease",
              }}
            >
              {/* Shared divider between panels — moves with the left panel */}
              {idx === 0 && (
                <div
                  className="absolute top-0 bottom-0 right-0 w-px transition-colors duration-500"
                  style={{ backgroundColor: hovered ? BORDER_HOVER : BORDER_IDLE }}
                />
              )}

              {/* Full-panel content */}
              <div className="absolute inset-0 flex items-center justify-center px-8 md:px-14 lg:px-20">
                <div className="w-full max-w-xl text-center">
                  <h2
                    className="font-display text-bone leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ fontWeight: 300 }}
                  >
                    {panel.title}
                  </h2>

                  <p
                    className="mt-6 md:mt-8 max-w-md mx-auto text-sm md:text-base font-sans font-light leading-relaxed tracking-wide"
                    style={{ color: "rgba(244, 241, 236, 0.75)" }}
                  >
                    {panel.subtitle}
                  </p>

                  {/* Refined arrow: subtle border brightening and gentle background fill on hover */}
                  <motion.div
                    className="mt-10 md:mt-12 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 relative"
                    animate={{
                      backgroundColor: isHovered
                        ? "rgba(232, 224, 208, 0.08)"
                        : "rgba(232, 224, 208, 0)",
                    }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    aria-hidden
                    style={{
                      border: `1px solid ${isHovered ? BORDER_HOVER : BORDER_IDLE}`,
                      transition: "border-color 500ms ease",
                    }}
                  >
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 24 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="overflow-visible"
                    >
                      <line
                        x1="0"
                        y1="5"
                        x2="22"
                        y2="5"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-bone"
                      />
                      <polyline
                        points="17,0.5 22.5,5 17,9.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-bone"
                        strokeLinecap="square"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default HeroGateway;
