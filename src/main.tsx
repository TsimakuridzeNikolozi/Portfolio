import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ResponsiveProvider } from './providers/ResponsiveProvider.tsx';
import HeroExperience from './components/models/hero_models/HeroExperience.tsx';
import { hidePreloader } from './utils/preloader.utils.ts';

window.addEventListener('app:ready', hidePreloader, { once: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveProvider>
      <div className="background-image" />
      <HeroExperience />
      <App />
    </ResponsiveProvider>
  </StrictMode>,
);
