import { useEffect, useRef } from "react";

/**
 * Sitewide ambient layer — slow drifting blurred orbs.
 * GPU-only transforms, paused when tab is hidden, gated by reduced-motion.
 */
const AmbientBackground = () => {
  const aRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let start = performance.now();
    let running = true;

    const tick = (now: number) => {
      if (!running) return;
      const t = (now - start) / 1000;
      if (aRef.current) {
        const x = Math.sin(t / 18) * 40;
        const y = Math.cos(t / 22) * 30;
        aRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (bRef.current) {
        const x = Math.cos(t / 26) * 50;
        const y = Math.sin(t / 30) * 35;
        bRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        start = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={aRef}
        className="absolute -top-[15%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-clay/[0.05] blur-[80px] will-change-transform"
      />
      <div
        ref={bRef}
        className="absolute -bottom-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-earth/[0.05] blur-[80px] will-change-transform"
      />
    </div>
  );
};

export default AmbientBackground;
