import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@omshala.com",
    href: "mailto:hello@omshala.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indiranagar, Bangalore",
    href: "#"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "By Appointment",
    href: "#"
  }
];

const faqs = [
  {
    question: "What should I wear to a session?",
    answer: "Wear comfortable, loose-fitting clothing that allows you to breathe freely and relax. We recommend layers as body temperature can fluctuate during deep relaxation."
  },
  {
    question: "Do I need any prior experience?",
    answer: "Not at all. Our sessions are designed for complete beginners as well as experienced practitioners. We'll guide you through everything and meet you exactly where you are."
  },
  {
    question: "How early should I arrive?",
    answer: "Please arrive 10-15 minutes before your session. This allows time to settle in, complete any paperwork, and transition into a relaxed state before we begin."
  },
  {
    question: "What if I fall asleep during a sound bath?",
    answer: "Falling asleep is completely natural and nothing to worry about. Your subconscious mind continues to receive the healing frequencies even during sleep. Many find this to be deeply restorative."
  },
  {
    question: "Can I book a session for someone else?",
    answer: "Yes! Gift sessions make wonderful presents. Contact us directly to arrange a gift certificate or book on someone's behalf."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand plans change. Please provide at least 24 hours notice for cancellations to receive a full refund or reschedule. Late cancellations may be subject to a fee."
  }
];

const sessionTypes = [
  { name: "Sound Healing", duration: "60-90 min", price: "₹2,500" },
  { name: "Breathwork", duration: "45-75 min", price: "₹2,000" },
  { name: "Guided Meditation", duration: "30-60 min", price: "₹1,500" },
  { name: "Private Session", duration: "90-120 min", price: "₹4,000" },
  { name: "Couples Session", duration: "90 min", price: "₹5,000" },
  { name: "Group Booking (4+)", duration: "90 min", price: "Custom" }
];

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: bookingRef, isVisible: bookingVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-clay/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-clay/3 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Let's Begin
              <span className="block text-clay">Your Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Whether you're ready to book a session or simply have questions, 
              we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section 
        ref={contactRef}
        className="py-16 border-y border-foreground/5"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                className={`group text-center p-6 transition-all duration-700 hover:bg-muted/30 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-foreground/10 group-hover:border-clay/30 mb-4 transition-colors duration-300">
                  <method.icon className="w-5 h-5 text-clay" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">{method.label}</p>
                <p className="text-foreground group-hover:text-clay transition-colors duration-300">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section 
        ref={bookingRef}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Session Types */}
            <div className={`transition-all duration-1000 ${bookingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                Sessions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Choose Your Experience
              </h2>
              
              <div className="space-y-4">
                {sessionTypes.map((session, index) => (
                  <div 
                    key={session.name}
                    className="group flex items-center justify-between p-5 border border-foreground/10 hover:border-clay/30 transition-all duration-300"
                  >
                    <div>
                      <h3 className="font-serif text-lg group-hover:text-clay transition-colors duration-300">{session.name}</h3>
                      <p className="text-sm text-muted-foreground">{session.duration}</p>
                    </div>
                    <span className="text-clay">{session.price}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="mailto:hello@omshala.com?subject=Session Booking Inquiry"
                className="inline-block mt-8 px-10 py-4 bg-charcoal text-bone hover:bg-clay transition-all duration-300"
              >
                Request Booking
              </a>
            </div>
            
            {/* Location & Hours */}
            <div className={`transition-all duration-1000 delay-200 ${bookingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                The Studio
              </h2>
              
              <div className="aspect-video bg-muted/30 border border-foreground/10 mb-8 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Map • Indiranagar, Bangalore</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Address</h4>
                  <p className="text-muted-foreground">
                    123 Serenity Lane, 2nd Floor<br />
                    Indiranagar, Bangalore 560038<br />
                    Karnataka, India
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Session Hours</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className="py-20 md:py-32 bg-charcoal text-bone"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className={`text-xs tracking-[0.3em] uppercase text-clay mb-6 block transition-all duration-700 ${faqVisible ? 'opacity-100' : 'opacity-0'}`}>
                Common Questions
              </span>
              <h2 className={`font-serif text-3xl md:text-4xl font-light transition-all duration-700 delay-100 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Frequently Asked
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`border border-bone/10 px-6 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:text-clay transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-bone/70 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            We're always happy to chat. Reach out anytime and we'll get back to you within 24 hours.
          </p>
          <a 
            href="mailto:hello@omshala.com"
            className="inline-block px-10 py-4 bg-transparent border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
          >
            Send Us a Message
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
