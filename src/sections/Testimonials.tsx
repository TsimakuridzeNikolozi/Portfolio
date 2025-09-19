import { useGSAP } from '@gsap/react';
import TestimonialEntry from '../components/testimonials/TestimonialEntry';
import { TESTIMONIALS } from '../constants/testimonials.constants';
import gsap from 'gsap';
import { useResponsive } from '../hooks/useResponsive';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '../utils/cn';
import { useGlowingCard } from '../hooks/useGlowingCard';

const Testimonials = () => {
  useGlowingCard();
  const { isMobile } = useResponsive();
  const [showFull, setShowFull] = useState(!isMobile);

  useEffect(() => {
    setShowFull(!isMobile);
  }, [isMobile]);

  const handleShowMore = useCallback(() => {
    setShowFull((prev) => !prev);
  }, []);

  const testimonials = useMemo(() => {
    if (showFull) return TESTIMONIALS;
    return TESTIMONIALS.slice(0, 3);
  }, [showFull]);

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
    <section id="testimonials" className="padding-x flex flex-col items-center justify-center gap-y-4">
      <div id="glowing-cards" className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialEntry key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>

      {isMobile && (
        <div className="flex items-center justify-center">
          <button className="flex cursor-pointer items-center gap-x-1 p-1 text-white" onClick={handleShowMore}>
            {showFull ? 'Show Less' : 'Show More'}
            <img
              src={'/images/chevron-down.svg'}
              alt="arrow"
              className={cn('w-4 transition-transform duration-300', showFull && 'rotate-180')}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
