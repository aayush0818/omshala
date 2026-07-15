import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

const contactMethods = [
  { icon: Mail, label: "Email", value: "omshala.official@gmail.com", href: "mailto:omshala.official@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "+91 74003 61681", href: "https://wa.me/917400361681" },
];

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-brand-purple to-brand-purple/30 mb-8" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-clay">Contact</span>
              <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
                Let's begin a conversation.
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Every experience is designed around your intention. Reach out and we'll shape
                the details together.
              </p>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className="py-16 md:py-20 border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {contactMethods.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06}>
                  <a
                    href={m.href}
                    className="group block p-10 border border-foreground/10 hover:border-brand-purple/60 hover:bg-brand-purple/[0.04] transition-all duration-500 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 group-hover:border-brand-purple/60 group-hover:bg-brand-purple/10 mb-6 transition-all duration-500">
                      <m.icon className="w-4 h-4 text-brand-purple" />
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{m.label}</p>
                    <p className="text-foreground group-hover:text-brand-purple transition-colors duration-300">{m.value}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;