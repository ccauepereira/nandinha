import { lazy, Suspense, useCallback, useState } from 'react';
import { Photo } from './Photo';
import { photos } from '../../data/content/assets';
import { useSceneVisibility } from '../../hooks/useSceneVisibility';
const ThroneCanvas = lazy(() => import('../../three/scenes/ThroneCanvas'));
export function HeroThrone() {
  const { ref, near, active } = useSceneVisibility();
  const [failed, setFailed] = useState(false);
  const onFailure = useCallback(() => setFailed(true), []);
  return (
    <div className="hero-photo hero-throne" ref={ref}>
      <div className="throne-world" aria-hidden="true">
        {near && !failed && (
          <Suspense fallback={null}>
            <ThroneCanvas active={active} onFailure={onFailure} />
          </Suspense>
        )}
      </div>
      <div className="throne-portrait">
        <Photo image={photos.hero} priority />
      </div>
      <span className="photo-label digital">a dona desse universo ♡</span>
      <details className="hero-reference">
        <summary>uma inspiração pequenininha ♡</summary>
        <Photo image={photos.hellokitty} />
        <p>Delicada. E dona do universo inteiro.</p>
      </details>
    </div>
  );
}
