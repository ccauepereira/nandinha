import type { PhotoAsset } from '../../types';

// Seleção provisória P4. Trocar somente estas referências; preservar os originais.
const base = '/assets/photos/fernanda/';
const couplePhotos: [PhotoAsset, PhotoAsset] = [
  {
    id: 'couple-car',
    category: 'couple',
    src: base + 'nandinha7.jpeg',
    alt: 'Cauê e Fernanda juntos no carro',
    width: 900,
    height: 1600,
  },
  {
    id: 'couple-puppies',
    category: 'couple',
    src: base + 'caue-com-ela..webp',
    alt: 'Dois cachorrinhos juntos no cesto representando Cauê e Fernanda',
    width: 985,
    height: 1690,
  },
];

export interface PhotosRegistry {
  hero: PhotoAsset;
  portrait: PhotoAsset;
  mirror: PhotoAsset;
  pretinha: PhotoAsset;
  pet: PhotoAsset;
  baby: PhotoAsset;
  hellokitty: PhotoAsset;
  sad: PhotoAsset;
  happy: PhotoAsset;
  couple: [PhotoAsset, PhotoAsset];
}

export const photos: PhotosRegistry = {
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
  pretinha: {
    id: 'pretinha',
    category: 'atmosphere',
    src: base + 'nandinha3.jpeg',
    alt: 'Pretinha com óculos roxos de lacinho no colo',
    width: 1600,
    height: 1200,
  },
  pet: {
    id: 'pet',
    category: 'atmosphere',
    src: base + 'nandinha3.jpeg',
    alt: 'Pretinha com óculos roxos de lacinho no colo',
    width: 1600,
    height: 1200,
  },
  baby: {
    id: 'baby',
    category: 'fernanda',
    src: base + 'nandinhabebe.jpeg',
    alt: 'Nandinha criança sorrindo no carrossel',
    width: 1200,
    height: 1600,
  },
  hellokitty: {
    id: 'hellokitty',
    category: 'atmosphere',
    src: base + 'hellokitty.jpg',
    alt: 'Hello Kitty kawaii',
    width: 310,
    height: 276,
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
  couple: couplePhotos,
};

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
  {
    id: 'memory-1',
    title: 'Nós dois no carro',
    description: 'Aquele dia no carro. Qualquer caminho fica leve com você do lado.',
    image: photos.couple[0],
  },
  {
    id: 'memory-2',
    title: 'Seu vestido favorito',
    description: 'Você no espelho, com esse jeito que me prende a atenção toda vez.',
    image: photos.mirror,
  },
  {
    id: 'memory-3',
    title: 'A Pretinha de óculos',
    description: 'O charme indiscutível da Pretinha com os óculos roxos de lacinho.',
    image: photos.pretinha,
  },
  {
    id: 'memory-4',
    title: 'Juntinhos',
    description: 'O nosso aconchego, dois dengos que se entendem no olhar.',
    image: photos.couple[1],
  },
  {
    id: 'memory-5',
    title: 'Cabelos ao sol',
    description: 'A luz batendo em você e eu só admirando.',
    image: photos.hero,
  },
  {
    id: 'memory-6',
    title: 'A mais fofa desde sempre',
    description: 'Essa carinha doce no carrossel já mostrava quem você ia ser.',
    image: photos.baby,
  },
];
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
