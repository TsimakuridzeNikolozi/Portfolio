import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HEADER_ANIMATION_PROPS } from '../constants/animation.constants';
import { useResponsive } from '../hooks/useResponsive';

gsap.registerPlugin(ScrollTrigger);

export const useHeaderAnimation = () => {
  const { isDesktop, is3XLDesktop } = useResponsive();

  useGSAP(() => {
    if (!isDesktop) return;

    const offset = is3XLDesktop ? '320px' : '200px';

    const workExperienceTrigger = ScrollTrigger.create({
      trigger: '#hero-to-work-experience',
      start: 'top top',
      end: `top ${offset}`,
      endTrigger: '#work-experience',
      scrub: true,
      pin: '#work-experience-header',
      animation: gsap.fromTo('#work-experience-header', ...HEADER_ANIMATION_PROPS),
    });

    const educationTrigger = ScrollTrigger.create({
      trigger: '#work-experience-to-education',
      start: 'top top',
      end: `top ${offset}`,
      endTrigger: '#education',
      scrub: true,
      pin: '#education-header',
      animation: gsap.fromTo('#education-header', ...HEADER_ANIMATION_PROPS),
    });

    const skillsTrigger = ScrollTrigger.create({
      trigger: '#education-to-skills',
      start: 'top top',
      end: `top ${offset}`,
      endTrigger: '#skills',
      scrub: true,
      pin: '#skills-header',
      animation: gsap.fromTo('#skills-header', ...HEADER_ANIMATION_PROPS),
    });

    const testimonialsTrigger = ScrollTrigger.create({
      trigger: '#skills-to-testimonials',
      start: 'top top',
      end: `top ${offset}`,
      endTrigger: '#testimonials',
      scrub: true,
      pin: '#testimonials-header',
      animation: gsap.fromTo('#testimonials-header', ...HEADER_ANIMATION_PROPS),
    });

    const contactTrigger = ScrollTrigger.create({
      trigger: '#testimonials-to-contact',
      start: 'top top',
      end: `top ${offset}`,
      endTrigger: '#contact',
      scrub: true,
      pin: '#contact-header',
      animation: gsap
        .timeline()
        .to('.background-image', {
          scale: 3,
          ease: 'power2.inOut',
          duration: 2,
        })
        .fromTo('#contact-header', ...HEADER_ANIMATION_PROPS, '<'),
    });

    return () => {
      workExperienceTrigger.kill();
      educationTrigger.kill();
      skillsTrigger.kill();
      testimonialsTrigger.kill();
      contactTrigger.kill();
    };
  }, [isDesktop, is3XLDesktop]);
};
