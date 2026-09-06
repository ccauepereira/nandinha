import { Component, Suspense, useEffect, type ReactNode } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';
import { useReducedMotion } from '../../hooks/useReducedMotion';

class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode; onFailure?: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure?.();
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
function ContextGuard({ onFailure }: { onFailure?: () => void }) {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    const canvas = gl.domElement;
    const handleLoss = (event: Event) => {
      event.preventDefault();
      onFailure?.();
    };
    canvas.addEventListener('webglcontextlost', handleLoss);
    return () => canvas.removeEventListener('webglcontextlost', handleLoss);
  }, [gl, onFailure]);
  return null;
}
export function CanvasContainer({
  children,
  active = true,
  className,
  onReady,
  onFailure,
  fallback,
}: {
  children: ReactNode;
  active?: boolean;
  className?: string;
  onReady?: () => void;
  onFailure?: () => void;
  fallback?: ReactNode;
}) {
  const { maxDpr, tier } = useDevicePerformance();
  const reduced = useReducedMotion();
  return (
    <div
      className={className}
      data-scene-active={active}
      data-scene-tier={tier}
      data-scene-dpr={maxDpr}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <SceneBoundary fallback={fallback} onFailure={onFailure}>
        <Canvas
          dpr={maxDpr}
          frameloop={!active ? 'never' : reduced || tier === 'low' ? 'demand' : 'always'}
          gl={{ antialias: tier !== 'low', alpha: true, powerPreference: 'default' }}
          camera={{ position: [0, 0, 5.8], fov: 42, near: 0.05, far: 60 }}
          fallback={fallback}
          onCreated={({ gl }) => {
            gl.setClearColor('#fff9f1', 0);
            onReady?.();
          }}
        >
          <ContextGuard onFailure={onFailure} />
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
      </SceneBoundary>
    </div>
  );
}
