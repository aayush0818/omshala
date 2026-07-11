import Reveal from "./Reveal";
import { CREDENTIALS } from "./CredentialCards";

interface Props {
  className?: string;
}

/**
 * Shared editorial credentials block — two-column with sticky heading.
 * Used on Home, Corporate, and Private pages for a single consistent system.
 */
const CredentialsEditorial = ({ className }: Props) => {
  return (
    <section className={`py-20 md:py-44 border-t border-foreground/5 relative overflow-hidden ${className ?? ""}`}>
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-clay/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-24 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
                  Credentials
                </h2>
                <div className="mt-10 h-px w-16 bg-clay/60" />
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-7 divide-y divide-foreground/10 border-t border-foreground/10">
            {CREDENTIALS.map((c, i) => (
              <Reveal as="li" key={c} delay={0.04 + i * 0.03}>
                <div className="group flex gap-6 md:gap-10 py-8 md:py-10">
                  <span className="font-serif text-2xl md:text-3xl text-clay/70 leading-none pt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/90 font-light group-hover:text-foreground transition-colors duration-500">
                    {c}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CredentialsEditorial;