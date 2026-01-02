import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users, ArrowRight, Calendar, Sparkles, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroBowl from "@/assets/hero-bowl.jpg";

const upcomingEvents = [
  {
    id: 1,
    title: "New Moon Sound Bath",
    subtitle: "Release & Intention Setting",
    day: "13",
    month: "Jan",
    year: "2026",
    time: "7:00 PM - 9:00 PM",
    location: "OmShala Studio",
    spotsTotal: 12,
    spotsLeft: 4,
    price: "₹1,800",
    description: "Release what no longer serves you and set powerful intentions under the new moon's energy. This deeply restorative sound healing session features Tibetan singing bowls, crystal bowls, and guided visualization specifically designed for new moon energy.",
    highlights: ["Intention setting ritual", "Full sound bath", "Guided meditation", "Herbal tea included"],
    featured: true
  },
  {
    id: 2,
    title: "Morning Breathwork Circle",
    subtitle: "Energize Your Weekend",
    day: "18",
    month: "Jan",
    year: "2026",
    time: "6:30 AM - 8:00 AM",
    location: "OmShala Studio",
    spotsTotal: 8,
    spotsLeft: 6,
    price: "₹1,200",
    description: "Start your weekend with energizing breathwork practices to awaken vitality and clarity. Learn techniques you can practice at home to maintain energy and focus throughout your day.",
    highlights: ["Dynamic breathwork", "Grounding practice", "Take-home techniques", "Light breakfast"],
    featured: false
  },
  {
    id: 3,
    title: "Full Moon Meditation",
    subtitle: "Gratitude & Illumination",
    day: "27",
    month: "Jan",
    year: "2026",
    time: "7:30 PM - 9:30 PM",
    location: "Terrace Garden",
    spotsTotal: 15,
    spotsLeft: 8,
    price: "₹1,500",
    description: "Gather under the full moon for a powerful group meditation and sound healing ceremony. Experience the heightened energy of the full moon as we explore gratitude, release, and illumination.",
    highlights: ["Outdoor setting", "Moon gazing", "Group energy healing", "Closing circle"],
    featured: false
  },
  {
    id: 4,
    title: "Sound & Stillness Retreat",
    subtitle: "Weekend Immersion",
    day: "8-9",
    month: "Feb",
    year: "2026",
    time: "Full Weekend",
    location: "Nandi Hills Retreat",
    spotsTotal: 12,
    spotsLeft: 3,
    price: "₹8,500",
    description: "A transformative weekend immersion featuring sound healing, breathwork, meditation, and nature connection. Includes accommodation, all meals, and multiple sessions across two days.",
    highlights: ["2 days immersion", "Nature walks", "Multiple sessions", "All meals included"],
    featured: true
  },
  {
    id: 5,
    title: "Introduction to Sound Healing",
    subtitle: "Workshop for Beginners",
    day: "22",
    month: "Feb",
    year: "2026",
    time: "10:00 AM - 1:00 PM",
    location: "OmShala Studio",
    spotsTotal: 10,
    spotsLeft: 7,
    price: "₹2,500",
    description: "Curious about sound healing? This introductory workshop covers the science and art of vibrational therapy, with hands-on experience playing singing bowls. Perfect for beginners.",
    highlights: ["Theory & science", "Hands-on practice", "Certificate of attendance", "Tea & snacks"],
    featured: false
  }
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
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-bone/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-bone/10 to-transparent" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10 pt-32 text-bone">
          <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Community Gatherings
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Public Events
              <span className="block mt-2 text-clay">& Ceremonies</span>
            </h1>
            <p className="text-lg text-bone/70 leading-relaxed max-w-xl">
              Join our community for transformative group experiences. From new moon sound baths 
              to weekend retreats, each gathering is an opportunity to connect, heal, and grow together.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#events"
                className="group relative px-8 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-bone transition-colors duration-500">View Upcoming Events</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <Link 
                to="/schedule"
                className="px-8 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
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
      <section className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Calendar className="w-8 h-8 text-clay mx-auto mb-6" />
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
              Never Miss an Event
            </h3>
            <p className="text-muted-foreground mb-8">
              Join our mailing list to be the first to know about upcoming events, workshops, and special offerings.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-transparent border border-foreground/10 focus:border-clay/50 focus:outline-none transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="group relative px-6 py-3 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Subscribe</span>
                <Mail className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section ref={ctaRef} className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-bone/5 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Looking for Something Private?
          </h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10 text-lg">
            We offer bespoke experiences for individuals, couples, families, and corporate groups. 
            Create a meaningful experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events/private" 
              className="group inline-flex items-center gap-2 px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500 relative"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Explore Private Events</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPublic;