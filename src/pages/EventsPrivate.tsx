import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import privateHero from "@/assets/private-hero.jpg";
import privateSeated from "@/assets/private-seated.jpg";
import journeyBreath from "@/assets/journey-breath.jpg";
import journeyBowls from "@/assets/journey-bowls.jpg";
import journeyVoice from "@/assets/journey-voice.jpg";
import journeyRelax from "@/assets/journey-relax.jpg";
import bowl435 from "@/assets/bowl-435.jpg";
import occasionWedding from "@/assets/occasion-wedding.jpg";
import occasionBirthday from "@/assets/occasion-birthday.jpg";
import occasionDiwali from "@/assets/occasion-diwali.jpg";
import occasionWomens from "@/assets/occasion-womens.jpg";
import occasionBabyshower from "@/assets/occasion-babyshower.jpg";

const experience = [
  {
    img: privateSeated,
    text: "Sound healing can be experienced seated or laying down, whichever feels most comfortable for the person and the space. There is no posture to hold, no technique to learn — simply the invitation to arrive.",
  },
  {
    img: journeyBreath,
    text: "Participants are guided through deep breathing to gently drop out of the noise of the day and into the softness of the room. The breath becomes the doorway between the celebration and the stillness.",
  },
  {
    img: journeyBowls,
    text: "Crystal Singing Bowls, tuned to 435 Hz — the frequency of nature — send slow, luminous waves of sound through the room. The tones move through the body and settle the mind into a deep, resonant quiet.",
  },
  {
    img: journeyVoice,
    text: "Live Indian Classical Ragas and mantras are woven in when the moment calls for them — sung as lullabies for the heart, adding a layer of soulful intimacy the crystal bowls alone cannot reach.",
  },
  {
    img: journeyRelax,
    text: "Soothing aromas linger in the air. Soft lighting warms the walls. Pillows and blankets are placed with care. Every sensory detail is arranged so that the body knows, immediately, it is safe to let go.",
  },
];

const occasions = [
  { label: "Weddings", img: occasionWedding, span: "row-span-2" },
  { label: "Birthdays", img: occasionBirthday, span: "" },
  { label: "Diwali Parties", img: occasionDiwali, span: "" },
  { label: "Women's Forums", img: occasionWomens, span: "" },
  { label: "Baby Showers", img: occasionBabyshower, span: "row-span-2" },
];

const galleryImages = [
  { src: privateHero, aspect: "aspect-[4/5]" },
  { src: bowl435, aspect: "aspect-square" },
  { src: journeyRelax, aspect: "aspect-square" },
  { src: privateSeated, aspect: "aspect-[4/5]" },
  { src: journeyBowls, aspect: "aspect-square" },
  { src: journeyBreath, aspect: "aspect-[4/5]" },
];

const EventsPrivate = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* 1. Hero — intimate */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={privateHero}
              alt=""
              className={`w-full h-full object-cover transition-all duration-[1800ms] ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pb-24 md:pb-32">
            <div className={`max-w-3xl transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-clay mb-8 block">Private</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-foreground">
                A soulful pause,
                <span className="block mt-3 italic text-clay/90">held within the celebration.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* 2. Introduction — journal-like */}
        <section className="min-h-screen flex items-center py-32 md:py-48">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Reveal>
                <div className="space-y-10 font-serif text-2xl md:text-3xl lg:text-[2rem] font-light leading-[1.5] text-foreground/85">
                  <p>
                    More and more people are opting for a mindful way to celebrate — a quiet
                    moment folded into the middle of a joyful day.
                  </p>
                  <p>
                    Sound healing has become that moment. A private, intimate immersion the
                    guests carry with them long after the evening ends.
                  </p>
                  <p>
                    It is a deeply soulful relaxation and a truly memorable way to celebrate a
                    special day, occasion or milestone.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. The Experience — sensory chapters */}
        <section className="py-24 md:py-32 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <div className="max-w-2xl mb-24 md:mb-32">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                    The Experience
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
                    A journey through the senses.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-32 md:space-y-48">
                {experience.map((e, i) => {
                  const reversed = i % 2 === 1;
                  return (
                    <div
                      key={i}
                      className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}
                    >
                      <Reveal className="lg:col-span-7">
                        <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
                          <img
                            src={e.img}
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Reveal>
                      <Reveal delay={0.1} className="lg:col-span-5">
                        <p className="font-serif text-2xl md:text-3xl font-light leading-[1.35] text-foreground/85">
                          {e.text}
                        </p>
                      </Reveal>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Atmosphere — imagery-led */}
        <section className="py-24 md:py-40">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto mb-16">
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                  Atmosphere
                </span>
                <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground/70 max-w-2xl leading-[1.35]">
                  Aromas. Lighting. Pillows. Blankets. The room becomes the invitation.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="w-full">
            <div className="columns-2 md:columns-3 gap-3 md:gap-4 px-3 md:px-4 [column-fill:_balance]">
              {galleryImages.map((g, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08}>
                  <div className={`mb-3 md:mb-4 overflow-hidden ${g.aspect}`}>
                    <img
                      src={g.src}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Events Hosted — editorial collage */}
        <section className="py-28 md:py-40 bg-charcoal text-bone">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <div className="max-w-2xl mb-20">
                  <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
                    Events Hosted
                  </span>
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] text-bone/90">
                    Om Shala has organised beautiful sound healing experiences for:
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[240px] md:auto-rows-[320px] gap-4 md:gap-6">
                {occasions.map((o, i) => (
                  <Reveal key={o.label} delay={i * 0.08} className={o.span}>
                    <div className="relative w-full h-full overflow-hidden group">
                      <img
                        src={o.img}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span className="absolute bottom-6 left-6 font-serif text-xl md:text-2xl font-light text-bone">
                        {o.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact — elegant finish */}
        <section className="py-32 md:py-48">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Reveal>
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.25] text-foreground/85 mb-16">
                  Let&apos;s discuss how we can organise one for you.
                </p>
                <div className="space-y-4 text-sm tracking-[0.15em] uppercase text-muted-foreground">
                  <p>
                    <a href="tel:+917400361681" className="hover:text-clay transition-colors duration-300">
                      Call · +91 74003 61681
                    </a>
                  </p>
                  <p>
                    <a href="mailto:omshala.official@gmail.com" className="hover:text-clay transition-colors duration-300">
                      omshala.official@gmail.com
                    </a>
                  </p>
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