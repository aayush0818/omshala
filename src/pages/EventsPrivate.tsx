import { useEffect, useState } from "react";
import { Mail, MessageCircle, Heart, Cake, Baby, Users, Sparkles, PartyPopper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import privateImg from "@/assets/experience-private.jpg";
import abstractZen from "@/assets/abstract-zen.jpg";
import heroBowl from "@/assets/hero-bowl.jpg";

const journey = [
  { title: "Arrive", desc: "Settle into a softly lit room — blankets, cushions, gentle aromas." },
  { title: "Breath", desc: "Guided breathwork to land the body and quiet the mind." },
  { title: "Relaxation", desc: "A soft somatic guidance that opens space for everything to release." },
  { title: "Crystal Singing Bowls", desc: "Bowls tuned to 435 Hz wash through the room in waves." },
  { title: "Live Ragas", desc: "Indian classical voice sung as lullabies for the soul." },
  { title: "Deep Connection", desc: "A shared exhale — held, together." },
];

const occasions = [
  { icon: Heart, title: "Wedding" },
  { icon: Cake, title: "Birthday" },
  { icon: Baby, title: "Baby Shower" },
  { icon: Users, title: "Women's Forum" },
  { icon: PartyPopper, title: "Festive Gathering" },
  { icon: Sparkles, title: "Private Celebration" },
];

const atmosphereImages = [privateImg, abstractZen, heroBowl, privateImg];

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={privateImg}
              alt=""
              className={`w-full h-full object-cover transition-opacity duration-[1500ms] ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32">
            <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`w-px h-16 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-10 transition-opacity duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-8 block">Private</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
                Meaningful Sound Healing
                <span className="block mt-3 italic text-clay/90">for Life's Special Moments</span>
              </h1>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                A soulful pause held within your celebration — candles, blankets, crystal bowls
                and live ragas, designed around the people in the room.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">An Invitation</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10">
                  More and more people are choosing a mindful way to celebrate.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Sound healing has become a meaningful pause between the laughter and the high
                    energy — a deeply soulful relaxation that turns a special day into an
                    unforgettable one.
                  </p>
                  <p>
                    Whether it's a wedding, a birthday, a baby shower or a quiet women's circle,
                    Om Shala designs the experience around your gathering — the room, the lighting,
                    the people, the moment.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Experience — vertical journey */}
        <section className="py-28 md:py-40 bg-charcoal text-bone">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">The Experience</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-20">
                  A six-step exhale.
                </h2>
              </Reveal>
              <ol className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-bone/10" />
                {journey.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <li className="relative pl-20 pb-14 last:pb-0">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-bone/20 bg-charcoal flex items-center justify-center">
                        <span className="font-serif text-clay text-sm tabular-nums">0{i + 1}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-light mb-3">{s.title}</h3>
                      <p className="text-bone/60 leading-relaxed font-light">{s.desc}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">Occasions</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl">
                  For the moments that deserve more than a party.
                </h2>
              </Reveal>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-foreground/10">
                {occasions.map((o, i) => (
                  <Reveal key={o.title} delay={i * 0.05}>
                    <div className="group bg-background p-10 md:p-14 h-full flex flex-col items-start gap-6 hover:bg-muted/20 transition-colors duration-500 min-h-[200px]">
                      <o.icon className="w-6 h-6 text-clay group-hover:scale-110 transition-transform duration-500" />
                      <h3 className="font-serif text-2xl md:text-3xl font-light">{o.title}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Atmosphere gallery */}
        <section className="py-28 md:py-40 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">Atmosphere</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl mb-16">
                  Warm lighting. Soft textures. A held space.
                </h2>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {atmosphereImages.map((src, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Begin</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-12">
                  Let's create something
                  <span className="block italic text-clay/90">unforgettable.</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="mailto:omshala.official@gmail.com?subject=Private%20Event%20Enquiry"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-sm tracking-[0.15em] uppercase relative overflow-hidden"
                  >
                    <Mail className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Email Us</span>
                    <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </a>
                  <a
                    href="https://wa.me/917400361681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 border border-foreground/20 text-foreground text-sm tracking-[0.15em] uppercase hover:border-clay hover:text-clay transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
                <p className="mt-10 text-sm text-muted-foreground">
                  omshala.official@gmail.com · +91 74003 61681
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPrivate;