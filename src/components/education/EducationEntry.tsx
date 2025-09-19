import { type EducationType } from '../../types/education.types';
import { cn } from '../../utils/cn';
import EducationInfo from './EducationInfo';

interface EducationEntryProps {
  education: EducationType;
}

const EducationEntry = ({ education }: EducationEntryProps) => {
  return (
    <div className="education-card-wrapper w-full">
      <div className="flex w-full">
        <div className="timeline-wrapper">
          <div className="timeline" />
          <div className="w-0.5 bg-accent 3xl:w-1" />
        </div>
        <div className="relative z-20 flex w-full items-center justify-end gap-5 md:gap-10 xl:gap-12">
          <div className={cn('timeline-logo-wrapper', 'border-accent')}></div>
          <div className="timeline-logo">
            <a href={education.websiteLink} target="_blank" rel="noopener noreferrer" className="z-10 cursor-pointer">
              <img
                src={education.logoPath}
                alt="logo"
                loading="lazy"
                className="size-12 rounded-full p-0.5 md:size-[5.125rem] 3xl:size-28"
              />
            </a>
          </div>
          <EducationInfo education={education} />
        </div>
      </div>
    </div>
  );
};

export default EducationEntry;
