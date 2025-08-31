import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

const TransitionSection = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('relative max-h-[100rem] pt-20 pb-6 lg:h-[75dvh] lg:pb-0', className)}>
      {children}
    </div>
  );
};

export default TransitionSection;
