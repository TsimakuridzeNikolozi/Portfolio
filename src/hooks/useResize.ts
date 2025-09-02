import { useEffect, useRef } from 'react';
import { debounce } from '../utils/debounce';

export const useResize = () => {
  const previousWidth = useRef(window.innerWidth);

  useEffect(() => {
    if (import.meta.env.DEV) return;

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth !== previousWidth.current) {
        previousWidth.current = currentWidth;
        window.location.reload();
      }
    };

    const debouncedHandleResize = debounce(handleResize);

    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);
};
