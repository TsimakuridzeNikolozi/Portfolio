import Socials from './Socials';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FooterLink = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(linkRef.current, {
      scale: 1.1,
      borderColor: 'var(--color-accent)',
      backgroundColor: 'rgba(44, 251, 151, 0.2)',
      duration: 0.3,
      ease: 'power2.out',
    }).to(
      iconRef.current,
      {
        rotation: 360,
        duration: 0.5,
        ease: 'power2.out',
      },
      0,
    );

    linkRef.current?.addEventListener('mouseenter', () => tl.play());
    linkRef.current?.addEventListener('mouseleave', () => tl.reverse());
  });

  return (
    <a
      ref={linkRef}
      href="#hero"
      className="flex items-center gap-x-2 rounded-full border border-accent/20 p-1.5 transition-all duration-300"
    >
      <img ref={iconRef} src="/images/curved-arrow.svg" alt="logo" className="size-7" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="padding-x flex w-full items-center justify-between py-6">
      <FooterLink />
      <Socials />
      <p className="text-center text-white md:text-end">© {new Date().getFullYear()} Nikolozi Tsimakuridze.</p>
    </footer>
  );
};

export default Footer;
