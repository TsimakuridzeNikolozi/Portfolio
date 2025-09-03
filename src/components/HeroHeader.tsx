import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowButton from './reusable/ArrowButton';
import TextType from './reusable/TextType';
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';
import { useResponsive } from '../hooks/useResponsive';
import { useCallback, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  'The right fit for your company’s success.',
  'Your trusted partner for results-driven solutions.',
  'Delivering what your business deserves-excellence.',
];

const HeroHeader = () => {
  const shownToastRef = useRef<boolean>(null);
  const { isDesktop } = useResponsive();

  useGSAP(() => {
    gsap.fromTo(
      '#hero-phrase, .hero-text h1, .arrow-button',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5, duration: 1, ease: 'power2.inOut' },
    );

    gsap.to('#hero-header', {
      scale: 0.8,
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

  const downloadResumeClick = useCallback(() => {
    try {
      saveAs('/documents/Nikolozi Tsimakuridze - Resume.pdf', 'Nikolozi Tsimakuridze - Resume.pdf');
      toast.success(isDesktop ? 'Resume downloaded successfully!' : 'Download initiated successfully!');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      toast.error('Failed to download resume, please try again.');
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop && !shownToastRef.current) {
      shownToastRef.current = true;
      toast.error('Please use a desktop device for the best experience', {
        icon: 'ⓘ',
      });
    }
  }, [isDesktop]);

  return (
    <header
      id="hero-header"
      className="padding-x relative flex w-screen flex-col justify-center py-16 md:w-full 3xl:py-24"
    >
      <div className="flex flex-col items-center gap-y-4 xl:gap-y-7">
        <TextType
          id="hero-phrase"
          text={phrases}
          className="min-h-6 text-center text-sm md:min-h-8 md:text-[1rem] xl:text-xl 3xl:text-3xl"
          gradientText
          initialDelay={2000}
          showCursor={false}
        />
        <div className="hero-text">
          <h1 className="mb-4 xl:mb-10">Hi, I'm Nikolozi,</h1>
          <h1>
            Full-Stack{' '}
            <span className="bg-gradient-to-r from-accent to-[#00c9ff] bg-clip-text text-transparent">Web3</span>{' '}
            Developer
          </h1>
        </div>

        <ArrowButton text="See My Resume" onClick={downloadResumeClick} />
      </div>
    </header>
  );
};

export default HeroHeader;
