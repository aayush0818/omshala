import useScrollAnimation from "@/hooks/useScrollAnimation";

const steps = [
  { number: "01", label: "Arrive", description: "Enter the space and leave the world behind" },
  { number: "02", label: "Settle", description: "Find comfort and let your body relax" },
  { number: "03", label: "Breathe", description: "Connect with your natural rhythm" },
  { number: "04", label: "Listen", description: "Open to sound and sensation" },
  { number: "05", label: "Integrate", description: "Carry the calm with you" },
];

const ExpectSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-28 md:py-40 bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-earth/10 rounded-full blur-[60px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-clay/10 rounded-full blur-[50px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              How a session works
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Fully guided, accessible to everyone
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          {/* Desktop layout */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className={`absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-all duration-1500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
            
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex-1 text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full border border-border/30 group-hover:border-clay/50 group-hover:bg-clay/10 transition-all duration-500" />
                  <span className="text-2xl font-serif text-foreground/30 group-hover:text-clay transition-colors duration-500">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-light mb-3 group-hover:text-clay transition-colors duration-500">
                  {step.label}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-[140px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${index === 4 ? 'col-span-2' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-14 h-14 mb-4">
                  <div className="absolute inset-0 rounded-full border border-border/30 group-hover:border-clay/50 transition-all duration-500" />
                  <span className="text-xl font-serif text-foreground/30 group-hover:text-clay transition-colors duration-500">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-light mb-2">
                  {step.label}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectSection;
