import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users, ArrowRight, Calendar, Sparkles, Mail, Brain, Heart, Focus, Activity, Headphones, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroBowl from "@/assets/hero-bowl.jpg";

const benefits = [
  { icon: Activity, text: "Reduces stress and prevents burnout" },
  { icon: Focus, text: "Improves focus, clarity and creativity" },
  { icon: Heart, text: "Enhances emotional regulation under pressure" },
  { icon: Brain, text: "Relaxes the nervous system" },
  { icon: Sparkles, text: "Increases overall workplace wellbeing" },
  { icon: Users, text: "Builds a calmer, more resilient team environment" },
];

const sessionFlow = [
  { number: "01", title: "Gentle breathwork", desc: "To settle the nervous system and help everyone arrive." },
  { number: "02", title: "Guided relaxation", desc: "To release mental and physical tension built up through the week." },
  { number: "03", title: "Sound immersion", desc: "Crystal singing bowls tuned to 435 Hz align brain waves with the frequency of nature." },
  { number: "04", title: "Optional voice", desc: "Live Indian classical ragas or mantras, when suitable for the group." },
];

const formats = [
  { icon: Headphones, title: "Online", desc: "Joinable from desks or homes — ideal for distributed teams." },
  { icon: Building2, title: "On-site", desc: "Hosted at your office or boardroom for in-person teams." },
  { icon: Sparkles, title: "Offsites & retreats", desc: "Designed into leadership offsites and wellbeing retreats." },
];

const EventsPublic = () => {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@omshala.com?subject=Newsletter Subscription&body=Please add ${email} to your newsletter list.`;
    setEmail('');
  };

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
            alt="Sound healing ceremony" 
            className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Corporate Wellness
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Deep Relaxation
              <span className="block mt-2 text-clay">for High-Performance Teams</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Therapeutic Sound Baths designed to reduce mental fatigue, improve focus and
              support emotional resilience. The mind is the highest human power — a rejuvenated
              mind is an optimised human resource.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#benefits"
                className="group relative px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Enquire for Corporate Sessions</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a 
                href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20enquire%20about%20a%20corporate%20sound%20healing%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500 hover:bg-foreground/5"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" ref={eventsRef} className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[80px] animate-float" />

        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay">Why Sound Baths at Work</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Benefits for the team
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
            <p className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              A therapeutic experience combining guided breathwork and deep relaxation in a sound
              immersion — helping employees and leaders rejuvenate mentally and access more
              presence and productivity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={b.text}
                className={`group p-8 border border-foreground/10 hover:border-clay/30 hover:bg-muted/20 transition-all duration-500 ${eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 group-hover:border-clay/40 mb-5 transition-colors duration-500">
                  <b.icon className="w-5 h-5 text-clay" />
                </div>
                <p className="text-foreground/80 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a Session Works */}
      <section className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[80px] animate-float" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-ash">How a Session Works</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              Fully guided. Accessible to everyone.
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {sessionFlow.map((s) => (
              <div key={s.number} className="flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 border border-bone/20 flex items-center justify-center">
                  <span className="font-serif text-2xl text-clay">{s.number}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                  <p className="text-bone/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Sound Baths Explainer */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">The Rise of Online Sound Baths</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 leading-tight">
                Felt deeply, even from your desk
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Online sound healing is increasingly preferred for corporate wellness because of
                  the ease of organising, accessibility and time efficiency. Participants can
                  experience it from their desk, or from bed when working from home.
                </p>
                <p>
                  Sound frequencies enter the ear and alter brain waves, which signal the nervous
                  system to shift into deep relaxation. Anything we "feel" in the body is often a
                  configuration in the brain first — and harmonious pure tones create real feelings
                  of peace and positivity, even when experienced online.
                </p>
                <p>
                  In an Om Shala experience, the crystal singing bowls are tuned to <span className="text-clay">435 Hz</span>
                  {" "}— the frequency of nature, deeply healing for the mind to sync with.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="p-8 border border-foreground/10 relative bg-muted/10">
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-clay/30" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-clay/30" />
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">The Setup</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Om Shala uses a high-quality professional sound recording system to transmit the
                  subtle microtones of the singing bowls with utmost clarity and precision.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  All you need from your end is a calm ambience and earphones / headphones for your
                  participants — or a stereo system for a room full of people.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {formats.map((f) => (
                  <div key={f.title} className="p-5 border border-foreground/10 text-center">
                    <f.icon className="w-5 h-5 text-clay mx-auto mb-3" />
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground/70">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Booking</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Customised to your organisation
            </h2>
            <ul className="text-muted-foreground space-y-3 max-w-xl mx-auto mb-12 text-left">
              <li className="flex gap-3"><span className="text-clay">·</span> Online or in-person</li>
              <li className="flex gap-3"><span className="text-clay">·</span> Small teams or large groups</li>
              <li className="flex gap-3"><span className="text-clay">·</span> One-time sessions or ongoing wellness programs</li>
              <li className="flex gap-3"><span className="text-clay">·</span> Can be positioned within leadership development or performance optimisation programs</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:omshala.official@gmail.com?subject=Corporate%20Sound%20Healing%20Enquiry"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500"
              >
                <Mail className="w-4 h-4 relative z-10 group-hover:text-background transition-colors duration-500" />
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Request the rate card</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a
                href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20for%20a%20corporate%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
              >
                WhatsApp +91 74003 61681
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section ref={ctaRef} className="py-28 md:py-40 relative overflow-hidden">
        {/* Background gradient like landing page booking section */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-earth/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-clay/10 rounded-full blur-[200px] -translate-y-1/2" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-bone/10 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-bone/10 to-transparent" />
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Private Experiences</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-bone">
            Looking for Something Private?
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto mb-8" />
          <p className="text-bone/60 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">
            We offer bespoke experiences for individuals, couples, families, and corporate groups. 
            Create a meaningful experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events/private" 
              className="group relative inline-flex items-center justify-center gap-2 px-14 py-5 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-bone/20"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Explore Private Events</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:text-bone transition-all duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-5 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPublic;