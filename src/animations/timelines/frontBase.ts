import { createSafeTimeline, stopAnimation } from '../core/animeEngine';

export function observeReveals(root: HTMLElement) {
  const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
  const timelines: ReturnType<typeof createSafeTimeline>[] = [];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        timelines.push(
          createSafeTimeline().add({
            targets: entry.target,
            opacity: [0.5, 1],
            translateY: [16, 0],
            duration: 700,
          }),
        );
      });
    },
    { threshold: 0.12 },
  );
  targets.forEach((target) => observer.observe(target));
  return () => {
    observer.disconnect();
    timelines.forEach((timeline) => timeline.pause());
    stopAnimation(targets);
    targets.forEach((target) => {
      target.style.removeProperty('opacity');
      target.style.removeProperty('transform');
    });
  };
}
