import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ExploreTechnology = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Core Technology
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-12 text-lg">
          Flytech’s Digital Twin–powered drone platform enables simulation,
          validation, and autonomous mission execution with engineering-grade
          accuracy.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">
              Digital Twin Simulation
            </h3>
            <p className="text-muted-foreground">
              Physics-accurate virtual replicas of drones and environments
              to test missions before real-world deployment.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">
              Autonomous Intelligence
            </h3>
            <p className="text-muted-foreground">
              AI-driven navigation, obstacle avoidance, and decision-making
              for complex and GPS-denied environments.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">
              Mission Planning & Control
            </h3>
            <p className="text-muted-foreground">
              End-to-end mission lifecycle management with real-time
              monitoring and adaptive control.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Data Synchronization
            </h3>
            <p className="text-muted-foreground">
              Live telemetry and sensor data synchronized between physical
              drones and digital twins.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreTechnology;
