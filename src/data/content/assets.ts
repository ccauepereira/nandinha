import type { PhotoAsset } from '../../types';

const base = '/assets/photos/fernanda/';
function photo(
  id: string,
  file: string,
  alt: string,
  width: number,
  height: number,
  category: PhotoAsset['category'] = 'fernanda',
): PhotoAsset {
  return { id, src: base + file, alt, width, height, category };
}
// Original files: never renamed or overwritten. Hero and baby have exclusive roles.
const archive = {
  hero: photo(
    'hero',
    'nandinha5.jpeg',
    'Fernanda com os cabelos iluminados pelo sol',
    1200,
    1600,
  ),
  portrait: photo(
    'portrait',
    'nandinha1.jpeg',
    'Fernanda apoiando o rosto na mão',
    1600,
    1011,
  ),
  mirror: photo(
    'mirror',
    'nandinha2.jpeg',
    'Fernanda de vestido estampado em frente ao espelho',
    3024,
    4032,
  ),
  pretinha: photo(
    'pretinha',
    'nandinha3.jpeg',
    'Pretinha no colo, usando óculos roxos de lacinho',
    1600,
    1200,
    'atmosphere',
  ),
  gym: photo(
    'gym',
    'nandinha4.jpeg',
    'Fernanda fotografando seu reflexo na academia',
    1200,
    1600,
  ),
  evening: photo(
    'evening',
    'nandinha6.jpeg',
    'Retrato de Fernanda com blusa estampada e cabelos soltos',
    3024,
    4032,
  ),
  car: photo(
    'couple-car',
    'nandinha7.jpeg',
    'Fernanda no carro; a companhia aparece parcialmente à direita',
    900,
    1600,
    'couple',
  ),
  monochrome: photo(
    'monochrome',
    'nandinha9.jpeg',
    'Retrato de Fernanda em preto e branco',
    2316,
    3088,
  ),
  garden: photo(
    'garden',
    'nandinha10.jpeg',
    'Fernanda com uma taça, junto ao jardim',
    1200,
    1600,
  ),
  smile: photo('smile', 'nandinha11.jpeg', 'Fernanda sorrindo para a câmera', 900, 1600),
  baby: photo(
    'baby',
    'nandinhabebe.jpeg',
    'Nandinha criança sorrindo no carrossel',
    1200,
    1600,
  ),
  hellokitty: photo(
    'hellokitty',
    'hellokitty.jpg',
    'Hello Kitty e uma flor em um jardim ilustrado',
    310,
    276,
    'atmosphere',
  ),
  sad: photo(
    'sad',
    'caue-sem-ela.jpg',
    'Cachorrinho sentado com expressão triste',
    740,
    617,
    'atmosphere',
  ),
  happy: photo(
    'happy',
    'caue-depois-do-sim.jpeg',
    'Cachorrinho sorrindo para a câmera',
    415,
    739,
    'atmosphere',
  ),
};
export const photos = {
  ...archive,
  pet: archive.pretinha,
  couple: [archive.car] satisfies [PhotoAsset],
  brain: [archive.portrait, archive.evening, archive.garden, archive.pretinha] satisfies [
    PhotoAsset,
    PhotoAsset,
    PhotoAsset,
    PhotoAsset,
  ],
  memories: [archive.car, archive.mirror, archive.monochrome, archive.smile, archive.gym],
  // Intentional callbacks: the personal attributes return to six distinct portraits.
  thingsILove: [
    archive.smile,
    archive.monochrome,
    archive.mirror,
    archive.gym,
    archive.evening,
    archive.garden,
  ],
};
export const brainCaptions: Record<string, string> = {
  portrait: 'o pensamento que sempre volta ♡',
  evening: 'você, até quando eu me distraio',
  garden: 'um universo inteiro de você',
  pretinha: 'pensamento secundário autorizado ♡',
};
