import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Working } from './Working';
import HeroLights from './HeroLights';
import { Suspense, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [meshGroup, setMeshGroup] = useState<THREE.Group | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'center center',
        endTrigger: '#work-experience',
        scrub: true,
      },
    });

    if (!meshGroup) return;
    tl.to(meshGroup.scale, {
      x: 1.25,
      y: 1.25,
      z: 1.25,
      ease: 'power4.out',
    });

    tl.to(meshGroup.rotation, {
      y: -1.5,
      z: -0.1,
      ease: 'power4.out',
    });
    tl.to(
      meshGroup.position,
      {
        y: 5,
        x: 12,
        ease: 'power4.out',
      },
      '<',
    );
  }, [meshGroup]);

  return (
    <figure className="canvas-container">
      <Canvas
        id="hero-experience"
        camera={{
          position: [-240, -45, 90],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.2} color="#a259ff" />
        <OrbitControls
          enablePan={false} // Prevents panning of the scene
          enableZoom={false}
          enableRotate={false}
          maxDistance={20}
          maxPolarAngle={Math.PI / 1.5}
        />

        <Suspense fallback={null}>
          <HeroLights />
          <group scale={isMobile ? 0.5 : 0.85} position={[0, -10, 0]} rotation={[0, -1.2, 0]}>
            <Working setMeshGroup={setMeshGroup} />
          </group>
        </Suspense>
      </Canvas>
    </figure>
  );
};

export default HeroExperience;
