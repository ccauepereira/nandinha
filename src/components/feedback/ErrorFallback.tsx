import React from 'react';

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <main
      style={{
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'var(--font-family-body)',
        textAlign: 'center',
        backgroundColor: 'var(--color-background)',
      }}
      role="alert"
    >
      <h1 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
        Algo inesperado aconteceu
      </h1>
      <p
        style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}
      >
        {error?.message || 'Ocorreu um erro ao carregar os recursos visuais.'}
      </p>
      {resetErrorBoundary && (
        <button
          onClick={resetErrorBoundary}
          style={{
            padding: 'var(--space-sm) var(--space-lg)',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            fontWeight: 600,
          }}
        >
          Tentar novamente
        </button>
      )}
    </main>
  );
};
