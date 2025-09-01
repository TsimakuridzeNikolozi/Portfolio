import { ReactNode } from 'react';
import { ResponsiveContext } from '../contexts/ResponsiveContext';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveProviderProps {
  children: ReactNode;
}

export const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isXLDesktop = useMediaQuery({ query: '(min-width: 1280px) and (max-width: 1535px)' });
  const is2XLDesktop = useMediaQuery({ query: '(min-width: 1536px) and (max-width: 1919px)' });
  const is3XLDesktop = useMediaQuery({ query: '(min-width: 2400px)' });

  const value = {
    isMobile,
    isTablet,
    isDesktop,
    isXLDesktop,
    is2XLDesktop,
    is3XLDesktop,
  };

  return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
};
