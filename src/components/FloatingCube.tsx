import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import { Mesh } from 'three';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh ref={meshRef} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#4338ca"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0}
          metalness={0.8}
          emissive="#4338ca"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

export default FloatingCube;