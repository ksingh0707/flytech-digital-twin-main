import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import leader1 from "@/assets/leadership/leader-1.jpg";
import leader2 from "@/assets/leadership/leader-2.jpg";
import leader3 from "@/assets/leadership/leader-3.jpg";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Leadership
        </h1>
        <p className="text-muted-foreground max-w-3xl text-lg">
          Flytech is led by engineers, technologists, and industry professionals
          with deep experience in autonomous systems and mission-critical
          operations.
        </p>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* LEADER 1 */}
          <div className="p-6 border rounded-lg bg-card text-center">
            <img
              src={leader1}
              alt="Founder and CEO"
              className="h-32 w-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">
              Founder / CEO
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Founder & Chief Executive Officer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leads Flytech’s vision, strategy, and long-term roadmap with a
              strong focus on autonomous drone systems and real-world deployment.
            </p>
          </div>

          {/* LEADER 2 */}
          <div className="p-6 border rounded-lg bg-card text-center">
            <img
              src={leader2}
              alt="Chief Technology Officer"
              className="h-32 w-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">
              CTO
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chief Technology Officer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oversees platform architecture, simulation engines, and
              Digital Twin technology development.
            </p>
          </div>

          {/* LEADER 3 */}
          <div className="p-6 border rounded-lg bg-card text-center">
            <img
              src={leader3}
              alt="Head of Engineering"
              className="h-32 w-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">
              Head of Engineering
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Engineering & Systems
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leads engineering execution, quality, and delivery across
              autonomous drone platforms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
