import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import corporateHero from "@/assets/corporate-hero.jpg";
import corporateEducation from "@/assets/corporate-education.jpg";
import journeyBreath from "@/assets/journey-breath.jpg";
import journeyRelax from "@/assets/journey-relax.jpg";
import journeyBowls from "@/assets/journey-bowls.jpg";
import journeyVoice from "@/assets/journey-voice.jpg";
import bowl435 from "@/assets/bowl-435.jpg";
import onlineSetup from "@/assets/online-setup.jpg";

const credentials: { text: string; size: "xl" | "lg" | "md" }[] = [
  { text: "12+ years of experience in the Mindfulness Industry", size: "xl" },
  { text: "Founder of Om Shala, the first studio in Bombay dedicated to Sound Healing", size: "lg" },
  { text: "Spotify meditations in collaboration with Universal Music", size: "xl" },
  { text: "Sessions conducted for members of the Royal Family in Dubai & Saudi Arabia", size: "xl" },
  { text: "Private sessions for the Late G. P. Hinduja in London", size: "md" },
  { text: "Private sessions for the Health Minister of Goa", size: "md" },
  { text: "Large-scale event for 1,000+ participants (Rotary Club, Vapi)", size: "lg" },
  { text: "International online clients across US, Europe & Madagascar", size: "md" },
];

const idealFor = [
  "Leadership teams and decision-makers",
  "High-performance teams under constant pressure",
  "Organisations prioritising employee wellbeing and retention",
];

const benefits = [
  "Reduces stress and prevents burnout",
  "Improves focus, clarity, and creativity",
  "Enhances emotional regulation under pressure",
  "Relaxes the nervous system",
  "Increases overall workplace wellbeing",
  "Builds a calmer, more resilient team environment",
];

const sessionSteps = [
  {
    title: "Gentle breathwork to settle the nervous system",
    img: journeyBreath,
  },
  {
    title: "Guided relaxation to release mental and physical tension",
    img: journeyRelax,
  },
  {
    title: "Sound immersion using crystal singing bowls that align brain waves",
    img: journeyBowls,
  },
  {
    title: "Optional vocal elements such as live Indian Classical ragas or mantras when suitable",
    img: journeyVoice,
  },
];

const customisation = [
  "Online or in-person",
  "Small teams or large groups",
  "One-time sessions or ongoing programs",
  "Leadership development",
  "Performance optimisation",
];

const credSizeClass: Record<"xl" | "lg" | "md", string> = {
  xl: "font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05]",
  lg: "font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.1]",
  md: "font-serif text-xl md:text-2xl font-light leading-snug text-foreground/75",
};

const EventsCorporate = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* 1. Hero — full-screen editorial */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={corporateHero}
              alt=""
              className={`w-full h-full object-cover transition-opacity duration-[1500ms] ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
            <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`w-px h-16 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-10 transition-opacity duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-8 block">Corporate</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
                Deep Relaxation for<br />
                <span className="italic text-clay/90">High-Performance Teams</span>
              </h1>
              <div className="mt-12 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                <p>
                  Therapeutic sound immersions known as Sound Baths, designed to reduce mental
                  fatigue, improve focus, and support emotional resilience in the workplace.
                </p>
                <p>
                  The Mind, is the highest human power and a rejuvenated mind is an optimised
                  human resource.
                </p>
              </div>
              <div className="mt-14">
                <Link
                  to="/corporate/contact"
                  className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-2 hover:border-clay hover:text-clay transition-colors duration-500"
                >
                  Enquire for Corporate Sessions
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Credentials — editorial magazine grid */}
        <section className="py-32 md:py-48 border-t border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-16">
                  Credentials
                </span>
              </Reveal>
              <ul className="divide-y divide-foreground/10">
                {credentials.map((c, i) => (
                  <Reveal key={c.text} delay={i * 0.05}>
                    <li className="py-10 md:py-14 flex items-start gap-8 md:gap-12">
                      <span className="text-xs text-clay/50 tabular-nums pt-3 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className={credSizeClass[c.size]}>{c.text}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. What This Is — two-column education */}
        <section className="py-28 md:py-40 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
              <div className="lg:col-span-7 lg:pr-8">
                <Reveal>
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                    What This Is
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-12">
                    Sound Baths for Corporate Wellness
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                    <p>
                      A therapeutic experience that combines guided breathwork and deep relaxation
                      techniques in a sound immersion, to help employees and leaders rejuvenate
                      mentally and access more presence and productivity.
                    </p>
                    <p>Available online, onsite and for offsite events & retreats.</p>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-20 pt-14 border-t border-foreground/10">
                    <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                      Ideal For
                    </span>
                    <ul className="space-y-5">
                      {idealFor.map((item) => (
                        <li
                          key={item}
                          className="font-serif text-xl md:text-2xl font-light leading-snug"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={corporateEducation}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={1536}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4. Benefits — Apple-style manifesto */}
        <section className="py-32 md:py-48">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-16">
                  Benefits
                </span>
              </Reveal>
              <ul className="divide-y divide-foreground/10">
                {benefits.map((b, i) => (
                  <Reveal key={b} delay={i * 0.06}>
                    <li className="py-14 md:py-20">
                      <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
                        {b}<span className="text-clay/70">.</span>
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. How A Session Works — vertical journey */}
        <section className="py-28 md:py-40 bg-charcoal text-bone">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <div className="max-w-3xl mb-24">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                    How A Session Works
                  </span>
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.25] text-bone/90">
                    Each session is fully guided and designed to be accessible—even for those new
                    to meditation.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-28 md:space-y-40">
                {sessionSteps.map((s, i) => {
                  const reversed = i % 2 === 1;
                  return (
                    <div
                      key={s.title}
                      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}
                    >
                      <Reveal>
                        <div className="aspect-[4/5] overflow-hidden">
                          <img
                            src={s.img}
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Reveal>
                      <Reveal delay={0.1}>
                        <div>
                          <span className="text-xs tracking-[0.3em] uppercase text-clay/70 block mb-6 tabular-nums">
                            Step {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
                            {s.title}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 6. The Rise of Online Sound Baths — five chapters */}
        {/* Chapter 1 */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={onlineSetup} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="max-w-xl">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Chapter One</span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10">
                    The Rise of Online Sound Baths
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Online sound healing has quietly become one of the most sought-after formats
                    for corporate wellness. It is easier to organise, more accessible, and beautifully
                    time-efficient — participants join from a desk, a couch, or a quiet corner at
                    home, and receive the full therapeutic experience without leaving their space.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="py-28 md:py-40 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="max-w-xl">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Chapter Two</span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10">
                    How can we feel the effects of sound online?
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Sound frequencies enter the ear and shift brain waves, which in turn signal the
                    nervous system into deep relaxation. Anything we feel in the body is often a
                    configuration in the brain first — and harmonious pure tones create real
                    feelings of peace and positivity, even when experienced through headphones.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={journeyBreath} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Chapter 3 — 435 Hz */}
        <section className="py-32 md:py-48 bg-charcoal text-bone">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
              <Reveal>
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-10">Chapter Three</span>
                  <div className="flex items-baseline gap-4 mb-12">
                    <span className="font-serif text-[6rem] md:text-[9rem] lg:text-[11rem] leading-none font-light text-bone">
                      435
                    </span>
                    <span className="font-serif text-3xl md:text-5xl font-light text-clay">Hz</span>
                  </div>
                  <p className="text-lg text-bone/70 font-light leading-relaxed max-w-lg">
                    In an Om Shala experience, the crystal singing bowls are tuned to 435 Hz — the
                    frequency of nature. It is the vibration the human mind syncs with most deeply,
                    the resonance in which the nervous system truly begins to let go.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="aspect-square overflow-hidden">
                  <img src={bowl435} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Chapter 4 — Tone */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={journeyVoice} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="max-w-xl">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Chapter Four</span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10">
                    Tone
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Think of a phone call — you can hear whether the person on the other end is calm,
                    anxious, tired or content, entirely through the tone of their voice. Sound baths
                    work the same way. Even at a distance, the pure tone of the crystal bowls carries
                    a felt sense of peace directly into the listener's body.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Chapter 5 — The Setup */}
        <section className="py-32 md:py-48 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="max-w-xl">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Chapter Five</span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10">
                    The Setup
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                    <p>
                      Om Shala uses a high quality professional sound recording system to capture
                      every nuance of the crystal singing bowls and voice, so the experience
                      arrives on your end with full clarity and depth.
                    </p>
                    <p>
                      All you need is a quiet space, a pair of stereo headphones, and somewhere
                      comfortable to sit or lie down. The rest is held for you.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={onlineSetup} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 7. Contact — elegant close */}
        <section className="py-32 md:py-48">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-10">
                  Begin
                </span>
                <p className="font-serif text-2xl md:text-3xl font-light leading-[1.35] text-foreground/85 mb-10">
                  Sessions can be customised based on your organisation&apos;s needs:
                </p>
                <ul className="space-y-4 mb-16">
                  {customisation.map((c) => (
                    <li key={c} className="font-serif text-xl md:text-2xl font-light text-foreground/70">
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="font-serif text-2xl md:text-3xl font-light italic text-clay/90 mb-14">
                  Request the rate card or schedule a consultation.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-x-12 gap-y-6 text-sm tracking-[0.15em] uppercase">
                  <Link
                    to="/corporate/contact"
                    className="border-b border-foreground/30 pb-1 hover:border-clay hover:text-clay transition-colors duration-300"
                  >
                    omshala.official@gmail.com
                  </Link>
                  <a
                    href="https://wa.me/917400361681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-b border-foreground/30 pb-1 hover:border-clay hover:text-clay transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp · +91 74003 61681
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsCorporate;