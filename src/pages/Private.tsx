import { Link } from "react-router-dom";
import { ArrowRight, Heart, Cake, PartyPopper, Users, Sparkles, Flower2, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import abstractZen from "@/assets/abstract-zen.jpg";
import expImg from "@/assets/uploads/IMG_7478.webp.asset.json";
import featureImg1 from "@/assets/uploads/IMG_3844.webp.asset.json";
import featureImg2 from "@/assets/uploads/IMG_3848.webp.asset.json";
import g1 from "@/assets/uploads/IMG_1988.webp.asset.json";
import g2 from "@/assets/uploads/IMG_7478.webp.asset.json";
import g3 from "@/assets/uploads/IMG_3848.webp.asset.json";

const experienceIncludes = [
  "Breathing",
  "Relaxation",
  "Crystal Singing Bowls",
  "435 Hz Healing Frequency",
  "Live Indian Classical Ragas",
  "Aromas",
  "Soft Lighting",
  "Blankets",
  "Pillows",
];

const perfectFor = [
  { icon: Heart, label: "Weddings" },
  { icon: Cake, label: "Birthdays" },
  { icon: Flower2, label: "Baby Showers" },
  { icon: Users, label: "Women's Forums" },
  { icon: PartyPopper, label: "Festive Gatherings" },
  { icon: Sparkles, label: "Retreats" },
  { icon: Home, label: "Family Celebrations" },
];

const Private = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero (kept structure) */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={abstractZen} alt="Private sound healing space" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32">
            <Reveal>
              <div className="max-w-2xl">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8" />
                <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                  Private
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8">
                  Celebrate
                  <span className="block mt-2 text-clay italic">differently.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Sound Healing Experiences for weddings, birthdays, baby showers, festive
                  gatherings and meaningful celebrations.
                </p>
                <Link
                  to="/contact?type=private"
                  className="mt-10 group relative inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase overflow-hidden"
                >
                  <span className="relative z-10">Enquire for Private Experiences</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Intro */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">
                More Than A Celebration
              </span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                A way to gather that stays with you.
              </h2>
              <div className="mt-10 space-y-6 text-[17px] text-muted-foreground leading-relaxed">
                <p>
                  More and more people are choosing mindful ways to celebrate life's special
                  moments.
                </p>
                <p>
                  Sound Healing creates space to slow down, connect deeply and share an
                  unforgettable experience with the people around you.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-28 md:py-40 bg-muted/20 border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay">
                  The Experience
                </span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                  A softly held immersion.
                </h2>
                <p className="mt-8 text-[17px] text-muted-foreground leading-relaxed">
                  Participants are guided through a sequence designed to relax the body,
                  quieten the mind, and open the heart.
                </p>
                <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4">
                  {experienceIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/85">
                      <span className="w-1 h-1 rounded-full bg-clay" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={expImg.url} alt="Candle-lit private sound bath" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-clay/40" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-clay">Perfect For</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                  Moments worth pausing for.
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {perfectFor.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.05}>
                  <div className="h-full p-8 border border-foreground/10 hover:border-clay/40 transition-colors duration-500 text-center flex flex-col items-center gap-4">
                    <p.icon className="w-5 h-5 text-clay" />
                    <span className="font-serif text-lg font-light">{p.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Experience */}
        <section className="py-28 md:py-40 bg-charcoal text-bone">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <Reveal className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={featureImg1.url} alt="Intimate gathering with Shrutika" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Reveal>
              <Reveal className="lg:col-span-7" delay={0.1}>
                <span className="text-xs tracking-[0.3em] uppercase text-clay">
                  Featured Experience
                </span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                  Designed around your gathering.
                </h2>
                <div className="mt-8 space-y-6 text-[17px] text-bone/70 leading-relaxed">
                  <p>
                    Every private experience is designed intimately — around the room, the
                    occasion and the people you love. Aromas, textures, lighting and voice are
                    considered so the moment feels held from the first breath to the last note.
                  </p>
                  <p>
                    Guests leave slower, softer and closer to themselves — and to one another.
                  </p>
                </div>
                <div className="mt-10 aspect-[16/10] overflow-hidden max-w-md">
                  <img src={featureImg2.url} alt="Guests receiving the experience" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-clay">Gallery</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                  Rooms we've held.
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[g1, g2, g3].map((img, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className={`relative overflow-hidden group ${i === 1 ? "md:mt-12" : ""}`}>
                    <div className="aspect-[3/4]">
                      <img src={img.url} alt="Private sound healing experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-earth/30 via-background to-clay/10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mx-auto">
                Let's create something beautiful together.
              </h2>
              <div className="mt-12">
                <Link
                  to="/contact?type=private"
                  className="group relative inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background text-sm tracking-[0.2em] uppercase overflow-hidden"
                >
                  <span className="relative z-10">Enquire for Private Experiences</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Private;