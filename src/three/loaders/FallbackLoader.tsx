import React from 'react';

interface FallbackLoaderProps {
  label?: string;
}

export const FallbackLoader: React.FC<FallbackLoaderProps> = ({
  label = 'Carregando elementos 3D...',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        color: 'var(--color-text-muted)',
        fontSize: 'var(--font-size-sm)',
        fontFamily: 'var(--font-family-body)',
      }}
      role="status"
      aria-live="polite"
    >
      <span>{label}</span>
    </div>
  );
};
