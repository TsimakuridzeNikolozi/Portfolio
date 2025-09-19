import { forwardRef, memo } from 'react';
import { cn } from '../../utils/cn';
import { Skill } from '../../types/skills.types';

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: Skill;
}

const SkillCard = memo(
  forwardRef<HTMLDivElement, SkillCardProps>(({ skill, className, ...props }, ref) => {
    const percentage = skill.score;

    const getProficiencyLevel = (score: number) => {
      if (score >= 70) return { level: 'Advanced', color: 'advanced' };
      if (score >= 50) return { level: 'Intermediate', color: 'intermediate' };
      return { level: 'Beginner', color: 'beginner' };
    };

    const { level, color } = getProficiencyLevel(skill.score);

    return (
      <div className={cn('skill-card', className)} ref={ref} {...props}>
        <div className="skill-name">{skill.name}</div>

        <div className="skill-progress-container">
          <div className={cn('skill-progress-ring', color)}>
            <svg className="skill-progress-svg" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" className="skill-progress-bg" />
              <circle
                cx="60"
                cy="60"
                r="50"
                className="skill-progress-fill"
                style={
                  {
                    '--progress': percentage,
                  } as React.CSSProperties
                }
              />
            </svg>

            <div className="skill-icon-container">
              <img src={skill.icon} alt={skill.name} loading="lazy" className="skill-icon" />
            </div>
          </div>
        </div>

        <div className={cn('skill-level', color)}>{level}</div>
      </div>
    );
  }),
);

SkillCard.displayName = 'SkillCard';

export default SkillCard;
