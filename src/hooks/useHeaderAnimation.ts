import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HEADER_ANIMATION_PROPS } from '../constants/animation.constants';

gsap.registerPlugin(ScrollTrigger);

export const useHeaderAnimation = () => {
  useGSAP(() => {
    const workExperienceTrigger = ScrollTrigger.create({
      trigger: '#hero-to-work-experience',
      start: 'top 5%',
      end: 'top bottom',
      endTrigger: '#work-experience-to-education',
      scrub: true,
      pin: '#work-experience-header',
      animation: gsap.fromTo('#work-experience-header', ...HEADER_ANIMATION_PROPS),
    });

    const educationTrigger = ScrollTrigger.create({
      trigger: '#work-experience-to-education',
      start: 'top top',
      end: 'top 25%',
      endTrigger: '#education',
      scrub: true,
      pin: '#education-header',
      animation: gsap.fromTo('#education-header', ...HEADER_ANIMATION_PROPS),
    });

    const skillsTrigger = ScrollTrigger.create({
      trigger: '#education-to-skills',
      start: 'top top',
      end: 'top 10%',
      endTrigger: '#skills',
      scrub: true,
      pin: '#skills-header',
      animation: gsap.fromTo('#skills-header', ...HEADER_ANIMATION_PROPS),
    });

    const testimonialsTrigger = ScrollTrigger.create({
      trigger: '#skills-to-testimonials',
      start: 'top top',
      end: 'top 15%',
      endTrigger: '#testimonials',
      scrub: true,
      pin: '#testimonials-header',
      animation: gsap.fromTo('#testimonials-header', ...HEADER_ANIMATION_PROPS),
    });

    const contactTrigger = ScrollTrigger.create({
      trigger: '#testimonials-to-contact',
      start: 'top top',
      end: 'top 10%',
      endTrigger: '#contact',
      scrub: true,
      pin: '#contact-header',
      animation: gsap
        .timeline()
        .to(['.background-image-1', '.background-image-2'], {
          scale: 6,
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
  });
};
