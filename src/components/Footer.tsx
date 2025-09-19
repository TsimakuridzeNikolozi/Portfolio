import Socials from './Socials';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useResponsive } from '../hooks/useResponsive';
import { smoothScrollTo } from '../utils/smoothScroll';

const FooterLink = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smoothScrollTo('#hero', {
      duration: 1,
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(buttonRef.current, {
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

    buttonRef.current?.addEventListener('mouseenter', () => tl.play());
    buttonRef.current?.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      tl.kill();
      buttonRef.current?.removeEventListener('mouseenter', () => tl.play());
      buttonRef.current?.removeEventListener('mouseleave', () => tl.reverse());
    };
  });

  return (
    <button
      ref={buttonRef}
      onClick={onButtonClick}
      aria-label="Scroll to top of page"
      className="flex w-fit cursor-pointer items-center gap-x-2 rounded-full border border-accent/40 p-1.5 transition-all duration-300"
    >
      <img
        ref={iconRef}
        src="/images/curved-arrow.svg"
        alt="Scroll to top arrow"
        className="size-5 lg:size-7 3xl:size-10"
      />
    </button>
  );
};

const Footer = () => {
  const { isMobile } = useResponsive();

  return (
    <footer
      id="footer"
      className="padding-x relative grid w-full grid-rows-2 place-items-center py-6 md:grid-cols-3 md:grid-rows-none md:place-items-stretch"
    >
      {!isMobile && <FooterLink />}
      <Socials />
      <p className="text-end text-xs text-white md:text-end md:text-sm lg:text-base 3xl:text-2xl">
        © {new Date().getFullYear()} Nikolozi Tsimakuridze.
      </p>
    </footer>
  );
};

export default Footer;
