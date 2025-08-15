import { HTMLAttributes, memo, useRef } from 'react';
import { cn } from '../../utils/cn';
import TextType from './TextType';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  primary: string;
  secondary: string;
}

const SectionHeader = memo(({ primary, secondary, className, ...props }: SectionHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: 'power2.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        },
      },
    );
  });

  return (
    <div {...props} ref={ref} className={cn('flex w-full flex-col items-center justify-center gap-2', className)}>
      <TextType
        className="rounded-full bg-white/15 px-3 py-1.5 text-lg backdrop-blur-lg"
        loop={false}
        text={secondary}
        gradientText
        startOnVisible
        showCursor={false}
      />
      <h2 className="text-6xl font-bold">{primary}</h2>
    </div>
  );
});

export default SectionHeader;
