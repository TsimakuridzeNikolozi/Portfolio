import { RefObject, useCallback, useMemo, useRef } from 'react';
import gsap from 'gsap';

interface DragConfig {
  degreesPerPixel: number;
  degreesPerSecond: number;
  throttleMs: number;
}

const DEFAULT_DRAG_CONFIG: DragConfig = {
  degreesPerPixel: 0.3,
  degreesPerSecond: 360 / 40,
  throttleMs: 8,
};

export const useCarouselDrag = (
  wrapperRef: RefObject<HTMLDivElement | null>,
  timelineRef: RefObject<gsap.core.Timeline | null>,
  onDrag: () => void,
  config: Partial<DragConfig> = {},
) => {
  const dragConfig = useMemo(() => ({ ...DEFAULT_DRAG_CONFIG, ...config }), [config]);
  const dragStateRef = useRef({
    isDragging: false,
    lastX: 0,
    lastMoveTime: 0,
    accumulatedDelta: 0,
  });
  const animationFrameRef = useRef<number | null>(null);

  const throttledDragUpdate = useCallback(() => {
    if (!dragStateRef.current.isDragging || !timelineRef.current) return;

    const { accumulatedDelta } = dragStateRef.current;
    if (Math.abs(accumulatedDelta) < 0.1) return; // Skip tiny movements

    const deltaSeconds = (accumulatedDelta * dragConfig.degreesPerPixel) / dragConfig.degreesPerSecond;
    timelineRef.current.totalTime(timelineRef.current.totalTime() + deltaSeconds);

    dragStateRef.current.accumulatedDelta = 0;
    onDrag();
  }, [dragConfig, onDrag, timelineRef]);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const dragState = dragStateRef.current;
      if (!dragState.isDragging || !timelineRef.current) return;

      e.preventDefault();

      const now = performance.now();
      if (now - dragState.lastMoveTime < dragConfig.throttleMs) {
        const dx = e.clientX - dragState.lastX;
        dragState.accumulatedDelta += dx;
        dragState.lastX = e.clientX;
        return;
      }

      const dx = e.clientX - dragState.lastX;
      dragState.lastX = e.clientX;
      dragState.lastMoveTime = now;
      dragState.accumulatedDelta += dx;

      // Cancel previous animation frame and request new one
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(throttledDragUpdate);
    },
    [dragConfig.throttleMs, throttledDragUpdate, timelineRef],
  );

  const endDrag = useCallback(() => {
    const dragState = dragStateRef.current;
    if (!dragState.isDragging) return;

    dragState.isDragging = false;
    dragState.accumulatedDelta = 0;

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.removeProperty('cursor');
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    window.removeEventListener('pointermove', onPointerMove as EventListener);
    window.removeEventListener('pointerup', endDrag as EventListener);
    window.removeEventListener('pointercancel', endDrag as EventListener);
  }, [onPointerMove, wrapperRef]);

  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      if (!timelineRef.current) return;
      e.preventDefault();

      const dragState = dragStateRef.current;
      dragState.isDragging = true;
      dragState.lastX = e.clientX;
      dragState.lastMoveTime = performance.now();
      dragState.accumulatedDelta = 0;

      gsap.killTweensOf(timelineRef.current);
      timelineRef.current.timeScale(0);

      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.cursor = 'grabbing';
      }

      if (wrapper && 'setPointerCapture' in wrapper) {
        wrapper.setPointerCapture(e.pointerId);
      }

      window.addEventListener('pointermove', onPointerMove, { passive: false });
      window.addEventListener('pointerup', endDrag, { passive: false });
      window.addEventListener('pointercancel', endDrag, { passive: false });
    },
    [endDrag, onPointerMove, timelineRef, wrapperRef],
  );

  const setupDragHandlers = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return () => {};

    wrapper.addEventListener('pointerdown', onPointerDown, { passive: false });

    return () => {
      wrapper.removeEventListener('pointerdown', onPointerDown as EventListener);
      window.removeEventListener('pointermove', onPointerMove as EventListener);
      window.removeEventListener('pointerup', endDrag as EventListener);
      window.removeEventListener('pointercancel', endDrag as EventListener);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      dragStateRef.current = {
        isDragging: false,
        lastX: 0,
        lastMoveTime: 0,
        accumulatedDelta: 0,
      };
    };
  }, [wrapperRef, onPointerDown, onPointerMove, endDrag]);

  return { setupDragHandlers };
};
