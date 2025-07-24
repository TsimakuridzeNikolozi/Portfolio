import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowButton from './ArrowButton';
import TextType from './reusable/TextType';

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  'The right fit for your company’s success.',
  'Your trusted partner for results-driven solutions.',
  'Delivering what your business deserves—excellence.',
];

const HeroHeader = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#hero-phrase, .hero-text h1, .arrow-button',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' },
    );

    gsap.to('#hero-header', {
      scale: 0.8,
      y: '10rem',
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
    });
  });

  return (
    <header id="hero-header" className="padding-x relative flex w-screen flex-col justify-center py-20 md:w-full">
      <div className="flex flex-col items-center gap-7">
        <TextType id="hero-phrase" text={phrases} className="text-xl" gradientText />
        <div className="hero-text">
          <h1 className="mb-4 xl:mb-10">Hi, I'm Nikolozi,</h1>
          <h1>
            Full-Stack{' '}
            <span className="bg-gradient-to-r from-accent to-[#00c9ff] bg-clip-text text-transparent">Web3</span>{' '}
            Developer
          </h1>
        </div>

        <ArrowButton text="See My Work" className="h-12 w-60 md:h-16 md:w-80" id="work-experience" />
      </div>
    </header>
  );
};

export default HeroHeader;
