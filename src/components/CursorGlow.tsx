import { useEffect, useState } from "react";

/**
 * Soft clay-tinted radial glow that gently follows the cursor.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
const CursorGlow = () => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    let raf = 0;
    let nextX = 0;
    let nextY = 0;
    const onMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setPos({ x: nextX, y: nextY });
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled || !pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{
        background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, hsl(var(--clay) / 0.08), transparent 65%)`,
      }}
    />
  );
};

export default CursorGlow;