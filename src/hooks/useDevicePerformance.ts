import { useState, useEffect } from 'react';
import type { DeviceTier } from '../types';

interface DevicePerformanceInfo {
  tier: DeviceTier;
  isMobile: boolean;
  maxDpr: number;
  enableHeavyShaders: boolean;
  maxParticles: number;
}

/**
 * Dynamically computes device performance tier to throttle WebGL DPR,
 * post-processing passes, and animation density on lower-end hardware.
 */
export function useDevicePerformance(): DevicePerformanceInfo {
  const [perfInfo, setPerfInfo] = useState<DevicePerformanceInfo>({
    tier: 'high',
    isMobile: false,
    maxDpr: 1.5,
    enableHeavyShaders: true,
    maxParticles: 100,
  });

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const dpr = window.devicePixelRatio || 1;

    // Check device capability
    let tier: DeviceTier = 'high';
    if (hardwareConcurrency <= 4 || isMobile) {
      tier = hardwareConcurrency <= 2 ? 'low' : 'medium';
    }

    const maxDpr = isMobile ? Math.min(dpr, 1.5) : Math.min(dpr, 2);
    const enableHeavyShaders = tier === 'high';
    const maxParticles = tier === 'low' ? 30 : tier === 'medium' ? 60 : 120;

    setPerfInfo({
      tier,
      isMobile,
      maxDpr,
      enableHeavyShaders,
      maxParticles,
    });
  }, []);

  return perfInfo;
}
