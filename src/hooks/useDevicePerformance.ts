import { useState, useEffect } from 'react';
import type { DeviceTier } from '../types';

function measurePerformance() {
  const isMobile = window.innerWidth < 768;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const tier: DeviceTier =
    cores <= 2 || memory <= 2
      ? 'low'
      : isMobile || cores <= 4 || memory <= 4
        ? 'medium'
        : 'high';
  return {
    tier,
    isMobile,
    maxDpr: tier === 'low' ? 1 : tier === 'medium' ? 1.25 : 1.5,
    enableHeavyShaders: false,
    maxParticles: tier === 'low' ? 8 : tier === 'medium' ? 18 : 30,
  };
}
export function useDevicePerformance() {
  const [info, setInfo] = useState(measurePerformance);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    const update = () => setInfo(measurePerformance());
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return info;
}
