import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export type ExperienceItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string; poster?: string };

type Props = {
  items: ExperienceItem[];
  /** Fixed frame height so heterogeneous aspect ratios sit consistently. */
  className?: string;
};

/**
 * Editorial media carousel supporting mixed images + videos.
 * - Each slide preserves the media's native aspect ratio via object-contain.
 * - Videos have inline play/pause + mute controls.
 * - Auto-pauses videos when a slide leaves the viewport.
 */
const ExperienceCarousel = ({ items, className = "" }: Props) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Pause videos on any slide that isn't currently visible.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== current) {
        v.pause();
      }
    });
  }, [current]);

  return (
    <div className={`relative ${className}`}>
      <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem key={`${item.src}-${i}`}>
              <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-[16/10]">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : (
                  <VideoSlide
                    src={item.src}
                    poster={item.poster}
                    ariaLabel={item.alt}
                    setRef={(el) => (videoRefs.current[i] = el)}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 md:-left-12 h-10 w-10 bg-background/80 border-transparent text-foreground hover:bg-brand-purple hover:text-bone transition-colors" />
        <CarouselNext className="right-3 md:-right-12 h-10 w-10 bg-background/80 border-transparent text-foreground hover:bg-brand-purple hover:text-bone transition-colors" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-brand-purple" : "w-1.5 bg-foreground/25 hover:bg-brand-purple/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

type VideoSlideProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  setRef: (el: HTMLVideoElement | null) => void;
};

const VideoSlide = ({ src, poster, ariaLabel, setRef }: VideoSlideProps) => {
  const localRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = localRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = localRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <>
      <video
        ref={(el) => {
          localRef.current = el;
          setRef(el);
        }}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="absolute bottom-3 right-3 flex gap-2 z-10">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/70 backdrop-blur-sm text-bone hover:bg-charcoal/90 transition-colors"
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/70 backdrop-blur-sm text-bone hover:bg-charcoal/90 transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </>
  );
};

export default ExperienceCarousel;