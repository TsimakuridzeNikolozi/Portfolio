import { RefObject, useRef, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../constants/skills.constants';
import { calculateCardRotation, calculateTransitionFactor } from '../utils/rotation.utils';

interface EffectsConfig {
  frontBrightness: number;
  backBrightness: number;
  transitionZone: number;
}

const DEFAULT_CONFIG: EffectsConfig = {
  frontBrightness: 1,
  backBrightness: 0.5,
  transitionZone: 15,
};

// Pre-calculate constants to avoid repeated calculations
const TOTAL_SKILLS = SKILLS.length;

/**
 * Custom hook for managing carousel visual effects (blur and brightness)
 * Optimized for performance with caching and reduced calculations
 */
export const useCarouselEffects = (
  containerRef: RefObject<HTMLDivElement | null>,
  config: Partial<EffectsConfig> = {},
) => {
  const effectsConfig = useMemo(() => ({ ...DEFAULT_CONFIG, ...config }), [config]);
  const cardsRef = useRef<NodeListOf<Element> | null>(null);
  const lastRotationRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  // Cache DOM elements on first access
  const getCards = useCallback(() => {
    if (!cardsRef.current && containerRef.current) {
      cardsRef.current = containerRef.current.querySelectorAll('.skills-card');
    }
    return cardsRef.current;
  }, [containerRef]);

  // Throttled update using requestAnimationFrame
  const updateEffects = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const cards = getCards();
      if (!cards) return;

      const containerRotation = gsap.getProperty(container, 'rotationY') as number;

      if (Math.abs(containerRotation - lastRotationRef.current) < 2.5) return;
      lastRotationRef.current = containerRotation;

      const { backBrightness, transitionZone, frontBrightness } = effectsConfig;
      const brightnessDiff = frontBrightness - backBrightness;

      cards.forEach((card, index) => {
        const cardRotation = calculateCardRotation(containerRotation, index, TOTAL_SKILLS);
        const transitionFactor = calculateTransitionFactor(cardRotation, transitionZone);

        const brightness = backBrightness + brightnessDiff * (1 - transitionFactor);

        const roundedBrightness = Math.round(brightness * 100) / 100;

        gsap.set(card, {
          filter: `brightness(${roundedBrightness})`,
        });
      });
    });
  }, [containerRef, getCards, effectsConfig]);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    cardsRef.current = null;
  }, []);

  return { updateEffects, cleanup };
};
