import { memo, useRef, useState } from 'react';
import { NavigationLinkType } from '../types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'motion/react';

interface NavigationLinkProps {
  link: NavigationLinkType;
}

const SCROLL_OFFSET = 200;

const NavigationLink = memo(({ link }: NavigationLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const [hovering, setHovering] = useState(false);

  useGSAP(() => {
    gsap.set(iconRef.current, { opacity: 0, scale: 0 });

    linkRef.current?.addEventListener('mouseenter', () => {
      gsap.to(iconRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    linkRef.current?.addEventListener('mouseleave', () => {
      gsap.to(iconRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    return () => {
      linkRef.current?.removeEventListener('mouseenter', () => {});
      linkRef.current?.removeEventListener('mouseleave', () => {});
    };
  });

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = link.href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      ref={linkRef}
      className="relative flex items-center gap-x-2 px-4 py-2 text-white transition-all duration-300 hover:text-accent 3xl:gap-x-3 3xl:px-6 3xl:py-3"
      href={link.href}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full bg-accent/20 backdrop-blur-lg"
        />
      )}
      <img ref={iconRef} src={link.icon} alt={link.label} className="w-4 xl:w-5 3xl:w-6" />
      <span className="z-10 text-sm xl:text-base 3xl:text-2xl">{link.label}</span>
    </a>
  );
});

export default NavigationLink;
