import { forwardRef, memo } from 'react';
import { cn } from '../../utils/cn';

const GlassCard = memo(
  forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
    return (
      <div className={cn('glass-card', className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }),
);

export default GlassCard;
