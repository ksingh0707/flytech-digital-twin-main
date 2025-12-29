import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Careers at Flytech
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg">
          We’re building mission-critical drone and Digital Twin technology.
          If you enjoy solving real-world engineering problems, you’ll feel
          at home here.
        </p>
      </section>

      {/* CULTURE */}
      <section className="pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Culture
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Flytech, we believe great systems are built by small,
            focused teams that value clarity, ownership, and technical
            excellence. We work closely with defence, government, and
            enterprise partners—so reliability and accountability matter.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 border rounded-lg bg-card">
            Engineering-first mindset
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Real-world problem solving
          </div>
          <div className="p-5 border rounded-lg bg-card">
            High ownership & autonomy
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Long-term technology vision
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Open Positions
        </h2>

        <div className="space-y-6">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold">
              Robotics / Drone Software Engineer
            </h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Work on autonomy, simulation, and real-time drone systems.
            </p>
            <Button variant="outline">
              Apply Now
            </Button>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold">
              Frontend Engineer (React / Three.js)
            </h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Build interactive Digital Twin interfaces and dashboards.
            </p>
            <Button variant="outline">
              Apply Now
            </Button>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold">
              AI / Computer Vision Engineer
            </h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Develop perception, detection, and decision-making models
              for autonomous flight.
            </p>
            <Button variant="outline">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Don’t See a Role That Fits?
        </h2>
        <p className="text-muted-foreground mb-8">
          We’re always interested in engineers and thinkers who want to
          work on meaningful problems.
        </p>
        <Button size="lg">
          Send Your Resume
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
