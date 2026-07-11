import { Link } from "react-router-dom";
import HeroGateway from "@/components/HeroGateway";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import MediaVideo from "@/components/MediaVideo";
import AboutSection from "@/components/AboutSection";
import CredentialsEditorial from "@/components/CredentialsEditorial";
import homeVideoAsset from "@/assets/home-intro.mp4.asset.json";

const homeVideo = homeVideoAsset.url;

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <main>
          {/* 1. Gateway */}
          <HeroGateway />

          {/* 2. In Motion — first look */}
          <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <Reveal>
                  <div className="text-center mb-10 md:mb-14">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-clay">
                      A First Look
                    </span>
                    <h2 className="mt-5 font-serif text-2xl md:text-4xl font-light leading-tight">
                      A quiet glimpse of the practice.
                    </h2>
                    <div className="mt-6 w-12 h-px bg-clay/60 mx-auto" />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <MediaVideo
                    src={homeVideo}
                    fallbackAspect="9 / 16"
                    frame="br"
                    ariaLabel="A moment from an Om Shala experience"
                    className="max-w-sm md:max-w-md mx-auto"
                  />
                </Reveal>
              </div>
            </div>
          </section>

          {/* 3. About */}
          <AboutSection />

          {/* 4. Credentials */}
          <CredentialsEditorial />

          {/* 5. Contact CTA */}
          <section className="py-20 md:py-40 bg-muted/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="container mx-auto px-6 text-center">
              <Reveal>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl mx-auto">
                  Ready to create a Sound Healing Experience?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 px-12 py-5 border border-foreground/20 text-foreground text-sm tracking-[0.2em] uppercase hover:border-clay hover:text-clay transition-all duration-500"
                  >
                    <span>Contact Om Shala</span>
                    <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;