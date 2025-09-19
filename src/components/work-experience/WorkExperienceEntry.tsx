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
    const textElements = [
      '.work-experience-title',
      '.work-experience-company',
      '.work-experience-period',
      '.work-experience-overview',
      '.work-experience-highlights',
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      '.work-experience-logo',
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      },
    ).fromTo(
      textElements,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      },
      0.2,
    );
  });

  return (
    <GlassCard
      ref={ref}
      className="relative w-full space-y-3 overflow-hidden rounded-2xl p-3 md:space-y-6 md:p-6 3xl:space-y-8 3xl:p-10"
    >
      <WorkExperienceEntryHeader workExperience={workExperience} />
      <div className="mx-8 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent 3xl:h-1"></div>
      <WorkExperienceEntryHighlights workExperience={workExperience} />
    </GlassCard>
  );
};

export default WorkExperienceEntry;
