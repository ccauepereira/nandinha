/**
 * Animation Timelines Registry.
 *
 * Dedicated domain files (intro.ts, hero.ts, brain.ts, memories.ts, finale.ts)
 * will be authored during subsequent feature sprints and exported from here.
 */

export interface TimelineRegistryItem {
  id: string;
  name: string;
  isReady: boolean;
}

export const TIMELINE_REGISTRY: readonly TimelineRegistryItem[] = [
  { id: 'intro', name: 'Intro Sequence', isReady: false },
  { id: 'hero', name: 'Hero Reveal', isReady: false },
  { id: 'brain', name: 'Caue Brain Exploration', isReady: false },
  { id: 'memories', name: 'Memories Carousel', isReady: false },
  { id: 'finale', name: 'Finale & Proposal', isReady: false },
];
