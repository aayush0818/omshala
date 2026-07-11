import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import AboutSection from "@/components/AboutSection";
import CredentialCards from "@/components/CredentialCards";
import heroImgAsset from "@/assets/img5-studio-night.webp.asset.json";
import img6Asset from "@/assets/img6-outdoor-group.webp.asset.json";
import img7Asset from "@/assets/img7-purple-room.webp.asset.json";
import img10Asset from "@/assets/img10-white-brunch.webp.asset.json";
import privateVideoAsset from "@/assets/private-carousel.mp4.asset.json";

const img6 = img6Asset.url;
const img7 = img7Asset.url;
const img10 = img10Asset.url;
const privateVideo = privateVideoAsset.url;
const heroImg = heroImgAsset.url;

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[75vh] flex items-center overflow-hidden bg-charcoal">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Private meditation space" 
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
            style={{ objectPosition: '50% 55%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[50px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[40px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10 pt-28 md:pt-32 pb-14 md:pb-16">
          <div className={`max-w-2xl relative transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Soft white glow concentrated behind the text */}
            <div className="absolute -inset-x-16 sm:-inset-x-20 lg:-inset-x-32 -inset-y-10 sm:-inset-y-14 lg:-inset-y-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/95 via-white/50 to-transparent blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className={`w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-6 md:mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
              
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-clay mb-4 md:mb-6 block font-semibold">
                {"\n"}
              </span>
              <h1 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-5 md:mb-6"
                  style={{ textShadow: "0 1px 16px rgba(255,255,255,0.8)" }}>
                A soulful way
                <span className="block mt-2 text-clay">to gather</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-foreground/90 leading-relaxed max-w-xl whitespace-pre-line font-medium">
                More and more people are opting for a mindful way to celebrate or come together&nbsp;for social gatherings. We live in a stimulated world and Sound Healing has become&nbsp;a meaningful way to pause and connect with one another in an emotionally intimate&nbsp;way, between all the laughter and high energy.{"\n\n\n"}
                It is a deeply soulful relaxation and a truly memorable way to celebrate a special day, occasion or milestone.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#enquire"
                  className="group relative inline-block w-auto text-center px-8 sm:px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">Enquire for Private Events</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Credentials */}
      <CredentialCards className="border-t border-foreground/5" />

      {/* The Experience */}
      <section className="relative overflow-hidden bg-charcoal text-bone">
        <div className="absolute inset-0">
          <img src={img6} alt="A private sound healing gathering" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
        </div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 py-28 md:py-48">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="text-[10px] tracking-[0.4em] uppercase text-clay">The Experience</span>
              <h2 className="mt-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] text-bone">
                {"\n"}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 h-px w-16 bg-clay mx-auto" />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 md:mt-12 text-bone/75 leading-[1.9] text-base md:text-[17px] text-left md:text-center whitespace-pre-line">
                Sound healing can be experienced seated or laying down in a calm environment. Participants are guided through deep breathing and relaxation techniques to be able to let go and absorb the subtle vibrations of sound.&nbsp;{"\n"}
                The Crystal Singing Bowls used are tuned to a healing frequency, <span className="text-clay">435 Hz</span>, and instantly dissolve mental and emotional tensions, sometimes even putting people off to sleep. Ragas are sung live in the Indian classical style, like lullabies for the soul.&nbsp;{"\n"}
                Soothing aromas, soft lighting and cozy pillows and blankets are put together aesthetically, to make this journey truly special and unforgettable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A Glimpse — standalone private video */}
      <section className="py-20 md:py-32 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-serif text-2xl md:text-4xl font-light leading-tight">
                  A Glimpse
                </h2>
                <div className="mt-6 w-12 h-px bg-clay/60 mx-auto" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MediaVideo
                src={privateVideo}
                fallbackAspect="16 / 9"
                frame="br"
                ariaLabel="A private sound healing gathering"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <Reveal>
              <NaturalImage
                src={img7}
                alt="Studio setup by night"
                fallbackAspect="3 / 4"
                frame="bl"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <NaturalImage
                src={img10}
                alt="A private women's gathering"
                fallbackAspect="3 / 4"
                frame="br"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enquire" className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] tracking-[0.35em] uppercase text-bone/60 mb-6 block">Enquire</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Let's discuss how we can
            <span className="block italic">organise one for you.</span>
          </h2>
          <p className="text-bone/75 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Om Shala has organised beautiful sound healing experiences for weddings, birthdays,
            Diwali parties, women's forums and baby showers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917400361681"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-bone transition-colors duration-500">Call +91 7400361681</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-bone/30 text-bone hover:bg-bone hover:text-charcoal transition-all duration-300"
            >
              Send an enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPrivate;