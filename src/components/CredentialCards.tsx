import Reveal from "./Reveal";

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
  eyebrow?: string;
  heading?: string;
  className?: string;
}

/**
 * Subtle credential card grid — used on secondary pages (Corporate, About).
 * Visually distinct from the homepage's bespoke editorial treatment.
 */
const CredentialCards = ({ eyebrow = "Credentials", heading, className }: Props) => {
  return (
    <section className={`py-24 md:py-32 relative overflow-hidden ${className ?? ""}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-14 flex items-end justify-between flex-wrap gap-6">
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase text-clay">
                  {eyebrow}
                </span>
                {heading && (
                  <h2 className="mt-4 font-serif text-2xl md:text-3xl font-light leading-tight max-w-xl">
                    {heading}
                  </h2>
                )}
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                A quiet record
              </span>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c} delay={0.04 + i * 0.03}>
                <div className="group h-full p-6 border border-foreground/10 hover:border-clay/40 transition-colors duration-500 bg-background/40">
                  <span className="font-serif text-xs text-clay tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-4 h-px w-8 bg-foreground/15 group-hover:w-12 group-hover:bg-clay/60 transition-all duration-500" />
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                    {c}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialCards;