import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Globe, Lightbulb } from "lucide-react";

const stats = [
  { icon: Users, label: "Global Clients", value: "500+" },
  { icon: Trophy, label: "Awards Won", value: "25+" },
  { icon: Globe, label: "Countries", value: "15+" },
  { icon: Lightbulb, label: "Projects Delivered", value: "1000+" }
];

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-tech-primary/10 rounded-full border border-tech-primary/20 mb-6">
              <span className="text-tech-primary font-medium">About Flyteca</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over a decade, Flyteca has been at the forefront of technological advancement, 
              helping businesses transform their operations through innovative digital solutions. 
              Our expertise spans across AI, cloud computing, cybersecurity, and digital transformation.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in the power of technology to solve complex business challenges and 
              create meaningful impact. Our team of experts works closely with clients to 
              deliver solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-secondary hover:to-tech-accent text-white font-semibold px-8 py-3 rounded-full"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center p-6 hover:border-tech-primary/50 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-tech-primary to-tech-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};