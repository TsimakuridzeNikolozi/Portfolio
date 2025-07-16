import HeroExperience from '../components/models/hero_models/HeroExperience';
import HeroHeader from '../components/HeroHeader';
import { Spotlight } from '../components/Spotlight';

const Hero = () => {
  return (
    <section id="hero" className="relative h-dvh overflow-hidden">
      <Spotlight />
      <div className="hero-dots" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="relative z-10 mt-36 flex h-[80vh] items-start justify-center md:h-dvh xl:mt-24">
        <HeroHeader />
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
