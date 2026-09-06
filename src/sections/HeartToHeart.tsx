import { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import { actions, emotionalLines, letter, photos } from '../data/content/story';
import { Ornament } from '../components/story/Ornament';
import { Photo } from '../components/story/Photo';
import { createSafeTimeline, isReducedMotionPreferred } from '../animations/core/animeEngine';

export function HeartToHeart() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const letterPaperRef = useRef<HTMLElement>(null);
  const letterBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLetterOpen || !letterPaperRef.current) return;

    if (!isReducedMotionPreferred()) {
      const tl = createSafeTimeline();
      tl.add({
        targets: letterPaperRef.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        scale: [0.97, 1],
        duration: 500,
        easing: 'easeOutCubic',
      });

      if (letterBodyRef.current) {
        const paragraphs = letterBodyRef.current.querySelectorAll('.letter-paragraph');
        tl.add(
          {
            targets: paragraphs,
            opacity: [0, 1],
            translateY: [12, 0],
            delay: anime.stagger(80),
            duration: 550,
            easing: 'easeOutQuad',
          },
          '-=200',
        );
      }
    }
    letterPaperRef.current.focus();
  }, [isLetterOpen]);

  const handleOpenLetter = () => {
    setIsLetterOpen(true);
  };

  return (
    <>
      <section
        id="quebra-emocional"
        className="scene emotional"
        aria-label="Uma coisa séria"
      >
        <p>{emotionalLines[0]}</p>
        <p>{emotionalLines[1]}</p>

        {/* Transição de casal antes da carta */}
        <figure className="emotional-transition-card" data-reveal>
          <Photo image={photos.couple[1]} />
          <figcaption className="photo-label digital">o nosso cantinho ♡</figcaption>
        </figure>

        <p>{emotionalLines[2]}</p>
        <h2>{emotionalLines[3]}</h2>
      </section>

      <section
        id="desculpas"
        className="scene letter-section"
        aria-labelledby="letter-title"
      >
        {!isLetterOpen ? (
          <div className="letter-envelope-teaser" data-reveal>
            <div className="envelope-card">
              <Ornament kind="heart" className="envelope-seal" />
              <p className="eyebrow">de Cauê para Fernanda</p>
              <h3 className="digital">uma carta sincera, sem rodeios</h3>
              <button
                type="button"
                className="button letter-open-button"
                onClick={handleOpenLetter}
                aria-expanded={false}
                aria-controls="letter-sheet"
              >
                {letter.introCta}
              </button>
            </div>
          </div>
        ) : (
          <article
            id="letter-sheet"
            ref={letterPaperRef}
            className="letter physical-letter"
            tabIndex={-1}
            aria-labelledby="letter-title"
          >
            <div className="letter-top-meta">
              <span className="eyebrow">de Cauê para Fernanda</span>
              <button
                type="button"
                className="quiet letter-fold-button digital"
                onClick={() => setIsLetterOpen(false)}
                aria-label="Guardar a carta"
              >
                guardar a carta ✕
              </button>
            </div>

            <h2 id="letter-title" className="letter-salutation">
              {letter.salutation}
            </h2>

            <div ref={letterBodyRef} className="letter-body">
              {letter.paragraphs.map((paragraph, index) => (
                <p key={index} className="letter-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <span className="letter-signature">{letter.signature}</span>
          </article>
        )}
      </section>

      <section
        id="fazer-diferente"
        className="scene actions"
        aria-labelledby="actions-title"
      >
        <p className="eyebrow">no dia a dia</p>
        <h2 id="actions-title">
          O que eu quero
          <br />
          <em>fazer diferente.</em>
        </h2>
        <div className="action-list">
          {actions.map((action, index) => (
            <article key={action.id}>
              <span className="digital">0{index + 1}</span>
              <div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeartToHeart;
