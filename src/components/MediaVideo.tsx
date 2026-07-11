import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** Aspect ratio hint while metadata loads (e.g. "16 / 9"). */
  fallbackAspect?: string;
  frame?: "br" | "bl" | "tl" | "tr" | "none";
  ariaLabel?: string;
};

/**
 * Standalone video block: autoplay, muted, looped, inline.
 * Preserves the video's native aspect ratio (object-contain).
 */
const MediaVideo = ({
  src,
  poster,
  className = "",
  fallbackAspect = "16 / 9",
  frame = "br",
  ariaLabel,
}: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const framePos: Record<string, string> = {
    br: "-bottom-4 -right-4",
    bl: "-bottom-4 -left-4",
    tl: "-top-4 -left-4",
    tr: "-top-4 -right-4",
    none: "hidden",
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative w-full overflow-hidden bg-charcoal"
        style={{ aspectRatio: fallbackAspect }}
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={ariaLabel}
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/60 backdrop-blur-sm text-bone hover:bg-charcoal/80 transition-colors"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/60 backdrop-blur-sm text-bone hover:bg-charcoal/80 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div
        className={`absolute ${framePos[frame]} w-full h-full border border-clay/25 -z-10 pointer-events-none`}
      />
    </div>
  );
};

export default MediaVideo;