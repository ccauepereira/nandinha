import { useEffect, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { observeReveals } from '../animations/timelines/frontBase';
export function useStoryMotion(ref: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!ref.current || reduced) return;
    return observeReveals(ref.current);
  }, [ref, reduced]);
}
