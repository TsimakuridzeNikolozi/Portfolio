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

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    gsap.set('#work-experience-header', {
      x: 50,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-to-work-experience',
        start: 'top top',
        end: 'bottom bottom',
        endTrigger: '#education',
        scrub: true,
        pin: '#work-experience-header',
      },
    });

    tl.to('#work-experience-header', {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <section id="hero-to-work-experience" className="relative h-[50dvh] pt-20">
        <SectionHeader
          className="absolute"
          id="work-experience-header"
          primary="Work Experience"
          secondary="My Professional Journey"
        />
      </section>
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
