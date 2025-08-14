import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import SkillCard from '../components/skills/SkillCard';
import { SKILLS } from '../constants/skills.constants';
import { useCarouselAnimation } from '../hooks/useCarouselAnimation';
import { useCarouselEffects } from '../hooks/useCarouselEffects';
import { useCarouselDrag } from '../hooks/useCarouselDrag';

const Skills = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const { updateEffects, cleanup: cleanupEffects } = useCarouselEffects(containerRef);
  const { setupAnimation } = useCarouselAnimation(containerRef, wrapperRef, timelineRef, updateEffects);
  const { setupDragHandlers } = useCarouselDrag(wrapperRef, timelineRef, updateEffects);

  useGSAP(() => {
    const cleanupAnimation = setupAnimation();
    const cleanupDrag = setupDragHandlers();

    return () => {
      cleanupAnimation();
      cleanupDrag();
      cleanupEffects();
    };
  });

  return (
    <section id="skills" className="flex h-dvh w-full items-start justify-center">
      <div ref={wrapperRef} className="skills-container-wrapper">
        <div ref={containerRef} className="skills-container animate-none">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} style={{ '--i': index } as React.CSSProperties} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
