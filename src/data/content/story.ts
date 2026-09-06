import type { PhotoAsset } from '../../types';
import { photos } from './assets';
export { photos } from './assets';

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
export const mindPhotos = photos.brain;
export const mindStats = [
  ['Código', '1.0%'],
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
    image: photos.thingsILove[0],
  },
  {
    id: 'olhar',
    title: 'Seu olhar',
    description: 'Daqueles que fazem o resto perder a importância.',
    image: photos.thingsILove[1],
  },
  {
    id: 'jeito',
    title: 'Seu jeito',
    description: 'Tão seu. Tão impossível de confundir.',
    image: photos.thingsILove[2],
  },
  {
    id: 'graca',
    title: 'Sua graça',
    description: 'Até as pequenas coisas ficam mais leves.',
    image: photos.thingsILove[3],
  },
  {
    id: 'presenca',
    title: 'Sua presença',
    description: 'O simples fato de ter você por perto.',
    image: photos.thingsILove[4],
  },
  {
    id: 'voce',
    title: 'Você, por inteira',
    description: 'Muito mais do que cabe nessa lista.',
    image: photos.thingsILove[5],
  },
];
// Album uses different photographs from the Brain; the car returns as a couple callback.
export const memories: StoryItem[] = photos.memories.map((image, index) => ({
  id: `memory-${index + 1}`,
  title:
    [
      'Nós no caminho',
      'Seu jeito',
      'Um instante em preto e branco',
      'Esse sorriso',
      'Entre um dia e outro',
    ][index] ?? 'Um recorte para guardar.',
  description:
    [
      'A nossa foto no carro, guardada por inteiro.',
      'Um recorte seu que eu quis guardar.',
      'Tem detalhes que não precisam de cor.',
      'Um sorriso para revisitar.',
      'As pequenas partes da vida também merecem uma página.',
    ][index] ?? 'Um recorte para guardar.',
  image,
}));
export const reminders = [
  { id: 'bow', title: 'Um laço', description: 'Um detalhe delicado, com a sua cara.' },
  {
    id: 'pretinha',
    title: 'A Pretinha',
    description: 'Com óculos roxos e lacinho no colo. Um charme que não dá pra esquecer.',
  },
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
  isPlaceholder: false,
  salutation: 'Nandinha,',
  introCta: 'LER A CARTA ♡',
  paragraphs: [
    'quando eu olho pra você, eu não vejo só a pessoa que você é hoje. Eu vejo tudo que você viveu, tudo que você superou e tudo que te trouxe até aqui.',
    'A vida é curta demais pra gente ficar preso ao que machucou.',
    'Você mesma me mostrou que o amor consegue atravessar muita coisa. Quem acabou ficando preso no passado fui eu.',
    'Eu carreguei coisas que já deveriam ter ficado para trás e deixei isso afetar a forma como eu agi com você.',
    'E eu não quero continuar sendo essa versão de mim.',
    'Eu sei que gostar de você não apaga o que eu fiz de errado. Também sei que uma carta, um site ou um pedido de desculpas não resolve tudo sozinho.',
    'Mas eu quero aprender a fazer diferente.',
    'Não só falar.',
    'Fazer.',
  ],
  signature: 'Cauê ♡',
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

export const proposalMessages = [
  '',
  '',
  '',
  '🤨',
  'Fernanda...',
  'para',
  'você tá tentando demais',
  'APERTE O SIM, SEJA FELIZ.',
];
