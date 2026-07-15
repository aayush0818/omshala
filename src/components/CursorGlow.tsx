import { useEffect, useRef } from "react";

/**
 * Cursor-following soft clay glow. Mutates style directly — zero React re-renders.
 * Disabled on touch, small viewports, and when prefers-reduced-motion.
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 1024px)").matches;
    if (isTouch || reduced || small) return;

    const el = ref.current;
    if (!el) return;
    el.style.opacity = "1";

    let nextX = 0,
      nextY = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.background = `radial-gradient(380px circle at ${nextX}px ${nextY}px, hsl(var(--brand-purple-soft) / 0.07), transparent 65%)`;
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-700"
    />
  );
};

export default CursorGlow;
