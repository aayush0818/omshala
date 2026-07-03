import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity, Brain, Focus, Heart, Sparkles, Users, Building2,
  MessageCircle, Headphones, Volume2, Mic2, Wind, Moon, ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import heroBowl from "@/assets/hero-bowl.jpg";
import corporateImg from "@/assets/experience-corporate.jpg";
import abstractZen from "@/assets/abstract-zen.jpg";

const credentials = [
  { value: "12+", label: "Years in the mindfulness industry" },
  { value: "1000+", label: "Largest live corporate event" },
  { value: "Spotify", label: "Meditations × Universal Music" },
  { value: "Global", label: "Online clients across continents" },
];

const idealFor = [
  "Leadership Teams",
  "Decision Makers",
  "High Pressure Teams",
  "Employee Wellbeing",
  "Retention",
  "Offsites",
];

const benefits = [
  { icon: Activity, label: "Reduce Stress" },
  { icon: Brain, label: "Prevent Burnout" },
  { icon: Focus, label: "Improve Focus" },
  { icon: Sparkles, label: "Increase Creativity" },
  { icon: Heart, label: "Support Emotional Regulation" },
  { icon: Wind, label: "Relax the Nervous System" },
  { icon: Users, label: "Strengthen Workplace Wellbeing" },
];

const sessionFlow = [
  { icon: Wind, title: "Breathwork", desc: "Gentle conscious breathing to settle the nervous system and help everyone arrive." },
  { icon: Moon, title: "Guided Relaxation", desc: "A soft somatic guidance that releases tension built up through the week." },
  { icon: Volume2, title: "Crystal Singing Bowls", desc: "Bowls tuned to 435 Hz — the frequency of nature — align brain waves and slow the mind." },
  { icon: Mic2, title: "Live Indian Classical Voice", desc: "Ragas and mantras sung live, when suitable for the group." },
  { icon: Heart, title: "Deep Relaxation", desc: "The body softens, the mind opens, and a quiet rejuvenation settles in." },
];

const youNeed = ["Quiet Space", "Headphones", "Comfortable Seating"];
const weProvide = ["Professional Recording", "Crystal Singing Bowls", "Guided Experience", "Live Voice"];

const EventsCorporate = () => {
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
              src={heroBowl}
              alt=""
              className={`w-full h-full object-cover transition-opacity duration-[1500ms] ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32">
            <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`w-px h-16 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-10 transition-opacity duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-8 block">Corporate</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
                Deep Relaxation
                <span className="block mt-3 italic text-clay/90">for High-Performance Teams</span>
              </h1>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Therapeutic sound baths designed to reduce mental fatigue, improve focus and
                support emotional resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24 md:py-32 border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">Credentials</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl">
                  Trusted by leaders, founders and global organisations.
                </h2>
              </Reveal>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10">
                {credentials.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.08}>
                    <div className="bg-background p-8 md:p-10 h-full">
                      <span className="font-serif text-3xl md:text-4xl font-light text-clay">{c.value}</span>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What This Is */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">What This Is</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-10">
                  A therapeutic experience combining guided breathwork and deep relaxation in a
                  sound immersion.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    The mind is the highest human power. A rejuvenated mind is an optimised human
                    resource — sharper, calmer, more creative and more present.
                  </p>
                  <p>
                    Om Shala helps employees and leaders access this state through ancient sound
                    practices, delivered with professional clarity for the modern workplace.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-28 md:py-40 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">Ideal For</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl">
                  Built for the people inside the building.
                </h2>
              </Reveal>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
                {idealFor.map((item, i) => (
                  <Reveal key={item} delay={i * 0.05}>
                    <div className="bg-background p-10 h-full flex items-end min-h-[180px]">
                      <h3 className="font-serif text-2xl md:text-3xl font-light">{item}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">Benefits</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light max-w-xl">
                  What teams take home.
                </h2>
              </Reveal>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {benefits.map((b, i) => (
                  <Reveal key={b.label} delay={i * 0.05}>
                    <div className="group p-8 border border-foreground/10 hover:border-clay/40 transition-colors duration-500 h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 group-hover:border-clay/40 mb-6 transition-colors duration-500">
                        <b.icon className="w-5 h-5 text-clay" />
                      </div>
                      <h3 className="font-serif text-lg font-light leading-snug">{b.label}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How A Session Works — vertical timeline */}
        <section className="py-28 md:py-40 bg-charcoal text-bone">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">How A Session Works</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-20">
                  Fully guided. Accessible to everyone.
                </h2>
              </Reveal>

              <ol className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-bone/10" />
                {sessionFlow.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <li className="relative pl-20 pb-16 last:pb-0">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-bone/20 bg-charcoal flex items-center justify-center">
                        <s.icon className="w-5 h-5 text-clay" />
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

        {/* Rise of Online Sound Baths */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
              <Reveal>
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6">The Rise of Online Sound Baths</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] mb-10">
                    Felt deeply, even from a desk.
                  </h2>
                  <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                    <p>
                      Online sound healing has become the preferred format for corporate wellness —
                      easier to organise, more accessible, and beautifully time-efficient.
                      Participants join from a desk, a couch, or a quiet corner at home.
                    </p>
                    <p>
                      Sound frequencies enter the ear and shift brain waves, which signal the
                      nervous system into deep relaxation. Anything we feel in the body is often a
                      configuration in the brain first — and harmonious pure tones create real
                      feelings of peace and positivity, even when experienced through headphones.
                    </p>
                    <p>
                      In an Om Shala experience, the crystal singing bowls are tuned to{" "}
                      <span className="text-clay">435 Hz</span> — the frequency of nature, deeply
                      healing for the mind to sync with.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={corporateImg}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Setup */}
        <section className="py-28 md:py-40 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-6 text-center">The Setup</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-20">
                  Simple on your end. Crafted on ours.
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
                <Reveal>
                  <div className="bg-background p-10 md:p-14 h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Headphones className="w-5 h-5 text-clay" />
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">You Need</span>
                    </div>
                    <ul className="space-y-5">
                      {youNeed.map((i) => (
                        <li key={i} className="font-serif text-xl font-light">{i}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="bg-background p-10 md:p-14 h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Building2 className="w-5 h-5 text-clay" />
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">We Provide</span>
                    </div>
                    <ul className="space-y-5">
                      {weProvide.map((i) => (
                        <li key={i} className="font-serif text-xl font-light text-clay">{i}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Begin</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-12">
                  Interested in bringing Om Shala
                  <span className="block italic text-clay/90">to your organisation?</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    to="/corporate/contact"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-sm tracking-[0.15em] uppercase relative overflow-hidden"
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <ArrowRight className="w-4 h-4 relative z-10" />
                    <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Link>
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

export default EventsCorporate;