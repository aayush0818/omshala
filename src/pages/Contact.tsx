import { useEffect, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const methods = [
  {
    icon: Mail,
    label: "Email",
    value: "omshala.official@gmail.com",
    href: "mailto:omshala.official@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 74003 61681",
    href: "https://wa.me/917400361681",
  },
];

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />

        <section className="flex-1 flex items-center pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6">
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-[10px] tracking-[0.35em] uppercase text-clay">Contact</span>
              <h1 className="mt-6 font-sans text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
                Reach out directly.
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We prefer real conversations to enquiry forms. Send an email or a WhatsApp
                message and we'll take it from there.
              </p>

              <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                {methods.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block p-10 border border-foreground/10 hover:border-clay/50 hover:bg-muted/20 transition-all duration-500 text-left"
                  >
                    <m.icon
                      className="w-5 h-5 text-clay mb-6"
                      strokeWidth={1.5}
                    />
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                      {m.label}
                    </p>
                    <p className="text-foreground group-hover:text-clay transition-colors duration-300 text-base md:text-lg font-sans">
                      {m.value}
                    </p>
                  </a>
                ))}
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