import { useEffect } from 'react';
import { debounce } from '../utils/debounce';

export const useResize = () => {
  useEffect(() => {
    if (import.meta.env.DEV) return;

    const handleResize = () => {
      window.location.reload();
    };

    const debouncedHandleResize = debounce(handleResize);

    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);
};
