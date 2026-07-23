import Reveal from "./Reveal";
import guidePortraitAsset from "@/assets/img1-portrait.webp.asset.json";

const guidePortrait = guidePortraitAsset.url;

/**
 * Shared About block — rendered identically on Home, Corporate, and Private pages.
 */
const AboutSection = () => {
  return (
    <section className="py-20 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={guidePortrait} alt="Shrutika, founder of Om Shala" className="w-full h-full object-cover" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-purple/20 -z-10" />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <span className="text-[13px] tracking-[0.35em] uppercase text-clay">FOUNDER OF OM SHALA</span>
            </Reveal>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed max-w-xl">
              <Reveal delay={0.1}>
                <p>
                  Shrutika is a Meditation Teacher and Indian Classical Singer practicing Nada Yoga, the yoga of sound
                  &amp; music, as a pathway to the inner life. She creates unique Sound Healing Experiences using
                  Crystal Singing Bowls and the instrument of Voice, supported by Breathwork and Guided Relaxation.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="italic text-foreground/80 pl-6 border-l border-brand-purple/40 mt-6">
                  "Pure sound pulls you inward and brings deep relaxation. In this state, the body is grounded, mind is
                  open and emotions are free. Everything feels perfect, as it is."
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="pl-6 mt-2 text-sm text-foreground/70">– Shrutika</p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-2">
                  Her sessions are designed to be simple, effective, and accessible, without requiring effort, belief
                  systems, or prior practice.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
