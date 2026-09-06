import { useState, type CSSProperties } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { proposalMessages } from '../../data/content/story';

export function ProposalControls({
  onYes,
  onNo,
}: {
  onYes: () => void;
  onNo: () => void;
}) {
  const [attempt, setAttempt] = useState(0);
  const [keyboard, setKeyboard] = useState(false);
  const reduced = useReducedMotion();
  const positions = [50, 82, 18, 78, 22, 50, 80, 50];
  const style = {
    '--yes-width': `${160 + attempt * 18}px`,
    '--no-x': `${reduced || keyboard ? 50 : positions[attempt]}%`,
    '--no-y': `${reduced || keyboard || !attempt ? 180 : attempt % 2 ? 140 : 230}px`,
  } as CSSProperties;
  return (
    <>
      <p className="proposal-message digital" aria-live="polite">
        {proposalMessages[attempt]}
      </p>
      <div className="answer-area proposal-stage" style={style} data-attempt={attempt}>
        <button className="button proposal-yes" onClick={onYes}>
          SIM 💗
        </button>
        <button
          className="button secondary proposal-no"
          onClick={(event) => {
            setKeyboard(event.detail === 0);
            if (attempt === 7) onNo();
            else setAttempt((value) => Math.min(7, value + 1));
          }}
        >
          NÃO
        </button>
      </div>
      <button className="quiet" onClick={onNo}>
        encerrar por aqui
      </button>
    </>
  );
}
