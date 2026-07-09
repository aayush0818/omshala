import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import corporateImg from "@/assets/gateway-corporate.jpg";
import privateImg from "@/assets/gateway-private.jpg";

type Side = "corporate" | "private" | null;

const panels = [
  {
    id: "corporate" as const,
    to: "/corporate",
    kicker: "Corporate",
    title: "Sound Healing for Teams, Leadership Retreats & Employee Wellbeing",
    image: corporateImg,
    align: "left" as const,
  },
  {
    id: "private" as const,
    to: "/private",
    kicker: "Private",
    title: "Sound Healing for Celebrations, Gatherings & Special Moments",
    image: privateImg,
    align: "right" as const,
  },
];

const GatewayHero = () => {
  const [hovered, setHovered] = useState<Side>(null);
  const [chosen, setChosen] = useState<Side>(null);
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  const handleChoose = (side: Exclude<Side, null>, to: string) => {
    if (chosen) return;
    if (reduce) {
      navigate(to);
      return;
    }
    setChosen(side);
    window.setTimeout(() => navigate(to), 620);
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-charcoal">
      <div className="flex flex-col md:flex-row w-full h-full">
        {panels.map((p) => {
          const isHovered = hovered === p.id;
          const isChosen = chosen === p.id;
          const isOther = chosen && chosen !== p.id;
          const dim = hovered && hovered !== p.id;

          return (
            <motion.button
              key={p.id}
              type="button"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.id)}
              onBlur={() => setHovered(null)}
              onClick={() => handleChoose(p.id, p.to)}
              aria-label={`${p.kicker} — ${p.title}`}
              className="group relative flex-1 overflow-hidden text-left focus:outline-none"
              animate={{
                flex: isChosen ? 10 : isOther ? 0.001 : 1,
                opacity: isOther ? 0 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <motion.img
                src={p.image}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                animate={
                  reduce
                    ? {}
                    : {
                        scale: isChosen ? 1.08 : isHovered ? 1.04 : 1,
                        filter: isHovered
                          ? "saturate(1.1) brightness(0.85)"
                          : dim
                          ? "saturate(0.75) brightness(0.45)"
                          : "saturate(0.9) brightness(0.7)",
                      }
                }
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                loading="eager"
              />

              {/* Gradient veil */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent transition-opacity duration-700 ${
                  isHovered ? "opacity-70" : "opacity-90"
                }`}
              />

              {/* Ripple */}
              {isHovered && !reduce && (
                <motion.span
                  key={`${p.id}-ripple`}
                  className="pointer-events-none absolute top-1/2 left-1/2 rounded-full border border-bone/30"
                  initial={{ width: 40, height: 40, x: -20, y: -20, opacity: 0.6 }}
                  animate={{ width: 700, height: 700, x: -350, y: -350, opacity: 0 }}
                  transition={{ duration: 2.2, ease: "easeOut", repeat: Infinity }}
                />
              )}

              {/* Content */}
              <motion.div
                className={`relative z-10 flex flex-col justify-end h-full p-8 md:p-14 lg:p-20 ${
                  p.align === "right" ? "md:items-end md:text-right" : "md:items-start"
                }`}
                animate={reduce ? {} : { y: isHovered ? -6 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-bone/70 mb-4">
                  {p.kicker}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-bone max-w-md leading-tight">
                  {p.title}
                </h2>
                <span
                  className={`mt-8 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-bone/90 border-b border-bone/40 pb-1 transition-all duration-500 ${
                    isHovered ? "text-clay border-clay" : ""
                  }`}
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {/* Center seam wordmark */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center z-20">
        <div className="px-6 py-3 bg-charcoal/60 backdrop-blur-sm border border-bone/10">
          <span className="font-serif text-lg md:text-xl tracking-[0.35em] uppercase text-bone">
            Om Shala
          </span>
        </div>
      </div>

      {/* Bottom cue */}
      <div className="pointer-events-none absolute bottom-6 inset-x-0 flex justify-center z-20">
        <span className="text-[10px] tracking-[0.4em] uppercase text-bone/50">
          Choose your experience
        </span>
      </div>
    </section>
  );
};

export default GatewayHero;