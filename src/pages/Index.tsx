import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import GatewayHero from "@/components/GatewayHero";
import Reveal from "@/components/Reveal";
import portraitPtr from "@/assets/uploads/IMG_3535.webp.asset.json";

const credentials = [
  {
    stat: "12+",
    label: "Years",
    body: "Years of experience in the mindfulness industry.",
  },
  {
    stat: "Founder",
    label: "First of its kind",
    body: "Founder of Bombay's first studio dedicated to Sound Healing.",
  },
  {
    stat: "Spotify",
    label: "Universal Music",
    body: "Spotify meditations in collaboration with Universal Music.",
  },
  {
    stat: "Global",
    label: "Reach",
    body:
      "Private sessions for Royal Families in Dubai & Saudi Arabia, the late G. P. Hinduja, and the Health Minister of Goa. Online clients across the USA, Europe and Madagascar.",
  },
  {
    stat: "1000+",
    label: "Participants",
    body: "Large-scale sound healing experiences — Rotary Club, Vapi.",
  },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Gateway */}
          <GatewayHero />

          {/* About */}
          <section className="py-28 md:py-40 relative">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <Reveal className="lg:col-span-5">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={portraitPtr.url}
                      alt="Shrutika — founder of Om Shala"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/25 -z-10" />
                  </div>
                </Reveal>

                <Reveal className="lg:col-span-7" delay={0.15}>
                  <span className="text-xs tracking-[0.3em] uppercase text-clay">
                    About Om Shala
                  </span>
                  <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                    Nada Yoga — the yoga of sound.
                  </h2>
                  <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-[17px]">
                    <p>
                      Shrutika is a Meditation Teacher and Indian Classical Singer
                      practicing Nada Yoga, the yoga of sound and music, as a
                      pathway to the inner life.
                    </p>
                    <p>
                      Through Om Shala, she creates immersive Sound Healing
                      Experiences using Crystal Singing Bowls, the healing power
                      of Voice, Breathwork and Guided Relaxation.
                    </p>
                    <p>
                      Every experience is designed to help people slow down,
                      reconnect with themselves and experience deep rest — without
                      requiring prior meditation experience or belief systems.
                    </p>
                    <p className="italic text-foreground/80 pl-6 border-l-2 border-clay/40">
                      "Pure sound pulls you inward and brings deep relaxation. In
                      this state, the body is grounded, the mind is open and
                      emotions are free. Everything feels perfect, as it is."
                    </p>
                  </div>
                  <Link
                    to="/about"
                    className="mt-10 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-foreground link-underline"
                  >
                    More about Shrutika →
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Credentials */}
          <section className="py-28 md:py-40 bg-muted/20 border-y border-foreground/5">
            <div className="container mx-auto px-6">
              <Reveal>
                <div className="text-center mb-20 max-w-2xl mx-auto">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay">
                    Credentials
                  </span>
                  <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                    A practice held with rigour.
                  </h2>
                  <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {credentials.map((c, i) => (
                  <Reveal key={c.body} delay={i * 0.06}>
                    <div className="h-full p-10 bg-background border border-foreground/10 hover:border-clay/30 transition-colors duration-500 relative">
                      <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-clay/30" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-clay/30" />
                      <span className="font-serif text-5xl md:text-6xl font-light text-clay block">
                        {c.stat}
                      </span>
                      <span className="mt-3 block text-xs tracking-[0.25em] uppercase text-muted-foreground">
                        {c.label}
                      </span>
                      <p className="mt-6 text-foreground/80 leading-relaxed text-sm">
                        {c.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-32 md:py-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-earth/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-clay/15 rounded-full blur-[160px]" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              <Reveal>
                <span className="text-xs tracking-[0.35em] uppercase text-clay">
                  Get in touch
                </span>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-bone max-w-3xl mx-auto leading-tight">
                  Ready to create a Sound Healing Experience?
                </h2>
                <div className="mt-10 flex justify-center">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-bone text-charcoal text-sm tracking-[0.2em] uppercase overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-bone transition-colors duration-500">
                      Contact Om Shala
                    </span>
                    <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
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