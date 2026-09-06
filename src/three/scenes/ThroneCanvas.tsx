import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, MathUtils } from 'three';
import { CanvasContainer } from '../canvas/CanvasContainer';
import { useReducedMotion } from '../../hooks/useReducedMotion';
function Throne() {
  const throne = useRef<Group>(null);
  const reduced = useReducedMotion();
  useFrame(({ pointer }, delta) => {
    if (throne.current)
      throne.current.rotation.y = MathUtils.damp(
        throne.current.rotation.y,
        reduced ? 0 : pointer.x * 0.05,
        3,
        delta,
      );
  });
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[-3, 5, 4]} intensity={3.5} />
      <pointLight position={[3, -1, 3]} intensity={8} color="#f3a0c3" />
      <group ref={throne} position={[0, -0.15, 0]}>
        <mesh position={[0, 0.3, -0.65]} scale={[1.6, 2.05, 0.26]}>
          <sphereGeometry args={[1, 40, 32]} />
          <meshPhysicalMaterial color="#ebc0d5" roughness={0.27} clearcoat={1} />
        </mesh>
        <mesh position={[0, 0.35, -0.35]} scale={[1.38, 1.8, 0.22]}>
          <sphereGeometry args={[1, 40, 32]} />
          <meshPhysicalMaterial color="#fff3f4" roughness={0.35} clearcoat={0.7} />
        </mesh>
        {[-1, 1].map((side) => (
          <group key={side}>
            <mesh position={[side * 1.16, -0.63, 0.25]} rotation={[0, 0, side * 0.16]}>
              <capsuleGeometry args={[0.17, 1.45, 5, 16]} />
              <meshPhysicalMaterial color="#b92349" roughness={0.24} clearcoat={1} />
            </mesh>
            <mesh position={[side * 1.14, -1.35, 0.1]}>
              <sphereGeometry args={[0.28, 20, 16]} />
              <meshPhysicalMaterial color="#f7e9f3" roughness={0.19} metalness={0.15} />
            </mesh>
            <mesh
              position={[side * 0.35, 2.1, -0.35]}
              rotation={[0, 0, side * -0.35]}
              scale={[0.5, 0.3, 0.18]}
            >
              <sphereGeometry args={[1, 24, 16]} />
              <meshPhysicalMaterial color="#b92349" roughness={0.23} clearcoat={1} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 2.1, -0.2]}>
          <sphereGeometry args={[0.21, 20, 16]} />
          <meshPhysicalMaterial color="#e28cab" roughness={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[0, -1.4, 0.1]} scale={[1.25, 0.22, 0.6]}>
          <sphereGeometry args={[1, 32, 20]} />
          <meshPhysicalMaterial color="#f8dce5" roughness={0.25} clearcoat={1} />
        </mesh>
        {Array.from({ length: 13 }, (_, i) => {
          const a = (i / 12) * Math.PI;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * 1.58, Math.sin(a) * 1.85 + 0.25, -0.3]}
            >
              <sphereGeometry args={[0.075, 12, 8]} />
              <meshPhysicalMaterial color="#fff9f1" roughness={0.15} metalness={0.15} />
            </mesh>
          );
        })}
      </group>
    </>
  );
}
export default function ThroneCanvas({
  active,
  onFailure,
}: {
  active: boolean;
  onFailure: () => void;
}) {
  return (
    <CanvasContainer active={active} onFailure={onFailure}>
      <Throne />
    </CanvasContainer>
  );
}
