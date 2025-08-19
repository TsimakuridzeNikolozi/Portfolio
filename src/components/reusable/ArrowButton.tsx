import { useCallback } from 'react';
import { cn } from '../../utils/cn';

interface ArrowButtonProps {
  text: string;
  className?: string;
  targetId?: string;
  direction?: 'up' | 'down';
  onClick?: () => void;
}

const ArrowButton = ({ text, targetId, className, direction = 'down', onClick }: ArrowButtonProps) => {
  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!targetId) return;
      const target = document.getElementById(targetId);

      if (!target || !targetId) return;

      const top = target.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top, behavior: 'smooth' });
    },
    [targetId],
  );

  return (
    <button
      onClick={onClick ?? onButtonClick}
      className={cn('relative z-20 cursor-pointer', className)}
      aria-label={`${text} button`}
    >
      <div className="arrow-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt={`${direction === 'down' ? 'Down' : 'Up'} arrow`}
            className={cn(direction === 'down' ? '' : 'rotate-180')}
          />
        </div>
      </div>
    </button>
  );
};

export default ArrowButton;
