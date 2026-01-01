import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Users, Heart, Building2, Sparkles, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const privateOfferings = [
  {
    icon: User,
    title: "Individual Sessions",
    description: "One-on-one healing experiences tailored to your unique journey.",
    features: ["Personalized practice", "Flexible scheduling", "Private space"],
    price: "From ₹4,000"
  },
  {
    icon: Heart,
    title: "Couples & Partners",
    description: "Deepen connection through shared healing experiences.",
    features: ["Synchronized breathwork", "Partner sound bath", "Connection rituals"],
    price: "From ₹5,500"
  },
  {
    icon: Users,
    title: "Family & Friends",
    description: "Intimate group sessions in a private setting.",
    features: ["Groups of 4-8", "Customized experience", "Bonding activities"],
    price: "From ₹8,000"
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Workplace wellness programs for teams.",
    features: ["On-site sessions", "Team building", "Stress management"],
    price: "Custom pricing"
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Mark milestones with meaningful ceremonies.",
    features: ["Bespoke design", "Meaningful rituals", "Photo-worthy setting"],
    price: "Custom pricing"
  }
];

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: offeringsRef, isVisible: offeringsVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-32 right-10 w-72 h-72 bg-clay/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Bespoke Experiences</span>
            <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Private Events <span className="block text-clay">& Ceremonies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Intimate healing experiences crafted exclusively for you and your loved ones.
            </p>
          </div>
        </div>
      </section>

      <section ref={offeringsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privateOfferings.map((offering, index) => (
              <div 
                key={offering.title}
                className={`group relative p-8 border border-foreground/10 hover:border-clay/30 transition-all duration-500 ${offeringsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 border border-foreground/10 group-hover:border-clay/30 transition-colors duration-300">
                    <offering.icon className="w-5 h-5 text-clay" />
                  </div>
                  <span className="text-sm text-clay">{offering.price}</span>
                </div>
                
                <h3 className="font-serif text-xl mb-3 group-hover:text-clay transition-colors duration-300">{offering.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{offering.description}</p>
                
                <ul className="space-y-2">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-clay flex-shrink-0" />{feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-charcoal text-bone text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Let's Create Something Beautiful</h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10">Every private experience begins with a conversation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@omshala.com?subject=Private Event Inquiry" className="px-10 py-4 bg-bone text-charcoal hover:bg-clay hover:text-bone transition-all duration-300">
              Start a Conversation
            </a>
            <Link to="/events/public" className="flex items-center justify-center gap-2 px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300">
              View Public Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPrivate;