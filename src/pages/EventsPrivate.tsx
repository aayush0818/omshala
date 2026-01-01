import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, Building, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const privateOfferings = [
  {
    icon: Users,
    title: "Private Sessions",
    description: "One-on-one sound healing and breathwork tailored to your specific needs and intentions.",
    features: ["Personalized assessment", "Custom session design", "Flexible scheduling", "Home visits available"],
  },
  {
    icon: Heart,
    title: "Couples & Families",
    description: "Shared healing experiences designed to deepen connection and restore harmony.",
    features: ["Couples sound baths", "Family meditation", "Relationship renewal", "Celebration rituals"],
  },
  {
    icon: Building,
    title: "Corporate Wellness",
    description: "Bring mindfulness to your workplace with tailored programs for teams and organizations.",
    features: ["Team building sessions", "Stress management", "Office wellness programs", "Executive retreats"],
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Create meaningful moments for birthdays, anniversaries, or life transitions.",
    features: ["Birthday ceremonies", "Anniversary rituals", "Life transition support", "Memorial services"],
  },
];

const EventsPrivate = () => {
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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal text-bone overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-earth/30" />
          <div className="absolute top-1/4 left-0 w-[600px] h-[300px] bg-clay/15 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className={`inline-block text-xs tracking-[0.25em] uppercase text-bone/60 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Personalized Experiences
              </span>
              
              <h1 className={`mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                Private Events
              </h1>
              
              <p className={`mt-6 text-lg text-bone/70 font-light leading-relaxed max-w-xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                Curated healing experiences designed around your unique needs, 
                timeline, and intentions. Available for individuals, groups, and organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section ref={ref} className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {privateOfferings.map((offering, index) => (
                <div
                  key={offering.title}
                  className={`group p-8 md:p-10 border border-foreground/10 hover:border-clay/30 hover:bg-muted/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10 mb-6 group-hover:border-clay/50 group-hover:bg-clay/10 transition-all duration-500">
                    <offering.icon className="w-6 h-6 text-clay group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-clay transition-colors duration-300">
                    {offering.title}
                  </h3>
                  
                  <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                    {offering.description}
                  </p>
                  
                  <ul className="mt-6 space-y-2">
                    {offering.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-clay" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Let's create something meaningful
              </h2>
              
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Every private event begins with a conversation. Share your vision, 
                and we'll craft an experience that honors your intentions.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@omshala.com"
                  className="group relative px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10">Start a conversation</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
                <a
                  href="/events/public"
                  className="px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-300"
                >
                  View public events
                </a>
              </div>
              
              <p className="mt-10 text-sm text-muted-foreground/70">
                Typical response time: 24-48 hours
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPrivate;
