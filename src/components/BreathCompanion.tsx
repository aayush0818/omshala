import { useEffect, useState } from "react";
import { Wind } from "lucide-react";

/**
 * A slim 4-7-8 breath bar pinned to bottom of viewport.
 * Toggle persists in localStorage.
 */
type Phase = "inhale" | "hold" | "exhale";

const PHASES: { phase: Phase; ms: number }[] = [
  { phase: "inhale", ms: 4000 },
  { phase: "hold", ms: 7000 },
  { phase: "exhale", ms: 8000 },
];

const BreathCompanion = () => {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("inhale");
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setActive(localStorage.getItem("omshala-breath") === "1");
  }, []);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setScale(0.5);
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      const cur = PHASES[i % PHASES.length];
      setPhase(cur.phase);
      setScale(cur.phase === "inhale" ? 1 : cur.phase === "hold" ? 1 : 0);
      i += 1;
      timer = setTimeout(cycle, cur.ms);
    };
    cycle();
    return () => clearTimeout(timer);
  }, [active]);

  const toggle = () => {
    const next = !active;
    setActive(next);
    localStorage.setItem("omshala-breath", next ? "1" : "0");
  };

  const label = phase === "inhale" ? "Inhale" : phase === "hold" ? "Hold" : "Exhale";
  const duration = PHASES.find((p) => p.phase === phase)?.ms ?? 4000;

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={active}
        aria-label="Toggle breath companion"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase bg-background/70 backdrop-blur-md border border-foreground/10 hover:border-clay/40 hover:text-clay transition-colors"
      >
        <Wind className="w-3.5 h-3.5" />
        {active ? "Breathing" : "Breathe with us"}
      </button>

      {active && (
        <div aria-hidden className="fixed inset-x-0 bottom-0 z-30 pointer-events-none">
          <div className="relative h-px bg-clay/15">
            <div
              className="absolute top-0 left-1/2 h-px bg-clay/70 will-change-transform"
              style={{
                width: "60vw",
                transform: `translateX(-50%) scaleX(${0.05 + scale * 0.95})`,
                transformOrigin: "center",
                transition: `transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
              }}
            />
          </div>
          <div className="text-center">
            <span
              key={phase}
              className="inline-block mt-2 text-[10px] tracking-[0.4em] uppercase text-clay/80 animate-fade-in"
            >
              {label}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default BreathCompanion;
