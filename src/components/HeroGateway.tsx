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
// Shared painterly noise + vignette layers
const NOISE_URL =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.9  0 0 0 0 0.82  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const Vignette = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.35) 90%, rgba(0,0,0,0.55) 100%)",
    }}
  />
);

const CorporateCanvas = ({ active }: { active: boolean }) => (
  <div className="absolute inset-0 overflow-hidden bg-[hsl(210_20%_6%)]">
    {/* Layered base: aurora mesh, cool ink → warm ember */}
    <motion.div
      className="absolute inset-0"
      style={{
        background: [
          "radial-gradient(60% 60% at 20% 30%, hsl(205 40% 22% / 0.9), transparent 65%)",
          "radial-gradient(55% 55% at 78% 68%, hsl(28 55% 32% / 0.55), transparent 70%)",
          "radial-gradient(35% 45% at 65% 20%, hsl(200 30% 40% / 0.35), transparent 70%)",
          "linear-gradient(150deg, hsl(215 25% 9%) 0%, hsl(210 20% 6%) 55%, hsl(20 20% 8%) 100%)",
        ].join(", "),
      }}
      animate={{ scale: active ? 1.03 : 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />

    {/* Slow drifting aurora bloom */}
    <motion.div
      className="absolute -left-20 top-1/4 w-[70%] h-[70%] rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(200 60% 55% / 0.16) 0%, hsl(195 50% 45% / 0.08) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
      animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Concentric rings — a bowl seen from above */}
    <motion.svg
      viewBox="0 0 600 600"
      className="absolute -right-40 top-1/2 -translate-y-1/2 w-[780px] h-[780px]"
      fill="none"
      animate={{ rotate: active ? 12 : 0, scale: active ? 1.04 : 1 }}
      transition={{ duration: 2.6, ease: "easeOut" }}
      aria-hidden
    >
      <defs>
        <radialGradient id="ring-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--clay))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--clay))" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      {[290, 250, 212, 176, 142, 110, 80, 54, 32].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          stroke="url(#ring-fade)"
          strokeOpacity={0.14 + i * 0.02}
          strokeWidth={i === 0 ? 1.2 : 0.5}
        />
      ))}
    </motion.svg>

    {/* Warm clay ember — the sound itself */}
    <motion.div
      className="absolute -right-24 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(22 65% 55% / 0.42) 0%, hsl(22 55% 45% / 0.14) 40%, transparent 72%)",
        filter: "blur(30px)",
        mixBlendMode: "screen",
      }}
      animate={{ opacity: active ? 1 : 0.75, scale: active ? 1.1 : 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    />

    {/* Soft horizontal light bands, like sound waves */}
    <div className="absolute inset-0 opacity-60 pointer-events-none">
      {[18, 34, 52, 68, 84].map((top) => (
        <div
          key={top}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${top}%`,
            background:
              "linear-gradient(to right, transparent, hsl(var(--bone) / 0.10) 40%, hsl(var(--bone) / 0.14) 55%, transparent 90%)",
          }}
        />
      ))}
    </div>

    {/* Grain */}
    <div
      className="absolute inset-0 opacity-[0.09] mix-blend-overlay pointer-events-none"
      style={{ backgroundImage: NOISE_URL }}
    />
    <Vignette />
  </div>
);

const PrivateCanvas = ({ active }: { active: boolean }) => (
  <div className="absolute inset-0 overflow-hidden bg-[hsl(15_20%_6%)]">
    {/* Layered dusk mesh: rose, saffron, plum, ember */}
    <motion.div
      className="absolute inset-0"
      style={{
        background: [
          "radial-gradient(55% 55% at 30% 30%, hsl(18 55% 32% / 0.85), transparent 70%)",
          "radial-gradient(50% 55% at 78% 70%, hsl(340 35% 28% / 0.55), transparent 70%)",
          "radial-gradient(45% 50% at 55% 45%, hsl(38 60% 45% / 0.30), transparent 70%)",
          "linear-gradient(210deg, hsl(20 30% 12%) 0%, hsl(15 22% 8%) 55%, hsl(340 20% 8%) 100%)",
        ].join(", "),
      }}
      animate={{ scale: active ? 1.03 : 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />

    {/* Slow drifting warm bloom */}
    <motion.div
      className="absolute w-[80%] h-[80%] rounded-full"
      style={{
        left: "-20%",
        top: "10%",
        background:
          "radial-gradient(circle, hsl(22 70% 55% / 0.32) 0%, hsl(22 60% 45% / 0.10) 45%, transparent 72%)",
        filter: "blur(50px)",
        mixBlendMode: "screen",
      }}
      animate={{
        x: active ? 40 : [0, 20, 0],
        y: active ? -20 : [0, -12, 0],
        scale: active ? 1.1 : 1,
      }}
      transition={{
        duration: active ? 2 : 20,
        repeat: active ? 0 : Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Ember pool, bottom-right */}
    <motion.div
      className="absolute w-[560px] h-[560px] rounded-full"
      style={{
        right: "-15%",
        bottom: "-18%",
        background:
          "radial-gradient(circle, hsl(38 65% 55% / 0.32) 0%, hsl(340 40% 40% / 0.14) 45%, transparent 72%)",
        filter: "blur(45px)",
        mixBlendMode: "screen",
      }}
      animate={{ scale: active ? 1.1 : 1 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
    />

    {/* Vertical light column — a candle's breath */}
    <motion.div
      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-56"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, hsl(var(--bone) / 0.06) 35%, hsl(38 70% 70% / 0.14) 55%, hsl(var(--bone) / 0.04) 75%, transparent 100%)",
        filter: "blur(30px)",
      }}
      animate={{ opacity: active ? 1 : 0.75 }}
      transition={{ duration: 1.2 }}
    />

    {/* Painterly flowing strokes — raga lines */}
    <motion.svg
      viewBox="0 0 600 600"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      animate={{ opacity: active ? 0.55 : 0.35 }}
      transition={{ duration: 1.4 }}
      aria-hidden
    >
      <defs>
        <linearGradient id="stroke-grad-p" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="hsl(var(--clay))" stopOpacity="0.65" />
          <stop offset="60%" stopColor="hsl(38 70% 65%)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(var(--bone))" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <path
        d="M -20 360 C 120 280, 260 440, 400 320 S 620 240, 720 280"
        stroke="url(#stroke-grad-p)"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M -20 420 C 140 360, 280 480, 420 380 S 640 320, 720 360"
        stroke="url(#stroke-grad-p)"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M -20 500 C 160 440, 300 540, 440 460 S 660 400, 720 440"
        stroke="url(#stroke-grad-p)"
        strokeWidth="0.5"
        fill="none"
      />
    </motion.svg>

    {/* Grain */}
    <div
      className="absolute inset-0 opacity-[0.10] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: NOISE_URL,
      }}
    />
    <Vignette />
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