import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import HeroExperience from './components/models/hero_models/HeroExperience.tsx';
import DotGrid from './components/DotGrid.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DotGrid />
    <HeroExperience />
    <App />
  </StrictMode>,
);
