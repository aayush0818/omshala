import HeroGateway from "@/components/HeroGateway";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroGateway />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;