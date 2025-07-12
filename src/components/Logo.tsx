import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Logo = () => {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const letters = lettersRef.current;

    gsap.set(letters, {
      transformOrigin: 'center center',
      force3D: true,
    });

    const handleMouseEnter = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(letters, {
        scale: 0.6,
        rotation: 360,
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.1,
      })
        .to(
          logo,
          {
            borderRadius: '50%',
            scale: 1.2,
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)',
            duration: 0.6,
            ease: 'power2.inOut',
          },
          '-=0.4',
        )
        .to(logo, {
          rotation: 360,
          duration: 0.4,
          ease: 'power2.inOut',
        })
        .to(letters, {
          scale: 1.1,
          rotation: 720,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.05,
        });
    };

    const handleMouseLeave = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(logo, {
        borderRadius: '0.375rem',
        scale: 1,
        rotation: 0,
        boxShadow: 'none',
        duration: 0.8,
        ease: 'elastic.out(1, 0.75)',
      }).to(
        letters,
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.75)',
          stagger: 0.05,
        },
        '-=0.6',
      );
    };

    logo.addEventListener('mouseenter', handleMouseEnter);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      logo.removeEventListener('mouseenter', handleMouseEnter);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={logoRef}
      href="#hero"
      className="logo rounded-md border border-accent bg-black p-2 font-serif text-3xl font-light drop-shadow-lg drop-shadow-accent/50 transition-all duration-300 hover:drop-shadow-accent"
    >
      <span
        ref={(el) => {
          lettersRef.current[0] = el;
        }}
        className="inline-block"
      >
        N
      </span>
      <span
        ref={(el) => {
          lettersRef.current[1] = el;
        }}
        className="inline-block"
      >
        T
      </span>
    </a>
  );
};

export default Logo;
