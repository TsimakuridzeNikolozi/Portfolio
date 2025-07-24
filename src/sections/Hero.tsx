import HeroHeader from '../components/HeroHeader';
import { Spotlight } from '../components/Spotlight';

const Hero = () => {
  return (
    <section id="hero" className="relative h-dvh overflow-hidden">
      <Spotlight />
      <div className="relative z-10 mt-36 flex h-[80vh] items-start justify-center md:h-dvh xl:mt-24">
        <HeroHeader />
      </div>
    </section>
  );
};

export default Hero;
