import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Side = "corporate" | "private" | null;

const panels = [
  {
    key: "corporate" as const,
    href: "/events/public",
    eyebrow: "Corporate Events",
    title:
      "Sound Healing for the office, leadership retreats and employee wellbeing programs.",
    align: "left" as const,
  },
  {
    key: "private" as const,
    href: "/events/private",
    eyebrow: "Private Events",
    title:
      "Sound Healing for your next celebration or social event, from weddings to baby showers, to birthdays, to festive get-togethers.",
    align: "right" as const,
  },
];

/**
 * Abstract painterly canvas for each panel — no photography.
 * Corporate = cool, structured, concentric rings (bowl-from-above).
 * Private  = warm, flowing blooms, vertical light column.
 */
const CorporateCanvas = ({ active }: { active: boolean }) => (
  <div className="absolute inset-0 overflow-hidden bg-charcoal">
    {/* Base painterly gradient */}
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 30% 40%, hsl(var(--charcoal) / 0.4), hsl(var(--charcoal)) 70%), linear-gradient(135deg, hsl(220 15% 12%) 0%, hsl(215 10% 8%) 60%, hsl(200 8% 6%) 100%)",
      }}
      animate={{ scale: active ? 1.04 : 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
    {/* Soft light bands */}
    <div className="absolute inset-0 opacity-70">
      <div className="absolute top-[22%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-bone/15 to-transparent" />
      <div className="absolute top-[38%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-bone/8 to-transparent" />
      <div className="absolute bottom-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-bone/10 to-transparent" />
    </div>
    {/* Concentric rings, singing bowl from above */}
    <motion.svg
      viewBox="0 0 600 600"
      className="absolute -right-40 top-1/2 -translate-y-1/2 w-[720px] h-[720px]"
      fill="none"
      animate={{ rotate: active ? 8 : 0, scale: active ? 1.03 : 1 }}
      transition={{ duration: 2.4, ease: "easeOut" }}
      aria-hidden
    >
      {[280, 240, 200, 160, 120, 84, 52].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          stroke="hsl(var(--clay))"
          strokeOpacity={0.06 + i * 0.02}
          strokeWidth="0.6"
        />
      ))}
    </motion.svg>
    {/* Warm clay ember */}
    <motion.div
      className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--clay) / 0.28) 0%, hsl(var(--clay) / 0.06) 40%, transparent 70%)",
        filter: "blur(20px)",
      }}
      animate={{ opacity: active ? 1 : 0.75, scale: active ? 1.08 : 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    />
    {/* Bone haze upper-left */}
    <div
      className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(var(--bone)) 0%, transparent 70%)" }}
    />
    {/* Grain */}
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  </div>
);

const PrivateCanvas = ({ active }: { active: boolean }) => (
  <div className="absolute inset-0 overflow-hidden bg-charcoal">
    {/* Warm base */}
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(200deg, hsl(20 25% 12%) 0%, hsl(18 20% 9%) 45%, hsl(15 15% 6%) 100%)",
      }}
      animate={{ scale: active ? 1.04 : 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
    {/* Organic bloom — clay */}
    <motion.div
      className="absolute w-[720px] h-[720px] rounded-full"
      style={{
        left: "-20%",
        top: "20%",
        background:
          "radial-gradient(circle, hsl(var(--clay) / 0.32) 0%, hsl(var(--clay) / 0.08) 45%, transparent 70%)",
        filter: "blur(30px)",
      }}
      animate={{
        x: active ? 40 : 0,
        y: active ? -20 : 0,
        scale: active ? 1.08 : 1,
      }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
    {/* Softer bloom — dusk */}
    <motion.div
      className="absolute w-[520px] h-[520px] rounded-full"
      style={{
        right: "-15%",
        bottom: "-15%",
        background:
          "radial-gradient(circle, hsl(35 55% 55% / 0.22) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      animate={{ scale: active ? 1.1 : 1 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
    />
    {/* Vertical light column */}
    <motion.div
      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-40"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, hsl(var(--bone) / 0.08) 40%, hsl(var(--bone) / 0.12) 55%, transparent 100%)",
        filter: "blur(24px)",
      }}
      animate={{ opacity: active ? 1 : 0.7 }}
      transition={{ duration: 1.2 }}
    />
    {/* Painterly stroke — SVG flowing form */}
    <motion.svg
      viewBox="0 0 600 600"
      className="absolute inset-0 w-full h-full opacity-30"
      preserveAspectRatio="xMidYMid slice"
      animate={{ opacity: active ? 0.45 : 0.28 }}
      transition={{ duration: 1.4 }}
      aria-hidden
    >
      <defs>
        <linearGradient id="stroke-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--clay))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--bone))" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M -20 380 C 120 300, 260 460, 400 340 S 620 260, 720 300"
        stroke="url(#stroke-grad)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M -20 440 C 140 380, 280 500, 420 400 S 640 340, 720 380"
        stroke="url(#stroke-grad)"
        strokeWidth="0.6"
        fill="none"
      />
    </motion.svg>
    {/* Grain */}
    <div
      className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  </div>
);

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
          const active = Boolean(isHovered || isExpanding);

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
              {/* Abstract painterly canvas */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: isDimmed ? 0.55 : 1 }}
                transition={{ duration: 0.6 }}
              >
                {panel.key === "corporate" ? (
                  <CorporateCanvas active={active} />
                ) : (
                  <PrivateCanvas active={active} />
                )}
              </motion.div>

              {/* Legibility veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-charcoal/30 pointer-events-none" />

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