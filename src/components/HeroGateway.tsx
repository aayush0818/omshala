import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoAsset from "@/assets/omshala-logotype.png.asset.json";

type Side = "corporate" | "private" | null;

const panels = [
  {
    key: "corporate" as const,
    href: "/events/public",
    eyebrow: "Corporate Events",
    description:
      "For the office, leadership retreats and employee wellbeing programs.",
    align: "left" as const,
  },
  {
    key: "private" as const,
    href: "/events/private",
    eyebrow: "Private Events",
    description:
      "For celebrations, weddings, baby showers, birthdays and intimate gatherings.",
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
    <section className="relative h-screen w-full overflow-hidden bg-omshala text-bone font-sans">
      {/* Logotype mark */}
      <div className="absolute top-16 md:top-20 left-0 right-0 z-30 pt-2 md:pt-4 pointer-events-none flex justify-center">
        <img
          src={logoAsset.url}
          alt="Om Shala — Sound Healing Experiences"
          className="w-40 md:w-56 lg:w-64 h-auto select-none"
        />
      </div>

      <div className="grid grid-cols-2 h-full">
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
              className="group relative h-full w-full overflow-hidden text-left cursor-pointer bg-omshala transition-colors duration-500 hover:bg-[hsl(243_37%_22%)]"
              animate={{
                flex: isExpanding ? 2 : isRetreating ? 0 : 1,
                opacity: isRetreating ? 0 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              aria-label={panel.eyebrow}
            >
              {/* Hover wash */}
              <motion.div
                className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Vertical divider between panels */}
              {panel.align === "left" && (
                <div className="absolute top-[15%] bottom-[15%] right-0 w-px bg-bone/20" />
              )}

              {/* Dim inactive panel */}
              <motion.div
                className="absolute inset-0 bg-omshala pointer-events-none"
                animate={{ opacity: isDimmed ? 0.45 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4 md:px-14 lg:px-20">
                <motion.div
                  className="max-w-md text-center"
                  animate={{ y: isHovered ? -6 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-semibold tracking-tight text-bone">
                    {panel.eyebrow}
                  </h2>
                  <p className="hidden md:block mt-6 text-sm lg:text-base text-bone/65 font-light leading-relaxed max-w-sm mx-auto">
                    {panel.description}
                  </p>
                  <motion.div
                    className="mt-8 md:mt-10 inline-flex items-center justify-center text-bone/85"
                    animate={{ x: isHovered ? 6 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="inline-block w-8 md:w-10 h-px bg-clay mr-3" />
                    <span className="text-xl md:text-2xl leading-none">→</span>
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