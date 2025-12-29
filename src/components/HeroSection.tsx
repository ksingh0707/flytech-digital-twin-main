import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { HeroCanvas } from "./HeroCanvas";
import { useNavigate } from "react-router-dom";

import flytecaBg from "../assets/backgrounds/flyteca.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToCapabilities = () => {
    const el = document.getElementById("capabilities");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ===== DECORATIVE MOVING SQUARE (MOVED DOWN ONLY) ===== */}
      <motion.div
        className="absolute w-40 h-40 border border-cyan-400/40 rounded-xl z-[6]"
        style={{
          top: "62%",          // 🔥 moved DOWN
          left: "50%",
          transform: "translateX(-50%) rotate(45deg)",
        }}
        animate={{ rotate: [45, 55, 45] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===== MOTION ORBS (BEHIND BACKGROUND) ===== */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl -z-10"
        initial={{ x: -100, y: 200 }}
        animate={{ x: [-100, 250, 50], y: [200, -80, 200] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full bg-blue-500/20 blur-2xl -z-10"
        initial={{ x: "65%", y: "30%" }}
        animate={{ x: ["65%", "55%", "70%"], y: ["30%", "45%", "30%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== FLYTECA BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${flytecaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ===== SOFT GRADIENT OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[5]" />

      {/* ===== 3D CANVAS ===== */}
      <div className="absolute inset-0 z-10">
        <HeroCanvas />
      </div>

      {/* ===== HERO CONTENT (UNCHANGED POSITION) ===== */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 mb-6 rounded-full border border-blue-400/30 bg-blue-400/10"
        >
          <span className="text-blue-400 text-sm tracking-wide">
            Digital Twin–Powered Drone Systems
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Mission-Ready Drone Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-200 max-w-3xl mx-auto mb-16 text-lg"
        >
          Simulate, validate, and deploy autonomous drone missions using
          real-time Digital Twin technology built for critical operations.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" onClick={() => navigate("/request-demo")}>
            Request Live Demo
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/technology")}>
            Explore Technology
          </Button>
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <button
        onClick={scrollToCapabilities}
        aria-label="Scroll to capabilities"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-blue-400/80 hover:text-blue-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-blue-400/60 flex items-start justify-center p-1"
        >
          <span className="w-1 h-2 bg-blue-400 rounded-full mt-1" />
        </motion.div>
      </button>
    </section>
  );
};
