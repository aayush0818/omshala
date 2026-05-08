import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Cake, PartyPopper, Users, Sparkles, ArrowRight, Check, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import abstractZen from "@/assets/abstract-zen.jpg";

const privateOfferings = [
  {
    icon: Heart,
    title: "Weddings",
    tagline: "A soulful pause amid celebration",
    description: "An intimate sound healing ceremony for the bride, groom and inner circle — a moment of stillness and shared breath before or between the festivities. Crystal singing bowls and live ragas create a memory that stays with everyone present.",
    features: ["Tuned to 435 Hz", "Live Indian classical ragas", "Soft lighting & cozy setup", "Aromas, blankets and pillows", "Guided breathwork & relaxation"],
    idealFor: "Pre-wedding rituals, mehendi mornings, sangeet wind-downs, or post-wedding gratitude circles",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: Cake,
    title: "Birthdays",
    tagline: "Mark the year with intention",
    description: "A truly memorable way to celebrate a special day — a sound bath shared with closest friends, between the laughter and high energy. A deeply soulful relaxation that everyone takes home with them.",
    features: ["Hosted at your venue", "Cozy floor setup", "Soft lighting & aromatics", "Crystal bowls & live voice", "Suitable for all ages"],
    idealFor: "Milestone birthdays, intimate celebrations, soul-circle gatherings",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: PartyPopper,
    title: "Diwali & Festive Gatherings",
    tagline: "A grounded moment within the festivities",
    description: "An evening of light, breath and pure tone — the perfect counterpoint to a high-energy festive season. We design a setup that honours the occasion while offering everyone a few moments of true stillness.",
    features: ["Festive aesthetic setup", "Optional mantra & ragas", "Group breathwork", "Sound immersion", "Closing circle"],
    idealFor: "Diwali parties, year-end gatherings, intimate festive get-togethers",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: Users,
    title: "Women's Forums & Baby Showers",
    tagline: "Soft, intimate, deeply held",
    description: "Sound healing has become a meaningful way to gather women in an emotionally intimate way — to pause, exhale, and connect beneath the surface. Especially loved for baby showers and women's circles.",
    features: ["Held seated or lying down", "Aromas & cozy textures", "Voice & crystal bowls", "Optional intention sharing", "Trauma-aware facilitation"],
    idealFor: "Baby showers, women's circles, soul gatherings, friendship celebrations",
    price: "On request",
    duration: "60-90 min"
  },
  {
    icon: Sparkles,
    title: "Bespoke Occasions",
    tagline: "Anniversaries, milestones & more",
    description: "Anniversaries, retirements, family reunions, healing circles — if there's a moment that calls for stillness and meaning, we'll design a sound healing experience around it.",
    features: ["Fully bespoke design", "Choice of voice & instruments", "Custom ambience", "Pre-event consultation", "Optional keepsake recording"],
    idealFor: "Any meaningful milestone that deserves more than a party",
    price: "On request",
    duration: "60-120 min"
  }
];

const testimonials = [
  {
    quote: "Pure sound pulls you inward and brings deep relaxation. In this state, the body is grounded, mind is open and emotions are free. Everything feels perfect, as it is.",
    author: "Shrutika",
    context: "Founder, Om Shala"
  }
];

const processSteps = [
  { number: "01", title: "Connect", description: "Send us a message about the occasion, the size of the gathering, and the feeling you want to create." },
  { number: "02", title: "Design", description: "We co-design the experience around your venue and intention — from soundscape to setup, lighting and aromatics." },
  { number: "03", title: "Settle in", description: "Participants are seated or lying down in a calm environment. Soft lighting, cozy pillows and blankets, gentle aromas." },
  { number: "04", title: "Soften", description: "Guided breathwork and relaxation help everyone arrive, let go, and absorb the subtle vibrations of sound." },
  { number: "05", title: "Sound bath", description: "Crystal singing bowls tuned to 435 Hz, with live Indian classical ragas sung as lullabies for the soul." }
];

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeOffering, setActiveOffering] = useState(0);
  const { ref: offeringsRef, isVisible: offeringsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

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
            className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        
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
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              More and more people are choosing a mindful way to celebrate. Sound healing has
              become a meaningful pause between the laughter and high energy — a deeply soulful
              relaxation that turns a special day into an unforgettable one.
            </p>
            
            <div className="mt-10">
              <a 
                href="#offerings"
                className="group relative inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Explore Options</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" ref={offeringsRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[80px] animate-float" />
        
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
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[80px] animate-float" />
        
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

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-clay/10 rounded-full blur-[60px] animate-float" />
        
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay">In her words</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              The intention behind every gathering
            </h2>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-8 border border-foreground/10 relative transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-clay/30 mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-foreground/10">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-xs text-clay mt-1">{testimonial.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10 text-lg">
            Every private experience begins with a conversation. Tell us your vision, 
            and together we'll design something meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20organise%20a%20private%20sound%20healing%20experience."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">WhatsApp +91 74003 61681</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            <Link 
              to="/events/public" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Corporate Events
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