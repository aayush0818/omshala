import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Cake, PartyPopper, Users, Sparkles, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import abstractZen from "@/assets/abstract-zen.jpg";
import img6Asset from "@/assets/img6-outdoor-group.webp.asset.json";
import img7Asset from "@/assets/img7-purple-room.webp.asset.json";
import img10Asset from "@/assets/img10-white-brunch.webp.asset.json";
import privateVideoAsset from "@/assets/private-carousel.mp4.asset.json";

const img6 = img6Asset.url;
const img7 = img7Asset.url;
const img10 = img10Asset.url;
const privateVideo = privateVideoAsset.url;

const privateOfferings = [
  {
    icon: Heart,
    title: "Weddings",
    tagline: "A soulful pause amid celebration",
    description: "An intimate sound healing ceremony for the bride, groom and inner circle. A moment of stillness and shared breath before or between the festivities. Crystal singing bowls and live ragas create a memory that stays with everyone present.",
    features: ["Crystal Singing Bowls", "Live Indian classical ragas", "Soft lighting & cozy setup", "Aromas, blankets and pillows", "Guided breathwork & relaxation"],
    idealFor: "Pre-wedding rituals, mehendi mornings, sangeet wind-downs, or post-wedding gratitude circles",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: Cake,
    title: "Birthdays",
    tagline: "Mark the year with intention",
    description: "A truly memorable way to celebrate a special day, a sound bath shared with closest friends, between the laughter and high energy. A deeply soulful relaxation that everyone takes home with them.",
    features: ["Hosted at your venue", "Cozy floor setup", "Soft lighting & aromatics", "Crystal bowls & live voice", "Suitable for all ages"],
    idealFor: "Milestone birthdays, intimate celebrations, soul-circle gatherings",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: PartyPopper,
    title: "Diwali & Festive Gatherings",
    tagline: "A grounded moment within the festivities",
    description: "An evening of light, breath and pure tone, the perfect counterpoint to a high-energy festive season. We design a setup that honours the occasion while offering everyone a few moments of true stillness.",
    features: ["Festive aesthetic setup", "Optional mantra & ragas", "Group breathwork", "Sound immersion", "Closing circle"],
    idealFor: "Diwali parties, year-end gatherings, intimate festive get-togethers",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: Users,
    title: "Women's Forums & Baby Showers",
    tagline: "Soft, intimate, deeply held",
    description: "Sound healing has become a meaningful way to gather women in an emotionally intimate way, to pause, exhale, and connect beneath the surface. Especially loved for baby showers and women's circles.",
    features: ["Held seated or lying down", "Aromas & cozy textures", "Voice & crystal bowls", "Optional intention sharing", "Trauma-aware facilitation"],
    idealFor: "Baby showers, women's circles, soul gatherings, friendship celebrations",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: Sparkles,
    title: "Bespoke Occasions",
    tagline: "Anniversaries, milestones & more",
    description: "Anniversaries, retirements, family reunions, healing circles. If there's a moment that calls for stillness and meaning, we'll design a sound healing experience around it.",
    features: ["Fully bespoke design", "Choice of voice & instruments", "Custom ambience", "Pre-event consultation", "Optional keepsake recording"],
    idealFor: "Any meaningful milestone that deserves more than a party",
    price: "On request",
    duration: "60-120 min"
  }
];

const processSteps = [
  { number: "01", title: "Connect", description: "Send us a message about the occasion, the size of the gathering, and the feeling you want to create." },
  { number: "02", title: "Design", description: "We co-design the experience around your venue and intention, from soundscape to setup, lighting and aromatics." },
  { number: "03", title: "Settle in", description: "Participants are seated or lying down in a calm environment. Soft lighting, cozy pillows and blankets, gentle aromas." },
  { number: "04", title: "Soften", description: "Guided breathwork and relaxation help everyone arrive, let go, and absorb the subtle vibrations of sound." },
  { number: "05", title: "Sound bath", description: "Crystal singing bowls and live Indian classical ragas, sung as lullabies for the soul." }
];

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeOffering, setActiveOffering] = useState(0);
  const { ref: offeringsRef, isVisible: offeringsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

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
            src={abstractZen} 
            alt="Private meditation space" 
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
              Bespoke Experiences
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              A soulful way
              <span className="block mt-2 text-clay">to gather</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl whitespace-pre-line">
              More and more people are opting for a mindful way to celebrate or come together&nbsp;for social gatherings. We live in a stimulated world and Sound Healing has become&nbsp;a meaningful way to pause and connect with one another in an emotionally intimate&nbsp;way, between all the laughter and high energy.{"\n\n\n"}
              It is a deeply soulful relaxation and a truly memorable way to celebrate a special day, occasion or milestone.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#enquire"
                className="group relative inline-block w-full sm:w-auto text-center px-8 sm:px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Enquire for Private Events</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a
                href="#offerings"
                className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500 hover:bg-foreground/5"
              >
                Explore Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet spacer, gives the hero room to breathe before the next section */}
      <div className="relative py-16 md:py-28 flex justify-center">
        <div className="h-px w-24 bg-clay/40" />
      </div>

      {/* The Experience */}
      <section className="relative overflow-hidden bg-charcoal text-bone">
        <div className="absolute inset-0">
          <img src={img6} alt="A private sound healing gathering" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
        </div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 py-28 md:py-48">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="text-[10px] tracking-[0.4em] uppercase text-clay">The Experience</span>
              <h2 className="mt-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] text-bone">
                {"\n"}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 h-px w-16 bg-clay mx-auto" />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 md:mt-12 text-bone/75 leading-[1.9] text-base md:text-[17px] text-left md:text-center whitespace-pre-line">
                Sound healing can be experienced seated or laying down in a calm environment. Participants are guided through deep breathing and relaxation techniques to be able to let go and absorb the subtle vibrations of sound.&nbsp;{"\n"}
                The Crystal Singing Bowls used are tuned to a healing frequency, <span className="text-clay">435 Hz</span>, and instantly dissolve mental and emotional tensions, sometimes even putting people off to sleep. Ragas are sung live in the Indian classical style, like lullabies for the soul.&nbsp;{"\n"}
                Soothing aromas, soft lighting and cozy pillows and blankets are put together aesthetically, to make this journey truly special and unforgettable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A Glimpse — standalone private video */}
      <section className="py-20 md:py-32 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-serif text-2xl md:text-4xl font-light leading-tight">
                  A Glimpse
                </h2>
                <div className="mt-6 w-12 h-px bg-clay/60 mx-auto" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MediaVideo
                src={privateVideo}
                fallbackAspect="16 / 9"
                frame="br"
                ariaLabel="A private sound healing gathering"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" ref={offeringsRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[40px] animate-float" />
        
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${offeringsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay">Choose Your Experience</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Private Offerings
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          {/* Offering Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {privateOfferings.map((offering, index) => (
              <button
                key={offering.title}
                onClick={() => setActiveOffering(index)}
                className={`flex items-center gap-2 px-5 py-3 text-sm border transition-all duration-300 ${
                  activeOffering === index 
                    ? 'border-clay bg-clay/10 text-clay' 
                    : 'border-foreground/10 hover:border-clay/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                <offering.icon className="w-4 h-4" />
                {offering.title}
              </button>
            ))}
          </div>
          
          {/* Active Offering Detail */}
          <div className={`max-w-5xl mx-auto transition-all duration-500 ${offeringsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 border border-clay/30 bg-clay/5">
                    {(() => {
                      const IconComponent = privateOfferings[activeOffering].icon;
                      return <IconComponent className="w-6 h-6 text-clay" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                      {privateOfferings[activeOffering].tagline}
                    </span>
                    <h3 className="font-serif text-3xl font-light">
                      {privateOfferings[activeOffering].title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {privateOfferings[activeOffering].description}
                </p>
                
                <p className="text-sm text-foreground/80 mb-8 p-4 border-l-2 border-clay/30 bg-muted/20">
                  <span className="text-clay font-medium">Ideal for: </span>
                  {privateOfferings[activeOffering].idealFor}
                </p>
                
                <div className="flex flex-wrap gap-8 mb-10">
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Duration</span>
                    <span className="font-serif text-xl">{privateOfferings[activeOffering].duration}</span>
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Investment</span>
                    <span className="font-serif text-xl text-clay">{privateOfferings[activeOffering].price}</span>
                  </div>
                </div>
                
                <a 
                  href={`mailto:omshala.official@gmail.com?subject=Private Event Inquiry: ${privateOfferings[activeOffering].title}`}
                  className="group relative inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">Start a Conversation</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
              
              {/* Features Sidebar */}
              <div className="lg:col-span-2">
                <div className="p-8 border border-foreground/10 relative">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-clay/30" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-clay/30" />
                  
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
                    What's Included
                  </h4>
                  <ul className="space-y-4">
                    {privateOfferings[activeOffering].features.map((feature, index) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <Check className="w-4 h-4 text-clay flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[40px] animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-20 transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-ash">How It Works</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Your Journey With Us
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`flex gap-8 transition-all duration-700 ${processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 border border-bone/20 flex items-center justify-center">
                    <span className="font-serif text-2xl text-clay">{step.number}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                    <p className="text-bone/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <Reveal>
              <NaturalImage
                src={img7}
                alt="Studio setup by night"
                fallbackAspect="3 / 4"
                frame="bl"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <NaturalImage
                src={img10}
                alt="A private women's gathering"
                fallbackAspect="3 / 4"
                frame="br"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enquire" className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] tracking-[0.35em] uppercase text-bone/60 mb-6 block">Enquire</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Let's discuss how we can
            <span className="block italic">organise one for you.</span>
          </h2>
          <p className="text-bone/75 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Om Shala has organised beautiful sound healing experiences for weddings, birthdays,
            Diwali parties, women's forums and baby showers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917400361681"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Call +91 7400361681</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Send an enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPrivate;