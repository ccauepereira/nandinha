import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { isReducedMotionPreferred } from './animeEngine';

type AnimeCallback = (
  instance: typeof anime,
) => anime.AnimeInstance | anime.AnimeTimelineInstance | void;

/**
 * React hook to safely orchestrate Anime.js animations with lifecycle cleanup.
 */
export function useAnime(
  animationCallback: AnimeCallback,
  deps: React.DependencyList = [],
) {
  const animationRef = useRef<anime.AnimeInstance | anime.AnimeTimelineInstance | null>(
    null,
  );

  useEffect(() => {
    if (isReducedMotionPreferred()) {
      return;
    }

    const result = animationCallback(anime);
    if (result && typeof result.pause === 'function') {
      animationRef.current = result;
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
        animationRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return animationRef;
}
