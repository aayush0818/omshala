import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Waves, Wind, Brain, Sparkles, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import abstractZen from "@/assets/abstract-zen.jpg";

const practices = [
  {
    icon: Waves,
    name: "Sound Healing",
    tagline: "Vibration as Medicine",
    intention: "Deep cellular restoration through sacred vibrations",
    description: "Experience the profound healing power of Tibetan singing bowls, crystal bowls, and harmonic frequencies. Sound waves penetrate every cell, releasing tension and restoring natural balance to body and mind. Each session is a journey inward, guided by ancient instruments that have been used for centuries to promote healing and transformation.",
    benefits: ["Reduces stress and anxiety", "Promotes deep relaxation", "Balances energy centers", "Enhances mental clarity", "Releases emotional blockages", "Improves sleep quality"],
    duration: "60-90 min",
    price: "From ₹2,500",
    ideal: "Perfect for those seeking deep relaxation and stress relief"
  },
  {
    icon: Wind,
    name: "Breathwork",
    tagline: "The Bridge Within",
    intention: "Unlock your life force through conscious breathing",
    description: "Harness the transformative power of breath to release emotional blockages, increase vitality, and access expanded states of consciousness. Through various techniques tailored to your needs—from calming pranayama to energizing holotropic patterns—discover how the simple act of breathing can unlock profound transformation.",
    benefits: ["Releases emotional blocks", "Increases energy levels", "Improves focus and clarity", "Supports emotional healing", "Activates the nervous system", "Deepens self-awareness"],
    duration: "45-75 min",
    price: "From ₹2,000",
    ideal: "Ideal for those ready to move energy and process emotions"
  },
  {
    icon: Brain,
    name: "Guided Meditation",
    tagline: "Return to Stillness",
    intention: "Journey inward to discover your truest self",
    description: "Be gently guided through visualization, body scanning, and mindfulness practices. Whether you're new to meditation or deepening your practice, find the stillness that resides within. Each session is crafted to meet you where you are, offering techniques you can carry into daily life.",
    benefits: ["Calms the nervous system", "Improves sleep quality", "Enhances self-awareness", "Cultivates inner peace", "Reduces mental chatter", "Builds resilience"],
    duration: "30-60 min",
    price: "From ₹1,500",
    ideal: "Best for beginners and those seeking peace of mind"
  },
  {
    icon: Sparkles,
    name: "Private Sessions",
    tagline: "Your Personal Journey",
    intention: "A bespoke experience crafted just for you",
    description: "Receive personalized attention in one-on-one sessions that blend multiple modalities based on your unique needs. Whether you're navigating a life transition, seeking deeper healing, or simply craving dedicated space for yourself, private sessions offer the intimacy and customization for profound transformation.",
    benefits: ["Personalized approach", "Deeper healing work", "Flexible scheduling", "Ongoing support", "Combined modalities", "Safe, private space"],
    duration: "90-120 min",
    price: "From ₹4,000",
    ideal: "For those seeking dedicated, personalized healing work"
  }
];

const Practices = () => {
  const [loaded, setLoaded] = useState(false);
  const [activePractice, setActivePractice] = useState(0);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: detailRef, isVisible: detailVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={abstractZen} 
            alt="Meditation space" 
            className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-1 h-24 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute bottom-1/3 right-16 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-clay/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-earth/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
        
        <div ref={heroRef} className="container mx-auto px-6 relative z-10 pt-32">
          <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Decorative line */}
            <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Our Offerings
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Practices for the
              <span className="block mt-2 text-clay">Mind, Body & Soul</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Each practice is a doorway to deeper self-understanding. Whether through sound, breath, or stillness, 
              discover the modality that speaks to your soul's journey.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {practices.map((practice, index) => (
                <button
                  key={practice.name}
                  onClick={() => setActivePractice(index)}
                  className={`px-5 py-3 text-sm border transition-all duration-300 ${
                    activePractice === index 
                      ? 'border-clay bg-clay/10 text-clay' 
                      : 'border-foreground/10 hover:border-clay/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {practice.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Practice Detail */}
      <section ref={detailRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto transition-all duration-700 ${detailVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Left - Practice info */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 border border-clay/30 bg-clay/5">
                    {(() => {
                      const IconComponent = practices[activePractice].icon;
                      return <IconComponent className="w-6 h-6 text-clay" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                      {practices[activePractice].tagline}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-light">
                      {practices[activePractice].name}
                    </h2>
                  </div>
                </div>
                
                <p className="text-clay italic mb-6 text-lg">
                  "{practices[activePractice].intention}"
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  {practices[activePractice].description}
                </p>
                
                <p className="text-sm text-foreground/80 mb-10 p-4 border-l-2 border-clay/30 bg-muted/20">
                  {practices[activePractice].ideal}
                </p>
                
                <div className="flex flex-wrap gap-8 mb-10">
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Duration</span>
                    <span className="font-serif text-xl">{practices[activePractice].duration}</span>
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Investment</span>
                    <span className="font-serif text-xl text-clay">{practices[activePractice].price}</span>
                  </div>
                </div>
                
                <Link 
                  to="/schedule"
                  className="group relative inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">Book This Practice</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </div>
              
              {/* Right - Benefits */}
              <div className="lg:col-span-2">
                <div className="p-8 border border-foreground/10 relative">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-clay/30" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-clay/30" />
                  
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
                    Benefits
                  </h3>
                  <ul className="space-y-4">
                    {practices[activePractice].benefits.map((benefit, index) => (
                      <li 
                        key={benefit} 
                        className="flex items-center gap-3 text-foreground/80"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Check className="w-4 h-4 text-clay flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Practices Quick View */}
      <section className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[80px] animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-ash">Quick Reference</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Compare All Practices
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => (
              <div 
                key={practice.name}
                className="group p-8 border border-bone/10 hover:border-clay/30 hover:bg-bone/5 transition-all duration-500 relative"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-3 border border-bone/10 group-hover:border-clay/30 inline-block mb-6 transition-colors duration-300">
                  <practice.icon className="w-5 h-5 text-clay" />
                </div>
                
                <h3 className="font-serif text-xl mb-2 group-hover:text-clay transition-colors duration-300">
                  {practice.name}
                </h3>
                <p className="text-bone/50 text-sm mb-6">
                  {practice.intention}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-bone/10">
                  <span className="text-sm text-bone/60">{practice.duration}</span>
                  <span className="text-clay">{practice.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-clay/10 rounded-full blur-[60px] animate-float" />
        
        <div className={`container mx-auto px-6 text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Not sure where to begin?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Every journey starts with a single step. Reach out for a complimentary consultation 
            to discover which practice aligns with your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="group relative inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-500">Start a Conversation</span>
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              to="/schedule"
              className="px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Practices;