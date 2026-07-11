import { useState, useEffect } from "react";
import { Users, Sparkles, Mail, Brain, Heart, Focus, Activity, Headphones, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import CredentialCards from "@/components/CredentialCards";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroBowl from "@/assets/hero-bowl.jpg";
import whatThisIsAsset from "@/assets/corporate-what-this-is.jpg.asset.json";
import setupAsset from "@/assets/corporate-setup.jpg.asset.json";
import motionVideoAsset from "@/assets/corporate-motion.mov.asset.json";

const whatThisIsImg = whatThisIsAsset.url;
const setupImg = setupAsset.url;
const motionVideo = motionVideoAsset.url;

const benefits = [
  { icon: Activity, text: "Reduces stress and prevents burnout" },
  { icon: Focus, text: "Improves focus, clarity and creativity" },
  { icon: Heart, text: "Enhances emotional regulation under pressure" },
  { icon: Brain, text: "Relaxes the nervous system" },
  { icon: Sparkles, text: "Increases overall workplace wellbeing" },
  { icon: Users, text: "Builds a calmer, more resilient team environment" },
];

const sessionFlow = [
  { number: "01", title: "Gentle breathwork", desc: "To settle the nervous system and help everyone arrive." },
  { number: "02", title: "Guided relaxation", desc: "To release mental and physical tension built up through the week." },
  { number: "03", title: "Sound immersion", desc: "Crystal singing bowls tuned to 435 Hz align brain waves with the frequency of nature." },
  { number: "04", title: "Optional voice", desc: "Live Indian classical ragas or mantras, when suitable for the group." },
];

const formats = [
  { icon: Headphones, title: "Online", desc: "Joinable from desks or homes, ideal for distributed teams." },
  { icon: Building2, title: "On-site", desc: "Hosted at your office or boardroom for in-person teams." },
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
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBowl} 
            alt="Sound healing ceremony" 
            className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[50px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[40px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Corporate Wellness
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Deep Relaxation
              <span className="block mt-2 text-clay">for High-Performance Teams</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Therapeutic sound immersions known as Sound Baths, designed to reduce mental
              fatigue, improve focus, and support emotional resilience in the workplace.
            </p>
            <p className="mt-6 text-sm sm:text-base text-foreground/80 italic leading-relaxed max-w-xl border-l border-clay/40 pl-5">
              The Mind, is the highest human power and a rejuvenated mind is an optimised
              human resource.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a 
                href="#enquire"
                className="group relative w-full sm:w-auto text-center px-8 sm:px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Enquire for Corporate Sessions</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a 
                href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20enquire%20about%20a%20corporate%20sound%20healing%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500 hover:bg-foreground/5"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <CredentialCards
        eyebrow="Trusted With"
        heading="Rooms Om Shala has been asked to hold."
        className="border-t border-foreground/5"
      />

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
            <span className="text-xs tracking-[0.3em] uppercase text-clay">Why Sound Baths at Work</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
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
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Fully guided. Accessible to everyone.
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {sessionFlow.map((s) => (
              <div key={s.number} className="flex gap-5 sm:gap-8">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 border border-bone/20 flex items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl text-clay">{s.number}</span>
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

      {/* See it in motion — standalone video */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <span className="text-[10px] tracking-[0.35em] uppercase text-clay">
                  See It In Motion
                </span>
                <h2 className="mt-5 font-serif text-2xl md:text-4xl font-light leading-tight">
                  A glimpse of the room.
                </h2>
                <div className="mt-6 w-12 h-px bg-clay/60 mx-auto" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MediaVideo
                src={motionVideo}
                fallbackAspect="9 / 16"
                frame="br"
                ariaLabel="Corporate sound healing session"
                className="max-w-md mx-auto"
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

      {/* The Setup */}
      <section className="py-20 md:py-36 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <span className="text-[10px] tracking-[0.35em] uppercase text-clay">The Setup</span>
                <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                  Studio-grade sound, delivered anywhere.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 text-muted-foreground leading-relaxed">
                  Om Shala uses a high quality professional sound recording system to be able to
                  transmute the subtle microtones of singing bowls with utmost clarity and
                  precision. All you need from your end is a calm ambience and
                  earphones/headphones for your participants or simply a stereo system for a
                  room full of people.
                </p>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={0.05}>
              <NaturalImage
                src={setupImg}
                alt="Studio setup with crystal singing bowls and tanpura"
                fallbackAspect="3 / 4"
                frame="tl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="enquire" className="py-20 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Booking</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Customised to your organisation
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Sessions can be customised based on your organisation's needs:
            </p>
            <ul className="text-muted-foreground space-y-3 max-w-xl mx-auto mb-8 text-left">
              <li className="flex gap-3"><span className="text-clay">·</span> Online or in-person</li>
              <li className="flex gap-3"><span className="text-clay">·</span> Small teams or large groups</li>
              <li className="flex gap-3"><span className="text-clay">·</span> One-time sessions or ongoing programs for sustained corporate wellness</li>
            </ul>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
              Sessions can also be positioned as part of leadership development or performance
              optimisation programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:omshala.official@gmail.com?subject=Corporate%20Sound%20Healing%20Enquiry"
                className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500"
              >
                <Mail className="w-4 h-4 relative z-10 group-hover:text-background transition-colors duration-500" />
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Request the rate card</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a
                href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20for%20a%20corporate%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-8 sm:px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
              >
                Schedule a consultation
              </a>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
              <span>Email · <a href="mailto:omshala.official@gmail.com" className="text-foreground hover:text-clay transition-colors">omshala.official@gmail.com</a></span>
              <span className="hidden sm:inline text-foreground/20">·</span>
              <span>WhatsApp · <a href="https://wa.me/917400361681" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-clay transition-colors">+91 7400361681</a></span>
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