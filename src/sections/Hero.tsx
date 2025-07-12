import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import HeroExperience from '../components/models/hero_models/HeroExperience';
import HeroHeader from '../components/HeroHeader';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' },
    );
  });

  return (
    <section id="hero" className="hero-background relative overflow-hidden">
      <div className="relative z-10 mt-24 flex h-[80vh] items-start justify-center md:h-dvh xl:mt-12 xl:items-center">
        <HeroHeader />

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
