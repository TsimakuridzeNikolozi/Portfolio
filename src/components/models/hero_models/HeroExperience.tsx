import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';

import { Working } from './Working';
import HeroLights from './HeroLights';
import { Suspense } from 'react';

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas
      camera={{
        position: [-240, 30, 90],
        fov: 45,
      }}
    >
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#a259ff" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={false}
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -1.2, 0]}>
          <Working />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
