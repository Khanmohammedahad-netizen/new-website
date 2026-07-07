import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const generateParticles = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 10 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const points = generateParticles(2000);

function ParticleField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ThreeCanvas({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 15] }} gl={{ failIfMajorPerformanceCaveat: false }}>
      <ParticleField color={color} />
    </Canvas>
  );
}
