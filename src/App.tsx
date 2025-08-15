import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
// import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import SectionHeader from './components/reusable/SectionHeader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransitionSection from './components/reusable/TransitionSection';
import { Toaster } from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const workExperienceTrigger = ScrollTrigger.create({
      trigger: '#hero-to-work-experience',
      start: 'top 5%',
      end: 'top bottom',
      endTrigger: '#work-experience-to-education',
      scrub: true,
      pin: '#work-experience-header',
      animation: gsap.to(['.background-image-1', '.background-image-2'], {
        rotateY: 0,
        ease: 'power2.inOut',
      }),
    });

    const educationTrigger = ScrollTrigger.create({
      trigger: '#work-experience-to-education',
      start: 'top top',
      end: 'top 25%',
      endTrigger: '#education',
      scrub: true,
      pin: '#education-header',
    });

    const contactTrigger = ScrollTrigger.create({
      trigger: '#skills-to-contact',
      start: 'top top',
      end: 'top 10%',
      endTrigger: '#contact',
      scrub: true,
      pin: '#contact-header',
      animation: gsap.to(['.background-image-1', '.background-image-2'], {
        scale: 4,
        ease: 'power2.inOut',
      }),
    });

    return () => {
      workExperienceTrigger.kill();
      educationTrigger.kill();
      contactTrigger.kill();
    };
  });

  return (
    <div className="page">
      <Toaster toastOptions={{ className: '!bg-white/20 !text-white backdrop-blur-lg' }} />
      <Navbar />
      <Hero />
      <TransitionSection id="hero-to-work-experience">
        <SectionHeader id="work-experience-header" primary="Work Experience" secondary="My Professional Journey" />
      </TransitionSection>
      <WorkExperience />
      <TransitionSection id="work-experience-to-education">
        <SectionHeader
          id="education-header"
          primary="Education/Certifications"
          secondary="Academic Achievements"
          className="mx-6 w-fit"
        />
      </TransitionSection>
      <Education />
      {/* <Projects /> */}
      <TransitionSection id="education-to-skills" className="h-[50dvh]">
        <SectionHeader
          id="skills-header"
          primary="Technical Skills"
          className="h-full justify-end pb-10"
          secondary="Technologies I've Worked With"
        />
      </TransitionSection>
      <Skills />
      <TransitionSection id="skills-to-contact">
        <SectionHeader id="contact-header" primary="Let's Connect" secondary="Get in Touch" />
      </TransitionSection>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
