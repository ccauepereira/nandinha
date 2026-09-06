import { useState } from 'react';
import { photos, mindPhotos, mindStats } from '../data/content/story';
import type { PhotoAsset } from '../types';
import { Photo } from '../components/story/Photo';
import { PhotoViewer } from '../components/story/PhotoViewer';
import { Ornament } from '../components/story/Ornament';

export function Opening() {
  const [selected, setSelected] = useState<PhotoAsset | null>(null);
  return (
    <>
      <section id="intro" className="boot" aria-labelledby="boot-title">
        <span className="eyebrow">de Cauê, para você</span>
        <Ornament />
        <p className="digital">carregando pessoa favorita...</p>
        <h2 id="boot-title">Fernanda encontrada ♡</h2>
        <a className="button" href="#hero">
          entrar ♡ <span aria-hidden="true">↗</span>
        </a>
        <span className="edition">uma edição única. como você.</span>
      </section>
      <section
        id="hero"
        className="hero scene"
        aria-labelledby="hero-title"
        tabIndex={-1}
      >
        <div className="hero-top eyebrow">
          <span>Nandinha ♡</span>
          <span>edição de colecionador</span>
        </div>
        <h1 id="hero-title">FERNANDA</h1>
        <div className="hero-copy">
          <p>como o Cauê vê ela ♡</p>
          <span className="hero-note">
            O meu universo
            <br />
            <em>tem o seu nome.</em>
          </span>
          <a className="quiet" href="#brain">
            um pouquinho da minha cabeça <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-photo">
          <Photo image={photos.hero} priority />
          <Ornament className="hero-bow" />
          <Ornament kind="heart" className="hero-heart" />
          <Ornament kind="star" className="hero-star" />
          <span className="photo-label digital">a minha pessoa favorita</span>
        </div>
        <div className="hero-bottom digital">
          <span>01 / um universo só seu</span>
          <span aria-hidden="true">♡</span>
        </div>
      </section>
      <section id="brain" className="scene brain" aria-labelledby="brain-title">
        <div className="brain-copy" data-reveal>
          <p className="eyebrow">acesso aos pensamentos</p>
          <h2 id="brain-title">O que passa na cabeça do Cauê?</h2>
          <a className="button" href="#mente">
            entrar na mente <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div
          className="brain-stage"
          data-webgl-slot="caue-brain"
          data-state="initial"
          role="img"
          aria-label="Cérebro rosa ilustrado, suspenso em um portal perolado"
        >
          <div className="portal">
            <Ornament kind="brain" />
            <span className="portal-caption digital">nandinha.exe</span>
          </div>
          <Ornament className="portal-bow" />
        </div>
      </section>
      <section
        id="mente"
        className="scene mind"
        aria-labelledby="mind-title"
        tabIndex={-1}
      >
        <p className="eyebrow">bem-vinda ao interior</p>
        <h2 id="mind-title">
          É. Só dá <em>você.</em>
        </h2>
        <p className="mind-main digital">
          Fernanda <strong>97.8%</strong>
        </p>
        <div className="mind-photos" data-reveal>
          {mindPhotos.map((image, index) => (
            <button
              key={image.id}
              className={`mind-photo layer-${index} polaroid`}
              onClick={() => setSelected(image)}
              aria-label={`Ampliar: ${image.alt}`}
            >
              <Photo image={image} />
              <span className="digital">
                {index === 1 ? 'pensamento favorito ♡' : `fernanda_0${index + 1}`}
              </span>
            </button>
          ))}
        </div>
        <dl className="mind-stats digital">
          {mindStats.map(([name, value]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="system-message digital">
          ERROR: nandinha.exe está consumindo memória demais
        </p>
      </section>
      <PhotoViewer image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
