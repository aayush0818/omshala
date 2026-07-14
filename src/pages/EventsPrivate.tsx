import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import AboutSection from "@/components/AboutSection";
import { CREDENTIALS } from "@/components/CredentialCards";
import heroImgAsset from "@/assets/img5-studio-night.webp.asset.json";
import img7Asset from "@/assets/img7-purple-room.webp.asset.json";
import img10Asset from "@/assets/img10-white-brunch.webp.asset.json";
import privateVideoAsset from "@/assets/private-carousel.mp4.asset.json";
import experienceImgAsset from "@/assets/private-experience.png.asset.json";
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";

const img7 = img7Asset.url;
const img10 = img10Asset.url;
const privateVideo = privateVideoAsset.url;
const heroImg = heroImgAsset.url;
const experienceImg = experienceImgAsset.url;
const credentialsVideo = homeVideoAsset.url;

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
      
      {/* Hero — stacked: image, then editorial content below */}
      <section className="font-sans pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className={`w-full overflow-hidden transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
              <img
                src={heroImg}
                alt="Private meditation space"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className={`mt-14 md:mt-20 max-w-2xl transition-all duration-1000 delay-150 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
                A soulful way
                <span className="block mt-2 text-clay">to gather</span>
              </h1>
              <p className="mt-8 text-lg text-foreground/85 leading-relaxed max-w-xl whitespace-pre-line">
                More and more people are opting for a mindful way to celebrate or come together&nbsp;for social gatherings. We live in a stimulated world and Sound Healing has become&nbsp;a meaningful way to pause and connect with one another in an emotionally intimate&nbsp;way, between all the laughter and high energy.{"\n\n\n"}
                It is a deeply soulful relaxation and a truly memorable way to celebrate a special day, occasion or milestone.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#enquire"
                  className="group relative inline-block w-auto text-center px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10">Enquire for Private Events</span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Credentials — editorial list + video */}
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-foreground/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-14">
                Credentials
              </h2>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <Reveal>
                <ul className="space-y-5">
                  {CREDENTIALS.map((c) => (
                    <li key={c} className="flex gap-4 items-start text-foreground/85 leading-relaxed">
                      <span className="mt-3 h-px w-5 bg-clay/60 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaVideo
                  src={credentialsVideo}
                  fallbackAspect="9 / 16"
                  frame="br"
                  ariaLabel="A moment from an Om Shala experience"
                  className="max-w-sm mx-auto lg:mx-0 lg:ml-auto"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience — two-column */}
      <section className="py-24 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <img
                src={experienceImg}
                alt="A private sound healing setup with crystal singing bowls"
                className="w-full h-auto object-contain"
              />
            </Reveal>
            <div>
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-clay">The Experience</span>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-6 text-bone/75 leading-[1.9] text-base md:text-[17px]">
                  <p>
                    <strong className="text-bone font-semibold">
                      Sound healing can be experienced seated or laying down in a calm environment.
                    </strong>{" "}
                    Participants are guided through deep breathing and relaxation techniques to be
                    able to let go and absorb the subtle vibrations of sound.
                  </p>
                  <p>
                    <strong className="text-clay font-semibold">The Crystal Singing Bowls</strong>{" "}
                    used are tuned to a healing frequency,{" "}
                    <span className="text-clay">435 Hz</span>, and instantly dissolve mental and
                    emotional tensions, sometimes even putting people off to sleep. Ragas are sung
                    live in the Indian classical style, like lullabies for the soul.
                  </p>
                  <p>
                    <em className="text-bone/85">
                      Soothing aromas, soft lighting and cozy pillows and blankets
                    </em>{" "}
                    are put together aesthetically, to make this journey truly special and
                    unforgettable.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences — standalone private video */}
      <section className="py-20 md:py-32 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                  Experiences
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-10 leading-tight">
            Schedule a Consultation
          </h2>
          <a
            href="https://wa.me/917400361681?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Private%20Events."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block max-w-md mx-auto p-6 md:p-8 border border-bone/25 hover:border-clay/70 bg-charcoal/30 hover:bg-charcoal/50 transition-all duration-500 text-left"
          >
            <div className="flex items-center gap-5">
              <span className="flex-shrink-0 w-12 h-12 rounded-full border border-bone/20 group-hover:border-clay/60 flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 text-clay" />
              </span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-bone/60">WhatsApp</p>
                <p className="mt-1 text-lg text-bone group-hover:text-clay transition-colors">+91 74003 61681</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPrivate;