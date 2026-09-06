import { useMemo, useRef, type RefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import { CatmullRomCurve3, Group, MathUtils, Vector3 } from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

// Raised gyri wrap both ellipsoidal hemispheres. No model downloads or shaders.
function makeFolds(side: number, count: number) {
  return Array.from({ length: count }, (_, row) => {
    const points = Array.from({ length: 65 }, (_, index) => {
      const u = 0.16 + (index / 64) * (Math.PI - 0.32);
      const v =
        ((row + 0.5) / count) * Math.PI * 2 +
        Math.sin(u * 8 + row * 1.7 + side) * 0.14 +
        Math.sin(u * 4 + row) * 0.04;
      return new Vector3(
        side * 0.51 + 0.72 * Math.sin(u) * Math.cos(v),
        0.85 * Math.cos(u),
        0.81 * Math.sin(u) * Math.sin(v),
      );
    });
    return new CatmullRomCurve3(points);
  });
}
export function ToyBrain({
  engaged,
  travel,
}: {
  engaged: boolean;
  travel: RefObject<{ t: number }>;
}) {
  const group = useRef<Group>(null);
  const reduced = useReducedMotion();
  const { tier } = useDevicePerformance();
  const folds = useMemo(
    () => [-1, 1].flatMap((side) => makeFolds(side, tier === 'low' ? 10 : 15)),
    [tier],
  );
  useFrame(({ clock, pointer, camera }, dt) => {
    const t = travel.current.t;
    const time = clock.elapsedTime;
    camera.position.set(Math.sin(t * Math.PI) * 0.12, t * 0.05, 5.8 - t * 9.5);
    camera.lookAt(0, 0, -t * 8);
    if (!group.current) return;
    const animate = !reduced && tier !== 'low';
    group.current.position.y = animate ? Math.sin(time * 0.75) * 0.08 * (1 - t) : 0;
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      0.2 + (animate ? pointer.x * 0.16 : 0),
      3,
      dt,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      0.14 + (animate ? -pointer.y * 0.09 : 0),
      3,
      dt,
    );
    group.current.scale.setScalar(
      1 + (engaged ? 0.035 : 0) + (animate ? Math.sin(time * 1.2) * 0.012 : 0),
    );
  });
  return (
    <>
      <ambientLight intensity={1.1} />
      <hemisphereLight args={['#fff9f1', '#8b5060', 2]} />
      <directionalLight position={[-3, 4, 5]} intensity={3.8} color="#fff4ed" />
      <pointLight position={[3, 1, 2]} intensity={engaged ? 18 : 8} color="#f5a7d8" />
      <pointLight position={[-2, -2, -1]} intensity={6} color="#b2b8ff" />
      <group ref={group} rotation={[0.14, 0.2, -0.06]}>
        {[-1, 1].map((side) => (
          <mesh key={side} position={[side * 0.51, 0, 0]} scale={[0.73, 0.86, 0.82]}>
            <sphereGeometry args={[1, 40, 28]} />
            <meshPhysicalMaterial
              color="#cc86a8"
              roughness={0.29}
              clearcoat={1}
              clearcoatRoughness={0.18}
            />
          </mesh>
        ))}
        {folds.map((curve, index) => (
          <mesh key={index}>
            <tubeGeometry args={[curve, tier === 'low' ? 40 : 64, 0.105, 7, false]} />
            <meshPhysicalMaterial
              color="#e9abc9"
              roughness={0.24}
              clearcoat={1}
              clearcoatRoughness={0.16}
              emissive="#b92349"
              emissiveIntensity={engaged ? 0.12 : 0.02}
            />
          </mesh>
        ))}
        <mesh position={[0, -0.89, -0.13]} rotation={[0.2, 0, 0]}>
          <capsuleGeometry args={[0.19, 0.35, 5, 12]} />
          <meshPhysicalMaterial color="#d894b9" roughness={0.28} clearcoat={1} />
        </mesh>
      </group>
      {[-2.5, -4, -6, -8].map((z, index) => (
        <mesh key={z} position={[0, 0, z]} rotation={[0, 0, index * 0.5]}>
          <torusGeometry args={[1.4 + index * 0.13, 0.025, 6, 48]} />
          <meshBasicMaterial color={index % 2 ? '#f8dce5' : '#c4b5e9'} />
        </mesh>
      ))}
    </>
  );
}
