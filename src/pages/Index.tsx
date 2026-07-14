import HeroGateway from "@/components/HeroGateway";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-omshala text-bone">
        <Header />
        <main>
          <HeroGateway />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;