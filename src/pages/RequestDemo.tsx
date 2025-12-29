import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RequestDemo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Request a Live Demo
        </h1>

        <p className="text-muted-foreground mb-10 text-lg">
          See how our Digital Twin–powered drone platform works in real-world
          mission scenarios. Our engineering team will walk you through the
          capabilities tailored to your use case.
        </p>

        <form className="space-y-6">
          <Input placeholder="Full Name" />
          <Input placeholder="Company / Organization" />
          <Input placeholder="Work Email" type="email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Industry (Defence, Infra, Govt, etc.)" />

          <Textarea
            placeholder="Briefly describe your use case or requirements"
            rows={5}
          />

          <Button size="lg" className="w-full rounded-full">
            Submit Demo Request
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-6">
          Our team usually responds within 24–48 business hours.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDemo;
