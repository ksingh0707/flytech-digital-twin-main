import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                Flyteca
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Leading digital transformation with cutting-edge technology solutions, 
                AI innovation, and next-generation cloud services.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="hover:text-tech-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-tech-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-tech-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-tech-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Our Services</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Data Analytics</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-tech-primary" />
                  <span className="text-sm">info@Flyteca.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-tech-primary" />
                  <span className="text-sm">+91 9250004020</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-tech-primary" />
                  <span className="text-sm">Noida, India</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-background/50 border-border/50 focus:border-tech-primary"
                  />
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-secondary hover:to-tech-accent text-white"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Flyteca. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};