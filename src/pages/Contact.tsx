import { useEffect, useState } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />

        <section className="flex-1 flex items-center pt-40 pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className={`w-px h-16 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
              <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">Contact</span>
              <h1 className={`font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Get in touch.
              </h1>
              <p className={`mt-10 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                We respond personally, usually within a day. WhatsApp is the fastest way to reach us.
              </p>

              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 max-w-4xl">
                <Reveal>
                  <a
                    href="mailto:omshala.official@gmail.com"
                    className="group block bg-background p-10 h-full hover:bg-muted/20 transition-colors duration-500"
                  >
                    <Mail className="w-5 h-5 text-clay mb-8" />
                    <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground block mb-3">Email</span>
                    <span className="font-serif text-lg font-light text-foreground group-hover:text-clay transition-colors duration-300 break-all">
                      omshala.official@gmail.com
                    </span>
                  </a>
                </Reveal>
                <Reveal delay={0.08}>
                  <a
                    href="https://wa.me/917400361681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-background p-10 h-full hover:bg-muted/20 transition-colors duration-500"
                  >
                    <MessageCircle className="w-5 h-5 text-clay mb-8" />
                    <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground block mb-3">WhatsApp</span>
                    <span className="font-serif text-lg font-light text-foreground group-hover:text-clay transition-colors duration-300">
                      +91 74003 61681
                    </span>
                  </a>
                </Reveal>
                <Reveal delay={0.16}>
                  <div className="bg-background p-10 h-full">
                    <MapPin className="w-5 h-5 text-clay mb-8" />
                    <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground block mb-3">Location</span>
                    <span className="font-serif text-lg font-light text-foreground">
                      Bandra West, Mumbai
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">By appointment only.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;