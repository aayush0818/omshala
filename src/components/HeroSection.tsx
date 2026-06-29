import { useEffect, useState } from "react";
import heroBowl from "@/assets/hero-bowl.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("experience-split");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0">
        <img 
          src={heroBowl} 
          alt="Hand touching singing bowl" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
        
        {/* Animated grain overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative line */}
            <div className={`w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-foreground/10 mx-auto mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} />
            
            <span className={`inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Om Shala
            </span>
            
            <h1 className={`mt-10 font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-foreground transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              Sound Healing Experiences
              <span className="block mt-3 italic text-clay/90">for Work &amp; Life</span>
            </h1>

            <p className={`mt-10 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              Ancient sound practices designed to bring deep relaxation, clarity and connection.
            </p>

            <div className={`mt-14 flex items-center justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
              <a
                href="#experience-split"
                onClick={handleExplore}
                className="group relative px-12 py-5 bg-foreground text-background text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10">Explore Experiences</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
