import { createSafeTimeline, stopAnimation } from '../core/animeEngine';
export function animateBrainEntry(travel: { t: number }, complete: () => void) {
  const timeline = createSafeTimeline().add({
    targets: travel,
    t: [0, 1],
    duration: 2100,
    easing: 'easeInOutCubic',
    complete,
  });
  // Navigation still completes if RAF is suspended or WebGL fails during entry.
  const timeout = window.setTimeout(complete, 2600);
  return () => {
    clearTimeout(timeout);
    timeline.pause();
    stopAnimation(travel);
    travel.t = 0;
  };
}
