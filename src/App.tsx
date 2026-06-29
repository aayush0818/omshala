import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AmbientBackground from "./components/AmbientBackground";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import BreathCompanion from "./components/BreathCompanion";
import SoundBowl from "./components/SoundBowl";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const EventsCorporate = lazy(() => import("./pages/EventsPublic"));
const EventsPrivate = lazy(() => import("./pages/EventsPrivate"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="sync" initial={false}>
      <Suspense fallback={<div className="min-h-screen" />} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/corporate" element={<EventsCorporate />} />
          <Route path="/events/public" element={<EventsCorporate />} />
          <Route path="/events/private" element={<EventsPrivate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AmbientBackground />
        <CursorGlow />
        <ScrollProgress />
        <div className="relative z-10">
          <AnimatedRoutes />
        </div>
        <SoundBowl />
        <BreathCompanion />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
