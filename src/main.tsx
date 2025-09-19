import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import SuspenseSpinner from './components/reusable/SuspenseSpinner.tsx';
import { ResponsiveProvider } from './providers/ResponsiveProvider.tsx';

const HeroExperience = lazy(() => import('./components/models/hero_models/HeroExperience.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveProvider>
      <div className="background-image" />
      <Suspense fallback={<SuspenseSpinner />}>
        <HeroExperience />
      </Suspense>
      <App />
    </ResponsiveProvider>
  </StrictMode>,
);
