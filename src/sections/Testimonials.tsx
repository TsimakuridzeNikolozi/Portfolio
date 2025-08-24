import { useGSAP } from '@gsap/react';
import TestimonialEntry from '../components/testimonials/TestimonialEntry';
import { TESTIMONIALS } from '../constants/testimonials.constants';
import gsap from 'gsap';

const Testimonials = () => {
  useGSAP(() => {
    gsap.utils.toArray('.glowing-card').forEach((card) => {
      gsap.from(card as HTMLElement, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <section id="testimonials" className="flex h-[80dvh] items-center justify-center">
      <div id="glowing-cards" className="testimonials-grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialEntry key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
