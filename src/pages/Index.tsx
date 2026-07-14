import HeroGateway from "@/components/HeroGateway";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <main className="min-h-screen">
      <HeroGateway />
    </main>
  </PageTransition>
);

export default Index;