import { Button } from "@/components/ui/button";
import heroImage from "@/assets/flyteca-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/90 via-tech-dark/80 to-tech-darker/90" />
      
      {/* Animated geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-tech-primary/30 rounded-lg transform rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-tech-secondary/30 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-tech-accent/20 rounded-lg transform rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-tech-primary/20 rounded-full border border-tech-primary/30 mb-6">
            <span className="text-tech-primary font-medium">Revolutionizing Drone Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-tech-secondary to-tech-accent bg-clip-text text-transparent">
              The Future of Aerial Innovation
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Empowering Industries with Cutting-Edge Drone Solutions
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            From advanced aerial imaging to autonomous delivery systems, our drone technology is transforming industries and redefining possibilities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-secondary hover:to-tech-accent text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href="/solutions">Explore Solutions</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            asChild
          >
            <a href="/drones">Watch Our Drones</a>
          </Button>
        </div>
      </div>
    </section>
  );
};