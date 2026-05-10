import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Pure sound pulls you inward and brings deep relaxation. In this state, the body is grounded, mind is open and emotions are free. Everything feels perfect, as it is.",
    author: "Shrutika",
    context: "Founder, Om Shala"
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-bone/5 rounded-full blur-[50px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      
      {/* Large decorative quote */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[16rem] md:text-[24rem] font-serif text-bone/[0.03] leading-none select-none pointer-events-none">
        "
      </div>
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`text-xs tracking-[0.3em] uppercase text-bone/40 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Voices
          </span>
          
          <div className="mt-16 min-h-[320px] flex flex-col justify-center">
            <blockquote 
              key={current}
              className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              "{testimonials[current].quote}"
            </blockquote>
            <footer className={`mt-10 transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <cite className="not-italic text-sm text-bone/80 tracking-wide font-light">
                — {testimonials[current].author}
              </cite>
              <p className="mt-2 text-xs text-bone/40 tracking-wide">
                {testimonials[current].context}
              </p>
            </footer>
          </div>
          
          {/* Navigation */}
          <div className="mt-16 flex items-center justify-center gap-8">
            <button 
              onClick={prev}
              className="group p-3 border border-bone/10 hover:border-clay/50 hover:bg-clay/10 transition-all duration-500 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-bone/60 group-hover:text-clay transition-colors duration-300" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== current) {
                      setIsAnimating(true);
                      setCurrent(index);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current ? 'bg-clay w-8' : 'bg-bone/20 w-1.5 hover:bg-bone/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="group p-3 border border-bone/10 hover:border-clay/50 hover:bg-clay/10 transition-all duration-500 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-bone/60 group-hover:text-clay transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
