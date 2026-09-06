import type { RefObject } from 'react';
import { CanvasContainer } from '../canvas/CanvasContainer';
import { ToyBrain } from './ToyBrain';
export default function BrainCanvas({
  active,
  engaged,
  travel,
  onReady,
  onFailure,
}: {
  active: boolean;
  engaged: boolean;
  travel: RefObject<{ t: number }>;
  onReady: () => void;
  onFailure: () => void;
}) {
  return (
    <CanvasContainer
      active={active}
      onReady={onReady}
      onFailure={onFailure}
      fallback={<p className="digital">Entre para ver os pensamentos ♡</p>}
    >
      <ToyBrain engaged={engaged} travel={travel} />
    </CanvasContainer>
  );
}
