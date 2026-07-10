import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import CredentialCards from "@/components/CredentialCards";
import guidePortraitAsset from "@/assets/img9-yellow-speaking.webp.asset.json";
import img2Asset from "@/assets/img2-yogathon.webp.asset.json";
import heroBowl from "@/assets/hero-bowl.jpg";

const guidePortrait = guidePortraitAsset.url;
const img2 = img2Asset.url;

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroBowl}
              alt=""
              className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32">
            <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-clay">About</span>
              <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
                The yoga of sound.
              </h1>
            </div>
          </div>
        </section>

        {/* Editorial passage */}
        <section className="py-28 md:py-40 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">
              <Reveal className="lg:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={guidePortrait}
                    alt="Shrutika"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/20 -z-10" />
                </div>
              </Reveal>

              <div className="lg:col-span-7 space-y-8 text-muted-foreground leading-[1.85] text-[17px]">
                <Reveal>
                  <p>
                    Shrutika is a Meditation Teacher and Indian Classical Singer. Her practice
                    rests on Nada Yoga — the yoga of sound and music — where the vibration of
                    pure tone becomes a doorway into the inner life. Every offering she creates
                    is shaped by this one belief: that sound, when it is honest, quietly
                    dissolves the noise between a person and themselves.
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p>
                    Her voice was her first instrument. Trained in the Indian classical
                    tradition, she sings ragas the way they were intended to be received —
                    slowly, ceremonially, as lullabies for the soul. In an Om Shala experience,
                    the voice arrives softly, sits alongside the breath, and becomes the thread
                    that carries everyone inward.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Around the voice she weaves Crystal Singing Bowls, tuned to the frequency of
                    nature. Their tone is unhurried and whole. It moves through the body before
                    it reaches the mind, softening what has been holding on without asking to be
                    understood. Guided breathwork settles the nervous system before the sound
                    begins, and a gentle relaxation holds the closing — so that meditation is
                    not something anyone is asked to do, but something that begins to happen on
                    its own.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p>
                    This is the whole of the practice. No technique to perfect, no belief system
                    to adopt. Only breath, sound, and enough stillness for the person underneath
                    to be heard again.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="italic text-foreground/85 pl-6 border-l border-clay/40 text-lg mt-14">
                    "Pure sound pulls you inward and brings deep relaxation. In this state, the
                    body is grounded, the mind is open and emotions are free. Everything feels
                    perfect, as it is."
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial figure — img2 */}
        <section className="pb-24 md:pb-32 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <figure className="relative">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={img2}
                      alt="Shrutika honoured at a large yogathon"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-4 -left-4 w-full h-full border border-clay/20 -z-10" />
                  </div>
                  <figcaption className="mt-6 text-xs tracking-[0.25em] uppercase text-muted-foreground text-center">
                    Om Shala on stage — a large-scale gathering.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <CredentialCards
          eyebrow="Credentials"
          heading="A quiet record of the work."
          className="border-t border-foreground/5"
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;