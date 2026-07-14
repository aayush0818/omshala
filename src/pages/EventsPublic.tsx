import { useState, useEffect } from "react";
import { Users, Sparkles, Brain, Heart, Focus, Activity, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import AboutSection from "@/components/AboutSection";
import { CREDENTIALS } from "@/components/CredentialCards";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroImgAsset from "@/assets/img5-studio-night.webp.asset.json";
import whatThisIsAsset from "@/assets/img8-sunset-circle.webp.asset.json";
import motionVideoAsset from "@/assets/corporate-motion.mov.asset.json";
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";

const whatThisIsImg = whatThisIsAsset.url;
const motionVideo = motionVideoAsset.url;
const heroImg = heroImgAsset.url;
const credentialsVideo = homeVideoAsset.url;

const benefits = [
  { icon: Activity, text: "Reduces stress and prevents burnout" },
  { icon: Focus, text: "Improves focus, clarity and creativity" },
  { icon: Heart, text: "Enhances emotional regulation under pressure" },
  { icon: Brain, text: "Relaxes the nervous system" },
  { icon: Sparkles, text: "Increases overall workplace wellbeing" },
  { icon: Users, text: "Builds a calmer, more resilient team environment" },
];


const EventsPublic = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
      
      {/* Hero — stacked: image, then editorial content below */}
      <section className="font-sans pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className={`w-full overflow-hidden transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
              <img
                src={heroImg}
                alt="Sound healing ceremony"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className={`mt-14 md:mt-20 max-w-2xl transition-all duration-1000 delay-150 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-clay font-semibold">
                Corporate Wellness
              </span>
              <h1 className="mt-5 font-sans text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
                Deep Relaxation
                <span className="block mt-2 text-clay">for High-Performance Teams</span>
              </h1>
              <p className="mt-8 text-lg text-foreground/85 leading-relaxed max-w-xl">
                Therapeutic sound immersions known as Sound Baths, designed to reduce mental
                fatigue, improve focus, and support emotional resilience in the workplace.
              </p>
              <p className="mt-6 text-base text-foreground/80 italic leading-relaxed max-w-xl border-l border-clay/40 pl-5">
                The Mind, is the highest human power and a rejuvenated mind is an optimised
                human resource.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#enquire"
                  className="group relative inline-block w-auto text-center px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10">Enquire for Corporate Sessions</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
                <a
                  href="https://wa.me/917400361681?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Corporate%20Events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-auto text-center px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Credentials — editorial list + video */}
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-foreground/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-14">
                Credentials
              </h2>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <Reveal>
                <ul className="space-y-5">
                  {CREDENTIALS.map((c) => (
                    <li key={c} className="flex gap-4 items-start text-foreground/85 leading-relaxed">
                      <span className="mt-3 h-px w-5 bg-clay/60 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaVideo
                  src={credentialsVideo}
                  fallbackAspect="9 / 16"
                  frame="br"
                  ariaLabel="A moment from an Om Shala experience"
                  className="max-w-sm mx-auto lg:mx-0 lg:ml-auto"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Baths for Corporate Wellness */}
      <section className="py-20 md:py-40 relative overflow-hidden bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <Reveal className="lg:col-span-6">
              <NaturalImage
                src={whatThisIsImg}
                alt="Shrutika behind crystal singing bowls at a corporate event"
                fallbackAspect="3 / 2"
                frame="br"
              />
            </Reveal>
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[10px] tracking-[0.35em] uppercase text-clay">What This Is</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                  Sound Baths for Corporate Wellness
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 text-muted-foreground leading-relaxed">
                  A therapeutic experience that combines guided breathwork and deep relaxation
                  techniques in a sound immersion, to help employees and leaders rejuvenate
                  mentally and access more presence and productivity. Available online, onsite
                  and for offsite events &amp; retreats.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                    Ideal For
                  </span>
                  <ul className="mt-5 space-y-4">
                    {[
                      "Leadership teams and decision-makers",
                      "High-performance teams under constant pressure",
                      "Organisations prioritising employee wellbeing and retention",
                    ].map((it) => (
                      <li key={it} className="flex gap-4 items-start text-foreground/80 leading-relaxed">
                        <span className="mt-2 h-px w-6 bg-clay flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" ref={eventsRef} className="py-20 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[40px] animate-float" />

        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Benefits for the team
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={b.text}
                className={`group p-8 border border-foreground/10 hover:border-clay/30 hover:bg-muted/20 transition-all duration-500 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 group-hover:border-clay/40 mb-5 transition-colors duration-500">
                  <b.icon className="w-5 h-5 text-clay" />
                </div>
                <p className="text-foreground/80 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a Session Works */}
      <section className="py-20 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[40px] animate-float" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-ash">How a Session Works</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Fully guided. Accessible to everyone.
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>

          <ul className="max-w-3xl mx-auto space-y-6 list-none">
            {sessionFlow.map((s) => (
              <li key={s.number} className="flex gap-4 items-start">
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-clay flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg sm:text-xl mb-1">{s.title}</h3>
                  <p className="text-bone/60 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experiences — standalone video */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                  Experiences
                </h2>
                <div className="mt-6 w-12 h-px bg-clay/60 mx-auto" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MediaVideo
                src={motionVideo}
                fallbackAspect="16 / 9"
                frame="br"
                ariaLabel="Corporate sound healing session"
                className="mx-auto"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Online Sound Baths Explainer */}
      <section className="py-20 md:py-40 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">The Rise of Online Sound Baths</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
                <em className="not-italic text-clay">Felt deeply, even from your desk.</em>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Online sound healing is increasingly preferred for corporate wellness because of
                  the ease of organising, accessibility and time efficiency. Participants can
                  experience it from their desk, or from bed when working from home.
                </p>
                <p>
                  Sound frequencies enter the ear and alter brain waves, which signal the nervous
                  system to shift into deep relaxation. Anything we "feel" in the body is often a
                  configuration in the brain first, and harmonious pure tones create real feelings
                  of peace and positivity, even when experienced online.
                </p>
                <p>
                  In an Om Shala experience, the crystal singing bowls are tuned to <span className="text-clay">435 Hz</span>
                  {", "}the frequency of nature, deeply healing for the mind to sync with.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="p-8 border border-foreground/10 relative bg-muted/10">
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-clay/30" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-clay/30" />
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">The Setup</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Om Shala uses a high-quality professional sound recording system to transmit the
                  subtle microtones of the singing bowls with utmost clarity and precision.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  All you need from your end is a calm ambience and earphones / headphones for your
                  participants, or a stereo system for a room full of people.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {formats.map((f) => (
                  <div key={f.title} className="p-5 border border-foreground/10 text-center">
                    <f.icon className="w-5 h-5 text-clay mx-auto mb-3" />
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground/70">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="enquire" className="py-20 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Booking</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
              Customised to your organisation
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Sessions can be customised based on your organisation's needs:
            </p>
            <ul className="text-muted-foreground space-y-3 max-w-xl mx-auto mb-8 text-left">
              <li className="flex gap-3"><span className="text-clay">·</span> Online or in-person</li>
              <li className="flex gap-3"><span className="text-clay">·</span> Small teams or large groups</li>
              <li className="flex gap-3"><span className="text-clay">·</span> One-time sessions or ongoing programs for sustained corporate wellness</li>
              <li className="flex gap-3"><span className="text-clay">·</span> Sessions can also be positioned as part of leadership development or performance optimisation programs</li>
            </ul>

            <div className="mt-14 pt-14 border-t border-foreground/10">
              <h3 className="font-serif text-3xl md:text-4xl font-medium mb-8">
                Schedule a Consultation
              </h3>
              <a
                href="https://wa.me/917400361681?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Corporate%20Events."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block max-w-md mx-auto p-6 md:p-8 border border-foreground/15 hover:border-clay/60 bg-background hover:bg-muted/20 transition-all duration-500 text-left"
              >
                <div className="flex items-center gap-5">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/10 group-hover:border-clay/40 flex items-center justify-center transition-colors">
                    <MessageCircle className="w-5 h-5 text-clay" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">WhatsApp</p>
                    <p className="mt-1 text-lg text-foreground group-hover:text-clay transition-colors">+91 74003 61681</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPublic;