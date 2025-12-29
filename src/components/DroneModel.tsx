import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import droneImage from "../assets/images/drone.png";

export const DroneModel = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { camera } = useThree();

  const texture = useTexture(droneImage);
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    if (!ref.current) return;

    const scroll = Math.min(window.scrollY / window.innerHeight, 1);

    // Smooth eased motion (NOT linear)
    const targetY = scroll * 0.4;
    const targetX = scroll * 1.1;

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      targetY,
      delta * 3
    );

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      targetX,
      delta * 3
    );

    // Subtle float
    ref.current.position.y =
      -0.85 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;

    // Slight scale breathing
    const s = 1 + Math.sin(state.clock.elapsedTime) * 0.008;
    ref.current.scale.set(s, s, s);

    // Face camera slightly (billboard + depth)
    ref.current.lookAt(camera.position);
  });

  return (
    <mesh ref={ref} position={[2.8, -0.85, 0]}>
      <planeGeometry args={[3.2, 1.9]} />

      {/* MAIN MATERIAL */}
      <meshPhongMaterial
        map={texture}
        transparent
        alphaTest={0.05}
        shininess={60}
        specular="#9fd3ff"
        emissive="#0a2a4a"
        emissiveIntensity={0.25}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};
