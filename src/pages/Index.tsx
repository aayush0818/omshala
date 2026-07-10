import { Link } from "react-router-dom";
import HeroGateway from "@/components/HeroGateway";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import guidePortraitAsset from "@/assets/img1-portrait.webp.asset.json";
import { CREDENTIALS } from "@/components/CredentialCards";

const guidePortrait = guidePortraitAsset.url;
const credentials = CREDENTIALS;

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <main>
          {/* 1. Gateway */}
          <HeroGateway />

          {/* 2. About Om Shala */}
          <section className="py-28 md:py-40 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <Reveal className="lg:col-span-5">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={guidePortrait}
                      alt="Shrutika, founder of Om Shala"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/20 -z-10" />
                  </div>
                </Reveal>

                <div className="lg:col-span-7">
                  <Reveal delay={0.05}>
                    <span className="text-[10px] tracking-[0.35em] uppercase text-clay">
                      About Om Shala
                    </span>
                    <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
                      A quiet practice, held with care.
                    </h2>
                  </Reveal>
                  <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed max-w-xl">
                    <Reveal delay={0.1}>
                      <p>
                        Shrutika is a Meditation Teacher and Indian Classical Singer practicing
                        Nada Yoga, the yoga of sound and music, as a pathway to the inner life.
                      </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <p>
                        Through Om Shala, she creates immersive Sound Healing Experiences using
                        Crystal Singing Bowls, the healing power of Voice, Breathwork and
                        Guided Relaxation.
                      </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                      <p>
                        Every experience is designed to help people slow down, reconnect with
                        themselves and experience deep rest — without requiring prior meditation
                        experience or belief systems.
                      </p>
                    </Reveal>
                    <Reveal delay={0.25}>
                      <p className="italic text-foreground/80 pl-6 border-l border-clay/40 mt-10">
                        "Pure sound pulls you inward and brings deep relaxation. In this state,
                        the body is grounded, the mind is open and emotions are free. Everything
                        feels perfect, as it is."
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Credentials — editorial two-column */}
          <section className="py-28 md:py-44 border-t border-foreground/5 relative overflow-hidden">
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-clay/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-14 lg:gap-24 max-w-6xl mx-auto">
                <div className="lg:col-span-5">
                  <div className="lg:sticky lg:top-32">
                    <Reveal>
                      <span className="text-[10px] tracking-[0.35em] uppercase text-clay">
                        Credentials
                      </span>
                      <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
                        A body of work
                        <span className="block text-clay italic">built quietly,</span>
                        over years.
                      </h2>
                      <div className="mt-10 h-px w-16 bg-clay/60" />
                      <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
                        A quiet record of the rooms Om Shala has been asked to hold —
                        boardrooms, palaces, festivals, private homes.
                      </p>
                    </Reveal>
                  </div>
                </div>

                <ol className="lg:col-span-7 divide-y divide-foreground/10 border-t border-foreground/10">
                  {credentials.map((c, i) => (
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

          {/* 4. Contact CTA */}
          <section className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="container mx-auto px-6 text-center">
              <Reveal>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl mx-auto">
                  Ready to create a Sound Healing Experience?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 px-12 py-5 border border-foreground/20 text-foreground text-sm tracking-[0.2em] uppercase hover:border-clay hover:text-clay transition-all duration-500"
                  >
                    <span>Contact Om Shala</span>
                    <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;