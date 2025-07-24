import { forwardRef, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({ children, className }, ref) => {
  return (
    <div className={cn('glass-card', className)} ref={ref}>
      {children}
    </div>
  );
});

export default GlassCard;
