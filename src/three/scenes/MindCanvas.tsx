import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CanvasTexture, Group, MathUtils, SRGBColorSpace, Texture } from 'three';
import type { PhotoAsset } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';
import { CanvasContainer } from '../canvas/CanvasContainer';

function usePhotoTexture(image: PhotoAsset, edge: number) {
  const [texture, setTexture] = useState<Texture | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    let loaded: Texture | undefined;
    let bitmap: ImageBitmap | undefined;
    let cancelled = false;
    const ratio = (image.width ?? 1) / (image.height ?? 1);
    fetch(image.src, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Photo unavailable');
        return response.blob();
      })
      .then((blob) =>
        createImageBitmap(blob, {
          resizeWidth: Math.round(ratio > 1 ? edge : edge * ratio),
          resizeHeight: Math.round(ratio > 1 ? edge / ratio : edge),
          imageOrientation: 'from-image',
        }),
      )
      .then((result) => {
        if (cancelled) {
          result.close();
          return;
        }
        bitmap = result;
        const surface = document.createElement('canvas');
        surface.width = result.width;
        surface.height = result.height;
        const context = surface.getContext('2d');
        if (!context) throw new Error('Texture surface unavailable');
        context.drawImage(result, 0, 0);
        result.close();
        bitmap = undefined;
        loaded = new CanvasTexture(surface);
        loaded.colorSpace = SRGBColorSpace;
        loaded.needsUpdate = true;
        setTexture(loaded);
      })
      .catch(() => {
        /* Paper stays visible; the DOM fallback retains the source image. */
      });
    return () => {
      cancelled = true;
      controller.abort();
      loaded?.dispose();
      bitmap?.close();
    };
  }, [image, edge]);
  return texture;
}
const placements: [number, number, number, number][] = [
  [-0.32, -0.65, -0.4, -0.13],
  [0.22, 1.35, -2, 0.15],
  [-0.12, -1.3, -3.2, -0.07],
  [0.32, 0.1, 0.8, 0.1],
];
function FloatingPhoto({
  image,
  index,
  selected,
  onSelect,
  still,
}: {
  image: PhotoAsset;
  index: number;
  selected: boolean;
  onSelect: (id: string | null) => void;
  still: boolean;
}) {
  const ref = useRef<Group>(null);
  const { tier } = useDevicePerformance();
  const viewport = useThree((state) => state.viewport);
  const texture = usePhotoTexture(
    image,
    tier === 'low' ? 512 : tier === 'medium' ? 768 : 1024,
  );
  const [x, y, z, rotation] = placements[index % placements.length] ?? [0, 0, 0, 0];
  const width = Math.min(1.65, (2.1 * (image.width ?? 1)) / (image.height ?? 1));
  const height = (width * (image.height ?? 1)) / (image.width ?? 1);
  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    const damping = still ? 1000 : 5;
    const targetX = selected ? 0 : x * Math.min(viewport.width, 10);
    const targetY = selected
      ? 0
      : y + (still ? 0 : Math.sin(clock.elapsedTime * 0.5 + index) * 0.065);
    ref.current.position.x = MathUtils.damp(
      ref.current.position.x,
      targetX,
      damping,
      delta,
    );
    ref.current.position.y = MathUtils.damp(
      ref.current.position.y,
      targetY,
      damping,
      delta,
    );
    ref.current.position.z = MathUtils.damp(
      ref.current.position.z,
      selected ? 2.4 : z,
      damping,
      delta,
    );
    ref.current.rotation.z = MathUtils.damp(
      ref.current.rotation.z,
      selected ? -0.025 : rotation,
      damping,
      delta,
    );
    ref.current.rotation.y = MathUtils.damp(
      ref.current.rotation.y,
      selected ? 0.06 : -x * 0.4,
      damping,
      delta,
    );
  });
  return (
    <group
      ref={ref}
      position={[
        selected ? 0 : x * Math.min(viewport.width, 10),
        selected ? 0 : y,
        selected ? 2.4 : z,
      ]}
      rotation={[0, -x * 0.4, rotation]}
      onPointerOver={(event) => {
        if (event.pointerType !== 'touch') {
          event.stopPropagation();
          onSelect(image.id);
        }
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(image.id);
      }}
    >
      <mesh position={[0, -0.05, -0.025]}>
        <boxGeometry args={[width + 0.14, height + 0.24, 0.045]} />
        <meshPhysicalMaterial
          color={index % 2 ? '#e8d9ef' : '#fff9f1'}
          roughness={0.3}
          clearcoat={1}
          metalness={index % 2 ? 0.18 : 0}
          emissive="#b92349"
          emissiveIntensity={selected ? 0.18 : 0}
        />
      </mesh>
      <mesh>
        {/* Natural aspect ratio, no face crop. Originals stay untouched. */}
        <planeGeometry args={[width, height]} />
        {texture ? (
          <meshBasicMaterial map={texture} color="white" toneMapped={false} />
        ) : (
          <meshBasicMaterial color="#e8c9d9" />
        )}
      </mesh>
    </group>
  );
}
function Cosmos({
  images,
  selected,
  onSelect,
}: {
  images: PhotoAsset[];
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  const reduced = useReducedMotion();
  const { tier, maxParticles } = useDevicePerformance();
  const still = reduced || tier === 'low';
  const points = useMemo(
    () =>
      new Float32Array(
        Array.from(
          { length: maxParticles * 3 },
          (_, i) => Math.sin(i * 127.1 + 7) * (i % 3 === 2 ? 5 : 7),
        ),
      ),
    [maxParticles],
  );
  useFrame(({ camera, clock }, delta) => {
    camera.position.x = MathUtils.damp(
      camera.position.x,
      still ? 0 : Math.sin(clock.elapsedTime * 0.13) * 0.12,
      2,
      delta,
    );
    camera.position.y = still ? 0 : Math.sin(clock.elapsedTime * 0.17) * 0.07;
    camera.lookAt(0, 0, -1);
  });
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[-3, 4, 5]} intensity={2} />
      <pointLight color="#ffa9d5" intensity={10} position={[3, 2, 4]} />
      {images.map((image, index) => (
        <FloatingPhoto
          key={image.id}
          image={image}
          index={image.id === 'pretinha' ? 3 : index}
          selected={selected === image.id}
          onSelect={onSelect}
          still={still}
        />
      ))}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#f9e9ef"
          size={0.024}
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
      {[-5, -8].map((z, index) => (
        <mesh key={z} position={[0, 0, z]} rotation={[0.5, 0.3, index]}>
          <torusGeometry args={[4.5, 0.015, 5, 64]} />
          <meshBasicMaterial color="#ac86a4" transparent opacity={0.3} />
        </mesh>
      ))}
    </>
  );
}
export default function MindCanvas({
  images,
  selected,
  onSelect,
  active,
  onFailure,
}: {
  images: PhotoAsset[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  active: boolean;
  onFailure: () => void;
}) {
  return (
    <CanvasContainer active={active} onFailure={onFailure}>
      <Cosmos images={images} selected={selected} onSelect={onSelect} />
    </CanvasContainer>
  );
}
