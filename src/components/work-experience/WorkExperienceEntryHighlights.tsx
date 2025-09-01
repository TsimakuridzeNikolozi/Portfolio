import { WorkExperienceType } from '../../types/work.types';

interface WorkExperienceEntryHighlightsProps {
  workExperience: WorkExperienceType;
}

const WorkExperienceEntryHighlights = ({ workExperience }: WorkExperienceEntryHighlightsProps) => {
  return (
    <div>
      <div className="work-experience-overview mb-6">
        <p className="text-sm leading-relaxed font-light text-gray-300 md:text-base xl:text-lg 3xl:text-2xl">
          {workExperience.overview}
        </p>
      </div>

      <div className="work-experience-highlights">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-sm font-semibold text-white md:text-base xl:text-xl 3xl:text-3xl">Key Highlights</h3>
          <img src="/images/star.svg" alt="Star" className="size-4 md:size-5" />
        </div>

        <ul className="space-y-3">
          {workExperience.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-1.5 text-gray-300 md:gap-3">
              <div className="mt-2 size-2 flex-shrink-0 rounded-full bg-accent 3xl:mt-3.5"></div>
              <span className="text-sm leading-relaxed md:text-base xl:text-lg 3xl:text-2xl">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceEntryHighlights;
