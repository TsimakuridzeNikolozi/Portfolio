import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import SectionHeader from './components/reusable/SectionHeader';
import TransitionSection from './components/reusable/TransitionSection';
import { Toaster } from 'react-hot-toast';
import { useHeaderAnimation } from './hooks/useHeaderAnimation';
import SuspenseSpinner from './components/reusable/SuspenseSpinner';

const Contact = lazy(() => import('./sections/Contact'));
const Education = lazy(() => import('./sections/Education'));
const Skills = lazy(() => import('./sections/Skills'));
const WorkExperience = lazy(() => import('./sections/WorkExperience'));

const App = () => {
  useHeaderAnimation();

  return (
    <div className="page">
      <Toaster toastOptions={{ className: '!bg-white/20 !text-white backdrop-blur-lg' }} />
      <Navbar />
      <Hero />
      <TransitionSection id="hero-to-work-experience">
        <SectionHeader id="work-experience-header" primary="Work Experience" secondary="My Professional Journey" />
      </TransitionSection>
      <Suspense fallback={<SuspenseSpinner />}>
        <WorkExperience />
      </Suspense>
      <TransitionSection id="work-experience-to-education">
        <SectionHeader
          id="education-header"
          primary="Education/Certifications"
          secondary="Academic Achievements"
          className="mx-6 w-fit"
        />
      </TransitionSection>
      <Suspense fallback={<SuspenseSpinner />}>
        <Education />
      </Suspense>
      <TransitionSection id="education-to-skills">
        <SectionHeader id="skills-header" primary="Technical Skills" secondary="Technologies I've Worked With" />
      </TransitionSection>
      <Suspense fallback={<SuspenseSpinner />}>
        <Skills />
      </Suspense>
      <TransitionSection id="skills-to-contact">
        <SectionHeader id="contact-header" primary="Let's Connect" secondary="Get in Touch" />
      </TransitionSection>
      <Suspense fallback={<SuspenseSpinner />}>
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
