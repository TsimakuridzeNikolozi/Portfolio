import WorkExperienceEntry from '../components/work-experience/WorkExperienceEntry';
import { WORK_EXPERIENCE } from '../constants/work.constants';

const WorkExperience = () => {
  return (
    <section id="work-experience" className="padding-x">
      <div className="max-w-4xl space-y-8 lg:w-3/5 3xl:max-w-7xl">
        {WORK_EXPERIENCE.map((workExperience) => (
          <WorkExperienceEntry key={workExperience.title} workExperience={workExperience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
