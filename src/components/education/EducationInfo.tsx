import { type EducationType } from '../../types/education.types';
import GlassCard from '../reusable/GlassCard';

interface EducationInfoProps {
  education: EducationType;
}

const EducationInfo = ({ education }: EducationInfoProps) => {
  return (
    <GlassCard className="flex flex-col items-end gap-y-3 rounded-2xl p-6">
      <h1 className="flex flex-col gap-y-2 text-3xl font-semibold">
        {education.school}
        <span className="text-white-50 text-lg">🗓️&nbsp;{education.date}</span>
      </h1>
      <p className="text-xl font-bold text-emerald-500 italic">{education.degree}</p>
      {education.certificateLink && (
        <a href={education.certificateLink} target="_blank" rel="noopener noreferrer">
          <p className="font-xl w-fit text-white/50 underline underline-offset-4 transition-colors duration-300 hover:text-white">
            View Certificate
          </p>
        </a>
      )}
      {education.highlights && (
        <ul className="text-white-50 flex list-disc flex-col gap-5 text-end">
          {education.highlights.map((highlight, index) => (
            <li key={index} className="text-lg">
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
};

export default EducationInfo;
