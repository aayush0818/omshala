import { Calendar, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const BookingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="booking" className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-earth/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-clay/10 rounded-full blur-[200px] -translate-y-1/2" />
      
      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-bone/10 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-bone/10 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
              Begin your practice
            </h2>
            <p className="mt-8 text-bone/60 font-light leading-relaxed max-w-lg mx-auto text-lg">
              Sessions are held in a quiet, intentional space. 
              Book a time that allows you to arrive without rush.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Calendar, title: "Book Online", desc: "View available times and book instantly" },
              { icon: MapPin, title: "Visit Us", desc: "Bandra West, Mumbai" },
              { icon: Mail, title: "Get in Touch", desc: "omshala.official@gmail.com" }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`group text-center p-8 border border-bone/10 hover:border-clay/30 hover:bg-bone/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-bone/10 mb-6 group-hover:border-clay/50 group-hover:bg-clay/10 transition-all duration-500">
                  <item.icon className="w-5 h-5 text-clay group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-lg mb-3 group-hover:text-clay transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-bone/50">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              to="/schedule"
              className="group relative inline-block px-14 py-5 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-bone/20"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">View full schedule</span>
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            
            <p className="mt-8 text-xs text-bone/30">
              First class is complimentary. WhatsApp +91 7400361681 to begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
