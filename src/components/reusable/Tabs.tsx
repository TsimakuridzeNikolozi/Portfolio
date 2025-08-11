import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { cn } from '../../utils/cn';

interface TabsProps<T extends ReactNode> {
  tabs: T[];
  activeTab: T;
  setActiveTab: Dispatch<SetStateAction<T>>;
}

const Tabs = <T extends ReactNode>({ tabs, activeTab, setActiveTab }: TabsProps<T>) => {
  return (
    <div
      role="tablist"
      className="inline-flex w-max items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur"
    >
      {tabs.map((tab) => (
        <button
          key={tab?.toString()}
          onClick={() => setActiveTab(tab)}
          className={cn(
            'rounded-full px-8 py-3 text-sm transition-all duration-300 md:text-base',
            activeTab === tab ? 'bg-accent text-black' : 'cursor-pointer text-white/70 hover:text-white',
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
