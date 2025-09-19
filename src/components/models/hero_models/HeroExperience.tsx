import { Canvas } from '@react-three/fiber';
import { useResponsive } from '../../../hooks/useResponsive';
import { Working } from './Working';
import HeroLights from './HeroLights';
import { Suspense, useState, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const HeroExperience = () => {
  const { isDesktop, isXLDesktop, is2XLDesktop, is3XLDesktop } = useResponsive();
  const [meshGroup, setMeshGroup] = useState<THREE.Group | null>(null);

  const scale = useMemo(() => {
    return is3XLDesktop ? 0.9 : is2XLDesktop ? 0.85 : isXLDesktop ? 0.7 : 0.6;
  }, [is3XLDesktop, is2XLDesktop, isXLDesktop]);

  useGSAP(() => {
    if (!isDesktop || !meshGroup) return;

    const heroToWorkExperienceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'center center',
        endTrigger: '#work-experience',
        scrub: true,
      },
    });
    heroToWorkExperienceTimeline.to(meshGroup.scale, {
      x: 1.25,
      y: 1.25,
      z: 1.25,
      ease: 'power4.out',
    });
    heroToWorkExperienceTimeline.to(meshGroup.rotation, {
      y: -1.5,
      z: -0.1,
      ease: 'power4.out',
    });
    heroToWorkExperienceTimeline.to(
      meshGroup.position,
      {
        y: 5,
        x: 12,
        ease: 'power4.out',
      },
      '<',
    );

    const workExperienceToEducationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#work-experience',
        start: 'top top',
        end: 'bottom top-=50%',
        scrub: true,
      },
    });
    workExperienceToEducationTimeline.to(meshGroup.rotation, {
      y: -2.7,
      z: 0,
      ease: 'power2.inOut',
      duration: 1.5,
    });

    const educationToSkillTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#education',
        start: 'top top',
        end: 'bottom top-=50%',
        scrub: true,
      },
    });
    educationToSkillTimeline.to(meshGroup.scale, {
      x: 0.6,
      y: 0.6,
      z: 0.6,
      ease: 'power2.inOut',
      duration: 1.5,
    });
    educationToSkillTimeline.to(
      meshGroup.position,
      {
        y: 12,
        x: 32,
        ease: 'power2.inOut',
        duration: 1.5,
      },
      '<0.1',
    );
    educationToSkillTimeline.to(
      meshGroup.rotation,
      {
        y: 0.7,
        z: 0,
        ease: 'power1.inOut',
        duration: 1.8,
      },
      '<0.1',
    );

    return () => {
      heroToWorkExperienceTimeline.kill();
      workExperienceToEducationTimeline.kill();
      educationToSkillTimeline.kill();
    };
  }, [meshGroup, isDesktop]);

  if (!isDesktop) return null;

  return (
    <figure className="canvas-container">
      <Canvas
        id="hero-experience"
        camera={{
          position: [0, -4.5, 20],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.2} color="#a259ff" />

        <Suspense fallback={null}>
          <HeroLights />
          <group scale={scale} position={[0, -10.5 + (0.85 - scale) * 3, 0]}>
            <Working setMeshGroup={setMeshGroup} />
          </group>
        </Suspense>
      </Canvas>
    </figure>
  );
};

export default HeroExperience;
