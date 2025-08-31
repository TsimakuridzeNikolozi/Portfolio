import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { cn } from '../../utils/cn';

interface TabsProps<T extends ReactNode> {
  tabs: T[];
  activeTab: T;
  setActiveTab: Dispatch<SetStateAction<T>>;
  className?: string;
}

const Tabs = <T extends ReactNode>({ tabs, activeTab, setActiveTab, className }: TabsProps<T>) => {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex w-max items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur',
        className,
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab?.toString()}
          role="tab"
          onClick={() => setActiveTab(tab)}
          className={cn('tab-button', activeTab === tab ? 'cursor-default bg-accent text-black' : '')}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
