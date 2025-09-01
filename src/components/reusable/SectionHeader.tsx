import { HTMLAttributes, memo } from 'react';
import { cn } from '../../utils/cn';
import TextType from './TextType';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  primary: string;
  secondary: string;
}

const SectionHeader = memo(({ primary, secondary, className, ...props }: SectionHeaderProps) => {
  return (
    <div
      {...props}
      className={cn(
        'flex w-full flex-col items-center justify-center gap-y-0.5 will-change-transform md:gap-y-2',
        className,
      )}
    >
      <TextType
        className="rounded-full bg-white/15 px-2 py-1 text-sm backdrop-blur-lg md:px-3 md:py-1.5 md:text-base xl:text-xl 3xl:text-2xl"
        loop={false}
        text={secondary}
        gradientText
        startOnVisible
        showCursor={false}
      />
      <h2 className="text-[1.75rem] font-bold md:text-4xl xl:text-5xl 2xl:text-7xl 3xl:text-[7rem]">{primary}</h2>
    </div>
  );
});

export default SectionHeader;
