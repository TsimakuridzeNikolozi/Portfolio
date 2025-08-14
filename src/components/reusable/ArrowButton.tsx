import { useCallback } from 'react';
import { cn } from '../../utils/cn';

interface ArrowButtonProps {
  text: string;
  id: string;
  className?: string;
  direction?: 'up' | 'down';
}

const ArrowButton = ({ text, id, className, direction = 'down' }: ArrowButtonProps) => {
  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(id);

      if (!target || !id) return;

      const top = target.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top, behavior: 'smooth' });
    },
    [id],
  );

  return (
    <a onClick={onButtonClick} className={cn('relative z-20 cursor-pointer', className)}>
      <div className="arrow-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className={cn(direction === 'down' ? '' : 'rotate-180')} />
        </div>
      </div>
    </a>
  );
};

export default ArrowButton;
