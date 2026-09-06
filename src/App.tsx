import { useRef } from 'react';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useStoryMotion } from './hooks/useStoryMotion';
import { Opening } from './sections/Opening';
import { Affection } from './sections/Affection';
import { HeartToHeart } from './sections/HeartToHeart';
import { Finale } from './sections/Finale';
import './styles/story.css';

export default function App() {
  const reduced = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  useLenisScroll({ enabled: !reduced });
  useStoryMotion(root);
  return (
    <>
      <a className="skip-link button" href="#hero">
        Pular introdução
      </a>
      <main ref={root}>
        <Opening />
        <Affection />
        <HeartToHeart />
        <Finale />
      </main>
    </>
  );
}
