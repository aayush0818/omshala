import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wind, Volume2, Moon, Heart, Award, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import guidePortrait from "@/assets/guide-portrait.jpg";
import abstractZen from "@/assets/abstract-zen.jpg";
import heroBowl from "@/assets/hero-bowl.jpg";

const philosophyPillars = [
  {
    icon: Wind,
    title: "Breathwork",
    description: "Calms the nervous system, balances emotions, and aligns the mind."
  },
  {
    icon: Volume2,
    title: "Soundscape",
    description: "Crystal singing bowls tuned to 435 Hz create safety and slow the mind."
  },
  {
    icon: Moon,
    title: "Yog Nidra",
    description: "Grounds the body and relaxes deeper layers of the mind."
  },
  {
    icon: Heart,
    title: "Connection",
    description: "When relaxation is experienced this deeply, meditation occurs naturally."
  }
];

const credentials = [
  { icon: Award, text: "12+ years of experience in the mindfulness industry" },
  { icon: Award, text: "Founder of Om Shala — first studio in Bombay dedicated to Sound Healing" },
  { icon: BookOpen, text: "Spotify meditations in collaboration with Universal Music" },
  { icon: Award, text: "Sessions for members of the Royal Family in Dubai & Saudi Arabia" },
  { icon: Award, text: "Private sessions for the Late G. P. Hinduja in London" },
  { icon: Award, text: "Private sessions for the Health Minister of Goa" },
  { icon: BookOpen, text: "Large-scale event for 1,000+ participants (Rotary Club, Vapi)" },
  { icon: Award, text: "Online clients across the US, Europe & Madagascar" },
];

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: spaceRef, isVisible: spaceVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();

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
            src={heroBowl} 
            alt="Singing bowl" 
            className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-clay/10 rounded-full blur-[60px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-earth/10 rounded-full blur-[50px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              A Practice of
              <span className="block mt-2 text-clay">Profound Relaxation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Om Shala is the first studio in Bombay dedicated to Sound Healing—a quiet space
              built around the principle that relaxation, when experienced deeply, becomes the
              gateway to the inner life.
            </p>
          </div>
        </div>
      </section>

      {/* The Guide Section */}
      <section ref={storyRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[40px] animate-float" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            <div className={`relative transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="aspect-[3/4] overflow-hidden group">
                <img 
                  src={guidePortrait} 
                  alt="Shrutika - Your Guide" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Decorative frame */}
              <div className={`absolute -bottom-6 -right-6 w-full h-full border border-clay/20 -z-10 transition-all duration-1000 delay-300 ${storyVisible ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`absolute top-1/4 -left-8 w-16 h-px bg-gradient-to-r from-clay to-transparent transition-all duration-1000 delay-500 ${storyVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />
            </div>
            
            <div className={`transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                Your Guide
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                Meet Shrutika
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Shrutika is a Meditation Teacher and Indian Classical Singer practicing Nada Yoga—
                  the yoga of sound and music—as a pathway to the inner life.
                </p>
                <p>
                  She creates Sound Healing Experiences using Crystal Singing Bowls and the
                  instrument of Voice, supported by breathwork and guided relaxation. Her work
                  blends traditional yogic practices with an intuitive, somatic approach. Every
                  experience rests on the same principle: profound relaxation as the gateway to
                  the inner life.
                </p>
                <p className="italic text-foreground/80 pl-6 border-l-2 border-clay/40">
                  "Pure sound pulls you inward and brings deep relaxation. In this state, the body
                  is grounded, mind is open and emotions are free. Everything feels perfect, as it is."
                </p>
              </div>
              
              <div className="mt-10 pt-8 border-t border-foreground/10">
                <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-6">Credentials</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {credentials.map((cred, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <cred.icon className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                      <span>{cred.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10">
                <Link 
                  to="/schedule" 
                  className="group inline-flex items-center gap-3 text-sm text-foreground hover:text-clay transition-colors duration-300"
                >
                  <span className="link-underline">Book a session with Shrutika</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-bone/[0.02]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-clay/5 rounded-full blur-[50px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[40px] animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className={`text-xs tracking-[0.3em] uppercase text-ash transition-all duration-700 ${philosophyVisible ? 'opacity-100' : 'opacity-0'}`}>
              Our Philosophy
            </span>
            <h2 className={`mt-6 font-serif text-4xl md:text-5xl font-light transition-all duration-700 delay-100 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Principles That Guide Us
            </h2>
            <div className={`mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto transition-all duration-700 delay-200 ${philosophyVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {philosophyPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className={`group text-center transition-all duration-700 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-bone/10 mb-8 group-hover:border-clay/50 group-hover:bg-clay/10 transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-clay group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-xl mb-4 group-hover:text-clay transition-colors duration-500">{pillar.title}</h3>
                <p className="text-bone/60 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space Section */}
      <section ref={spaceRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-earth/10 rounded-full blur-[60px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-clay/10 rounded-full blur-[50px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${spaceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                The Space
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                A Sanctuary in the City
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Om Shala is designed to feel like an exhale—soft lighting, warm textures, and
                  carefully curated acoustics so the outside world can fade and inner exploration
                  can begin.
                </p>
                <p>
                  At the centre of every session are Crystal Singing Bowls tuned to 435 Hz—the
                  frequency of nature—paired with live Indian classical ragas sung as lullabies
                  for the soul.
                </p>
                <p>
                  The moment you settle in, the room invites you to slow down, breathe deeper,
                  and surrender enough that meditation begins to happen on its own.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-12">
                <div className="text-center">
                  <span className="text-4xl font-serif text-clay block">435Hz</span>
                  <p className="text-sm text-muted-foreground mt-2">Tuned crystal bowls</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-serif text-clay block">1000+</span>
                  <p className="text-sm text-muted-foreground mt-2">Participants held</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-serif text-clay block">12+</span>
                  <p className="text-sm text-muted-foreground mt-2">Years in practice</p>
                </div>
              </div>
            </div>
            
            <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${spaceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="aspect-square overflow-hidden group">
                <img 
                  src={abstractZen} 
                  alt="OmShala Space" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative frame */}
              <div className={`absolute -top-4 -left-4 w-28 h-28 border-l-2 border-t-2 border-clay/30 transition-all duration-1000 delay-500 ${spaceVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
              <div className={`absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-clay/30 transition-all duration-1000 delay-700 ${spaceVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section ref={journeyRef} className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-1000 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">The Philosophy</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
                Why this practice
              </h2>
            </div>
            
            <div className="space-y-16">
              {[
                { year: "01", title: "Soften", desc: "Meditation is not something you do — it is something that happens. The job is to simplify, soften and sweeten the process of going inward." },
                { year: "02", title: "Surrender", desc: "Give yourself permission to let go so deeply that relaxation pulls you naturally back to your centre, where meditation begins." },
                { year: "03", title: "Reset", desc: "We live in constant stimulation. This practice resets the nervous system regularly, before stress accumulates and disconnects mind from body." },
                { year: "04", title: "Return", desc: "Instead of pushing through the week and crashing, you learn to return to balance — again and again." },
                { year: "05", title: "Remember", desc: "Over time you sleep deeper, feel more, and understand yourself better. You begin to remember what was always there." }
              ].map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex gap-8 transition-all duration-700 ${journeyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-20">
                    <span className="font-serif text-2xl text-clay">{milestone.year}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-xl mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10 text-lg">
            Whether you're curious about a specific practice or simply seeking a moment of peace, 
            we're here to guide you home to yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/practices"
              className="px-10 py-4 bg-transparent border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Explore Practices
            </Link>
            <Link 
              to="/schedule"
              className="group relative px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Book a Session</span>
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default About;