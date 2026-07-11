import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

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
      </div>
      <div
        className={`absolute ${framePos[frame]} w-full h-full border border-clay/25 -z-10 pointer-events-none`}
      />
    </div>
  );
};

export default MediaVideo;