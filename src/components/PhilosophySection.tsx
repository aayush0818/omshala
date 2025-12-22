import { Volume2, Wind, Moon } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const philosophyItems = [
  {
    icon: Volume2,
    title: "Why sound",
    description: "Sound bypasses the thinking mind and speaks directly to the body. It dissolves tension we didn't know we were holding."
  },
  {
    icon: Wind,
    title: "Why breath",
    description: "Breath is the bridge between body and mind. Through conscious breathing, we access states of clarity and calm that remain long after the practice ends."
  },
  {
    icon: Moon,
    title: "Why stillness",
    description: "In stillness, we remember what was always there. Not as escape, but as return—to presence, to wholeness, to ourselves."
  }
];

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="philosophy" className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-bone/[0.02]" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-clay/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-ash">Philosophy</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
              The foundation of our practice
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-10">
            {philosophyItems.map((item, index) => (
              <div 
                key={item.title}
                className={`group text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-bone/10 mb-8 group-hover:border-clay/50 group-hover:bg-clay/10 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-clay group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-2xl md:text-2xl font-light mb-5 group-hover:text-clay transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-bone/60 font-light leading-relaxed text-sm max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
