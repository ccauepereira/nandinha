import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';
import { FallbackLoader } from '../loaders/FallbackLoader';

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Robust Three.js / R3F Canvas Wrapper.
 * Throttles DPR based on device capabilities and wraps scene in Suspense.
 */
export const CanvasContainer: React.FC<CanvasContainerProps> = ({
  children,
  className,
  style,
}) => {
  const { maxDpr } = useDevicePerformance();

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        ...style,
      }}
    >
      <Suspense fallback={<FallbackLoader />}>
        <Canvas
          dpr={[1, maxDpr]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
};
