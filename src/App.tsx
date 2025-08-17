import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
// import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import SectionHeader from './components/reusable/SectionHeader';
import TransitionSection from './components/reusable/TransitionSection';
import { Toaster } from 'react-hot-toast';
import { useHeaderAnimation } from './hooks/useHeaderAnimation';

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
      <TransitionSection id="education-to-skills">
        <SectionHeader id="skills-header" primary="Technical Skills" secondary="Technologies I've Worked With" />
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
