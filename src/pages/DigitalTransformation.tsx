import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Digital Transformation with Drones
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg">
          Flytech enables organizations to transform physical operations into
          intelligent, data-driven systems using autonomous drones and
          Digital Twin technology.
        </p>
      </section>

      {/* WHY DIGITAL TRANSFORMATION */}
      <section className="pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Drone-Led Digital Transformation?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Traditional operations rely heavily on manual inspections,
            fragmented data, and delayed decision-making. Drones introduce
            a new operational layer — capturing real-time data, automating
            workflows, and enabling predictive insights across large-scale
            physical environments.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 border rounded-lg bg-card">
            Faster data capture across large geographies
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Reduced operational risk and human exposure
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Continuous monitoring instead of periodic checks
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Data-backed decision making
          </div>
        </div>
      </section>

      {/* TRANSFORMATION JOURNEY */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          The Transformation Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Stage 1: Digitization
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Replace manual surveys and inspections with aerial data capture
              using drones equipped with high-resolution sensors.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Stage 2: Digital Twin
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Create virtual replicas of assets and environments to simulate,
              analyze, and plan operations before real-world execution.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Stage 3: Autonomous Intelligence
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enable autonomous missions, predictive analytics, and real-time
              feedback loops for continuous optimization.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Digital Transformation Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">
              Infrastructure & Smart Cities
            </h3>
            <p className="text-muted-foreground text-sm">
              Asset inspection, urban planning, traffic analysis, and
              predictive maintenance at scale.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">
              Defence & Surveillance
            </h3>
            <p className="text-muted-foreground text-sm">
              Persistent monitoring, mission rehearsal, and situational
              awareness using Digital Twin environments.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">
              Energy & Utilities
            </h3>
            <p className="text-muted-foreground text-sm">
              Inspection of power lines, pipelines, and facilities with
              reduced downtime and enhanced safety.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">
              Disaster Response
            </h3>
            <p className="text-muted-foreground text-sm">
              Rapid damage assessment, situational mapping, and coordinated
              response planning.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE */}
      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Strategic Value for Organizations
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
          <li>✔ Faster operational decisions</li>
          <li>✔ Reduced cost of inspections and monitoring</li>
          <li>✔ Improved safety and compliance</li>
          <li>✔ Scalable digital infrastructure</li>
          <li>✔ Long-term data intelligence</li>
          <li>✔ Future-ready autonomous capabilities</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalTransformation;
