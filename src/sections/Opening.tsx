import { Ornament } from '../components/story/Ornament';
import { HeroThrone } from '../components/story/HeroThrone';
import { BrainExperience } from '../features/brain/BrainExperience';
import { MindExperience } from '../features/brain/MindExperience';

export function Opening() {
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
        <HeroThrone />
        <div className="hero-bottom digital">
          <span>01 / um universo só seu</span>
          <span aria-hidden="true">♡</span>
        </div>
      </section>
      <BrainExperience />
      <MindExperience />
    </>
  );
}
