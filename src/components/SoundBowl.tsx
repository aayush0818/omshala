import { useRef, useState, useEffect } from "react";

/**
 * Floating crystal-bowl button. Click to play a 6s 435 Hz sine tone (Web Audio).
 * Concentric SVG ripples emanate while playing.
 */
const SoundBowl = () => {
  const ctxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const stop = () => {
    const g = gainRef.current;
    const ctx = ctxRef.current;
    if (g && ctx) {
      g.gain.cancelScheduledValues(ctx.currentTime);
      g.gain.setTargetAtTime(0, ctx.currentTime, 0.6);
    }
    setTimeout(() => {
      try {
        oscRef.current?.stop();
      } catch {}
      oscRef.current = null;
    }, 1500);
    setPlaying(false);
  };

  const play = () => {
    const Ctx =
      window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    if (!ctxRef.current) ctxRef.current = new Ctx();
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 435;
    gain.gain.value = 0;
    osc.connect(gain).connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.linearRampToValueAtTime(0.18, now + 1.2);
    gain.gain.setValueAtTime(0.18, now + 5);
    gain.gain.linearRampToValueAtTime(0, now + 7);
    osc.start(now);
    osc.stop(now + 7.2);
    osc.onended = () => {
      setPlaying(false);
      oscRef.current = null;
    };
    oscRef.current = osc;
    gainRef.current = gain;
    setPlaying(true);
  };

  const toggle = () => (playing ? stop() : play());

  return (
    <button
      type="button"
      onClick={toggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={playing ? "Stop 435 Hz tone" : "Play 435 Hz tone"}
      className="group fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-background/70 backdrop-blur-md border border-clay/40 hover:border-clay flex items-center justify-center transition-colors"
    >
      {/* ripples */}
      {playing && !reduced && (
        <span aria-hidden className="absolute inset-0 pointer-events-none">
          <span className="absolute inset-0 rounded-full border border-clay/40 animate-ripple" />
          <span className="absolute inset-0 rounded-full border border-clay/30 animate-ripple [animation-delay:1s]" />
          <span className="absolute inset-0 rounded-full border border-clay/20 animate-ripple [animation-delay:2s]" />
        </span>
      )}
      <svg
        viewBox="0 0 64 64"
        className={`w-7 h-7 md:w-8 md:h-8 text-clay transition-transform duration-700 ${
          playing ? "animate-spin-slow" : hovered ? "rotate-12" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="32" cy="32" r="22" opacity="0.9" />
        <circle cx="32" cy="32" r="16" opacity="0.6" />
        <circle cx="32" cy="32" r="10" opacity="0.35" />
        <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
      </svg>
      <span className="absolute right-full mr-3 whitespace-nowrap text-[10px] tracking-[0.25em] uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {playing ? "Playing 435 Hz" : "Tap for 435 Hz"}
      </span>
    </button>
  );
};

export default SoundBowl;
