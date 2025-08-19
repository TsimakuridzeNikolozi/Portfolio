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
      className={cn('flex w-full flex-col items-center justify-center gap-2 will-change-transform', className)}
    >
      <TextType
        className="rounded-full bg-white/15 px-3 py-1.5 text-xl backdrop-blur-lg"
        loop={false}
        text={secondary}
        gradientText
        startOnVisible
        showCursor={false}
      />
      <h2 className="text-7xl font-bold">{primary}</h2>
    </div>
  );
});

export default SectionHeader;
