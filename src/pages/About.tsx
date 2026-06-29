import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import guidePortrait from "@/assets/guide-portrait.jpg";
import abstractZen from "@/assets/abstract-zen.jpg";

const chapters = [
  {
    eyebrow: "The Path",
    title: "A practice of sound",
    body:
      "Shrutika is a Meditation Teacher and Indian Classical Singer practicing Nada Yoga — the yoga of sound and music — as a pathway to the inner life. Her work weaves together two lifetimes of study: the disciplined lineage of Indian Classical Music, and the contemplative traditions of meditation and breath.",
  },
  {
    eyebrow: "Nada Yoga",
    title: "The yoga of sound",
    body:
      "Nada Yoga rests on a simple premise — that pure sound, met with attention, dissolves the noise of the thinking mind. Crystal Singing Bowls tuned to 435 Hz, paired with the human voice, become an invitation. Not something you do; something that happens.",
  },
  {
    eyebrow: "Indian Classical Music",
    title: "Ragas as lullabies for the soul",
    body:
      "Years of vocal training in the Indian Classical tradition shape every session. Ragas chosen for the time of day, the season, the mood of the room — sung not as performance, but as a steady current the listener can rest inside.",
  },
  {
    eyebrow: "Meditation",
    title: "Relaxation as the gateway",
    body:
      "The principle behind every Om Shala experience: profound relaxation as the gateway to the inner life. When the body softens deeply enough, meditation begins to happen on its own.",
  },
  {
    eyebrow: "Om Shala",
    title: "The first dedicated sound healing studio in Bombay",
    body:
      "Om Shala was founded as a quiet space in the city — designed to feel like an exhale. Bone walls, warm textures, carefully tuned acoustics. A room built around one intention: making it easy to return to centre.",
  },
];

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className={`w-px h-16 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
              <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                About
              </span>
              <h1 className={`font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Shrutika
              </h1>
              <p className={`mt-10 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Founder of Om Shala — Bombay's first studio dedicated to Sound Healing.
              </p>
            </div>
          </div>
        </section>

        {/* Portrait */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="aspect-[16/9] md:aspect-[21/9] max-w-6xl mx-auto overflow-hidden">
                <img
                  src={guidePortrait}
                  alt="Shrutika"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapters */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-28">
              {chapters.map((c) => (
                <Reveal key={c.title}>
                  <article>
                    <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">
                      {c.eyebrow}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-8">
                      {c.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      {c.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <img
                src={abstractZen}
                alt=""
                loading="lazy"
                className="w-32 h-32 mx-auto object-cover rounded-full grayscale opacity-40 mb-12"
              />
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.4] max-w-3xl mx-auto text-bone/90">
                "Pure sound pulls you inward and brings deep relaxation. In this state, the
                body is grounded, mind is open and emotions are free. Everything feels perfect,
                as it is."
              </blockquote>
              <p className="mt-10 text-xs tracking-[0.3em] uppercase text-ash">— Shrutika</p>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;