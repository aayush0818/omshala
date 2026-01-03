import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import PracticesSection from "@/components/PracticesSection";
import ExpectSection from "@/components/ExpectSection";
import GuideSection from "@/components/GuideSection";
import TestimonialSection from "@/components/TestimonialSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <PhilosophySection />
          <PracticesSection />
          <ExpectSection />
          <GuideSection />
          <TestimonialSection />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;