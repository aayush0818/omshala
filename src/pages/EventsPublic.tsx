import { useState, useEffect } from "react";
import { Users, Sparkles, Brain, Heart, Focus, Activity, Headphones, Building2, Instagram } from "lucide-react";
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

import exp9 from "@/assets/experience-9.png.asset.json";
import exp10 from "@/assets/experience-10.png.asset.json";
import exp11 from "@/assets/experience-11.png.asset.json";
import exp12 from "@/assets/experience-12.png.asset.json";
import exp13 from "@/assets/experience-13.png.asset.json";
import corporateStageEvent from "@/assets/corporate-stage-event.png.asset.json";
import outdoorShavasanaGroup from "@/assets/outdoor-shavasana-group.png.asset.json";

const whatThisIsImg = whatThisIsAsset.url;
const heroImg = heroImgAsset.url;
const heroDesktopImg = heroDesktopAsset.url;
const credentialsVideo = homeVideoAsset.url;

const experienceItems: ExperienceItem[] = [
  { type: "video", src: corporateVideoAsset.url, alt: "A moment from a corporate Om Shala sound bath" },
  { type: "image", src: exp6.url, alt: "Crystal singing bowls setup by the lake at sunrise" },
  { type: "image", src: corporateStageEvent.url, alt: "Sound bath performance on stage at a corporate event" },
  { type: "image", src: outdoorShavasanaGroup.url, alt: "Large group in shavasana at an outdoor wellness event" },
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
  { title: "BREATHWORK", desc: "To settle the nervous system." },
  { title: "GUIDED MEDITATION", desc: "To release mental and physical tension." },
  { title: "SOUND THERAPY", desc: "Using crystal singing bowls that align brain waves." },
  { title: "INSTRUMENT OF VOICE", desc: "Live Indian classical ragas or mantras, when suitable for the group." },
];

const formats = [
  { icon: Headphones, title: "Online", desc: "Accessible from desks or home, ideal for distributed teams." },
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
            <div
              className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-brand-purple to-brand-purple/30 mb-6 md:mb-8" />

              <span className="t-caption text-clay mb-4 md:mb-6 block">Corporate Wellness</span>
              <h1 className="text-[clamp(1.7rem,5.9vw,4.5rem)] leading-tight mb-5 md:mb-6">
                Deep Relaxation
                <span className="block mt-2 text-clay">
                  for High<span className="font-sans">-</span>Performance Teams
                </span>
              </h1>

              <p className="t-body max-w-xl text-body">
                Therapeutic sound immersions known as Sound Baths, designed to reduce mental fatigue, improve focus, and
                support emotional resilience in the workplace.
              </p>

              <p className="t-body italic mt-6 max-w-xl border-l border-brand-purple/40 pl-5 text-body">
                The Mind, is the highest human power and a rejuvenated mind is an optimised human resource.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#enquire"
                  className="group relative inline-block w-auto text-center px-8 sm:px-10 py-4 bg-foreground text-background t-btn overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 t-caption uppercase tracking-[0.18em] group-hover:text-background transition-colors duration-500">
                    ENQUIRE NOW
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
        <section className="py-24 md:py-32 relative overflow-hidden bg-black text-[#E7E3DE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <Reveal>
                <div className="flex flex-col h-full">
                  <span className="t-caption text-bone/60">{"\n"}</span>
                  <h2
                    className="mt-4 font-display tracking-tight text-clay text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                    style={{ fontWeight: 300 }}
                  >
                    Credentials
                  </h2>

                  <ul className="mt-8 flex-1 flex flex-col justify-between divide-y divide-bone/15">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="py-5 t-small text-bone/85">
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
                  <h2
                    className="font-display tracking-tight text-clay text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                    style={{ fontWeight: 300 }}
                  >
                    Sound Baths
                    <br />
                    for Corporate Wellness
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="t-body mt-8 max-w-xl text-body">
                    A therapeutic experience that combines guided breathwork and deep relaxation techniques in a sound
                    immersion, to help employees and leaders rejuvenate mentally and access more presence and
                    productivity. Available online, onsite and for offsite events &amp; retreats.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-10">
                    <span className="t-caption text-muted-foreground">Ideal For</span>
                    <ul className="mt-5 space-y-4">
                      {[
                        "Leadership teams and decision-makers",
                        "High-performance teams under constant pressure",
                        "Organisations prioritising employee wellbeing and retention",
                      ].map((it) => (
                        <li key={it} className="flex gap-4 items-start t-body text-body">
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
            <div
              className={`text-center mb-16 transition-all duration-700 ${eventsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2
                className="font-display tracking-tight text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                style={{ fontWeight: 300 }}
              >
                Benefits
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <div
                  key={b.text}
                  className={`group p-5 bg-[#F6F0EA] border border-[#CEBFB5]/20 hover:border-[#CEBFB5]/40 transition-all duration-500 ${
                    eventsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#CEBFB5]/50 group-hover:border-[#CEBFB5]/50 mb-3 transition-colors duration-500">
                    <b.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <p className="t-body text-foreground text-[0.9rem] leading-snug">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How a Session Works */}
        <section className="py-20 md:py-40 bg-[#F6F0EA] text-foreground relative overflow-hidden">
          <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
          <div
            className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-brand-purple/10 rounded-full blur-[40px] animate-float" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2
                className="font-display tracking-tight text-clay text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                style={{ fontWeight: 300 }}
              >
                The Om Shala Experience
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {sessionFlow.map((s) => (
              <div key={s.title} className="text-center max-w-md mx-auto px-6 py-6">
                <div>
                  <h3 className="font-sans uppercase tracking-[0.12em] text-[0.95rem] md:text-[1.1rem] font-medium text-foreground mb-3">
                    {s.title}
                  </h3>

                  <p className="t-body text-body">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-20 md:pt-32 md:pb-12 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-10 md:mb-14">
                  <h2
                    className="font-display tracking-tight text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                    style={{ fontWeight: 300 }}
                  >
                    Gallery
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <ExperienceCarousel items={experienceItems} />
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-12 flex justify-center">
                  <a
                    href="https://www.instagram.com/omshala.official?igsh=cnBqbTV6bWMyZHBu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3"
                  >
                    <span className="t-caption text-foreground">Explore More</span>

                    <img src="/instagram-color.png" alt="Instagram" className="w-5 h-5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Online Sound Baths Explainer */}
        <section className="pt-8 pb-20 md:pt-14 md:pb-40 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                {" "}
                <h2
                  className="font-display tracking-tight text-clay text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                  style={{ fontWeight: 300 }}
                >
                  The Rise
                  <br />
                  of Online Sound Baths
                </h2>
                <div className="mt-8 space-y-6 t-body text-body">
                  <p>
                    Online sound healing is increasingly preferred for corporate wellness because of the ease of
                    organising, accessibility and time efficiency. Participants can experience it from their desk, or
                    from bed when working from home.
                  </p>
                  <p>
                    Sound frequencies enter the ear and alter brain waves, which signal the nervous system to shift into
                    deep relaxation. Anything we "feel" in the body is often a configuration in the brain first, and
                    harmonious pure tones create real feelings of peace and positivity, even when experienced online.
                  </p>
                  <p>
                    In an Om Shala experience, the crystal singing bowls are tuned to{" "}
                    <span className="text-clay">435 Hz</span>
                    {", "}the frequency of nature, deeply healing for the mind to sync with.
                  </p>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="p-8 border border-foreground/10 relative bg-muted/10">
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-brand-purple/30" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-brand-purple/30" />
                  <h3 className="t-caption text-muted-foreground mb-6">The Setup</h3>
                  <p className="t-body text-body mb-6">
                    Om Shala uses a high-quality professional sound recording system to transmit the subtle microtones
                    of the singing bowls with utmost clarity and precision.
                  </p>
                  <p className="t-body text-body">
                    All you need from your end is a calm ambience and earphones / headphones for your participants, or a
                    stereo system for a room full of people.
                  </p>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  {formats.map((f) => (
                    <div key={f.title} className="p-8 border border-foreground/10 text-center">
                      <f.icon className="w-5 h-5 text-brand-purple mx-auto mb-3" />
                      <h3 className="font-sans text-lg font-medium text-foreground mb-2">{f.title}</h3>
                      <p className="t-body text-body mt-3">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="enquire" className="py-20 md:py-40 bg-black text-[#E7E3DE]">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="font-display tracking-tight text-clay text-[clamp(1.55rem,3.6vw,3.1rem)] leading-[1.1] -tracking-[0.01em]"
                style={{ fontWeight: 300 }}
              >
                Booking
              </h2>

              <p className="font-sans uppercase tracking-[0.14em] text-[0.75rem] md:text-[0.85rem] font-medium text-[#CEBFB5] mt-8 mb-8 max-w-xl mx-auto">
                Sessions can be customised based on your organisation's needs:
              </p>
              <ul className="t-body text-[#CEBFB5] space-y-3 max-w-xl mx-auto mb-8 text-center">
                <li>
                  <span className="text-[#CEBFB5]">· </span>Online or in-person
                </li>
                <li>
                  <span className="text-[#CEBFB5]">· </span>One-time sessions or ongoing programs for sustained
                  corporate wellness
                </li>
              </ul>

              <div className="flex flex-col items-center gap-4">
                <span className="t-caption text-bone/60">Schedule a Consultation</span>
                <a
                  href="https://wa.me/917400361681?text=Hi%2C%20I%20wanted%20to%20enquire%20about%20Corporate%20Events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-[#322E4F] text-white border border-[#322E4F] t-btn transition-all duration-500 hover:bg-transparent hover:text-bone"
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
