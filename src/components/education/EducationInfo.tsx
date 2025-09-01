import { type EducationType } from '../../types/education.types';

interface EducationInfoProps {
  education: EducationType;
}

const EducationInfo = ({ education }: EducationInfoProps) => {
  return (
    <div className="relative flex h-full w-full flex-col gap-y-1 rounded-2xl py-3 md:gap-y-2 xl:gap-y-3">
      <h1 className="text-xl font-semibold md:text-xl xl:text-3xl 3xl:text-4xl">
        <a href={education.websiteLink} target="_blank" rel="noopener noreferrer" className="link-hover">
          {education.school}
        </a>
        <div className="mt-2 flex items-center gap-x-2 text-lg">
          <img src="/images/calendar.svg" alt="calendar" className="inline size-4" />
          <span className="text-xs text-white/50 md:text-sm xl:text-base 3xl:text-xl">{education.date}</span>
        </div>
      </h1>
      <div className="flex items-center gap-x-1 text-sm font-light text-emerald-500 italic md:gap-x-2 md:text-base xl:text-xl 3xl:text-2xl">
        <div className="inline h-4 w-1 rounded-full bg-gradient-to-r from-accent to-[#00c9ff] md:h-6 md:w-1.5" />
        {education.degree}
      </div>
      {education.certificateLink && (
        <a href={education.certificateLink} target="_blank" rel="noopener noreferrer">
          <div className="w-fit rounded-full border border-white/20 bg-white/5 px-2 py-1 text-xs text-white/80 transition-colors hover:text-white/50 md:px-3 md:py-1 md:text-sm xl:px-4 xl:py-1.5 xl:text-base 3xl:text-2xl">
            View Certificate
          </div>
        </a>
      )}
    </div>
  );
};

export default EducationInfo;
