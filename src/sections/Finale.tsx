import { useEffect, useRef, useState } from 'react';
import { finalCopy, photos } from '../data/content/story';
import { Ornament } from '../components/story/Ornament';
import { Photo } from '../components/story/Photo';

export function Finale() {
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null);
  const result = useRef<HTMLElement>(null);
  useEffect(() => {
    if (answer) result.current?.focus();
  }, [answer]);
  return (
    <>
      <section id="pergunta" className="scene question" aria-labelledby="question-title">
        <Ornament />
        <p className="eyebrow">uma última coisinha...</p>
        <h2 id="question-title">{finalCopy.question}</h2>
        <div className="answer-area">
          <button className="button" onClick={() => setAnswer('yes')}>
            SIM 💗
          </button>
          <button className="button secondary" onClick={() => setAnswer('no')}>
            NÃO
          </button>
        </div>
        <button className="quiet" onClick={() => setAnswer('no')}>
          encerrar por aqui
        </button>
      </section>
      {answer === 'yes' && (
        <section
          id="final"
          ref={result}
          tabIndex={-1}
          className="scene celebration"
          aria-labelledby="final-title"
        >
          <p className="celebration-intro">{finalCopy.celebration[0]}</p>
          <h2 id="final-title">{finalCopy.celebration[1]}</h2>
          <div className="celebration-photo">
            <Photo image={photos.couple[0]} />
            <Ornament kind="heart" />
            <Ornament />
            <span className="photo-label digital">Cauê & Nandinha ♡</span>
          </div>
          <div className="celebration-meme">
            <Photo image={photos.happy} />
            <span className="digital">Cauê depois do SIM ♡</span>
          </div>
          <a className="quiet" href="#hero">
            reviver tudo ♡
          </a>
        </section>
      )}
      {answer === 'no' && (
        <section
          ref={result}
          tabIndex={-1}
          className="scene exit"
          aria-labelledby="exit-title"
        >
          <h2 id="exit-title">{finalCopy.exit}</h2>
          <a className="quiet" href="#hero">
            voltar ao início
          </a>
        </section>
      )}
      <footer className="site-footer">
        <span>feito por Cauê</span>
        <span>para Nandinha ♡</span>
      </footer>
    </>
  );
}
