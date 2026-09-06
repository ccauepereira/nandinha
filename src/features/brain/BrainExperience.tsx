import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useSceneVisibility } from '../../hooks/useSceneVisibility';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';
import { animateBrainEntry } from '../../animations/timelines/brainEntry';
const BrainCanvas = lazy(() => import('../../three/scenes/BrainCanvas'));
export function BrainExperience() {
  const { ref, near, active } = useSceneVisibility();
  const reduced = useReducedMotion();
  const { tier } = useDevicePerformance();
  const [engaged, setEngaged] = useState(false);
  const [entering, setEntering] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const travel = useRef({ t: 0 });
  const finish = useCallback(() => {
    setEntering(false);
    const destination = document.getElementById('mente');
    destination?.scrollIntoView({ behavior: 'instant', block: 'start' });
    destination?.focus({ preventScroll: true });
  }, []);
  const onFailure = useCallback(() => {
    setFailed(true);
  }, []);
  const onReady = useCallback(() => setReady(true), []);
  useEffect(() => {
    if (!entering) return;
    if (reduced || failed) {
      finish();
      return;
    }
    return animateBrainEntry(travel.current, finish);
  }, [entering, reduced, failed, finish]);
  return (
    <section
      id="brain"
      className="scene brain"
      aria-labelledby="brain-title"
      data-entry={entering ? 'travelling' : 'idle'}
    >
      <div className="brain-copy">
        <p className="eyebrow">acesso aos pensamentos</p>
        <h2 id="brain-title">O que passa na cabeça do Cauê?</h2>
        <button
          className="button"
          onFocus={() => setEngaged(true)}
          onBlur={() => setEngaged(false)}
          onPointerEnter={() => setEngaged(true)}
          onPointerLeave={() => setEngaged(false)}
          onPointerDown={() => setEngaged(true)}
          onClick={() => {
            if (!ready || failed || reduced || tier === 'low') finish();
            else setEntering(true);
          }}
        >
          entrar na mente ♡
        </button>
      </div>
      <div
        ref={ref}
        className={`brain-stage brain-volume ${entering ? 'brain-travelling' : ''}`}
        data-webgl-slot="caue-brain"
        data-ready={ready && !failed}
        aria-label="Cérebro 3D toy rosa, com dois hemisférios e sulcos perolados"
      >
        {near && !failed ? (
          <Suspense
            fallback={
              <span className="digital scene-loading">preparando os pensamentos ♡</span>
            }
          >
            <BrainCanvas
              active={active || entering}
              engaged={engaged}
              travel={travel}
              onReady={onReady}
              onFailure={onFailure}
            />
          </Suspense>
        ) : (
          <p className="digital scene-loading">Um universo inteiro de você ♡</p>
        )}
        {entering && (
          <button className="quiet skip-entry" onClick={finish}>
            pular entrada ↓
          </button>
        )}
      </div>
    </section>
  );
}
