import Reveal from "@/components/Reveal";

const bigStats = [
  { value: "12+", label: "Years of Experience" },
  { value: "1000+", label: "Largest Live Event" },
  { value: "International", label: "Clients Across Multiple Countries" },
  { value: "Founder", label: "Bombay's First Dedicated Sound Healing Studio" },
];

const highlights = [
  "Spotify collaboration with Universal Music",
  "Royal Family sessions in Dubai & Saudi Arabia",
  "Private sessions for the Late G. P. Hinduja in London",
  "Private sessions for the Health Minister of Goa",
  "International online clients across the US, Europe & Madagascar",
];

const CredentialsSection = () => {
  return (
    <section className="py-28 md:py-40 border-y border-foreground/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">
              Credentials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light max-w-2xl leading-[1.1]">
              A decade of holding space, on stages and in private rooms.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
            {bigStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-background p-10 h-full flex flex-col">
                  <span className="font-serif text-4xl md:text-5xl font-light text-clay leading-none">
                    {s.value}
                  </span>
                  <span className="mt-6 text-sm text-muted-foreground leading-relaxed">
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 max-w-3xl">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">
                Selected Work
              </p>
            </Reveal>
            <ul className="divide-y divide-foreground/10">
              {highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.05}>
                  <li className="py-5 flex items-start gap-6 text-foreground/80 font-light">
                    <span className="text-clay/60 text-sm pt-1 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="text-lg leading-relaxed">{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;