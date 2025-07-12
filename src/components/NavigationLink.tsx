import { useRef } from 'react';
import { NavigationLinkType } from '../types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface NavigationLinkProps {
  link: NavigationLinkType;
}

const NavigationLink = ({ link }: NavigationLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

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
  });

  return (
    <a
      ref={linkRef}
      className="flex items-center gap-x-2 rounded-full px-3 py-2 text-white-50 transition-colors duration-300 hover:bg-gold-100/20 hover:text-gold-100"
      href={link.href}
    >
      <img ref={iconRef} src={link.icon} alt={link.label} className="size-5" />
      {link.label}
    </a>
  );
};

export default NavigationLink;
