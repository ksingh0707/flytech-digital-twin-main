import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />

      <section
        id="capabilities"
        className="py-28 px-6 text-center bg-gradient-to-b from-black to-neutral-900"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Core Capabilities
        </h2>

        <p >
          <ServicesSection />
          <AboutSection />
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Index;
