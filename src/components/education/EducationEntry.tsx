import { EducationCategory, type EducationType } from '../../types/education.types';
import { cn } from '../../utils/cn';
import EducationInfo from './EducationInfo';

interface EducationEntryProps {
  education: EducationType;
  activeTab: EducationCategory;
}

const EducationEntry = ({ education, activeTab }: EducationEntryProps) => {
  return (
    <div className="exp-card-wrapper w-full">
      <div className="flex w-full items-end">
        <div className="timeline-wrapper">
          <div className="timeline" />
          <div
            className={cn(
              activeTab === EducationCategory.GENERAL ? 'gradient-line-general' : 'gradient-line-certifications',
            )}
          />
        </div>
        <div className="expText relative z-20 flex w-full gap-5 text-end md:gap-10 xl:gap-20">
          <EducationInfo education={education} />
          <div className={cn('timeline-logo-wrapper', education.borderColor)}></div>
          <div className="timeline-logo">
            <img src={education.logoPath} alt="logo" className="rounded-full p-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationEntry;
