import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function DogModel() {
  const { scene } = useGLTF('/dog.glb');
  // Scale and position optimized for the craftzdog voxel dog
  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} />; 
}

export default function VoxelDog() {
  return (
    <div className="w-full h-48 md:h-64 lg:h-72 relative flex justify-center items-center mt-[-30px] mb-[-20px]">
      <Canvas camera={{ position: [5, 5, 5], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <DogModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.5} target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
}
