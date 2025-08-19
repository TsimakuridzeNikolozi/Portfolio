import { WorkExperienceType } from '../../types/work.types';

interface WorkExperienceEntryHeaderProps {
  workExperience: WorkExperienceType;
}

const WorkExperienceEntryHeader = ({ workExperience }: WorkExperienceEntryHeaderProps) => {
  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="work-experience-logo flex-shrink-0">
        <img src={workExperience.logoPath} alt={workExperience.title.concat(' Logo')} className="h-16 w-auto" />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="work-experience-title mb-2 text-2xl leading-tight font-bold text-white sm:text-3xl">
          {workExperience.title}
        </h2>
        <div className="work-experience-period flex items-center gap-2 text-gray-300">
          <img src="/images/calendar.svg" alt="Calendar" className="h-4 w-4" />
          <span className="font-medium">{workExperience.date}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceEntryHeader;
