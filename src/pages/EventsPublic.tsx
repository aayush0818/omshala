import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const publicEvents = [
  {
    title: "Full Moon Sound Bath",
    date: "January 13, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "OmShala Studio, Bandra West",
    spots: 12,
    description: "Immerse yourself in the healing vibrations of crystal bowls, gongs, and chimes under the full moon's energy.",
  },
  {
    title: "Breathwork Circle",
    date: "January 20, 2026",
    time: "6:30 PM - 8:00 PM",
    location: "OmShala Studio, Bandra West",
    spots: 8,
    description: "A guided pranayama session designed to release tension, increase vitality, and restore inner calm.",
  },
  {
    title: "New Moon Meditation",
    date: "January 29, 2026",
    time: "7:00 PM - 8:30 PM",
    location: "OmShala Studio, Bandra West",
    spots: 15,
    description: "Set intentions and cultivate clarity through guided meditation aligned with the new moon cycle.",
  },
  {
    title: "Weekend Wellness Retreat",
    date: "February 7-8, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Alibaug Retreat Center",
    spots: 20,
    description: "A two-day immersive experience combining sound healing, breathwork, yoga, and plant-based nourishment.",
  },
];

const EventsPublic = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted to-muted" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[300px] bg-clay/10 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className={`inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Community Gatherings
              </span>
              
              <h1 className={`mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-foreground transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                Public Events
              </h1>
              
              <p className={`mt-6 text-lg text-muted-foreground font-light leading-relaxed max-w-xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                Join our open sessions and connect with a community of mindful practitioners. 
                All levels are welcome.
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section ref={ref} className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {publicEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`group p-8 md:p-10 border border-foreground/10 hover:border-clay/30 hover:bg-muted/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-clay transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-clay" />
                          {event.date}
                        </span>
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
                          {event.spots} spots
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:text-right">
                      <a
                        href="#"
                        className="inline-block px-8 py-3 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay hover:bg-clay/5 transition-all duration-300"
                      >
                        Reserve spot
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
              <p className="text-muted-foreground text-sm">
                Can't find a suitable time?{" "}
                <a href="/events/private" className="text-clay hover:underline">
                  Request a private session
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPublic;
