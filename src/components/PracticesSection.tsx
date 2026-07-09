import { ArrowRight } from "lucide-react";
import abstractZen from "@/assets/abstract-zen.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const practices = [
  {
    name: "Yog Nidra Meditation",
    intention: "A weekly online practice to reset the nervous system and return to centre.",
  },
  {
    name: "Sound Healing",
    intention: "Crystal Singing Bowls tuned to 435 Hz — the frequency of nature.",
  },
  {
    name: "Breathwork",
    intention: "Conscious breathing to settle the nervous system and balance emotions.",
  },
  {
    name: "Guided Meditation",
    intention: "Soft, somatic guidance — meditation that happens, rather than something you do.",
  },
];

const PracticesSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);

  return (
    <section id="practices" className="py-28 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <div 
            ref={imageRef}
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden group">
              <img 
                src={abstractZen} 
                alt="Meditation illustration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative frame with animation */}
            <div className={`absolute -top-4 -left-4 w-28 h-28 border-l-2 border-t-2 border-clay/30 transition-all duration-1000 delay-500 ${imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
            <div className={`absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-clay/30 transition-all duration-1000 delay-700 ${imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
          </div>
          
          {/* Content side */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <span className={`text-xs tracking-[0.3em] uppercase text-muted-foreground transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Practices
            </span>
            <h2 className={`mt-4 font-serif text-4xl md:text-5xl font-light transition-all duration-700 delay-100 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Choose your path
            </h2>
            
            <div className="mt-14 space-y-0 divide-y divide-border/50">
              {practices.map((practice, index) => (
                <a 
                  key={practice.name}
                  href="#booking"
                  className={`group py-7 first:pt-0 last:pb-0 flex items-center justify-between cursor-pointer transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-light text-foreground group-hover:text-clay transition-colors duration-300 mb-2">
                      {practice.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {practice.intention}
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:border-clay group-hover:bg-clay/10 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-clay group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;
