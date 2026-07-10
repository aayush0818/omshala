import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import corporateImg from "@/assets/img8-sunset-circle.webp.asset.json";
import privateImg from "@/assets/img5-studio-night.webp.asset.json";

type Side = "corporate" | "private" | null;

const panels = [
  {
    key: "corporate" as const,
    href: "/events/public",
    eyebrow: "Corporate Events",
    title:
      "Sound Healing for the office, leadership retreats and employee wellbeing programs.",
    image: corporateImg.url,
    align: "left" as const,
  },
  {
    key: "private" as const,
    href: "/events/private",
    eyebrow: "Private Events",
    title:
      "Sound Healing for your next celebration or social event, from weddings to baby showers, to birthdays, to festive get-togethers.",
    image: privateImg.url,
    align: "right" as const,
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
    <section className="relative h-screen w-full overflow-hidden bg-charcoal text-bone">
      {/* Wordmark */}
      <div className="absolute top-0 left-0 right-0 z-40 pt-8 pointer-events-none">
        <div className="flex flex-col items-center gap-3">
          <span className="font-serif text-base tracking-[0.35em] text-bone/90">OM SHALA</span>
          <span className="h-px w-10 bg-bone/30" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-bone/50">
            Sound Healing Experiences &amp; Events
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {panels.map((panel) => {
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
              className="group relative h-[50vh] md:h-full w-full overflow-hidden text-left cursor-pointer"
              animate={{
                flex: isExpanding ? 2 : isRetreating ? 0 : 1,
                opacity: isRetreating ? 0 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              aria-label={`${panel.eyebrow}: ${panel.title}`}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isHovered || isExpanding ? 1.05 : 1,
                  filter: isHovered
                    ? "saturate(1.15) brightness(1)"
                    : isDimmed
                      ? "saturate(0.65) brightness(0.6)"
                      : "saturate(0.9) brightness(0.85)",
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={panel.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-charcoal/35 pointer-events-none" />
              <div className="absolute inset-0 bg-charcoal/20 pointer-events-none" />

              {/* Ambient ripple toward hovered side */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${panel.align === "left" ? "30%" : "70%"} 55%, hsl(var(--clay) / 0.18), transparent 55%)`,
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Vertical divider */}
              {panel.align === "left" && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 h-32 w-px bg-bone/15" />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-8 md:px-14 lg:px-20">
                <motion.div
                  className="max-w-md text-center"
                  animate={{ y: isHovered ? -6 : 0, opacity: isDimmed ? 0.55 : 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="inline-flex flex-col items-center gap-3 mb-8">
                    <span className="block text-xs md:text-[13px] tracking-[0.45em] uppercase text-bone font-medium">
                      {panel.eyebrow}
                    </span>
                    <span className="block h-px w-10 bg-clay" />
                  </span>
                  <h2
                    className="font-serif text-xl md:text-2xl lg:text-[1.75rem] leading-[1.4] font-light text-bone"
                    style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
                  >
                    {panel.title}
                  </h2>
                  <motion.div
                    className="mt-10 inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-bone/85"
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span>Explore</span>
                    <span className="inline-block w-8 h-px bg-clay" />
                    <span>→</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-[10px] tracking-[0.35em] uppercase text-bone/50">
        Choose your path
      </div>
    </section>
  );
};

export default HeroGateway;