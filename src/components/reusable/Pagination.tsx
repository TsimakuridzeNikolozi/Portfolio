import { useCallback } from 'react';
import { cn } from '../../utils/cn';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({ totalPages, currentPage, onPageChange, className }: PaginationProps) => {
  const onPreviousClick = useCallback(() => {
    if (currentPage <= 1) return;
    onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  const onNextClick = useCallback(() => {
    if (currentPage >= totalPages) return;
    onPageChange(currentPage + 1);
  }, [currentPage, onPageChange, totalPages]);

  return (
    <div
      className={cn(
        'inline-flex w-max items-center gap-1 divide-x divide-white/20 rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur',
        className,
      )}
    >
      <button
        onClick={onPreviousClick}
        disabled={currentPage === 1}
        className={cn(
          'tab-button rounded-r-none px-6',
          currentPage <= 1
            ? 'cursor-not-allowed text-white/30 hover:text-white/30'
            : 'hover:bg-accent hover:text-black',
        )}
      >
        {'<'}
      </button>
      <span className="tab-button pointer-events-none min-w-16 rounded-none px-2 text-center">
        <span className="text-accent">{currentPage}</span> / <span className="text-white/70">{totalPages}</span>
      </span>
      <button
        onClick={onNextClick}
        disabled={currentPage === totalPages}
        className={cn(
          'tab-button rounded-l-none px-6',
          currentPage >= totalPages
            ? 'cursor-not-allowed text-white/30 hover:text-white/30'
            : 'hover:bg-accent hover:text-black',
        )}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
