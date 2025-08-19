import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import SuspenseSpinner from './components/reusable/SuspenseSpinner.tsx';

const HeroExperience = lazy(() => import('./components/models/hero_models/HeroExperience.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="background-image-1" />
    <div className="background-image-2" />
    <Suspense fallback={<SuspenseSpinner />}>
      <HeroExperience />
    </Suspense>
    <App />
  </StrictMode>,
);
