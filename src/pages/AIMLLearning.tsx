import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AIMLLearning = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI & Machine Learning for Drone Systems
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg">
          Flytech focuses on applied AI and Machine Learning tailored for
          autonomous drone operations, Digital Twin environments, and
          mission-critical decision-making.
        </p>
      </section>

      {/* WHY AI/ML FOR DRONES */}
      <section className="pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why AI & ML Matter in Drone Technology
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Drones operate in complex, dynamic environments where traditional
            rule-based systems fall short. AI and Machine Learning enable drones
            to perceive their surroundings, adapt to changing conditions, and
            make intelligent decisions in real time.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 border rounded-lg bg-card">
            Autonomous navigation and path planning
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Object detection and tracking
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Terrain and obstacle understanding
          </div>
          <div className="p-5 border rounded-lg bg-card">
            Predictive decision-making
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Core AI / ML Learning Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Computer Vision
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Training models for object detection, image classification,
              segmentation, and visual navigation using aerial data.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Reinforcement Learning
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Learning optimal control policies for navigation, landing,
              and obstacle avoidance in simulated and real environments.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Sensor Fusion
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Combining data from cameras, LiDAR, GPS, and IMUs to improve
              perception and state estimation.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Digital Twin–Driven Learning
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Training and validating AI models in Digital Twin environments
              before deploying them on physical drones.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Predictive Analytics
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Using historical and real-time data to predict failures,
              performance issues, and mission outcomes.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-3">
              Edge AI Deployment
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Optimizing AI models to run efficiently on onboard drone
              hardware with low latency and power constraints.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Our Learning & Development Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
          <div>
            <strong className="text-foreground">
              Simulation First
            </strong>
            <p className="mt-2 text-sm">
              Models are trained and tested extensively in Digital Twin
              environments before field deployment.
            </p>
          </div>

          <div>
            <strong className="text-foreground">
              Real-World Feedback
            </strong>
            <p className="mt-2 text-sm">
              Live telemetry and mission data continuously improve model
              accuracy and robustness.
            </p>
          </div>

          <div>
            <strong className="text-foreground">
              Safety & Validation
            </strong>
            <p className="mt-2 text-sm">
              Every learning system is validated against safety and
              compliance benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Value Delivered Through AI/ML
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
          <li>✔ Higher mission autonomy</li>
          <li>✔ Reduced operator workload</li>
          <li>✔ Improved situational awareness</li>
          <li>✔ Faster decision-making</li>
          <li>✔ Continuous learning and improvement</li>
          <li>✔ Scalable intelligence across fleets</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default AIMLLearning;
