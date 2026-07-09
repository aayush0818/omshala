import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import portraitPtr from "@/assets/uploads/IMG_3535.webp.asset.json";

const pillars = [
  {
    title: "Nada Yoga",
    body:
      "The yoga of sound and music — an ancient path that uses vibration as a doorway to the inner life. Every experience at Om Shala rests on this lineage.",
  },
  {
    title: "Voice",
    body:
      "The instrument closest to the body. Live singing, guided in the moment, tunes the room to the group in front of it — no two sessions ever sound the same.",
  },
  {
    title: "Indian Classical Music",
    body:
      "Ragas carry mood and time. Sung softly as lullabies for the soul, they hold participants gently through the deepest part of the practice.",
  },
  {
    title: "Crystal Singing Bowls",
    body:
      "Tuned to 435 Hz — the frequency of nature — the bowls produce pure tones that quiet the mind and settle the nervous system.",
  },
  {
    title: "Breathwork",
    body:
      "Simple, guided breathing shifts the body out of alertness and into recovery — the doorway into every experience.",
  },
  {
    title: "Guided Relaxation",
    body:
      "Slow, spoken cues walk the mind down layer by layer, so rest can happen on its own — without effort, without belief.",
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end max-w-6xl mx-auto">
              <Reveal className="lg:col-span-6">
                <span className="text-xs tracking-[0.3em] uppercase text-clay">About</span>
                <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
                  Shrutika.
                </h1>
                <p className="mt-8 text-[17px] text-muted-foreground leading-relaxed max-w-lg">
                  Meditation Teacher and Indian Classical Singer, practicing Nada Yoga — the
                  yoga of sound and music — as a pathway to the inner life. Founder of Om Shala.
                </p>
              </Reveal>
              <Reveal className="lg:col-span-6" delay={0.15}>
                <div className="relative aspect-[4/5] overflow-hidden max-w-md ml-auto">
                  <img src={portraitPtr.url} alt="Portrait of Shrutika" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/25 -z-10" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Philosophy pillars */}
        <section className="py-28 md:py-40 bg-muted/20 border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-20 max-w-2xl mx-auto">
                <span className="text-xs tracking-[0.3em] uppercase text-clay">The Practice</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                  Six threads woven together.
                </h2>
                <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="h-full p-10 bg-background border border-foreground/10 hover:border-clay/30 transition-colors duration-500 relative">
                    <span className="font-serif text-xs text-clay tracking-[0.3em] uppercase">
                      0{i + 1}
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-light">{p.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing quote */}
        <section className="py-32 md:py-48">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Reveal>
              <svg viewBox="0 0 64 64" className="w-10 h-10 text-clay/70 mx-auto mb-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
                <path d="M48 18 a22 22 0 1 0 6 18" />
              </svg>
              <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-foreground italic">
                "Pure sound pulls you inward and brings deep relaxation. In this state, the body
                is grounded, the mind is open and emotions are free. Everything feels perfect,
                as it is."
              </p>
              <p className="mt-8 text-xs tracking-[0.35em] uppercase text-muted-foreground">
                — Shrutika
              </p>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;