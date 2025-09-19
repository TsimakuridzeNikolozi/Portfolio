import { WorkExperienceType } from '../../types/work.types';

interface WorkExperienceEntryHeaderProps {
  workExperience: WorkExperienceType;
}

const WorkExperienceEntryHeader = ({ workExperience }: WorkExperienceEntryHeaderProps) => {
  return (
    <div className="flex items-center gap-x-2 md:gap-x-6">
      <div className="work-experience-logo flex-shrink-0">
        <img
          src={workExperience.logoPath}
          alt={workExperience.title.concat(' Logo')}
          loading="lazy"
          className="h-10 w-12 md:h-16 md:w-20 3xl:h-24 3xl:w-28"
        />
      </div>

      <div className="min-w-0 flex-1 space-y-1 md:space-y-2 3xl:space-y-3">
        <h2 className="work-experience-title text-base leading-tight font-bold text-white md:text-xl xl:text-2xl 3xl:text-3xl">
          {workExperience.title}
        </h2>
        <a href={workExperience.url} target="_blank" rel="noopener noreferrer">
          <span className="work-experience-company flex w-fit items-center gap-1 text-sm text-white transition-colors duration-300 hover:text-accent md:text-base md:font-medium xl:text-lg 3xl:text-2xl">
            {workExperience.company}
            <img src="/images/link-indicator.svg" alt="Link Indicator" className="size-4 3xl:size-6" />
          </span>
        </a>
        <div className="work-experience-period flex items-center gap-2 text-gray-300">
          <img src="/images/calendar.svg" alt="Calendar" className="h-4 w-4" />
          <span className="text-sm md:text-base 3xl:text-xl">{workExperience.date}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceEntryHeader;
