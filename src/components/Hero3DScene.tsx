import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Torus, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const Knot = () => {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.y += delta * 0.4;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={ref} args={[1.4, 1]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#a855f7"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.45}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
};

const Ring = () => {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.z += delta * 0.15;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <Torus ref={ref} args={[2.4, 0.05, 16, 100]} position={[0, 0, -1]}>
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} />
      </Torus>
    </Float>
  );
};

const SmallSphere = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <Float speed={3} floatIntensity={2.5}>
    <Sphere args={[0.18, 32, 32]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </Sphere>
  </Float>
);

const Hero3DScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-10, -5, -5]} intensity={1} color="#ec4899" />
      <Suspense fallback={null}>
        <Knot />
        <Ring />
        <SmallSphere position={[2.5, 1.5, 0]} color="#22d3ee" />
        <SmallSphere position={[-2.6, -1.2, 0]} color="#a855f7" />
        <SmallSphere position={[2, -1.8, 0.5]} color="#ec4899" />
      </Suspense>
    </Canvas>
  );
};

export default Hero3DScene;
