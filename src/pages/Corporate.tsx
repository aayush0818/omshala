import { Link } from "react-router-dom";
import { ArrowRight, Headphones, Building2, Sparkles, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import heroBowl from "@/assets/hero-bowl.jpg";
import whatImg from "@/assets/uploads/IMG_6832.webp.asset.json";
import sessionImg from "@/assets/uploads/IMG_7792.webp.asset.json";
import g1 from "@/assets/uploads/IMG_6788.jpeg.asset.json";
import g2 from "@/assets/uploads/IMG_6824.webp.asset.json";
import g3 from "@/assets/uploads/IMG_6832.webp.asset.json";
import g4 from "@/assets/uploads/IMG_0714.webp.asset.json";

const modes = [
  { icon: Headphones, title: "Online", desc: "For distributed teams, from desks or homes." },
  { icon: Building2, title: "Onsite", desc: "Hosted at your office or boardroom." },
  { icon: Sparkles, title: "Leadership Retreats", desc: "Woven into offsites and away-days." },
  { icon: Users, title: "Corporate Offsites", desc: "A grounding centrepiece for the group." },
  { icon: Award, title: "Wellness Programs", desc: "Recurring formats built into your calendar." },
];

const idealFor = [
  "Leadership Teams",
  "High Performance Teams",
  "Employee Wellbeing",
  "Corporate Retreats",
  "Decision Makers",
];

const benefits = [
  "Reduces stress",
  "Improves focus",
  "Supports creativity",
  "Prevents burnout",
  "Enhances emotional regulation",
  "Creates calmer teams",
  "Supports workplace wellbeing",
];

const sessionFlow = [
  "Gentle Breathwork",
  "Guided Relaxation",
  "Crystal Singing Bowls",
  "Optional Live Indian Classical Ragas or Mantras",
];

const gallery = [
  { src: g1.url, caption: "1000+ participants — Rotary Club, Vapi" },
  { src: g2.url, caption: "Solo performance setup" },
  { src: g3.url, caption: "Onsite corporate session" },
  { src: g4.url, caption: "Sunset circle at a leadership offsite" },
];

const Corporate = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero (kept structure) */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBowl} alt="Sound healing ceremony" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32">
            <Reveal>
              <div className="max-w-2xl">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8" />
                <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                  Corporate
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                  Deep Relaxation
                  <span className="block mt-2 text-clay">for High Performance Teams</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Therapeutic sound immersions designed to reduce mental fatigue, improve focus
                  and support emotional resilience within organisations.
                </p>
                <Link
                  to="/contact?type=corporate"
                  className="mt-10 group relative inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase overflow-hidden"
                >
                  <span className="relative z-10">Enquire for Corporate Sessions</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">The Challenge</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                Modern workplaces demand constant attention.
                <span className="block mt-3 text-muted-foreground">
                  Recovery has become just as important as performance.
                </span>
              </h2>
              <div className="mt-10 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
              <div className="mt-10 space-y-6 text-[17px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                <p>
                  The mind is our greatest resource. A rejuvenated mind is an optimised human
                  resource.
                </p>
                <p>
                  Om Shala's Sound Healing Experiences help organisations reduce stress, restore
                  clarity and improve workplace wellbeing through guided breathwork, relaxation
                  and therapeutic sound.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What This Is */}
        <section className="py-28 md:py-40 bg-muted/20 border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay">What This Is</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                  Therapeutic sound, precisely delivered.
                </h2>
                <p className="mt-8 text-[17px] text-muted-foreground leading-relaxed">
                  Sound Baths are therapeutic experiences combining guided breathwork, deep
                  relaxation and crystal singing bowls to shift the nervous system into states of
                  rest, recovery and clarity.
                </p>
                <ul className="mt-10 space-y-4">
                  {modes.map((m) => (
                    <li key={m.title} className="flex gap-4 items-start">
                      <m.icon className="w-4 h-4 text-clay mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="text-foreground font-medium">{m.title}</span>
                        <span className="text-muted-foreground"> — {m.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={whatImg.url} alt="Shrutika behind crystal singing bowls" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-clay/40" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-clay">Ideal For</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                  Built for the people who carry the weight.
                </h2>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {idealFor.map((label, i) => (
                <Reveal key={label} delay={i * 0.05}>
                  <div className="h-full p-8 border border-foreground/10 hover:border-clay/40 transition-colors duration-500 text-center">
                    <span className="font-serif text-xl font-light">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-28 md:py-40 bg-charcoal text-bone">
          <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">Benefits</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                What sessions bring back.
              </h2>
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent" />
            </Reveal>
            <ul className="mt-16 space-y-6">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={i * 0.05}>
                  <li className="flex items-baseline gap-6 border-b border-bone/10 pb-6">
                    <span className="font-serif text-sm text-clay w-8">0{i + 1}</span>
                    <span className="font-serif text-2xl md:text-3xl font-light">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How Sessions Work */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
                  <img src={sessionImg.url} alt="Guided session in an outdoor setting" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-clay/40" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="text-xs tracking-[0.3em] uppercase text-clay">How Sessions Work</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                  Fully guided. Accessible to everyone.
                </h2>
                <p className="mt-8 text-[17px] text-muted-foreground leading-relaxed">
                  Each experience is fully guided and suitable even for participants who have
                  never meditated. The experience includes:
                </p>
                <ul className="mt-8 space-y-4">
                  {sessionFlow.map((s, i) => (
                    <li key={s} className="flex items-baseline gap-4 border-b border-foreground/10 pb-4">
                      <span className="font-serif text-clay text-sm">0{i + 1}</span>
                      <span className="text-foreground/85">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Sound Healing Works Online */}
        <section className="py-28 md:py-40 bg-muted/20 border-y border-foreground/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">Online</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                Why Sound Healing Works Online.
              </h2>
              <div className="mt-10 space-y-6 text-[17px] text-muted-foreground leading-relaxed">
                <p>
                  Online sound healing is increasingly preferred for corporate wellness because
                  of the ease of organising, accessibility and time efficiency. Participants can
                  experience it from a desk, or from bed when working from home.
                </p>
                <p>
                  Sound frequencies enter the ear and alter brain waves, which signal the nervous
                  system to shift into deep relaxation. Anything we "feel" in the body is often a
                  configuration in the brain first — harmonious pure tones create real feelings
                  of peace and positivity, even when experienced online.
                </p>
                <p>
                  The crystal singing bowls at Om Shala are tuned to{" "}
                  <span className="text-clay">435 Hz</span> — the frequency of nature, deeply
                  healing for the mind to sync with.
                </p>
                <p>
                  Om Shala uses a high-quality professional sound recording system to transmit
                  the subtle microtones of the singing bowls with precision. All you need on your
                  side is a calm ambience and headphones — or a stereo system for a room full of
                  people.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-clay">In Practice</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">Moments from the room.</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {gallery.map((g, i) => (
                <Reveal key={g.caption} delay={i * 0.06}>
                  <figure className={`group relative overflow-hidden ${i % 3 === 0 ? "md:aspect-[4/5]" : "md:aspect-[4/3]"} aspect-[4/3]`}>
                    <img src={g.src} alt={g.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal/85 to-transparent text-bone text-xs tracking-[0.15em] uppercase">
                      {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-clay/15 rounded-full blur-[160px]" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mx-auto">
                Bring Deep Rest Into The Workplace.
              </h2>
              <div className="mt-12">
                <Link
                  to="/contact?type=corporate"
                  className="group relative inline-flex items-center gap-3 px-12 py-5 bg-bone text-charcoal text-sm tracking-[0.2em] uppercase overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-bone transition-colors duration-500">
                    Enquire for Corporate Sessions
                  </span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-bone group-hover:translate-x-1 transition-all duration-500" />
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

export default Corporate;