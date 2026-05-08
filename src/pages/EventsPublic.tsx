import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users, ArrowRight, Calendar, Sparkles, Mail, Brain, Heart, Focus, Activity, Headphones, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroBowl from "@/assets/hero-bowl.jpg";

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
  { icon: Headphones, title: "Online", desc: "Joinable from desks or homes — ideal for distributed teams." },
  { icon: Building2, title: "On-site", desc: "Hosted at your office or boardroom for in-person teams." },
  { icon: Sparkles, title: "Offsites & retreats", desc: "Designed into leadership offsites and wellbeing retreats." },
];

const EventsPublic = () => {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@omshala.com?subject=Newsletter Subscription&body=Please add ${email} to your newsletter list.`;
    setEmail('');
  };

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
              Community Gatherings
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Public Events
              <span className="block mt-2 text-clay">& Ceremonies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Join our community for transformative group experiences. From new moon sound baths 
              to weekend retreats, each gathering is an opportunity to connect, heal, and grow together.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#events"
                className="group relative px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">View Upcoming Events</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <Link 
                to="/schedule"
                className="px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500 hover:bg-foreground/5"
              >
                Regular Sessions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" ref={eventsRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-earth/10 rounded-full blur-[60px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay">Mark Your Calendar</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Upcoming Gatherings
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`group relative border border-foreground/10 hover:border-clay/30 transition-all duration-500 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${event.featured ? 'bg-muted/20' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {event.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-clay/10 border border-clay/20">
                    <Sparkles className="w-3 h-3 text-clay" />
                    <span className="text-xs tracking-[0.15em] uppercase text-clay">Featured</span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row">
                  {/* Date Block */}
                  <div className="flex-shrink-0 p-6 lg:p-8 lg:w-36 flex flex-row lg:flex-col items-center justify-center lg:border-r border-b lg:border-b-0 border-foreground/5 bg-charcoal/5">
                    <span className="font-serif text-4xl lg:text-5xl text-clay mr-3 lg:mr-0">{event.day}</span>
                    <div className="lg:mt-2 lg:text-center">
                      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">{event.month}</span>
                      <span className="text-xs text-muted-foreground/60">{event.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                      <div className="flex-1">
                        <span className="text-xs tracking-[0.15em] uppercase text-clay mb-2 block">{event.subtitle}</span>
                        <h3 className="font-serif text-2xl lg:text-3xl mb-4 group-hover:text-clay transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                          {event.description}
                        </p>
                        
                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {event.highlights.map((highlight) => (
                            <span key={highlight} className="px-3 py-1 text-xs border border-foreground/10 text-muted-foreground">
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-clay" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-clay" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-clay" />
                            {event.spotsLeft} of {event.spotsTotal} spots left
                          </span>
                        </div>
                      </div>
                      
                      {/* Price & CTA */}
                      <div className="flex flex-col items-start xl:items-end gap-4 xl:pl-8">
                        <span className="text-3xl font-serif text-clay">{event.price}</span>
                        <a 
                          href={`mailto:hello@omshala.com?subject=Registration: ${event.title} - ${event.month} ${event.day}, ${event.year}`}
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:shadow-lg transition-all duration-300 text-sm"
                        >
                          Reserve Spot
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                        </a>
                        {event.spotsLeft <= 3 && (
                          <span className="text-xs text-clay">Filling up fast!</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-28 md:py-36 bg-charcoal text-bone relative overflow-hidden">
        {/* Decorative elements matching landing page */}
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-clay/5 rounded-full blur-[100px] animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-bone/10 mb-8">
              <Calendar className="w-6 h-6 text-clay" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-ash mb-6 block">Stay Connected</span>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Never Miss an Event
            </h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto mb-8" />
            <p className="text-bone/60 mb-10 leading-relaxed max-w-md mx-auto">
              Join our mailing list to be the first to know about upcoming events, workshops, and special offerings.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-transparent border border-bone/10 focus:border-clay/50 focus:outline-none transition-colors duration-300 text-bone placeholder:text-bone/40"
                required
              />
              <button
                type="submit"
                className="group relative px-8 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Subscribe</span>
                <Mail className="w-4 h-4 relative z-10 group-hover:text-bone transition-colors duration-500" />
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section ref={ctaRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background gradient like landing page booking section */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-earth/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-clay/10 rounded-full blur-[200px] -translate-y-1/2" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-bone/10 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-bone/10 to-transparent" />
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Private Experiences</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-bone">
            Looking for Something Private?
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto mb-8" />
          <p className="text-bone/60 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">
            We offer bespoke experiences for individuals, couples, families, and corporate groups. 
            Create a meaningful experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events/private" 
              className="group relative inline-flex items-center justify-center gap-2 px-14 py-5 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-bone/20"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Explore Private Events</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:text-bone transition-all duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-5 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPublic;