import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface SmoothScrollOptions {
  offset?: number | ((targetElement: Element) => number);
  duration?: number;
  ease?: string;
  focus?: boolean;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getDefaultOffset = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1280;
  if (width >= 2400) return 320;
  if (width >= 1280) return 200;
  if (width >= 1024) return 150;
  return 150;
};

const resolveTarget = (target: string | Element | null): Element | null => {
  if (!target) return null;
  if (typeof target === 'string') {
    const id = target.startsWith('#') ? target.slice(1) : target;
    return document.getElementById(id);
  }
  return target;
};

export const smoothScrollTo = (
  target: string | Element,
  options: SmoothScrollOptions = {
    duration: 1,
    ease: 'power2.inOut',
    focus: true,
  },
) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const targetElement = resolveTarget(target);
  if (!targetElement) return;

  const { duration, ease, focus } = options;

  const offsetValue = getDefaultOffset();

  if (prefersReducedMotion()) {
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset - offsetValue;
    window.scrollTo({ top: y, left: 0, behavior: 'auto' });
  } else {
    gsap.to(window, {
      duration,
      ease,
      scrollTo: { y: targetElement, offsetY: offsetValue, autoKill: true },
    });
  }

  if (focus) {
    const previousTabIndex = (targetElement as HTMLElement).getAttribute('tabindex');
    (targetElement as HTMLElement).setAttribute('tabindex', '-1');
    (targetElement as HTMLElement).focus({ preventScroll: true });

    if (previousTabIndex === null) {
      (targetElement as HTMLElement).removeAttribute('tabindex');
    } else {
      (targetElement as HTMLElement).setAttribute('tabindex', previousTabIndex);
    }
  }
};

export default smoothScrollTo;
