/**
 * Utility functions for 3D rotation calculations
 * Optimized for performance with reduced calculations and caching
 */

// Pre-calculate constants to avoid repeated calculations
const FULL_CIRCLE = 360;
const FRONT_END = 120;
const FRONT_START = 240;

// Cache for normalized rotations to avoid repeated modulo operations
const normalizationCache = new Map<number, number>();
const CACHE_SIZE_LIMIT = 1000; // Prevent memory leaks

/**
 * Normalizes a rotation angle to 0-360 range with caching
 */
export const normalizeRotation = (rotation: number): number => {
  // Round to 1 decimal place for cache efficiency
  const rounded = Math.round(rotation * 10) / 10;

  if (normalizationCache.has(rounded)) {
    return normalizationCache.get(rounded)!;
  }

  const normalized = rounded % FULL_CIRCLE;
  const result = normalized < 0 ? normalized + FULL_CIRCLE : normalized;

  // Manage cache size to prevent memory leaks
  if (normalizationCache.size >= CACHE_SIZE_LIMIT) {
    const firstKey = normalizationCache.keys().next().value;
    if (firstKey !== undefined) {
      normalizationCache.delete(firstKey);
    }
  }

  normalizationCache.set(rounded, result);
  return result;
};

/**
 * Calculates the absolute rotation of a card in the carousel
 * Optimized to reduce modulo operations
 */
export const calculateCardRotation = (containerRotation: number, cardIndex: number, totalCards: number): number => {
  // Pre-calculate card base rotation (this could be cached per carousel)
  const cardBaseRotation = (cardIndex * FULL_CIRCLE) / totalCards;
  const totalRotation = containerRotation + cardBaseRotation;

  // Use faster normalization for values that don't need caching
  if (totalRotation >= 0 && totalRotation < FULL_CIRCLE) {
    return totalRotation;
  }

  return normalizeRotation(totalRotation);
};

/**
 * Determines if a card is front-facing based on its rotation
 * Front-facing range: 315° to 45° (90° zone centered on 0°)
 * Optimized with early returns and reduced function calls
 */
export const isFrontFacing = (rotation: number): boolean => {
  // Skip normalization if rotation is already in a reasonable range
  if (rotation >= 0 && rotation < FULL_CIRCLE) {
    return rotation <= FRONT_END || rotation >= FRONT_START;
  }

  const normalized = normalizeRotation(rotation);
  return normalized <= FRONT_END || normalized >= FRONT_START;
};

/**
 * Calculates transition factor for smooth effects
 * Returns 0 for front-facing, 1 for fully back-facing, and interpolated values in transition zones
 * Optimized with pre-calculated values and reduced branching
 */
export const calculateTransitionFactor = (rotation: number, transitionZone: number = 15): number => {
  const normalized = normalizeRotation(rotation);

  // Pre-calculate transition boundaries
  const rightTransitionEnd = FRONT_END + transitionZone;
  const leftTransitionStart = FRONT_START - transitionZone;

  // Early return for core front-facing zone (most common case)
  if (normalized <= FRONT_END || normalized >= FRONT_START) {
    return 0;
  }

  // Pre-calculate inverse for division optimization
  const invTransitionZone = 1 / transitionZone;

  // Right transition zone (45° to 45°+zone)
  if (normalized <= rightTransitionEnd) {
    return (normalized - FRONT_END) * invTransitionZone;
  }

  // Left transition zone ((315°-zone) to 315°)
  if (normalized >= leftTransitionStart) {
    return (FRONT_START - normalized) * invTransitionZone;
  }

  // Fully back-facing (constant blur)
  return 1;
};

/**
 * Clears the normalization cache (useful for cleanup)
 */
export const clearRotationCache = (): void => {
  normalizationCache.clear();
};
