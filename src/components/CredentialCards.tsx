import Reveal from "./Reveal";
import MediaVideo from "./MediaVideo";
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";

export const CREDENTIALS = [
  "12+ years of experience in the mindfulness industry",
  "Founder of Om Shala, first studio in Bombay dedicated to Sound Healing",
  "Spotify meditations in collaboration with Universal Music",
  "Sessions for members of the Royal Family in Dubai & Saudi Arabia",
  "Private sessions for the Late G. P. Hinduja in London",
  "Private sessions for the Health Minister of Goa",
  "Large-scale event for 1,000+ participants (Rotary Club, Vapi)",
  "Online clients across the US, Europe & Madagascar",
];

interface Props {
  heading?: string;
  className?: string;
}

/**
 * Editorial credentials layout:
 * Left  = clean vertical list (no cards, no containers)
 * Right = supporting video
 */
const CredentialCards = ({ heading = "Credentials", className }: Props) => {
  return (
    <section className={`py-24 md:py-40 relative overflow-hidden ${className ?? ""}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — credentials list */}
          <div>
            <Reveal>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
                {heading}
              </h2>
              <div className="mt-6 h-px w-14 bg-clay/60" />
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-12 space-y-6">
                {CREDENTIALS.map((c) => (
                  <li
                    key={c}
                    className="text-foreground/85 text-base md:text-lg leading-relaxed pb-6 border-b border-foreground/10 last:border-0"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — supporting video */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={0.1}>
              <MediaVideo
                src={homeVideoAsset.url}
                fallbackAspect="9 / 16"
                frame="br"
                ariaLabel="A moment from an Om Shala experience"
                className="max-w-md mx-auto lg:mx-0 lg:ml-auto"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialCards;