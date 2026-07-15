import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Side = "corporate" | "private" | null;

// Om Shala brand purple, sampled from the official logo
const BRAND_PURPLE = "#2E2A5E";
const BRAND_PURPLE_HOVER = "#3A366F";

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
      <div className="absolute top-20 md:top-24 left-0 right-0 z-30 pointer-events-none">
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

      <div className="grid grid-cols-2 h-full">
        {panels.map((panel, idx) => {
          const isHovered = hovered === panel.key;
          const isDimmed = hovered && hovered !== panel.key;
          const isExpanding = expanding === panel.key;
          const isRetreating = expanding && expanding !== panel.key;

          return (
            <motion.button
              key={panel.key}
              type="button"
              onMouseEnter={() => !expanding && setHovered(panel.key)}
              onMouseLeave={() => !expanding && setHovered(null)}
              onClick={() => handleClick(panel.key, panel.href)}
              className={`group relative h-full w-full overflow-hidden text-left cursor-pointer border-bone/25 hover:border-bone/50 transition-colors duration-500 ${
                idx === 0 ? "border-t border-b border-l" : "border-t border-b border-r"
              }`}
              animate={{
                flex: isExpanding ? 2 : isRetreating ? 0 : 1,
                opacity: isRetreating ? 0 : 1,
                backgroundColor: isHovered ? BRAND_PURPLE_HOVER : BRAND_PURPLE,
              }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              aria-label={panel.title}
            >
              {/* Center shared divider */}
              {idx === 0 && (
                <div className="absolute top-0 bottom-0 right-0 w-px bg-bone/25" />
              )}

              {/* Full-panel content */}
              <div className="absolute inset-0 flex items-center justify-center px-8 md:px-14 lg:px-20">
                <motion.div
                  className="w-full max-w-xl text-center"
                  animate={{ y: isHovered ? -4 : 0, opacity: isDimmed ? 0.65 : 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bone leading-[1.05] tracking-tight"
                    style={{ fontWeight: 300 }}
                  >
                    {panel.title}
                  </h2>

                  <p className="mt-6 md:mt-8 max-w-md mx-auto text-sm md:text-base text-bone/70 font-sans font-light leading-relaxed tracking-wide">
                    {panel.subtitle}
                  </p>

                  <motion.div
                    className="mt-10 md:mt-12 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 border border-bone/40 group-hover:border-clay group-hover:bg-clay/10 text-bone group-hover:text-clay transition-colors duration-300"
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.4 }}
                    aria-hidden
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default HeroGateway;