import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

const contactMethods = [
  { icon: Mail, label: "Email", value: "omshala.official@gmail.com", href: "mailto:omshala.official@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "+91 74003 61681", href: "https://wa.me/917400361681" },
  { icon: MapPin, label: "Location", value: "Bandra West, Mumbai", href: "#" },
];

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", interest: "", message: "" });
  useEffect(() => setLoaded(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:omshala.official@gmail.com?subject=Enquiry: ${encodeURIComponent(formData.interest || "General")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8" />
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
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contactMethods.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06}>
                  <a
                    href={m.href}
                    className="group block p-10 border border-foreground/10 hover:border-clay/40 hover:bg-muted/20 transition-all duration-500 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 group-hover:border-clay/50 group-hover:bg-clay/10 mb-6 transition-all duration-500">
                      <m.icon className="w-4 h-4 text-clay" />
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{m.label}</p>
                    <p className="text-foreground group-hover:text-clay transition-colors duration-300">{m.value}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="enquire" className="py-28 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Reveal>
                <span className="text-[10px] tracking-[0.35em] uppercase text-clay">Enquiry</span>
                <h2 className="mt-6 font-serif text-3xl md:text-4xl font-light mb-12 leading-tight">
                  Tell us a little about what you have in mind.
                </h2>
              </Reveal>

              <Reveal delay={0.05}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Your name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-clay focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-clay focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">I'm enquiring about</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-clay focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Private">Private</option>
                      <option value="General">General enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/15 focus:border-clay focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-foreground text-xs tracking-[0.25em] uppercase hover:border-clay hover:text-clay transition-all duration-500"
                  >
                    <span>Send enquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;