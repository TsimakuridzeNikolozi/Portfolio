import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import SectionHeader from './components/reusable/SectionHeader';
import TransitionSection from './components/reusable/TransitionSection';
import { Toaster } from 'react-hot-toast';
import { useHeaderAnimation } from './hooks/useHeaderAnimation';
import Testimonials from './sections/Testimonials';
import { useResize } from './hooks/useResize';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';

const App = () => {
  useHeaderAnimation();
  useResize();

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
          className="padding-x lg:w-fit"
        />
      </TransitionSection>
      <Education />
      <TransitionSection id="education-to-skills">
        <SectionHeader id="skills-header" primary="Technical Skills" secondary="Technologies I've Worked With" />
      </TransitionSection>
      <Skills />
      <TransitionSection id="skills-to-testimonials">
        <SectionHeader id="testimonials-header" primary="Testimonials" secondary="What People Say About Me" />
      </TransitionSection>
      <Testimonials />
      <TransitionSection id="testimonials-to-contact">
        <SectionHeader id="contact-header" primary="Let's Connect" secondary="Get in Touch" />
      </TransitionSection>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
