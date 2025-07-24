import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => {
  return <span className="bg-gradient-to-r from-accent to-[#00c9ff] bg-clip-text text-transparent">{children}</span>;
};

export default GradientText;
