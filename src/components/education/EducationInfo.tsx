import { type EducationType } from '../../types/education.types';

interface EducationInfoProps {
  education: EducationType;
}

const EducationInfo = ({ education }: EducationInfoProps) => {
  return (
    <div className="relative flex h-full w-full flex-col gap-y-3 rounded-2xl py-3">
      <h1 className="text-3xl font-semibold">
        {education.school}
        <div className="flex items-center gap-x-2 text-lg">
          <img src="/images/calendar.svg" alt="calendar" className="inline size-4" />
          <span className="text-white/50">{education.date}</span>
        </div>
      </h1>
      <p className="flex items-center gap-x-2 text-xl font-light text-emerald-500 italic">
        <div className="inline h-6 w-1.5 rounded-full bg-gradient-to-r from-accent to-[#00c9ff]" />
        {education.degree}
      </p>
      {education.certificateLink && (
        <a href={education.certificateLink} target="_blank" rel="noopener noreferrer">
          <div className="font-xl w-fit rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-white/80 transition-colors hover:text-white/50">
            View Certificate
          </div>
        </a>
      )}
    </div>
  );
};

export default EducationInfo;
