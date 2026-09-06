import type { PhotoAsset } from '../../types';
export function Photo({
  image,
  priority = false,
  className = '',
}: {
  image: PhotoAsset;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
