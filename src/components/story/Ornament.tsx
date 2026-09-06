import { useId } from 'react';

export function Ornament({
  kind = 'bow',
  className = '',
}: {
  kind?: 'bow' | 'heart' | 'star' | 'brain';
  className?: string;
}) {
  const id = useId();
  return (
    <svg
      className={`ornament ${className}`}
      viewBox="0 0 160 140"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x2="0.8" y2="1">
          <stop stopColor="#FFFEFB" />
          <stop offset=".3" stopColor={kind === 'bow' ? '#E0718F' : '#F8DCE5'} />
          <stop offset="1" stopColor={kind === 'bow' ? '#B92349' : '#C09BB5'} />
        </linearGradient>
      </defs>
      <g
        fill={`url(#${id})`}
        stroke={kind === 'bow' ? '#B92349' : '#8B5060'}
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        {kind === 'bow' && (
          <>
            <path d="M74 65C18 6 4 21 14 72S57 106 74 77L50 130L78 113L95 130L87 78C125 118 152 91 148 51S108 29 85 64Z" />
            <ellipse cx="80" cy="70" rx="14" ry="19" />
            <path d="M29 50L65 70L28 83M129 50L96 70L130 83" fill="none" opacity=".4" />
          </>
        )}
        {kind === 'heart' && (
          <path d="M80 122C57 108 8 76 15 43C21 11 58 12 80 39C103 12 138 11 145 43C151 77 106 106 80 122Z" />
        )}
        {kind === 'star' && (
          <path d="M80 7L96 49L142 53L107 83L117 129L80 104L40 129L51 83L16 53L63 49Z" />
        )}
        {kind === 'brain' && (
          <>
            <path d="M78 24C64 9 45 17 40 32C20 29 13 47 20 61C2 75 15 94 29 96C27 116 49 129 65 114C72 123 81 117 80 104V37C80 31 79 27 78 24ZM84 24C98 9 118 17 122 32C143 29 149 47 142 61C160 75 147 94 133 96C135 116 113 129 97 114C89 123 81 117 82 104V37Z" />
            <path
              d="M41 34Q62 32 59 51Q37 49 34 66M22 65Q51 61 49 83Q64 81 69 98M31 97Q40 87 49 96M121 34Q100 32 103 51Q124 49 128 66M141 65Q112 61 113 83Q99 81 93 98M131 97Q122 87 113 96"
              fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
