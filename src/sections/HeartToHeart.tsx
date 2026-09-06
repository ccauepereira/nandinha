import { actions, emotionalLines, letter } from '../data/content/story';
export function HeartToHeart() {
  return (
    <>
      <section
        id="quebra-emocional"
        className="scene emotional"
        aria-label="Uma coisa séria"
      >
        {emotionalLines.map((line, index) =>
          index === emotionalLines.length - 1 ? (
            <h2 key={line}>{line}</h2>
          ) : (
            <p key={line}>{line}</p>
          ),
        )}
      </section>
      <section
        id="desculpas"
        className="scene letter-section"
        aria-labelledby="letter-title"
      >
        <article className="letter">
          <p className="eyebrow">de Cauê para Fernanda</p>
          <h2 id="letter-title">{letter.title}</h2>
          {letter.isPlaceholder && (
            <span className="draft-label digital">carta em preparação</span>
          )}
          <div className="letter-body">
            {letter.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <span className="letter-signature">Cauê</span>
        </article>
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
