import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import MediaVideo from "@/components/MediaVideo";
import ExperienceCarousel, { type ExperienceItem } from "@/components/ExperienceCarousel";
import AboutSection from "@/components/AboutSection";
import { CREDENTIALS } from "@/components/CredentialCards";
import heroImgAsset from "@/assets/img5-studio-night.webp.asset.json";
import heroDesktopAsset from "@/assets/hero-desktop.png.asset.json";
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";
import experienceImgAsset from "@/assets/private-experience-v4.png.asset.json";
import exp14 from "@/assets/experience-14.png.asset.json";
import exp15 from "@/assets/experience-15.png.asset.json";
import exp16 from "@/assets/experience-16.png.asset.json";
import exp17 from "@/assets/experience-17.png.asset.json";

const heroImg = heroImgAsset.url;
const heroDesktopImg = heroDesktopAsset.url;
const credentialsVideo = homeVideoAsset.url;
const experienceImg = experienceImgAsset.url;

const experienceItems: ExperienceItem[] = [
  { type: "image", src: exp14.url, alt: "Candlelit private sound healing session in a Mumbai studio" },
  { type: "image", src: exp16.url, alt: "Private candlelit sound bath with skyline view" },
  { type: "image", src: exp17.url, alt: "Intimate private setup with crystal singing bowls at dusk" },
  { type: "image", src: exp15.url, alt: "Private outdoor gathering with meditation on the lawn" },
];

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
        <section className="relative overflow-hidden bg-background pt-16 md:pt-[68px]">
          {/* Desktop: full-width immersive hero */}
          <div className="hidden md:block w-full">
            <img
              src={heroDesktopImg}
              alt="Private meditation space with crystal singing bowls and tanpura"
              className={`w-full h-[550px] object-cover object-center transition-opacity duration-1000 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          {/* Mobile: unchanged */}
          <div className="md:hidden w-full max-w-6xl mx-auto px-6">
            <img
              src={heroImg}
              alt="Private meditation space"
              className={`w-full h-auto object-contain transition-opacity duration-1000 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <div className="container mx-auto px-6 sm:px-10 lg:px-16 pt-12 md:pt-16 pb-14 md:pb-16">
            <div
              className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-brand-purple to-brand-purple/30 mb-6 md:mb-8" />

              <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-5 md:mb-6 tracking-tight">
                A Souful Way
                <span className="block mt-2 text-clay">to Gather</span>
              </h1>
              <p className="hero-body max-w-xl whitespace-pre-line">
                More and more people are opting for a mindful way to celebrate or come together&nbsp;for social
                gatherings. We live in a stimulated world and Sound Healing has become&nbsp;a meaningful way to pause
                and connect with one another in an emotionally intimate&nbsp;way, between all the laughter and high
                energy.{"\n\n\n"}
                It is a deeply soulful relaxation and a truly memorable way to celebrate a special day, occasion or
                milestone.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#enquire"
                  className="group relative inline-block w-auto text-center px-8 sm:px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <span className="relative z-10 group-hover:text-background transition-colors duration-500">
                    Enquire for Private Events
                  </span>
                  <div className="absolute inset-0 bg-brand-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
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
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <Reveal>
                <div className="flex flex-col h-full">
                  <span className="text-sm tracking-[0.3em] uppercase text-clay">{"\n"}</span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-clay">
                    Credentials
                  </h2>
                  <div className="mt-6 h-px w-16 bg-clay" />
                  <ul className="mt-8 flex-1 flex flex-col justify-between divide-y divide-foreground/10">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="py-5 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
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
        <section className="relative overflow-hidden bg-[#F6F0EA] text-foreground">
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-6 relative z-10 py-24 md:py-40">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <Reveal className="lg:col-span-6">
                <div className="relative overflow-hidden">
                  <img
                    src={experienceImg}
                    alt="Om Shala private sound healing session with guests resting among glowing crystal singing bowls and candlelight"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </Reveal>
              <div className="lg:col-span-6">
                <Reveal>
                  <span className="text-sm tracking-[0.3em] uppercase text-clay">The Experience</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-8 h-px w-16 bg-clay" />
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-10 space-y-6">
                    {/* Editorial lead statement */}
                    <div>
                      <p className="font-display text-2xl md:text-3xl lg:text-[2rem] font-light leading-[1.35] text-foreground">
                        Sound healing can be experienced seated or laying down in a calm environment.
                      </p>
                      <p className="text-foreground leading-[1.9] text-base md:text-[17px] mt-2">
                        Participants are guided through deep breathing and relaxation techniques to be able to let go
                        and absorb the subtle vibrations of sound.
                      </p>
                    </div>

                    {/* Editorial heading */}
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-light tracking-tight text-foreground">
                        The Crystal Singing Bowls
                      </h3>
                      <p className="text-foreground leading-[1.9] text-base md:text-[17px] mt-2">
                        used are tuned to a healing frequency, <span className="text-clay">435 Hz</span>, and instantly
                        dissolve mental and emotional tensions, sometimes even putting people off to sleep. Ragas are
                        sung live in the Indian classical style, like lullabies for the soul.
                      </p>
                    </div>

                    {/* Italicised standalone editorial line */}
                    <div>
                      <p className="font-display italic text-lg md:text-xl leading-[1.5] text-foreground">
                        Soothing aromas, soft lighting and cozy pillows and blankets
                      </p>
                      <p className="text-foreground leading-[1.9] text-base md:text-[17px] mt-2">
                        are put together aesthetically, to make this journey truly special and unforgettable.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-10 md:mb-14">
                  <h2 className="font-serif text-2xl md:text-4xl font-light leading-tight">Experiences</h2>
                  <div className="mt-6 w-12 h-px bg-brand-purple/60 mx-auto" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <ExperienceCarousel items={experienceItems} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="enquire"
          className="py-28 md:py-40 bg-gradient-to-b from-brand-purple to-brand-purple-deep text-bone relative overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bone/5 rounded-full blur-[150px] animate-pulse-soft" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-sm tracking-[0.3em] uppercase text-bone/70 mb-6 block">{"\n"}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-bone">
              Let's discuss how we can
              <span className="block italic">organise one for you.</span>
            </h2>
            <p className="text-bone max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Om Shala has organised beautiful sound healing experiences for weddings, birthdays, Diwali parties,
              women's forums and baby showers.
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-bone/70">Schedule a Call</span>
              <a
                href="https://wa.me/917400361681?text=Hi%2C%20I%20wanted%20to%20enquire%20about%20Private%20Events."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-10 py-4 bg-bone text-brand-purple border border-bone text-sm tracking-wide overflow-hidden transition-all duration-500 hover:bg-transparent hover:text-bone"
              >
                <span className="relative z-10">WhatsApp +91 74003 61681</span>
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
