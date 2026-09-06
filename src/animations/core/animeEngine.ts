import anime from 'animejs';

/**
 * Checks if reduced motion is active at runtime.
 */
export function isReducedMotionPreferred(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Factory for creating Anime.js timelines with built-in accessibility safeguards.
 */
export function createSafeTimeline(options: anime.AnimeParams = {}) {
  if (isReducedMotionPreferred()) {
    return anime.timeline({
      ...options,
      duration: 0,
      delay: 0,
    });
  }

  return anime.timeline({
    easing: 'easeOutCubic',
    ...options,
  });
}

/**
 * Helper to safely kill/pause an Anime.js instance or list of targets.
 */
export function stopAnimation(targets: anime.AnimeAnimParams['targets']) {
  if (!targets) return;
  anime.remove(targets);
}
