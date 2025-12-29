import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Consulting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-28 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Consulting for Drone-Led Digital Transformation
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg">
          Flytech Consulting helps organizations design, evaluate, and deploy
          drone, AI, and Digital Twin strategies that deliver measurable
          operational and business impact.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            onClick={() => navigate("/request-demo")}
          >
            Talk to Our Experts
          </Button>
        </div>
      </section>

      {/* WHY CONSULTING */}
      <section className="pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Specialized Drone Consulting Matters
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Adopting drones is not a technology challenge alone — it is an
            operational, regulatory, and organizational transformation.
            Without the right strategy, drone initiatives often stall at
            pilot stages or fail to scale.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Our consulting approach bridges the gap between ambition and
            execution by aligning technology, processes, and stakeholders
            around real-world outcomes.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 border rounded-lg bg-card">
            Avoid costly pilot failures
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Align drone programs with business goals
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Navigate regulatory and operational complexity
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Build scalable, future-ready architectures
          </div>
        </div>
      </section>

      {/* CONSULTING AREAS */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Our Consulting Focus Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Strategy & Roadmapping
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Define a clear, phased roadmap for drone adoption aligned with
              operational priorities, ROI targets, and long-term digital
              transformation goals.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Use Case Identification
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Identify and prioritize high-impact drone use cases across
              inspection, surveillance, mapping, monitoring, and response.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Digital Twin & Simulation Design
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Design Digital Twin environments to simulate operations, validate
              missions, and de-risk deployments before real-world execution.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              AI & Autonomy Advisory
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advise on AI/ML adoption for autonomy, perception, decision-making,
              and continuous learning across drone fleets.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Cloud & Platform Architecture
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Define secure, scalable cloud architectures for mission control,
              data processing, and enterprise system integration.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Governance & Readiness
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Support regulatory readiness, safety frameworks, SOP design,
              and organizational enablement for large-scale drone programs.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          How We Engage
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
          <div>
            <strong className="text-foreground">
              Assess
            </strong>
            <p className="mt-2 text-sm">
              We analyze your current operations, data maturity, and
              readiness to identify opportunities and risks.
            </p>
          </div>

          <div>
            <strong className="text-foreground">
              Design
            </strong>
            <p className="mt-2 text-sm">
              We design architectures, workflows, and roadmaps tailored
              to your operational reality.
            </p>
          </div>

          <div>
            <strong className="text-foreground">
              Enable
            </strong>
            <p className="mt-2 text-sm">
              We support pilots, validation, and transition into scaled
              deployments with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Turn Strategy into Operational Reality
        </h2>

        <p className="text-muted-foreground mb-8">
          Whether you are exploring drones for the first time or scaling
          enterprise-wide operations, our consulting team helps you move
          forward with confidence.
        </p>

        <Button
          size="lg"
          onClick={() => navigate("/request-demo")}
        >
          Schedule a Consultation
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
