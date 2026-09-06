import type { PhotoAsset } from '../../types';

// Seleção provisória P4. Trocar somente estas referências; preservar os originais.
const base = '/assets/photos/fernanda/';
export const photos = {
  hero: {
    id: 'hero',
    category: 'fernanda',
    src: base + 'nandinha5.jpeg',
    alt: 'Fernanda com os cabelos soltos iluminados pelo sol',
    width: 1200,
    height: 1600,
  },
  portrait: {
    id: 'portrait',
    category: 'fernanda',
    src: base + 'nandinha1.jpeg',
    alt: 'Fernanda apoiando o rosto na mão',
    width: 1600,
    height: 1011,
  },
  mirror: {
    id: 'mirror',
    category: 'fernanda',
    src: base + 'nandinha2.jpeg',
    alt: 'Fernanda fotografando seu reflexo com vestido estampado',
    width: 3024,
    height: 4032,
  },
  pet: {
    id: 'pet',
    category: 'atmosphere',
    src: base + 'nandinha3.jpeg',
    alt: 'Cachorrinho usando óculos roxos com laço',
    width: 1600,
    height: 1200,
  },
  sad: {
    id: 'sad',
    category: 'atmosphere',
    src: base + 'caue-sem-ela.jpg',
    alt: 'Ilustração de um cachorrinho sentado com expressão triste',
    width: 740,
    height: 617,
  },
  happy: {
    id: 'happy',
    category: 'atmosphere',
    src: base + 'caue-depois-do-sim.jpeg',
    alt: 'Cachorrinho sorrindo para a câmera',
    width: 415,
    height: 739,
  },
} satisfies Record<string, PhotoAsset>;

export interface StoryItem {
  id: string;
  title: string;
  description: string;
  image?: PhotoAsset;
}
export interface StatItem {
  label: string;
  value: number;
  max: number;
  suffix?: string;
}
export const mindPhotos = [photos.portrait, photos.hero, photos.mirror];
export const mindStats = [
  ['Código', '1%'],
  ['Cálculo', '0.7%'],
  ['Comida', '0.5%'],
];
export const withoutStats: StatItem[] = [
  { label: 'felicidade', value: 2, max: 100, suffix: '%' },
  { label: 'energia', value: 3, max: 100, suffix: '%' },
  { label: 'saudade', value: 100, max: 100, suffix: '%' },
];
export const withStats: StatItem[] = [
  { label: 'felicidade', value: 100, max: 100, suffix: '%' },
  { label: 'Cauê besta', value: 999, max: 999 },
];
export const fernandaStats: StatItem[] = [
  { label: 'Beleza', value: 100, max: 100 },
  { label: 'Sorriso', value: 100, max: 100 },
  { label: 'Teimosia', value: 98, max: 100 },
  { label: 'Capacidade de deixar Cauê besta', value: 999, max: 999 },
];
// Rascunhos pessoais para Cauê revisar. Não representam relatos de acontecimentos.
export const loves: StoryItem[] = [
  {
    id: 'sorriso',
    title: 'Seu sorriso',
    description: 'O meu detalhe favorito.',
    image: photos.hero,
  },
  {
    id: 'olhar',
    title: 'Seu olhar',
    description: 'Daqueles que fazem o resto perder a importância.',
    image: photos.portrait,
  },
  {
    id: 'jeito',
    title: 'Seu jeito',
    description: 'Tão seu. Tão impossível de confundir.',
    image: photos.mirror,
  },
  {
    id: 'graca',
    title: 'Sua graça',
    description: 'Até as pequenas coisas ficam mais leves.',
    image: photos.pet,
  },
  {
    id: 'presenca',
    title: 'Sua presença',
    description: 'O simples fato de ter você por perto.',
    image: photos.hero,
  },
  {
    id: 'voce',
    title: 'Você, por inteira',
    description: 'Muito mais do que cabe nessa lista.',
    image: photos.mirror,
  },
];
// Slots editoriais: fotos provisórias, sem inventar datas ou memórias compartilhadas.
export const memories: StoryItem[] = [
  photos.mirror,
  photos.portrait,
  photos.pet,
  photos.hero,
  photos.mirror,
  photos.portrait,
].map((image, index) => ({
  id: `memory-${index + 1}`,
  title: `Recorte ${String(index + 1).padStart(2, '0')}`,
  description:
    'Uma página reservada para uma lembrança nossa. A legenda ainda vai chegar.',
  image,
}));
export const reminders = [
  { id: 'bow', title: 'Um laço', description: 'Um detalhe delicado, com a sua cara.' },
  { id: 'heart', title: 'Um coração', description: 'Nem preciso explicar esse, né?' },
  {
    id: 'star',
    title: 'Uma estrela',
    description: 'Uma coisinha bonita no meio do dia.',
  },
] as const;
export const emotionalLines = [
  'Eu posso brincar sobre sentir sua falta.',
  'Posso fazer um site inteiro para mostrar o quanto gosto de você.',
  'Mas tem uma coisa que eu preciso falar sério.',
  'Eu errei com você.',
];
export const letter = {
  isPlaceholder: true,
  title: 'Para você, com sinceridade.',
  paragraphs: [
    'Este espaço está reservado para a carta do Cauê. As palavras definitivas ainda estão sendo preparadas.',
  ],
};
export const actions = ['ouvir', 'respeitar', 'amadurecer', 'cuidar', 'melhorar'].map(
  (title) => ({
    id: title,
    title,
    description: 'Atitude concreta a ser escrita por Cauê.',
    isPlaceholder: true,
  }),
);
export const finalCopy = {
  question: 'Nandinha, você ainda quer continuar comigo? ♡',
  celebration: ['EU SABIA.', 'TE AMO, NANDINHA ♡'],
  exit: 'Tudo bem. Seu tempo e sua decisão são seus.', // Encerramento provisório P4.
};
