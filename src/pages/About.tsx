import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Leaf, Sun, Moon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import guidePortrait from "@/assets/guide-portrait.jpg";
import abstractZen from "@/assets/abstract-zen.jpg";

const philosophyPillars = [
  {
    icon: Heart,
    title: "Presence Over Perfection",
    description: "We believe healing happens not through striving, but through being. Each session invites you to simply arrive as you are."
  },
  {
    icon: Leaf,
    title: "Nature as Teacher",
    description: "Our practices draw from ancient wisdom traditions that recognized the profound healing power found in natural rhythms and elements."
  },
  {
    icon: Sun,
    title: "Light & Shadow",
    description: "True wellness embraces all parts of ourselves. We create safe space for both celebration and gentle exploration of what needs healing."
  },
  {
    icon: Moon,
    title: "Cyclical Living",
    description: "Just as the moon waxes and wanes, we honor the natural cycles of expansion and rest in our approach to wellbeing."
  }
];

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: spaceRef, isVisible: spaceVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-32 right-20 w-72 h-72 bg-clay/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Where Ancient Wisdom
              <span className="block text-clay">Meets Modern Seekers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              OmShala was born from a simple truth: in our fast-paced world, 
              we need sacred spaces to return to ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* The Guide Section */}
      <section 
        ref={storyRef}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`relative transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={guidePortrait} 
                  alt="Shrutika - Your Guide" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/20 -z-10" />
            </div>
            
            <div className={`transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                Your Guide
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Meet Shrutika
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey into sound and breath began not in a studio, but in the quiet hours 
                  before dawn in the foothills of the Himalayas. What started as a personal practice 
                  to navigate life's challenges became a calling I couldn't ignore.
                </p>
                <p>
                  After years of training with master practitioners in India and Nepal—studying 
                  Tibetan singing bowls, pranayama, and meditation traditions—I returned home 
                  with a vision: to create spaces where modern souls could access ancient healing.
                </p>
                <p>
                  Today, I'm honored to guide others on this path. Whether you're seeking relief 
                  from stress, deeper self-connection, or simply a moment of peace, I'm here to 
                  hold space for your journey.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-foreground/10">
                <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4">Training & Certifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Certified Sound Healing Practitioner, Nepal School of Sound</li>
                  <li>• Advanced Pranayama Teacher, Rishikesh Institute</li>
                  <li>• 500-hour Yoga Teacher Training, Mysore</li>
                  <li>• Tibetan Bowl Therapy Certification, Kathmandu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        ref={philosophyRef}
        className="py-20 md:py-32 bg-charcoal text-bone"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className={`text-xs tracking-[0.3em] uppercase text-clay mb-6 block transition-all duration-700 ${philosophyVisible ? 'opacity-100' : 'opacity-0'}`}>
              Our Philosophy
            </span>
            <h2 className={`font-serif text-3xl md:text-4xl font-light transition-all duration-700 delay-100 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Principles That Guide Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className={`text-center p-6 transition-all duration-700 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 border border-bone/20 mb-6">
                  <pillar.icon className="w-6 h-6 text-clay" />
                </div>
                <h3 className="font-serif text-xl mb-4">{pillar.title}</h3>
                <p className="text-bone/70 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space Section */}
      <section 
        ref={spaceRef}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${spaceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                The Space
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                A Sanctuary in the City
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  OmShala is designed to be an escape from the everyday—a place where the outside 
                  world fades and inner exploration begins. Natural light, minimal distractions, 
                  and carefully curated acoustics create the perfect environment for healing work.
                </p>
                <p>
                  Every element of our space has been thoughtfully chosen: from the handwoven 
                  textiles to the carefully sourced instruments, each detail supports your journey 
                  toward peace and presence.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <span className="text-3xl font-serif text-clay">50+</span>
                  <p className="text-sm text-muted-foreground mt-1">Healing Instruments</p>
                </div>
                <div>
                  <span className="text-3xl font-serif text-clay">1000+</span>
                  <p className="text-sm text-muted-foreground mt-1">Sessions Held</p>
                </div>
                <div>
                  <span className="text-3xl font-serif text-clay">∞</span>
                  <p className="text-sm text-muted-foreground mt-1">Moments of Peace</p>
                </div>
              </div>
            </div>
            
            <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${spaceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={abstractZen} 
                  alt="OmShala Space" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-clay/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Whether you're curious about a specific practice or simply seeking a moment of peace, 
            we're here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/practices"
              className="px-10 py-4 bg-transparent border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
            >
              Explore Practices
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 bg-charcoal text-bone hover:bg-clay transition-all duration-300"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
