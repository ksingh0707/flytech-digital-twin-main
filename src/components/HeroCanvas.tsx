import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { DroneModel } from "./DroneModel";

export const HeroCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 1.5, 6], fov: 45 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none", // 🔥 FIXES CLICK ISSUE
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <DroneModel />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};
