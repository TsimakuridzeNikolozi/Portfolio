import { HTMLAttributes } from 'react';
import GradientText from './GradientText';
import { cn } from '../../utils/cn';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  primary: string;
  secondary: string;
}

const SectionHeader = ({ primary, secondary, className, ...props }: SectionHeaderProps) => {
  return (
    <div {...props} className={cn('flex w-full flex-col items-center justify-center gap-2', className)}>
      <p className="rounded-full bg-white/15 px-3 py-1.5 text-lg backdrop-blur-lg">
        <GradientText>{secondary}</GradientText>
      </p>
      <h2 className="text-6xl font-bold">{primary}</h2>
    </div>
  );
};

export default SectionHeader;
