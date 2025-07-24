interface TransitionSectionProps {
  children: React.ReactNode;
}

const TransitionSection = ({ children }: TransitionSectionProps) => {
  return <section className="relative h-dvh">{children}</section>;
};

export default TransitionSection;
