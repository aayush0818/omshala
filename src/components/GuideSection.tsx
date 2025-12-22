import guidePortrait from "@/assets/guide-portrait.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const GuideSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-28 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-foreground/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden group">
              <img 
                src={guidePortrait} 
                alt="Shrutika Rao, meditation guide" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Decorative accent */}
            <div className={`absolute -bottom-6 -right-6 w-full h-full border border-clay/20 -z-10 transition-all duration-1000 delay-300 ${imageVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'}`} />
            
            {/* Floating accent line */}
            <div className={`absolute top-1/4 -left-8 w-16 h-px bg-gradient-to-r from-clay to-transparent transition-all duration-1000 delay-500 ${imageVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />
          </div>
          
          {/* Content */}
          <div ref={contentRef} className="lg:pl-8">
            <span className={`text-xs tracking-[0.3em] uppercase text-muted-foreground transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Your Guide
            </span>
            <h2 className={`mt-6 font-serif text-4xl md:text-5xl font-light transition-all duration-700 delay-100 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Shrutika Rao
            </h2>
            
            <div className={`mt-10 space-y-6 text-muted-foreground font-light leading-relaxed transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-lg">
                With over a decade of study in sound healing, breathwork, and meditation traditions, 
                Shrutika creates a space where deep rest and transformation become possible.
              </p>
              <p>
                Trained in Tibetan singing bowl therapy, holotropic breathwork, and mindfulness-based 
                stress reduction, her approach is gentle, grounded, and deeply intuitive.
              </p>
              <p className="text-sm text-muted-foreground/70 pt-4 border-t border-border/30">
                Certified through the International Sound Therapy Association and the Kripalu Center 
                for Yoga & Health.
              </p>
            </div>
            
            <div className={`mt-10 transition-all duration-700 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="#booking" 
                className="group inline-flex items-center gap-3 text-sm text-foreground hover:text-clay transition-colors duration-300"
              >
                <span className="link-underline">Book a session with Shrutika</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
