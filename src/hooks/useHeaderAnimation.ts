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

    const headerConfigs = [
      {
        trigger: '#hero-to-work-experience',
        endTrigger: '#work-experience',
        pin: '#work-experience-header',
      },
      {
        trigger: '#work-experience-to-education',
        endTrigger: '#education',
        pin: '#education-header',
      },
      {
        trigger: '#education-to-skills',
        endTrigger: '#skills',
        pin: '#skills-header',
      },
      {
        trigger: '#skills-to-testimonials',
        endTrigger: '#testimonials',
        pin: '#testimonials-header',
      },
    ];

    const triggers = headerConfigs.map(({ trigger, endTrigger, pin }) =>
      ScrollTrigger.create({
        trigger,
        start: 'top top',
        end: `top ${offset}`,
        endTrigger,
        scrub: true,
        pin,
        animation: gsap.fromTo(pin, ...HEADER_ANIMATION_PROPS),
      }),
    );

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
      triggers.forEach((trigger) => trigger.kill());
      contactTrigger.kill();
    };
  }, [isDesktop, is3XLDesktop]);
};
