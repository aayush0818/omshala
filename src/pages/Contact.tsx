import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

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
  {
    icon: MapPin,
    label: "Location",
    value: "Bandra West, Mumbai",
    href: "#location",
  },
];

const Contact = () => {
  const [params] = useSearchParams();
  const initialType = params.get("type") === "corporate" ? "Corporate" : params.get("type") === "private" ? "Private" : "";
  const [formData, setFormData] = useState({ name: "", email: "", interest: initialType, message: "" });

  useEffect(() => {
    if (initialType && !formData.interest) {
      setFormData((f) => ({ ...f, interest: initialType }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry: ${formData.interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:omshala.official@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">Contact</span>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
                Let's begin a conversation.
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Every experience begins with a few questions. Reach out — we'll design something
                for your team, your gathering, or your celebration.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact methods */}
        <section className="pb-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-4">
              {methods.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.08}>
                  <a
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group block p-8 border border-foreground/10 hover:border-clay/40 transition-colors duration-500"
                  >
                    <m.icon className="w-5 h-5 text-clay" />
                    <p className="mt-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="mt-2 text-foreground group-hover:text-clay transition-colors duration-500">
                      {m.value}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 md:py-32 bg-muted/20 border-y border-foreground/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-clay">Enquiry</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight">
                Tell us about your experience.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                <div>
                  <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                    Your name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-clay focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-clay focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                    Enquiring about
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-clay focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="Corporate">Corporate — Sound Healing for Teams</option>
                    <option value="Private">Private — Sound Healing for Celebrations</option>
                    <option value="General">General enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-clay focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your team, occasion, group size and dates."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase overflow-hidden"
                >
                  <span className="relative z-10">Send Enquiry</span>
                  <Send className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;