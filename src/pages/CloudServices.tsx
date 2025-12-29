import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CloudServices = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Cloud Services for Drone Operations
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg">
          Flytech’s cloud infrastructure powers real-time drone operations,
          Digital Twin synchronization, and data-driven intelligence at scale.
        </p>
      </section>

      {/* WHY CLOUD */}
      <section className="pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Cloud-Native Drone Platforms Matter
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Modern drone operations generate massive volumes of data and
            require real-time coordination across fleets, environments,
            and stakeholders. A cloud-native approach enables scalability,
            reliability, and seamless integration with enterprise systems.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 border rounded-lg bg-card">
            Centralized mission control and monitoring
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Real-time data ingestion and processing
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Fleet-wide coordination and updates
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Secure access across distributed teams
          </div>
        </div>
      </section>

      {/* CORE CLOUD CAPABILITIES */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Core Cloud Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Mission Management
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Plan, execute, and monitor missions from a centralized
              cloud-based control layer with real-time status updates.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Digital Twin Synchronization
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Continuous synchronization between physical drones and their
              Digital Twin counterparts for analysis and simulation.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Data Processing & Analytics
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Scalable pipelines for processing imagery, telemetry, and
              sensor data into actionable insights.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Fleet Management
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Monitor health, status, and performance across large
              distributed drone fleets.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              API & Integrations
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Secure APIs for integration with enterprise systems, GIS
              platforms, and analytics tools.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Security & Compliance
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Role-based access control, encryption, audit logs, and
              compliance-ready cloud architecture.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Cloud Architecture Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
          <div>
            <strong className="text-foreground">
              Edge + Cloud Hybrid
            </strong>
            <p className="mt-2 text-sm">
              Time-critical decisions are handled on the drone, while
              heavy processing and analytics run in the cloud.
            </p>
          </div>

          <div>
            <strong className="text-foreground">
              Scalable Microservices
            </strong>
            <p className="mt-2 text-sm">
              Modular services enable independent scaling, upgrades,
              and fault isolation.
            </p>
          </div>

          <div>
            <strong className="text-foreground">
              Resilient & Secure
            </strong>
            <p className="mt-2 text-sm">
              Designed for high availability, redundancy, and secure
              operations in mission-critical environments.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Value of Cloud Services
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
          <li>✔ Scalable drone operations</li>
          <li>✔ Centralized operational visibility</li>
          <li>✔ Faster deployment and updates</li>
          <li>✔ Secure data management</li>
          <li>✔ Enterprise system integration</li>
          <li>✔ Long-term operational intelligence</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default CloudServices;
