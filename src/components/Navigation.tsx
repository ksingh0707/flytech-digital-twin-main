import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
              Flyteca
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/about">Our Story</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/leadership">Leadership</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/careers">Careers</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/solutions/digital-transformation">Digital Transformation</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/solutions/ai-ml">AI & Machine Learning</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/solutions/cloud-services">Cloud Services</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/services/consulting">Consulting</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/services/implementation">Implementation</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/services/support">Support</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/products/drones">Drones</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/sdwan">SDWAN</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/wifi-devices">Wifi Devices</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/fiber">Fiber</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/router">Router</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Trainings <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/trainings/ml-ops">ML Ops</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/trainings/generative-ai">Generative AI</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/trainings/agentic-ai">Agentic AI</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/trainings/rpto">RPTO</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/brands" className="text-foreground hover:text-primary transition-colors">Brands</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/blogs">Blogs</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/free-counseling">Free Counseling</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Become a Partner
            </Button>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a href="/about" className="text-foreground hover:text-primary transition-colors py-2">About Us</a>
              <a href="/solutions" className="text-foreground hover:text-primary transition-colors py-2">Solutions</a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors py-2">Services</a>
              <a href="/cloud" className="text-foreground hover:text-primary transition-colors py-2">Cloud</a>
              <a href="/brands" className="text-foreground hover:text-primary transition-colors py-2">Brands</a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors py-2">Contact Us</a>
              <Button variant="outline" size="sm" className="mt-4">
                Become a Partner
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};