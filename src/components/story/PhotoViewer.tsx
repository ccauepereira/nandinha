import { useEffect, useRef } from 'react';
import type { PhotoAsset } from '../../types';
import { Photo } from './Photo';
export function PhotoViewer({
  image,
  onClose,
}: {
  image: PhotoAsset | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!image) return;
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    return () => {
      element?.close();
      previous?.focus({ preventScroll: true });
    };
  }, [image]);
  return (
    <dialog
      ref={dialog}
      className="photo-viewer"
      onKeyDown={(event) => {
        // The viewer has one control: keep Tab/Shift+Tab on its close button.
        if (event.key === 'Tab') {
          event.preventDefault();
          event.currentTarget.querySelector('button')?.focus();
        }
      }}
      onCancel={onClose}
      onClose={onClose}
      data-lenis-prevent
      aria-label="Fotografia ampliada"
    >
      {image && (
        <>
          <button className="button secondary viewer-close" autoFocus onClick={onClose}>
            Fechar ×
          </button>
          <Photo image={image} />
          <p>{image.alt}</p>
        </>
      )}
    </dialog>
  );
}
