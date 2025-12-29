import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollProgress from "./components/ui/ScrollProgress";
import ExploreTechnology from "./pages/ExploreTechnology";
import RequestDemo from "./pages/RequestDemo";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import DigitalTransformation from "./pages/DigitalTransformation";
import CloudServices from "./pages/CloudServices";
import AIMLLearning from "./pages/AIMLLearning";
import Careers from "./pages/Careers";
import Leadership from "./pages/Leadership";
import Consulting from "./pages/Consulting";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollProgress />  
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/technology" element={<ExploreTechnology />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/solutions/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/solutions/ai-ml" element={<AIMLLearning />} />
          <Route path="/solutions/cloud-services" element={<CloudServices />} />
          <Route path="/services/consulting" element={<Consulting />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
