/**
 * Utility functions for device and viewport inspection.
 */

export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getViewportWidth(): number {
  if (typeof window === 'undefined') return 0;
  return window.innerWidth;
}

export const BREAKPOINTS = {
  mobile: 390,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
} as const;
