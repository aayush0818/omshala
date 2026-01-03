import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Users, Heart, Building2, Sparkles, ArrowRight, Check, Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import abstractZen from "@/assets/abstract-zen.jpg";

const privateOfferings = [
  {
    icon: User,
    title: "Individual Sessions",
    tagline: "Your Personal Sanctuary",
    description: "One-on-one healing experiences tailored to your unique journey. Whether you're navigating stress, seeking clarity, or simply craving deep rest, these sessions are crafted entirely around your needs.",
    features: ["Personalized practice design", "Flexible scheduling", "Private, sacred space", "Pre-session consultation", "Follow-up integration support"],
    idealFor: "Those seeking dedicated personal attention and customized healing work",
    price: "From ₹4,000",
    duration: "90-120 min"
  },
  {
    icon: Heart,
    title: "Couples & Partners",
    tagline: "Deepen Your Connection",
    description: "Experience the profound intimacy of healing together. These sessions blend synchronized breathwork, partner sound baths, and connection rituals designed to deepen your bond and create shared memories.",
    features: ["Synchronized breathwork", "Partner sound healing", "Connection rituals", "Shared intention setting", "Communication practices"],
    idealFor: "Couples, partners, or close friends seeking to strengthen their connection",
    price: "From ₹5,500",
    duration: "90-120 min"
  },
  {
    icon: Users,
    title: "Family & Friends",
    tagline: "Gather in Healing",
    description: "Bring your loved ones together for an intimate group healing experience. Perfect for celebrations, reunions, or simply quality time that nourishes everyone's wellbeing.",
    features: ["Groups of 4-12", "Customized experience", "Multi-generational friendly", "Bonding activities", "Collective healing"],
    idealFor: "Families, friend groups, or small communities celebrating together",
    price: "From ₹8,000",
    duration: "2-3 hours"
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    tagline: "Elevate Your Team",
    description: "Invest in your team's wellbeing with workplace wellness programs. From stress management workshops to team-building sound baths, we bring transformative experiences to your organization.",
    features: ["On-site or studio sessions", "Team building focus", "Stress management tools", "Scalable for any team size", "Ongoing program options"],
    idealFor: "Companies, startups, and organizations prioritizing employee wellbeing",
    price: "Custom pricing",
    duration: "1-4 hours"
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    tagline: "Mark Life's Moments",
    description: "Transform milestones into meaningful ceremonies. Whether it's a birthday, anniversary, bachelorette, or life transition, we design bespoke rituals that honor your unique journey.",
    features: ["Bespoke ceremony design", "Meaningful rituals", "Photo-worthy setting", "Custom elements", "Keepsake options"],
    idealFor: "Birthdays, anniversaries, transitions, celebrations, and sacred milestones",
    price: "Custom pricing",
    duration: "2-4 hours"
  }
];

const testimonials = [
  {
    quote: "The couples session transformed our relationship. We learned to breathe together, to listen more deeply, and to create space for each other. It was the most meaningful anniversary gift we've ever given ourselves.",
    author: "Ananya & Rohan",
    context: "Couples Session"
  },
  {
    quote: "Our team was skeptical at first, but the corporate wellness session exceeded every expectation. The energy shift was palpable—we left more connected and grounded than ever.",
    author: "Vikram S., CEO",
    context: "Corporate Wellness"
  },
  {
    quote: "My 40th birthday sound bath was magical. Surrounded by my closest friends, guided through such a beautiful experience—it's a memory I'll treasure forever.",
    author: "Priya M.",
    context: "Special Occasion"
  }
];

const processSteps = [
  { number: "01", title: "Connect", description: "Reach out to share your vision. We'll have an initial conversation to understand your needs, preferences, and intentions." },
  { number: "02", title: "Design", description: "We craft a bespoke experience tailored to your group, occasion, and desired outcomes. Every detail is considered." },
  { number: "03", title: "Prepare", description: "We handle all logistics—space preparation, instruments, ambiance—so you can simply arrive and be present." },
  { number: "04", title: "Experience", description: "Step into your private ceremony. We guide you through a transformative journey designed just for you." },
  { number: "05", title: "Integrate", description: "Receive follow-up resources and support to help you carry the experience's benefits into daily life." }
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
              Private Events
              <span className="block mt-2 text-clay">& Ceremonies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Intimate healing experiences crafted exclusively for you and your loved ones. 
              Every detail designed around your intentions, creating moments that transform and stay with you.
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
                  href={`mailto:hello@omshala.com?subject=Private Event Inquiry: ${privateOfferings[activeOffering].title}`}
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
            <span className="text-xs tracking-[0.3em] uppercase text-clay">Voices</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              What They're Saying
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              href="mailto:hello@omshala.com?subject=Private Event Inquiry" 
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Start a Conversation</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            <Link 
              to="/events/public" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              View Public Events
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