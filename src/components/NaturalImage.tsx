import { CSSProperties, useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Optional aspect fallback used only while the image is loading. */
  fallbackAspect?: string;
  /** Add a subtle offset frame behind the image. */
  frame?: "br" | "bl" | "tl" | "tr" | "none";
  className?: string;
  eager?: boolean;
};

/**
 * Renders a photograph at its natural aspect ratio, never cropped or stretched.
 * Uses object-contain against a soft muted backdrop so the composition is always
 * fully visible.
 */
const NaturalImage = ({
  src,
  alt,
  fallbackAspect = "4 / 5",
  frame = "br",
  className = "",
  eager = false,
}: Props) => {
  const [ratio, setRatio] = useState<string | null>(null);

  const framePos: Record<string, string> = {
    br: "-bottom-4 -right-4",
    bl: "-bottom-4 -left-4",
    tl: "-top-4 -left-4",
    tr: "-top-4 -right-4",
    none: "hidden",
  };

  const style: CSSProperties = { aspectRatio: ratio ?? fallbackAspect };

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative w-full overflow-hidden bg-muted/30"
        style={style}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onLoad={(e) => {
            const t = e.currentTarget;
            if (t.naturalWidth && t.naturalHeight) {
              setRatio(`${t.naturalWidth} / ${t.naturalHeight}`);
            }
          }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      <div
        className={`absolute ${framePos[frame]} w-full h-full border border-brand-purple/25 -z-10 pointer-events-none`}
      />
    </div>
  );
};

export default NaturalImage;