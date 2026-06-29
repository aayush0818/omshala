import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShrutikaIntro from "@/components/ShrutikaIntro";
import CredentialsSection from "@/components/CredentialsSection";
import ExperienceSplit from "@/components/ExperienceSplit";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ShrutikaIntro />
          <CredentialsSection />
          <ExperienceSplit />
          <PhilosophySection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;