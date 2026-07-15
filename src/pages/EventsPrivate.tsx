import { useState, useEffect } from "react";
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
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";
import experienceImgAsset from "@/assets/private-experience.png.asset.json";

const img7 = img7Asset.url;
const img10 = img10Asset.url;
const privateVideo = privateVideoAsset.url;
const heroImg = heroImgAsset.url;
const credentialsVideo = homeVideoAsset.url;
const experienceImg = experienceImgAsset.url;

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero — image first, content below */}
        <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
          <div className="w-full bg-charcoal">
            <img
              src={heroImg}
              alt="Private meditation space"
              className={`w-full h-[55vh] md:h-[65vh] object-cover object-center transition-opacity duration-1000 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <div className="container mx-auto px-6 sm:px-10 lg:px-16 pt-12 md:pt-16 pb-14 md:pb-16">
            <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-6 md:mb-8" />

              <h1 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-5 md:mb-6">
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
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">
                    Enquire for Private Events
                  </span>
                  <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <AboutSection />

        {/* Credentials — editorial list + video */}
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <Reveal>
                <div>
                  <span className="text-sm tracking-[0.3em] uppercase text-clay">Credentials</span>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                    Credentials
                  </h2>
                  <div className="mt-6 h-px w-16 bg-clay/60" />
                  <ul className="mt-8 divide-y divide-foreground/10">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="py-4 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaVideo
                  src={credentialsVideo}
                  fallbackAspect="9 / 16"
                  frame="br"
                  ariaLabel="A moment from an Om Shala experience"
                  className="max-w-sm mx-auto lg:max-w-none lg:mx-0"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Experience — two-column editorial */}
        <section className="relative overflow-hidden bg-charcoal text-bone">
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-6 relative z-10 py-24 md:py-40">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <Reveal className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experienceImg}
                    alt="Om Shala private sound healing setup with crystal singing bowls"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/25 -z-10" />
                </div>
              </Reveal>
              <div className="lg:col-span-6">
                <Reveal>
                  <span className="text-sm tracking-[0.3em] uppercase text-clay">The Experience</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-8 h-px w-16 bg-clay/60" />
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="mt-8 text-bone/80 leading-[1.9] text-base md:text-[17px] whitespace-pre-line">
                    <span className="text-bone font-medium">
                      Sound healing can be experienced seated or laying down in a calm environment.
                    </span>{" "}
                    Participants are guided through deep breathing and relaxation techniques to be able to let go and absorb the subtle vibrations of sound.&nbsp;{"\n"}
                    <span className="text-bone font-medium">The Crystal Singing Bowls</span> used are tuned to a healing frequency, <span className="text-clay">435 Hz</span>, and instantly dissolve mental and emotional tensions, sometimes even putting people off to sleep. Ragas are sung live in the Indian classical style, like lullabies for the soul.&nbsp;{"\n"}
                    <em>Soothing aromas, soft lighting and cozy pillows and blankets</em> are put together aesthetically, to make this journey truly special and unforgettable.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* A Glimpse — standalone private video */}
        <section className="py-20 md:py-32 bg-muted/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-10 md:mb-14">
                  <h2 className="font-serif text-2xl md:text-4xl font-light leading-tight">A Glimpse</h2>
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
                <NaturalImage src={img7} alt="Studio setup by night" fallbackAspect="3 / 4" frame="bl" />
              </Reveal>
              <Reveal delay={0.08}>
                <NaturalImage src={img10} alt="A private women's gathering" fallbackAspect="3 / 4" frame="br" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="enquire" className="py-28 md:py-40 bg-earth text-bone relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth to-charcoal/50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-clay/10 rounded-full blur-[150px] animate-pulse-soft" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-sm tracking-[0.3em] uppercase text-bone/60 mb-6 block">Enquire</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
              Let's discuss how we can
              <span className="block italic">organise one for you.</span>
            </h2>
            <p className="text-bone/75 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Om Shala has organised beautiful sound healing experiences for weddings, birthdays,
              Diwali parties, women's forums and baby showers.
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-bone/60">Schedule a Call</span>
              <a
                href="https://wa.me/917400361681?text=Hi%2C%20I%20wanted%20to%20enquire%20about%20Private%20Events."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-10 py-4 bg-bone text-charcoal text-sm tracking-wide overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-bone transition-colors duration-500">WhatsApp</span>
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPrivate;