import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Waves, Wind, Brain, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const practices = [
  {
    icon: Waves,
    name: "Sound Healing",
    intention: "Deep cellular restoration through sacred vibrations",
    description: "Experience the profound healing power of Tibetan singing bowls, crystal bowls, and harmonic frequencies. Sound waves penetrate every cell, releasing tension and restoring natural balance to body and mind.",
    benefits: ["Reduces stress and anxiety", "Promotes deep relaxation", "Balances energy centers", "Enhances mental clarity"],
    duration: "60-90 min",
    price: "From ₹2,500"
  },
  {
    icon: Wind,
    name: "Breathwork",
    intention: "Unlock your life force through conscious breathing",
    description: "Harness the transformative power of breath to release emotional blockages, increase vitality, and access expanded states of consciousness. Various techniques tailored to your needs.",
    benefits: ["Releases emotional blocks", "Increases energy levels", "Improves focus", "Supports emotional healing"],
    duration: "45-75 min",
    price: "From ₹2,000"
  },
  {
    icon: Brain,
    name: "Guided Meditation",
    intention: "Journey inward to discover your truest self",
    description: "Be gently guided through visualization, body scanning, and mindfulness practices. Whether you're new to meditation or deepening your practice, find the stillness that resides within.",
    benefits: ["Calms the nervous system", "Improves sleep quality", "Enhances self-awareness", "Cultivates inner peace"],
    duration: "30-60 min",
    price: "From ₹1,500"
  },
  {
    icon: Sparkles,
    name: "Private Sessions",
    intention: "A bespoke experience crafted just for you",
    description: "Receive personalized attention in one-on-one sessions that blend multiple modalities based on your unique needs. Deep transformation in a sacred, private space.",
    benefits: ["Personalized approach", "Deeper healing work", "Flexible scheduling", "Ongoing support"],
    duration: "90-120 min",
    price: "From ₹4,000"
  }
];

const Practices = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-clay/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-clay/3 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Our Offerings
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Practices for the
              <span className="block text-clay">Mind, Body & Soul</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Each practice is a doorway to deeper self-understanding. Whether through sound, breath, or stillness, 
              discover the modality that speaks to your soul's journey.
            </p>
          </div>
        </div>
      </section>

      {/* Practices Grid */}
      <section 
        ref={gridRef}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {practices.map((practice, index) => (
              <div 
                key={practice.name}
                className={`group relative p-8 md:p-10 border border-foreground/10 hover:border-clay/30 transition-all duration-500 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 border border-foreground/10 group-hover:border-clay/30 transition-colors duration-300">
                    <practice.icon className="w-6 h-6 text-clay" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{practice.name}</h3>
                    <p className="text-sm text-clay italic">{practice.intention}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {practice.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4">Benefits</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {practice.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-clay rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-foreground/5">
                  <div className="flex gap-6">
                    <span className="text-sm text-muted-foreground">{practice.duration}</span>
                    <span className="text-sm text-foreground">{practice.price}</span>
                  </div>
                  <Link 
                    to="/contact"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-clay transition-colors duration-300"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-bone">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Not sure where to begin?
          </h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10">
            Every journey starts with a single step. Reach out for a complimentary consultation 
            to discover which practice aligns with your needs.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-transparent border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Practices;
