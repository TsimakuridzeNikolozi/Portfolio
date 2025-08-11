import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import SectionHeader from './components/reusable/SectionHeader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransitionSection from './components/reusable/TransitionSection';

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
      pinSpacing: false,
    });

    const educationTrigger = ScrollTrigger.create({
      trigger: '#work-experience-to-education',
      start: 'top top',
      end: 'top 25%',
      endTrigger: '#education',
      scrub: true,
      pin: '#education-header',
      pinSpacing: false,
    });

    return () => {
      workExperienceTrigger.kill();
      educationTrigger.kill();
    };
  });

  return (
    <div className="page">
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
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
