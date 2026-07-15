import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Side = "corporate" | "private" | null;

// Om Shala brand purple, sampled from the official logo
const BRAND_PURPLE = "#2E2A5E";
const BRAND_PURPLE_HOVER = "#3A366F";

const panels = [
  { key: "corporate" as const, href: "/events/public", title: "Corporate Events" },
  { key: "private" as const, href: "/events/private", title: "Private Events" },
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
              className="group relative h-full w-full overflow-hidden text-left cursor-pointer"
              animate={{
                flex: isExpanding ? 2 : isRetreating ? 0 : 1,
                opacity: isRetreating ? 0 : 1,
                backgroundColor: isHovered ? BRAND_PURPLE_HOVER : BRAND_PURPLE,
              }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              aria-label={panel.title}
            >
              {/* Vertical divider between panels */}
              {idx === 0 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 h-40 w-px bg-bone/20" />
              )}

              {/* Card container — improves clickability */}
              <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 lg:px-16">
                <motion.div
                  className="w-full max-w-md rounded-sm border border-bone/25 bg-bone/[0.03] group-hover:border-clay/70 group-hover:bg-bone/[0.06] transition-colors duration-500 px-8 py-14 md:px-12 md:py-20 text-center"
                  animate={{ y: isHovered ? -6 : 0, opacity: isDimmed ? 0.6 : 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-bone leading-tight tracking-tight">
                    {panel.title}
                  </h2>

                  <motion.div
                    className="mt-8 md:mt-10 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 border border-bone/40 group-hover:border-clay group-hover:bg-clay/10 text-bone group-hover:text-clay transition-colors duration-300"
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