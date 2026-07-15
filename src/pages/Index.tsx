import HeroGateway from "@/components/HeroGateway";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <main>
          <HeroGateway />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;