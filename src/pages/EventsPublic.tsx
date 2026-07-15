import { useState, useEffect } from "react";
import { Users, Sparkles, Brain, Heart, Focus, Activity, Headphones, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import ExperienceCarousel, { type ExperienceItem } from "@/components/ExperienceCarousel";
import AboutSection from "@/components/AboutSection";
import { CREDENTIALS } from "@/components/CredentialCards";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroImgAsset from "@/assets/img5-studio-night.webp.asset.json";
import heroDesktopAsset from "@/assets/hero-desktop.png.asset.json";
import whatThisIsAsset from "@/assets/img8-sunset-circle.webp.asset.json";
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";
import privateVideoAsset from "@/assets/private-carousel.mp4.asset.json";
import corporateVideoAsset from "@/assets/corporate-experience.mp4.asset.json";
import exp6 from "@/assets/experience-6.png.asset.json";
import exp7 from "@/assets/experience-7.png.asset.json";
import exp8 from "@/assets/experience-8.png.asset.json";
import exp9 from "@/assets/experience-9.png.asset.json";
import exp10 from "@/assets/experience-10.png.asset.json";
import exp11 from "@/assets/experience-11.png.asset.json";
import exp12 from "@/assets/experience-12.png.asset.json";
import exp13 from "@/assets/experience-13.png.asset.json";

const whatThisIsImg = whatThisIsAsset.url;
const heroImg = heroImgAsset.url;
const heroDesktopImg = heroDesktopAsset.url;
const credentialsVideo = homeVideoAsset.url;

const experienceItems: ExperienceItem[] = [
  { type: "video", src: corporateVideoAsset.url, alt: "A moment from a corporate Om Shala sound bath" },
  { type: "image", src: exp6.url, alt: "Crystal singing bowls setup by the lake at sunrise" },
  { type: "image", src: exp7.url, alt: "Sound bath performance on stage at a corporate event" },
  { type: "image", src: exp8.url, alt: "Large group in shavasana at an outdoor wellness event" },
  { type: "image", src: exp9.url, alt: "Om Shala team receiving a Yogathon recognition" },
  { type: "image", src: exp10.url, alt: "Sound healing on stage at a large outdoor yoga gathering" },
  { type: "image", src: exp11.url, alt: "Shrutika speaking at a private brunch gathering" },
  { type: "image", src: exp12.url, alt: "Guests in white attire deep in meditation" },
  { type: "image", src: exp13.url, alt: "Circle gathering at sunset by the lake" },
  { type: "video", src: privateVideoAsset.url, alt: "A moment from an Om Shala sound bath" },
];

const benefits = [
  { icon: Activity, text: "Reduces stress and prevents burnout" },
  { icon: Focus, text: "Improves focus, clarity and creativity" },
  { icon: Heart, text: "Enhances emotional regulation under pressure" },
  { icon: Brain, text: "Relaxes the nervous system" },
  { icon: Sparkles, text: "Increases overall workplace wellbeing" },
  { icon: Users, text: "Builds a calmer, more resilient team environment" },
];

const sessionFlow = [
  { title: "Gentle breathwork", desc: "To settle the nervous system." },
  { title: "Guided relaxation", desc: "To release mental and physical tension." },
  { title: "Sound immersion", desc: "Using crystal singing bowls that align brain waves." },
  { title: "Optional voice", desc: "Live Indian classical ragas or mantras, when suitable for the group." },
];

const formats = [
  { icon: Headphones, title: "Online", desc: "Joinable from desks or home, ideal for distributed teams." },
  { icon: Building2, title: "On-site", desc: "Hosted at the office or boardroom for in-person teams." },
  { icon: Sparkles, title: "Offsites & retreats", desc: "Designed into leadership offsites and wellbeing retreats." },
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

        {/* Hero — image first, content below */}
        <section className="relative overflow-hidden bg-background pt-16 md:pt-[68px]">
          {/* Desktop: full-width immersive hero */}
          <div className="hidden md:block w-full">
            <img
              src={heroDesktopImg}
              alt="Sound healing ceremony with crystal singing bowls and tanpura"
              className={`w-full h-[550px] object-cover object-center transition-opacity duration-1000 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          {/* Mobile: unchanged */}
          <div className="md:hidden w-full max-w-6xl mx-auto px-6">
            <img
              src={heroImg}
              alt="Sound healing ceremony"
              className={`w-full h-auto object-contain transition-opacity duration-1000 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <div className="container mx-auto px-6 sm:px-10 lg:px-16 pt-12 md:pt-16 pb-14 md:pb-16">
            <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-brand-purple to-brand-purple/30 mb-6 md:mb-8" />

              <span className="text-sm tracking-[0.3em] uppercase text-clay mb-4 md:mb-6 block font-light">
                Corporate Wellness
              </span>
              <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-5 md:mb-6 tracking-tight">
                Deep Relaxation
                <span className="block mt-2 text-clay">for High-Performance Teams</span>
              </h1>
              <p className="body-text-lg max-w-xl">
                Therapeutic sound immersions known as Sound Baths, designed to reduce mental
                fatigue, improve focus, and support emotional resilience in the workplace.
              </p>
              <p className="body-quote mt-6 max-w-xl border-l border-brand-purple/40 pl-5">
                The Mind, is the highest human power and a rejuvenated mind is an optimised
                human resource.
              </p>

              <div className="mt-10">
                <a
                  href="#enquire"
                  className="group relative inline-block w-auto text-center px-8 sm:px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">
                    Enquire for Corporate Sessions
                  </span>
                  <div className="absolute inset-0 bg-brand-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <AboutSection />

        {/* Credentials — editorial list + video */}
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <Reveal>
                <div className="flex flex-col h-full">
                  <span className="text-sm tracking-[0.3em] uppercase text-clay">{"\n"}</span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                    Credentials
                  </h2>
                  <div className="mt-6 h-px w-16 bg-brand-purple/60" />
                  <ul className="mt-8 flex-1 flex flex-col justify-between divide-y divide-foreground/10">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="py-5 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaVideo
                  src={credentialsVideo}
                  fallbackAspect="9 / 16"
                  frame="br"
                  ariaLabel="A moment from an Om Shala experience"
                  className="max-w-sm mx-auto lg:max-w-none lg:mx-0"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* What This Is */}
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
                  <span className="text-sm tracking-[0.3em] uppercase text-clay">What This Is</span>
                  <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
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
                    <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                      Ideal For
                    </span>
                    <ul className="mt-5 space-y-4">
                      {[
                        "Leadership teams and decision-makers",
                        "High-performance teams under constant pressure",
                        "Organisations prioritising employee wellbeing and retention",
                      ].map((it) => (
                        <li key={it} className="flex gap-4 items-start text-foreground/80 leading-relaxed">
                          <span className="mt-2 h-px w-6 bg-brand-purple flex-shrink-0" />
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
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-brand-purple/5 rounded-full blur-[40px] animate-float" />

          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-700 ${eventsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-serif text-4xl md:text-5xl font-light">Benefits for the team</h2>
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent mx-auto" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <div
                  key={b.text}
                  className={`group p-8 border border-foreground/10 hover:border-brand-purple/30 hover:bg-muted/20 transition-all duration-500 ${eventsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 group-hover:border-brand-purple/40 mb-5 transition-colors duration-500">
                    <b.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How a Session Works */}
        <section className="py-20 md:py-40 bg-gradient-purple-immersive text-bone relative overflow-hidden">
          <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
          <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-brand-purple/10 rounded-full blur-[40px] animate-float" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-sm tracking-[0.3em] uppercase text-ash">How a Session Works</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                Fully guided. Accessible to everyone.
              </h2>
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              {sessionFlow.map((s) => (
                <div key={s.title} className="flex gap-5 sm:gap-8">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl leading-none text-bone">•</span>
                  </div>
                  <div className="pt-2 sm:pt-3">
                    <h3 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3">{s.title}</h3>
                    <p className="text-bone/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-10 md:mb-14">
                  <h2 className="font-serif text-2xl md:text-4xl font-light leading-tight">Experiences</h2>
                  <div className="mt-6 w-12 h-px bg-brand-purple/60 mx-auto" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <ExperienceCarousel items={experienceItems} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Online Sound Baths Explainer */}
        <section className="py-20 md:py-40 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="text-sm tracking-[0.3em] uppercase text-clay mb-6 block">The Rise of Online Sound Baths</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 leading-tight">
                  Felt deeply, even from your desk
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
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-brand-purple/30" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-brand-purple/30" />
                  <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">The Setup</h3>
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
                      <f.icon className="w-5 h-5 text-brand-purple mx-auto mb-3" />
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
        <section id="enquire" className="py-20 md:py-40 bg-gradient-to-b from-brand-purple to-brand-purple-deep text-bone relative overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-bone/5 rounded-full blur-[150px] animate-pulse-soft" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm tracking-[0.3em] uppercase text-bone/70 mb-6 block">Booking</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 text-bone">
                Customised to your organisation
              </h2>
              <p className="text-bone/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Sessions can be customised based on your organisation's needs:
              </p>
              <ul className="text-bone/80 space-y-3 max-w-xl mx-auto mb-12 text-left">
                <li className="flex gap-3"><span className="text-bone/60">·</span> Online or in-person</li>
                <li className="flex gap-3"><span className="text-bone/60">·</span> Small teams or large groups</li>
                <li className="flex gap-3"><span className="text-bone/60">·</span> One-time sessions or ongoing programs for sustained corporate wellness</li>
                <li className="flex gap-3"><span className="text-bone/60">·</span> Sessions can also be positioned as part of leadership development or performance optimisation programs</li>
              </ul>

              <div className="flex flex-col items-center gap-4">
                <span className="text-[11px] tracking-[0.3em] uppercase text-bone/70">
                  Schedule a Consultation
                </span>
                <a
                  href="https://wa.me/917400361681?text=Hi%2C%20I%20wanted%20to%20enquire%20about%20Corporate%20Events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-bone text-brand-purple border border-bone text-sm tracking-wide transition-all duration-500 hover:bg-transparent hover:text-bone"
                >
                  <span className="relative z-10">WhatsApp · +91 7400361681</span>
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