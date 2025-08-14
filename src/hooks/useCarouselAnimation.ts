import { RefObject, useCallback, useRef, useMemo } from 'react';
import gsap from 'gsap';

interface AnimationConfig {
  duration: number;
  perspective: number;
}

const DEFAULT_ANIMATION_CONFIG: AnimationConfig = {
  duration: 40,
  perspective: 1000,
};

export const useCarouselAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
  wrapperRef: RefObject<HTMLDivElement | null>,
  timelineRef: RefObject<gsap.core.Timeline | null>,
  onUpdate: () => void,
  config: Partial<AnimationConfig> = {},
) => {
  const animationConfig = useMemo(() => ({ ...DEFAULT_ANIMATION_CONFIG, ...config }), [config]);
  const hoverTimeoutRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  const debouncedOnEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (isHoveredRef.current) return;
    isHoveredRef.current = true;

    if (!timelineRef.current) return;
    gsap.to(timelineRef.current, {
      timeScale: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [timelineRef]);

  const debouncedOnLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) return;
      isHoveredRef.current = false;

      if (!timelineRef.current) return;
      gsap.to(timelineRef.current, {
        timeScale: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }, 100);
  }, [timelineRef]);

  const setupAnimation = useCallback(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container) return () => {};

    gsap.set(container, {
      transformPerspective: animationConfig.perspective,
      rotationY: 0,
      force3D: true,
    });

    const tl = gsap
      .timeline({
        repeat: -1,
        defaults: { ease: 'none' },
        immediateRender: false,
      })
      .to(container, {
        rotationY: '+=360',
        duration: animationConfig.duration,
        force3D: true,
      });

    timelineRef.current = tl;

    let updateTimeout: number | null = null;
    const throttledUpdate = () => {
      if (updateTimeout) return;
      updateTimeout = setTimeout(() => {
        onUpdate();
        updateTimeout = null;
      }, 16);
    };

    tl.eventCallback('onUpdate', throttledUpdate);

    // Initial update
    onUpdate();

    if (!wrapper) {
      return () => {
        tl.kill();
        if (updateTimeout) clearTimeout(updateTimeout);
      };
    }

    const options = { passive: true };
    wrapper.addEventListener('pointerenter', debouncedOnEnter, options);
    wrapper.addEventListener('pointerleave', debouncedOnLeave, options);

    return () => {
      wrapper.removeEventListener('pointerenter', debouncedOnEnter);
      wrapper.removeEventListener('pointerleave', debouncedOnLeave);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
      tl.kill();
    };
  }, [containerRef, wrapperRef, timelineRef, onUpdate, animationConfig, debouncedOnEnter, debouncedOnLeave]);

  return { setupAnimation };
};
