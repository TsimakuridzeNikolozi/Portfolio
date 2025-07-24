import { WorkExperience } from '../../types/work.types';

interface WorkExperienceEntryHighlightsProps {
  workExperience: WorkExperience;
}

const WorkExperienceEntryHighlights = ({ workExperience }: WorkExperienceEntryHighlightsProps) => {
  return (
    <div>
      <div className="work-experience-overview mb-6">
        <p className="text-lg leading-relaxed font-light text-gray-300">{workExperience.overview}</p>
      </div>

      <div className="work-experience-highlights">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-xl font-semibold text-white">Key Highlights</h3>
          <img src="/images/star.svg" alt="Star" className="h-5 w-5" />
        </div>

        <ul className="space-y-3">
          {workExperience.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-gray-300">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></div>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceEntryHighlights;
