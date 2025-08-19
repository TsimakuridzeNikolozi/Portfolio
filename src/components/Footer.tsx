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

    return () => {
      tl.kill();
      linkRef.current?.removeEventListener('mouseenter', () => tl.play());
      linkRef.current?.removeEventListener('mouseleave', () => tl.reverse());
    };
  });

  return (
    <a
      ref={linkRef}
      href="#hero"
      aria-label="Scroll to top of page"
      className="flex w-fit items-center gap-x-2 rounded-full border border-accent/20 p-1.5 transition-all duration-300 hover:backdrop-blur-lg"
    >
      <img ref={iconRef} src="/images/curved-arrow.svg" alt="Scroll to top arrow" className="size-7" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="padding-x relative grid w-full grid-cols-3 py-6">
      <FooterLink />
      <Socials />
      <p className="text-end text-white md:text-end">© {new Date().getFullYear()} Nikolozi Tsimakuridze.</p>
    </footer>
  );
};

export default Footer;
