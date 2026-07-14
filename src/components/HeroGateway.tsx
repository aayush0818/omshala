import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import logoAsset from "@/assets/om-shala-logo.png.asset.json";

const cards = [
  {
    href: "/events/public",
    title: "Corporate Events",
    desc: "Sound healing for the office, leadership retreats and wellbeing programs.",
  },
  {
    href: "/events/private",
    title: "Private Events",
    desc: "Sound healing for weddings, birthdays, baby showers and intimate gatherings.",
  },
];

const HeroGateway = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 md:py-32"
      style={{ background: "hsl(var(--brand-purple))" }}
    >
      <motion.img
        src={logoAsset.url}
        alt="Om Shala — Sound Healing Experiences"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-56 sm:w-72 md:w-96 h-auto mb-16 md:mb-24 select-none"
        draggable={false}
      />

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={card.href}
              className="group block h-full p-8 sm:p-10 md:p-14 border border-brand-purple-fg/25 hover:border-brand-purple-fg/60 hover:bg-brand-purple-fg/[0.04] transition-all duration-500"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light text-brand-purple-fg leading-[1.1] tracking-tight">
                    {card.title}
                  </h2>
                  <p className="mt-5 md:mt-6 text-sm md:text-base text-brand-purple-fg/70 leading-relaxed max-w-sm font-sans">
                    {card.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-6 h-6 md:w-7 md:h-7 text-brand-purple-fg/70 group-hover:text-brand-purple-fg group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0"
                  strokeWidth={1.25}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroGateway;