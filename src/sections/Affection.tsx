import { useState } from 'react';
import {
  fernandaStats,
  loves,
  memories,
  photos,
  reminders,
  withoutStats,
  withStats,
} from '../data/content/story';
import type { PhotoAsset } from '../types';
import { Photo } from '../components/story/Photo';
import { PhotoViewer } from '../components/story/PhotoViewer';
import { Ornament } from '../components/story/Ornament';
import { StatList } from '../components/story/StatList';

export function Affection() {
  const [selected, setSelected] = useState<PhotoAsset | null>(null);
  return (
    <>
      <section
        id="sem-ela"
        className="scene without contrast-scene"
        aria-labelledby="without-title"
      >
        <div>
          <p className="eyebrow">status: modo saudade</p>
          <h2 id="without-title">
            CAUÊ SEM
            <br />
            NANDINHA
          </h2>
          <StatList items={withoutStats} />
        </div>
        <Photo className="meme sad-meme" image={photos.sad} />
      </section>
      <section
        id="com-ela"
        className="scene with contrast-scene"
        aria-labelledby="with-title"
      >
        <div data-reveal>
          <p className="eyebrow">status: tudo fica melhor</p>
          <h2 id="with-title">
            Cauê <em>com ela.</em>
          </h2>
          <StatList items={withStats} />
        </div>
        <figure className="with-photo" data-reveal>
          <Photo image={photos.couple[0]} />
          <Ornament kind="heart" />
          <figcaption className="photo-label">o motivo tem nome ♡</figcaption>
        </figure>
      </section>
      <section
        id="fernanda-stats"
        className="scene character"
        aria-labelledby="stats-title"
      >
        <div className="character-intro">
          <p className="eyebrow">personagem principal</p>
          <h2 id="stats-title">
            Única.
            <br />
            <em>Sem comparação.</em>
          </h2>
          <p>Algumas coisas nem cabem na escala.</p>
        </div>
        <article className="character-card" data-reveal>
          <header className="digital">
            <span>FERNANDA</span>
            <span>★ edição única</span>
          </header>
          <Photo image={photos.portrait} />
          <StatList items={fernandaStats} />
          <footer className="digital">raridade: impossível de encontrar outra</footer>
        </article>
      </section>
      <section id="coisas-que-amo" className="scene loves" aria-labelledby="love-title">
        <p className="eyebrow">os pequenos grandes detalhes</p>
        <h2 id="love-title">
          Coisas que eu
          <br />
          <em>amo em você.</em>
        </h2>
        <div className="love-list">
          {loves.map((item, index) => (
            <details key={item.id}>
              <summary>
                <span className="digital love-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <span className="expand-mark" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="love-content">
                <p>{item.description}</p>
                {item.image && <Photo image={item.image} />}
              </div>
            </details>
          ))}
        </div>
      </section>
      <section id="memorias" className="scene memories" aria-labelledby="memories-title">
        <div className="album-heading">
          <p className="eyebrow">guardar um pouquinho de nós</p>
          <h2 id="memories-title">
            Entre fotos
            <br />e <em>lembranças.</em>
          </h2>
          <span className="digital">toque para olhar de perto ↗</span>
        </div>
        <div className="album">
          {memories.map((item, index) => (
            <article key={item.id} className="memory" data-reveal>
              <button
                className="polaroid"
                onClick={() => setSelected(item.image ?? null)}
                aria-label={`Ampliar ${item.title}`}
              >
                <span className="tape" aria-hidden="true" />
                {item.image && <Photo image={item.image} />}
                <span className="memory-caption">
                  <span>{item.title}</span>
                  <span className="digital">0{index + 1} ♡</span>
                </span>
              </button>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="lembram-voce"
        className="scene reminders"
        aria-labelledby="reminders-title"
      >
        <p className="eyebrow">você aparece nas pequenas coisas</p>
        <h2 id="reminders-title">
          Isso me lembra <em>você.</em>
        </h2>
        <div className="reminder-items">
          {reminders.map((item) => (
            <details key={item.id}>
              <summary>
                <Ornament kind={item.id === 'pretinha' ? 'bow' : item.id} />
                <span>{item.title}</span>
                <span className="digital">descobrir +</span>
              </summary>
              <div className="reminder-detail">
                <p>{item.description}</p>
                {item.id === 'pretinha' && (
                  <button
                    type="button"
                    className="polaroid pretinha-card"
                    onClick={() => setSelected(photos.pretinha)}
                    aria-label="Ampliar foto da Pretinha"
                  >
                    <Photo image={photos.pretinha} />
                    <span className="digital">Pretinha de óculos e laço ♡</span>
                  </button>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
      <PhotoViewer image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
