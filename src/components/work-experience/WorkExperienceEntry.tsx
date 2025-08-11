import { useGSAP } from '@gsap/react';
import { WorkExperienceType } from '../../types/work.types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkExperienceEntryHeader from './WorkExperienceEntryHeader';
import WorkExperienceEntryHighlights from './WorkExperienceEntryHighlights';
import { useRef } from 'react';
import GlassCard from '../reusable/GlassCard';

gsap.registerPlugin(ScrollTrigger);

interface WorkExperienceEntryProps {
  workExperience: WorkExperienceType;
}

const WorkExperienceEntry = ({ workExperience }: WorkExperienceEntryProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.work-experience-logo',
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    const textElements = ['.work-experience-title', '.work-experience-period', '.work-experience-overview'];

    gsap.fromTo(
      textElements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    gsap.fromTo(
      '.work-experience-highlights',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    gsap.fromTo(
      '.work-experience-entry',
      {
        transform: 'rotateY(10deg)',
        transformPerspective: 1000,
      },
      {
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    <GlassCard ref={ref} className="work-experience-entry w-1/2 max-w-4xl space-y-6 rounded-2xl p-6">
      <WorkExperienceEntryHeader workExperience={workExperience} />
      <div className="mx-8 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      <WorkExperienceEntryHighlights workExperience={workExperience} />
    </GlassCard>
  );
};

export default WorkExperienceEntry;
