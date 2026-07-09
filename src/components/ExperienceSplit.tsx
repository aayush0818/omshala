import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import corporateImg from "@/assets/experience-corporate.jpg";
import privateImg from "@/assets/experience-private.jpg";

type Side = "corporate" | "private" | null;

const panels = [
  {
    id: "corporate" as const,
    eyebrow: "For Organisations",
    title: "Corporate",
    description:
      "Therapeutic sound baths for leadership teams, offsites and ongoing employee wellbeing.",
    href: "/events/corporate",
    image: corporateImg,
  },
  {
    id: "private" as const,
    eyebrow: "For Life's Moments",
    title: "Private",
    description:
      "Intimate sound healing for weddings, birthdays, baby showers and meaningful gatherings.",
    href: "/events/private",
    image: privateImg,
  },
];

const ExperienceSplit = () => {
  const [hovered, setHovered] = useState<Side>(null);
  const reduce = useReducedMotion();

  const flexFor = (id: Side) => {
    if (reduce || !hovered) return 1;
    return hovered === id ? 1.2 : 0.8;
  };

  return (
    <section id="experience-split" className="relative bg-charcoal text-bone">
      <div className="py-20 md:py-28 text-center px-6 border-b border-bone/10">
        <span className="text-xs tracking-[0.3em] uppercase text-clay">The Choice</span>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
          Choose Your Experience
        </h2>
        <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
      </div>

      <div
        className="flex flex-col md:flex-row min-h-[80vh] md:min-h-[85vh] w-full"
        onMouseLeave={() => setHovered(null)}
      >
        {panels.map((p) => {
          const isActive = hovered === p.id;
          const isDimmed = hovered && !isActive;
          return (
            <motion.div
              key={p.id}
              animate={{ flexGrow: flexFor(p.id) }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ flexBasis: 0 }}
              className="relative overflow-hidden group cursor-pointer min-h-[60vh] md:min-h-0"
              onMouseEnter={() => setHovered(p.id)}
            >
              <Link to={p.href} className="absolute inset-0 z-20" aria-label={`Explore ${p.title}`} />

              <motion.img
                src={p.image}
                alt={p.title}
                loading="lazy"
                animate={{
                  scale: isActive ? 1.06 : 1,
                  filter: isDimmed
                    ? "brightness(0.55) saturate(0.85)"
                    : isActive
                    ? "brightness(0.85)"
                    : "brightness(0.7)",
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

              <motion.div
                animate={{ y: isActive ? -16 : 0, opacity: isDimmed ? 0.7 : 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16 lg:p-20"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-clay/90 mb-6">
                  {p.eyebrow}
                </span>
                <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-bone leading-none mb-6">
                  {p.title}
                </h3>
                <p className="text-bone/75 font-light max-w-md leading-relaxed mb-8 text-base md:text-lg">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-3 text-sm tracking-wide text-bone group-hover:text-clay transition-colors duration-500">
                  <span className="link-underline">Explore</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </motion.div>

              {/* hairline divider on desktop */}
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-bone/10 last:hidden" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSplit;