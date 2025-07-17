import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="hero-to-work-experience" className="h-dvh" />
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
