import { EDUCATION } from '../constants/education.constants';
import EducationEntry from '../components/education/EducationEntry';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EducationCategory } from '../types/education.types';
import { useEffect, useMemo, useState } from 'react';
import Tabs from '../components/reusable/Tabs';
import GlassCard from '../components/reusable/GlassCard';
import Pagination from '../components/reusable/Pagination';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const [activeTab, setActiveTab] = useState<EducationCategory>(EducationCategory.CERTIFICATIONS);

  const filteredEducation = useMemo(() => {
    return EDUCATION.filter((education) => education.category === activeTab);
  }, [activeTab]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredEducation.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const paginatedEducation = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredEducation.slice(start, end);
  }, [currentPage, filteredEducation, itemsPerPage]);

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

    ScrollTrigger.refresh();

    return () => {
      timelineTrigger.kill();
      logoTrigger.kill();
    };
  }, [paginatedEducation]);

  return (
    <section id="education" className="padding-x">
      <div className="flex max-w-4xl flex-col gap-y-4 md:gap-y-8 lg:w-1/2 3xl:max-w-7xl">
        <div className="flex w-full flex-col flex-wrap items-center justify-between gap-x-4 gap-y-2 min-[30rem]:flex-row">
          <Tabs
            tabs={[EducationCategory.CERTIFICATIONS, EducationCategory.GENERAL]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-full min-[30rem]:w-max"
          />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            className="w-full min-[30rem]:w-max"
          />
        </div>

        <GlassCard className="relative flex flex-col items-center gap-y-2 px-4 md:gap-y-4 xl:gap-y-6">
          {paginatedEducation.map((education) => (
            <EducationEntry key={education.school + education.degree} education={education} />
          ))}
        </GlassCard>
      </div>
    </section>
  );
};

export default Education;
