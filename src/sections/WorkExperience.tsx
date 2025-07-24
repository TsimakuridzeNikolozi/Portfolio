import WorkExperienceEntry from '../components/work-experience/WorkExperienceEntry';
import { WORK_EXPERIENCE } from '../constants/work.constants';

const WorkExperience = () => {
  return (
    <section id="work-experience" className="padding-x relative space-y-20 py-20">
      <div className="space-y-8">
        {WORK_EXPERIENCE.map((workExperience) => (
          <WorkExperienceEntry key={workExperience.title} workExperience={workExperience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
