import { useEffect } from 'react';

export const useGlowingCard = () => {
  useEffect(() => {
    const cards = document.getElementById('glowing-cards');
    if (!cards) return;

    const handleMouseMove = (e: MouseEvent) => {
      for (const card of document.getElementsByClassName('glowing-card')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    cards.addEventListener('mousemove', handleMouseMove);

    return () => {
      cards.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};
