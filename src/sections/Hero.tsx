import HeroHeader from '../components/HeroHeader';
import HeroExperienceMobile from '../components/models/hero_models/HeroExperienceMobile';

const Hero = () => {
  return (
    <section id="hero" className="relative h-full overflow-hidden lg:h-dvh">
      <HeroExperienceMobile />
      <div className="relative z-10 flex h-[90vh] flex-col items-start justify-start lg:h-dvh">
        <HeroHeader />
      </div>
    </section>
  );
};

export default Hero;
