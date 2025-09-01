import { WorkExperienceType } from '../../types/work.types';

interface WorkExperienceEntryHeaderProps {
  workExperience: WorkExperienceType;
}

const WorkExperienceEntryHeader = ({ workExperience }: WorkExperienceEntryHeaderProps) => {
  return (
    <div className="flex items-start gap-x-2 sm:items-center md:gap-x-6">
      <div className="work-experience-logo flex-shrink-0">
        <img
          src={workExperience.logoPath}
          alt={workExperience.title.concat(' Logo')}
          className="h-10 w-12 md:h-16 md:w-20 3xl:h-24 3xl:w-28"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="work-experience-title text-sm leading-tight font-bold text-white sm:text-3xl md:text-base xl:text-2xl 3xl:mb-2 3xl:text-3xl">
          {workExperience.title}
        </h2>
        <a
          href={workExperience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover mb-1 flex w-fit items-center gap-1 text-base text-accent/80 md:mb-2 md:text-lg md:font-medium 3xl:mb-3 3xl:text-2xl"
        >
          {workExperience.company}
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              strokeLinejoin: 'round',
              strokeMiterlimit: 2,
            }}
            className="inline-block size-4 3xl:size-6"
          >
            <g strokeWidth="0" />
            <g strokeLinecap="round" />
            <path style={{ fill: 'none' }} d="M-896 0H384v800H-896z" />
            <path
              fill="currentColor"
              d="M36.026 20.058H14.934a2.99 2.99 0 0 0-2.989 2.989v25.964A2.99 2.99 0 0 0 14.934 52h26.024a2.99 2.99 0 0 0 2.989-2.989V28.058h3.999v21.948a6 6 0 0 1-5.995 5.995h-28.01a6 6 0 0 1-5.995-5.995V22.052a5.997 5.997 0 0 1 5.995-5.995h22.085z"
            />
            <path
              fill="currentColor"
              d="M55.925 25.32H51.92V14.839L24.026 42.732 21.194 39.9l27.895-27.895H38.605V8h17.318l.002.001z"
            />
          </svg>
        </a>
        <div className="work-experience-period flex items-center gap-2 text-gray-300">
          <img src="/images/calendar.svg" alt="Calendar" className="h-4 w-4" />
          <span className="text-sm md:text-base md:font-medium 3xl:text-xl">{workExperience.date}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceEntryHeader;
