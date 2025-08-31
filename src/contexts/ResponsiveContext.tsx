import { createContext } from 'react';

interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isXLDesktop: boolean;
  is2XLDesktop: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isXLDesktop: false,
  is2XLDesktop: false,
});
