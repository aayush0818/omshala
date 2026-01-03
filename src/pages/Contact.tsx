import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import abstractZen from "@/assets/abstract-zen.jpg";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@omshala.com",
    href: "mailto:hello@omshala.com",
    description: "We respond within 24 hours"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    description: "Mon-Sat, 9am-7pm"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bandra West, Mumbai",
    href: "#location",
    description: "By appointment only"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "By Appointment",
    href: "#",
    description: "Book your preferred time"
  }
];

const faqs = [
  {
    question: "What should I wear to a session?",
    answer: "Wear comfortable, loose-fitting clothing that allows you to breathe freely and relax. We recommend layers as body temperature can fluctuate during deep relaxation. Avoid heavy perfumes or scents."
  },
  {
    question: "Do I need any prior experience?",
    answer: "Not at all. Our sessions are designed for complete beginners as well as experienced practitioners. We'll guide you through everything and meet you exactly where you are on your journey."
  },
  {
    question: "How early should I arrive?",
    answer: "Please arrive 10-15 minutes before your session. This allows time to settle in, complete any paperwork, and transition into a relaxed state before we begin. Late arrivals may result in shortened sessions."
  },
  {
    question: "What if I fall asleep during a sound bath?",
    answer: "Falling asleep is completely natural and nothing to worry about. Your subconscious mind continues to receive the healing frequencies even during sleep. Many find this to be deeply restorative and a sign of true relaxation."
  },
  {
    question: "Can I book a session for someone else?",
    answer: "Yes! Gift sessions make wonderful presents for birthdays, anniversaries, or simply because. Contact us directly to arrange a beautifully presented gift certificate or book on someone's behalf."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand plans change. Please provide at least 24 hours notice for cancellations to receive a full refund or reschedule. Late cancellations (less than 24 hours) may be subject to a 50% fee."
  },
  {
    question: "Are group bookings available?",
    answer: "Absolutely! We offer private group sessions for friends, families, corporate teams, and special occasions. Group sessions can be customized to your specific needs. Contact us for pricing and availability."
  },
  {
    question: "What should I do after a session?",
    answer: "We recommend drinking plenty of water, avoiding heavy meals immediately after, and giving yourself time to integrate the experience. Journaling, gentle walks, or simply resting can help extend the benefits."
  }
];

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', interest: '' });
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: locationRef, isVisible: locationVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:hello@omshala.com?subject=Inquiry: ${formData.interest || 'General'}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={abstractZen} 
            alt="Serene abstract" 
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
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Let's Begin
              <span className="block mt-2 text-clay">Your Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Whether you're ready to book a session, have questions, or simply want to connect—
              we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section ref={contactRef} className="py-24 md:py-32 border-b border-foreground/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-clay/5 rounded-full blur-[60px] animate-float" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                className={`group text-center p-8 md:p-10 border border-foreground/10 hover:border-clay/30 hover:bg-muted/20 transition-all duration-500 relative ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10 group-hover:border-clay/50 group-hover:bg-clay/10 mb-6 transition-all duration-500">
                  <method.icon className="w-5 h-5 text-clay group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">{method.label}</p>
                <p className="text-foreground group-hover:text-clay transition-colors duration-300 font-medium">{method.value}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef} className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-clay/5 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-earth/10 rounded-full blur-[60px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                Send a Message
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                We'd Love to Hear From You
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-4 bg-transparent border border-foreground/10 focus:border-clay/50 focus:outline-none transition-colors duration-300"
                    placeholder="How should we address you?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 bg-transparent border border-foreground/10 focus:border-clay/50 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    I'm Interested In
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-4 bg-transparent border border-foreground/10 focus:border-clay/50 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="Sound Healing">Sound Healing</option>
                    <option value="Breathwork">Breathwork</option>
                    <option value="Guided Meditation">Guided Meditation</option>
                    <option value="Private Session">Private Session</option>
                    <option value="Group Booking">Group Booking</option>
                    <option value="Corporate Wellness">Corporate Wellness</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-4 bg-transparent border border-foreground/10 focus:border-clay/50 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about what you're looking for, any questions, or simply say hello..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="group relative w-full sm:w-auto px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">Send Message</span>
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </form>
            </div>
            
            {/* Location Info */}
            <div ref={locationRef} className={`transition-all duration-1000 delay-200 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                The Studio
              </h2>
              
              <div className="aspect-video bg-muted/20 border border-foreground/10 mb-8 overflow-hidden relative group">
                <img 
                  src={abstractZen} 
                  alt="OmShala Studio" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end p-6">
                  <p className="text-bone text-sm">Bandra West, Mumbai</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Serenity Lane, 2nd Floor<br />
                    Bandra West, Mumbai 400050<br />
                    Maharashtra, India
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4">Session Hours</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between border-b border-foreground/5 pb-2">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-foreground/5 pb-2">
                      <span>Saturday</span>
                      <span className="text-foreground">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-clay">By Appointment</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border border-clay/20 bg-clay/5">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-clay font-medium">First time?</span> Mention "new guest" when booking for a complimentary 15-minute consultation before your session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[80px] animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className={`text-xs tracking-[0.3em] uppercase text-ash transition-all duration-700 ${faqVisible ? 'opacity-100' : 'opacity-0'}`}>
                Common Questions
              </span>
              <h2 className={`mt-6 font-serif text-4xl md:text-5xl font-light transition-all duration-700 delay-100 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Frequently Asked
              </h2>
              <div className={`mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto transition-all duration-700 delay-200 ${faqVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`border border-bone/10 px-6 hover:border-clay/30 transition-all duration-500 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 2) * 50}ms` }}
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:text-clay transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-bone/70 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-clay/10 rounded-full blur-[60px] animate-float" />
        
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to Experience It?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            The best way to understand what we offer is to experience it firsthand. 
            Book your first session and discover your own path to peace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/schedule"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-500">View Schedule & Book</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              to="/practices"
              className="px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
            >
              Explore Practices
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;