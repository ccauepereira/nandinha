import React from 'react';
import styles from './App.module.css';
import { useLenisScroll } from './hooks/useLenisScroll';

export const App: React.FC = () => {
  // Initialize smooth scroll orchestration
  useLenisScroll({ enabled: true });

  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <span className={styles.badge}>Prompt 1 — Arquitetura</span>
        <h1 className={styles.title}>Nandinha</h1>
        <p className={styles.description}>
          Fundação técnica e arquitetura do projeto estabelecidas com sucesso. Nenhuma
          tela narrativa, conteúdo romântico ou modelagem 3D foi implementado neste
          estágio.
        </p>

        <div className={styles.grid}>
          <div className={styles.item}>
            <span className={styles.dot} />
            <span>React 19 + TypeScript + Vite</span>
          </div>
          <div className={styles.item}>
            <span className={styles.dot} />
            <span>Three.js + R3F + Drei Setup</span>
          </div>
          <div className={styles.item}>
            <span className={styles.dot} />
            <span>Anime.js Engine + Reduced Motion</span>
          </div>
          <div className={styles.item}>
            <span className={styles.dot} />
            <span>Lenis Smooth Scroll</span>
          </div>
          <div className={styles.item}>
            <span className={styles.dot} />
            <span>Design Tokens & CSS Modules</span>
          </div>
          <div className={styles.item}>
            <span className={styles.dot} />
            <span>Data-Driven Content Schemas</span>
          </div>
        </div>

        <footer className={styles.footer}>
          Pronto para o Prompt 2 (Estrutura Narrativa e Conteúdo).
        </footer>
      </article>
    </main>
  );
};

export default App;
