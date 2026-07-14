import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import NaturalImage from "@/components/NaturalImage";
import MediaVideo from "@/components/MediaVideo";
import CredentialCards from "@/components/CredentialCards";
import heroImgAsset from "@/assets/img5-studio-night.webp.asset.json";
import experienceImgAsset from "@/assets/experience-purple.png.asset.json";
import img7Asset from "@/assets/img7-purple-room.webp.asset.json";
import img10Asset from "@/assets/img10-white-brunch.webp.asset.json";
import privateVideoAsset from "@/assets/private-carousel.mp4.asset.json";

const heroImg = heroImgAsset.url;
const experienceImg = experienceImgAsset.url;
const img7 = img7Asset.url;
const img10 = img10Asset.url;
const privateVideo = privateVideoAsset.url;

const PRIVATE_WA =
  "https://wa.me/917400361681?text=" +
  encodeURIComponent("Hi, I'd like to enquire about Private Events.");

const sectionHeading =
  "font-sans font-light tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.05]";

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero — image on top, text below */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="container mx-auto px-6">
            <div
              className={`max-w-6xl mx-auto transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <NaturalImage
                src={heroImg}
                alt="A private sound healing gathering"
                fallbackAspect="16 / 9"
                frame="none"
                eager
              />

              <div className="mt-12 md:mt-16 max-w-3xl">
                <span className="text-[10px] tracking-[0.35em] uppercase text-clay">
                  Private Events
                </span>
                <h1 className={`mt-6 ${sectionHeading}`}>
                  A soulful way to gather.
                </h1>
                <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                  More and more people are opting for a mindful way to celebrate or come
                  together for social gatherings. We live in a stimulated world and Sound
                  Healing has become a meaningful way to pause and connect with one another
                  in an emotionally intimate way, between all the laughter and high energy.
                  {"\n\n"}
                  It is a deeply soulful relaxation and a truly memorable way to celebrate a
                  special day, occasion or milestone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <CredentialCards className="border-t border-foreground/5" />

        {/* The Experience — editorial split with new purple image */}
        <section className="py-24 md:py-40 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <NaturalImage
                  src={experienceImg}
                  alt="A private sound healing session in a candlelit studio"
                  fallbackAspect="4 / 3"
                  frame="bl"
                />
              </Reveal>
              <div>
                <Reveal>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-clay">The Experience</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className={`mt-6 ${sectionHeading}`}>
                    Sound healing can be experienced seated or laying down in a calm environment.
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                    <p>
                      Participants are guided through deep breathing and relaxation techniques to
                      be able to let go and absorb the subtle vibrations of sound.
                    </p>
                    <p>
                      <span className="font-sans text-foreground text-xl md:text-2xl font-normal block mb-3">
                        The Crystal Singing Bowls
                      </span>
                      used are tuned to a healing frequency,{" "}
                      <span className="text-clay">435 Hz</span>, and instantly dissolve mental and
                      emotional tensions, sometimes even putting people off to sleep. Ragas are
                      sung live in the Indian classical style, like lullabies for the soul.
                    </p>
                    <p>
                      <span className="italic text-foreground/90">
                        Soothing aromas, soft lighting and cozy pillows and blankets
                      </span>{" "}
                      are put together aesthetically, to make this journey truly special and
                      unforgettable.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences (renamed from A Glimpse) */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-12 md:mb-16">
                  <h2 className={sectionHeading}>Experiences</h2>
                  <div className="mt-8 w-12 h-px bg-clay/60 mx-auto" />
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
        <section className="py-16 md:py-24">
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

        {/* Final CTA — Schedule a Call */}
        <section id="enquire" className="py-24 md:py-40 bg-muted/20 border-t border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Reveal>
                <h2 className={sectionHeading}>Schedule a Call</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-14">
                  <a
                    href={PRIVATE_WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-8 md:p-10 border border-foreground/15 hover:border-clay/50 hover:bg-background transition-all duration-500 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <MessageCircle
                        className="w-6 h-6 text-clay flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div className="flex-1">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                          WhatsApp
                        </p>
                        <p className="font-sans text-xl md:text-2xl text-foreground group-hover:text-clay transition-colors duration-300">
                          +91 74003 61681
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsPrivate;