import { useEffect, useState } from "react";
import heroBowl from "@/assets/hero-bowl.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0">
        <img 
          src={heroBowl} 
          alt="Hand touching singing bowl" 
          className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        
        {/* Animated grain overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-16 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative line */}
            <div className={`w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-foreground/10 mx-auto mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} />
            
            <span className={`inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Sound · Breath · Stillness
            </span>
            
            <h1 className={`mt-8 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-foreground transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              A space to breathe, listen,<br className="hidden md:block" /> and return to yourself.
            </h1>
            
            <p className={`mt-8 text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              Sound healing, breathwork, and meditation practices in a calm, intentional space.
            </p>
            
            <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
              <a 
                href="#booking" 
                className="group relative px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10">Begin a session</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a 
                href="#practices" 
                className="px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500 hover:bg-foreground/5"
              >
                Explore practices
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
        <a href="#philosophy" className="flex flex-col items-center gap-3 group">
          <span className="text-xs text-muted-foreground tracking-widest uppercase group-hover:text-clay transition-colors duration-300">Scroll</span>
          <div className="relative w-5 h-8 border border-foreground/20 rounded-full group-hover:border-clay/50 transition-colors duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-foreground/40 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
