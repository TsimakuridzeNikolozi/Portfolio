import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

const TransitionSection = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('relative h-[100dvh] pt-20', className)}>
      {children}
    </div>
  );
};

export default TransitionSection;
