import { EDUCATION } from '../constants/education.constants';
import EducationEntry from '../components/education/EducationEntry';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EducationCategory } from '../types/education.types';
import { useMemo, useState } from 'react';
import Tabs from '../components/reusable/Tabs';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const [activeTab, setActiveTab] = useState<EducationCategory>(EducationCategory.GENERAL);

  useGSAP(() => {
    ScrollTrigger.getById('timelineTrigger')?.kill();
    ScrollTrigger.getById('logoTrigger')?.kill();

    const timelineTrigger = ScrollTrigger.create({
      id: 'timelineTrigger',
      trigger: '.timeline',
      start: 'top+=20% bottom',
      end: 'bottom+=20% bottom',
      onUpdate: (self) => {
        gsap.to('.timeline', {
          transformOrigin: 'bottom bottom',
          scaleY: 1 - self.progress,
        });
      },
    });

    const logoTrigger = ScrollTrigger.create({
      id: 'logoTrigger',
      trigger: '.timeline',
      start: 'top+=20% bottom',
      end: 'bottom+=20% bottom',
      onUpdate: (self) => {
        const logos = document.querySelectorAll('.timeline-logo-wrapper');
        logos.forEach((logo, index) => {
          const progressPerLogo = 1 / logos.length;
          const logoProgress = (self.progress - index * progressPerLogo) / progressPerLogo;
          gsap.to(logo, {
            opacity: Math.max(0, Math.min(1, logoProgress)),
          });
        });
      },
    });

    return () => {
      timelineTrigger.kill();
      logoTrigger.kill();
    };
  }, [activeTab]);

  const filteredEducation = useMemo(() => {
    return EDUCATION.filter((education) => education.category === activeTab);
  }, [activeTab]);

  return (
    <section id="education" className="mx-6 flex w-1/2 max-w-4xl flex-col gap-y-8">
      <Tabs
        tabs={[EducationCategory.GENERAL, EducationCategory.CERTIFICATIONS]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="relative flex flex-col gap-6">
        {filteredEducation.map((education) => (
          <EducationEntry key={education.school + education.degree} education={education} activeTab={activeTab} />
        ))}
      </div>
    </section>
  );
};

export default Education;
