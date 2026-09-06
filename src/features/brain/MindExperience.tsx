import { lazy, Suspense, useCallback, useState } from 'react';
import { photos, brainCaptions } from '../../data/content/assets';
import { mindStats } from '../../data/content/story';
import { useSceneVisibility } from '../../hooks/useSceneVisibility';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';
import { Photo } from '../../components/story/Photo';
const MindCanvas = lazy(() => import('../../three/scenes/MindCanvas'));
export function MindExperience() {
  const { ref, near, active } = useSceneVisibility();
  const { tier } = useDevicePerformance();
  const [selected, setSelected] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const images =
    tier === 'low'
      ? [photos.brain[0], photos.pretinha]
      : tier === 'medium'
        ? [photos.brain[0], photos.brain[2], photos.pretinha]
        : photos.brain;
  const onFailure = useCallback(() => setFailed(true), []);
  return (
    <section
      id="mente"
      className="scene mind mind-cosmos"
      aria-labelledby="mind-title"
      tabIndex={-1}
      data-photo-count={images.length}
      data-tier={tier}
    >
      <p className="eyebrow">bem-vinda ao interior</p>
      <h2 id="mind-title">
        É. Só dá <em>você.</em>
      </h2>
      <div ref={ref} className="mind-space" data-webgl-slot="caue-mind">
        {near && !failed && (
          <Suspense fallback={null}>
            <MindCanvas
              images={images}
              selected={selected}
              onSelect={setSelected}
              active={active}
              onFailure={onFailure}
            />
          </Suspense>
        )}
        {failed && (
          <div className="mind-fallback">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelected(image.id)}
                className="polaroid"
              >
                <Photo image={image} />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mind-explore" aria-label="Explorar pensamentos">
        {images.map((image, index) => (
          <button
            key={image.id}
            className="mind-selector"
            aria-pressed={selected === image.id}
            onFocus={() => setSelected(image.id)}
            onClick={() => setSelected(image.id)}
          >
            {image.id === 'pretinha'
              ? 'Pretinha ♡'
              : `Fernanda ${String(index + 1).padStart(2, '0')}`}
          </button>
        ))}
        {selected && (
          <button className="mind-selector" onClick={() => setSelected(null)}>
            soltar foto ×
          </button>
        )}
      </div>
      <p className="mind-caption" aria-live="polite">
        {selected
          ? brainCaptions[selected]
          : 'toque em um pensamento para chegar mais perto'}
      </p>
      <p className="mind-main digital">
        Fernanda <strong>97.8%</strong>
      </p>
      <dl className="mind-stats digital">
        {mindStats.map(([name, value]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="system-message digital">
        ERROR: nandinha.exe está consumindo memória demais
      </p>
      <a className="quiet mind-exit" href="#sem-ela">
        e quando você não está? ↓
      </a>
    </section>
  );
}
