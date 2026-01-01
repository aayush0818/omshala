import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const upcomingEvents = [
  {
    id: 1,
    title: "New Moon Sound Bath",
    day: "13",
    month: "Jan",
    time: "7:00 PM - 9:00 PM",
    location: "OmShala Studio",
    spotsLeft: 4,
    price: "₹1,800",
    description: "Release and set intentions under the new moon's energy with a deeply restorative sound healing session.",
    featured: true
  },
  {
    id: 2,
    title: "Morning Breathwork Circle",
    day: "18",
    month: "Jan",
    time: "6:30 AM - 8:00 AM",
    location: "OmShala Studio",
    spotsLeft: 6,
    price: "₹1,200",
    description: "Start your weekend with energizing breathwork practices to awaken vitality and clarity."
  },
  {
    id: 3,
    title: "Full Moon Meditation",
    day: "27",
    month: "Jan",
    time: "7:30 PM - 9:30 PM",
    location: "Terrace Garden",
    spotsLeft: 8,
    price: "₹1,500",
    description: "Gather under the full moon for a powerful group meditation and sound healing ceremony."
  },
  {
    id: 4,
    title: "Sound & Stillness Retreat",
    day: "8-9",
    month: "Feb",
    time: "Full Day",
    location: "Nandi Hills Retreat",
    spotsLeft: 3,
    price: "₹8,500",
    description: "A transformative weekend immersion featuring sound healing, breathwork, and nature connection."
  }
];

const EventsPublic = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-clay/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Community Gatherings</span>
            <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Public Events <span className="block text-clay">& Ceremonies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Join our community for transformative group experiences.
            </p>
          </div>
        </div>
      </section>

      <section ref={eventsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 space-y-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className={`group relative border border-foreground/10 hover:border-clay/30 transition-all duration-500 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${event.featured ? 'bg-muted/20' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 p-6 md:p-8 md:w-32 flex flex-row md:flex-col items-center justify-center md:border-r border-b md:border-b-0 border-foreground/5 bg-charcoal/5">
                  <span className="font-serif text-3xl md:text-4xl text-clay mr-2 md:mr-0">{event.day}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{event.month}</span>
                </div>
                
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-clay transition-colors duration-300">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{event.description}</p>
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-clay" />{event.time}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-clay" />{event.location}</span>
                        <span className="flex items-center gap-2"><Users className="w-4 h-4 text-clay" />{event.spotsLeft} spots left</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-4">
                      <span className="text-2xl font-serif text-clay">{event.price}</span>
                      <a href={`mailto:hello@omshala.com?subject=Registration: ${event.title}`} className="flex items-center gap-2 px-6 py-3 border border-foreground/20 hover:border-clay hover:text-clay transition-all duration-300">
                        Reserve Spot <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-charcoal text-bone text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Looking for Something Private?</h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10">We offer bespoke experiences for individuals, couples, and groups.</p>
          <Link to="/events/private" className="inline-flex items-center gap-2 px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300">
            Explore Private Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPublic;