import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Cloud, Cpu, Shield, Zap, Database, Smartphone } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights from your data.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
    features: ["AWS Integration", "Multi-cloud Strategy", "DevOps Automation"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: ["Threat Detection", "Security Audits", "Compliance Management"]
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business processes.",
    features: ["Process Automation", "Legacy Modernization", "Digital Strategy"]
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics"]
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android Apps", "Progressive Web Apps", "Mobile Strategy"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-tech-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and accelerate your digital journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-tech-primary/50 transition-all duration-300 group hover:shadow-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-tech-primary to-tech-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-tech-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-tech-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};