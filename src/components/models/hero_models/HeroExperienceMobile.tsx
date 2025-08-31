import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroLights from './HeroLights';
import { Working } from './Working';
import { useResponsive } from '../../../hooks/useResponsive';

const HeroExperienceMobile = () => {
  const { isDesktop } = useResponsive();

  if (isDesktop) return null;

  return (
    <div className="absolute bottom-0 h-[44rem] w-full">
      <Canvas
        id="hero-experience-mobile"
        camera={{
          position: [0, 2, 20],
          fov: 70,
        }}
      >
        <ambientLight intensity={0.1} color="#a259ff" />
        <ambientLight intensity={0.3} color="#fff8e1" />

        <Suspense fallback={null}>
          <HeroLights />
          <group position={[0, -11, 0]}>
            <Working />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperienceMobile;
