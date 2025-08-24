import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span className={cn('bg-gradient-to-r from-accent to-[#00c9ff] bg-clip-text text-transparent', className)}>
      {children}
    </span>
  );
};

export default GradientText;
