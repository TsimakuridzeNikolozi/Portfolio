import { Suspense } from 'react';
import HeroHeader from '../components/HeroHeader';
import SuspenseSpinner from '../components/reusable/SuspenseSpinner';
import HeroExperienceMobile from '../components/models/hero_models/HeroExperienceMobile';

const Hero = () => {
  return (
    <section id="hero" className="relative h-full overflow-hidden lg:h-dvh">
      <Suspense fallback={<SuspenseSpinner />}>
        <HeroExperienceMobile />
      </Suspense>
      <div className="relative z-10 flex h-[90vh] flex-col items-start justify-start lg:h-dvh">
        <HeroHeader />
      </div>
    </section>
  );
};

export default Hero;
