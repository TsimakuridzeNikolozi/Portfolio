import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import HeroExperience from './components/models/hero_models/HeroExperience.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="background-image-1" />
    <div className="background-image-2" />
    <HeroExperience />
    <App />
  </StrictMode>,
);
