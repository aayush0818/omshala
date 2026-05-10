import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Wind, Volume2, Heart, Check, Globe, Clock, PlayCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import abstractZen from "@/assets/abstract-zen.jpg";

const pillars = [
  {
    icon: Wind,
    title: "Breathwork",
    points: ["Calms the nervous system", "Balances emotions", "Aligns the mind"],
  },
  {
    icon: Volume2,
    title: "Soundscape",
    points: ["Creates a sense of safety", "Slows down the mind"],
  },
  {
    icon: Moon,
    title: "Yog Nidra Meditation",
    points: ["Grounds the body", "Relaxes deeper layers of the mind", "You connect with your self"],
  },
];

const benefits = [
  "Regulates the nervous system and reduces stress",
  "Supports deeper, more restful sleep",
  "Brings you back to a calm, grounded state",
  "Improves emotional awareness and mental clarity",
  "Over time you understand yourself better",
];

const includes = [
  "1 live guided session each week",
  "Access to the session recording for 7 days",
  "Option to join live or practice in your own time",
  "A consistent space to reset, rest and reconnect",
];

const Schedule = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation();
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={abstractZen}
              alt="Yog Nidra meditation"
              className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          </div>

          <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
          <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[50px] animate-float" />

          <div className="container mx-auto px-6 relative z-10 pt-32">
            <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`} />
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Weekly Online Practice</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Yog Nidra
                <span className="block mt-2 text-clay">Meditation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Return to your self through breath, sound, and profound relaxation. A weekly
                practice designed to reset the nervous system and bring the mind back to centre.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20book%20my%20free%20Yog%20Nidra%20trial%20class."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">Book your free trial</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
                <a
                  href="mailto:omshala.official@gmail.com?subject=Yog%20Nidra%20Meditation%20Enquiry"
                  className="px-10 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-clay hover:text-clay transition-all duration-500"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Three pillars */}
        <section ref={pillarsRef} className="py-28 md:py-40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-700 ${pillarsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">The Practice</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">Three layers, one return</h2>
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`p-8 border border-foreground/10 hover:border-clay/30 transition-all duration-500 ${pillarsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 mb-6">
                    <p.icon className="w-5 h-5 text-clay" />
                  </div>
                  <h3 className="font-serif text-xl mb-4">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-clay mt-1.5 w-1 h-1 rounded-full bg-clay flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy block */}
        <section className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
          <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
          <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: "2s" }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-ash">The Philosophy</span>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Meditation is not something you do.
                <span className="block text-clay mt-2">It is something that happens.</span>
              </h2>
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
              <p className="mt-10 text-bone/70 leading-relaxed text-lg">
                Much like sleep, it cannot be forced. The more you try, the further it moves
                away. So the job is to simplify, soften and sweeten the process of going inward
                — by giving yourself the permission to let go and surrender so deeply that
                relaxation pulls you naturally back to your centre, where meditation begins.
              </p>
            </div>
          </div>
        </section>

        {/* Class details + benefits + includes */}
        <section ref={detailsRef} className="py-28 md:py-40 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className={`max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 transition-all duration-700 ${detailsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="lg:col-span-3 space-y-12">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Class Details</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">Live, weekly, online</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-clay flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground/80">Format & Duration</p>
                        <p className="text-sm">Weekly online session · 60 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Globe className="w-5 h-5 text-clay flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground/80">Time zones</p>
                        <p className="text-sm">Joinable from the US, Europe, Madagascar — choose any time that suits your location and schedule.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <PlayCircle className="w-5 h-5 text-clay flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground/80">Recording</p>
                        <p className="text-sm">Access to the session recording for 7 days.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">Pricing</span>
                  <div className="p-8 border border-foreground/10 relative">
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-clay/30" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-clay/30" />
                    <p className="font-serif text-2xl text-clay mb-2">First class free</p>
                    <p className="text-sm text-muted-foreground mb-6">A trial session, on us.</p>
                    <div className="border-t border-foreground/10 pt-6">
                      <p className="font-serif text-xl">Monthly Plan · 4 sessions</p>
                      <p className="text-muted-foreground text-sm mt-2">€80 &nbsp;·&nbsp; ≈ $86 USD &nbsp;·&nbsp; ≈ 400,000 MGA</p>
                      <p className="text-xs text-muted-foreground/70 mt-2">One class per week. Payment via Wise, PayPal or bank transfer.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-6">Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-6">What you receive</h3>
                  <ul className="space-y-3">
                    {includes.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-clay/10 rounded-full blur-[60px] animate-float" />

          <div className="container mx-auto px-6 text-center">
            <Heart className="w-6 h-6 text-clay mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Join the Practice
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Sign up for your free trial — and find a consistent space to reset, rest and reconnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917400361681?text=Hi%20Om%20Shala%2C%20I%27d%20like%20to%20book%20my%20free%20Yog%20Nidra%20trial%20class."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">Book your free trial</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <Link
                to="/contact"
                className="px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Schedule;