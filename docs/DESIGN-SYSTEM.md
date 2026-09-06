# Design System — Nandinha

> **Status:** P3 — direção visual oficial especificada. Tokens documentais para implementação posterior; nenhum CSS ou componente alterado.

## Direção: Nandinha, edição de colecionador

Fernanda ocupa a capa de um universo afetivo criado por Cauê. Fotografia real em grande escala, tipografia editorial e objetos toy com acabamento de peça colecionável. A inspiração Sanrio aparece em laços, volumes arredondados e delicadeza gráfica; a maturidade vem do espaço negativo, da assimetria e do contraste tipográfico.

Creme é a base; rosa bebê constrói volumes; cereja pontua títulos e ações. Papel aproxima, plástico glossy diverte, pérola dá profundidade. O preto fica restrito a texto e pequenos sinais digitais. Não usar mascotes como protagonistas, grades de cards iguais, fundos integralmente rosa em sequência ou painéis de glassmorphism.

As seis composições e seus estados estão em [FIGMA.md](FIGMA.md). A sequência narrativa permanece em [STORYBOARD.md](STORYBOARD.md).

## Paleta

Nomes abaixo correspondem a futuras CSS Variables; no Figma, substituir hífens por `/` e omitir `--`.

| Token              | Valor     | Aplicação                                      |
| ------------------ | --------- | ---------------------------------------------- |
| `--color-cream`    | `#FFF9F1` | Fundo principal e carta                        |
| `--color-paper`    | `#FFFEFB` | Papel, borda de fotografia e labels            |
| `--color-baby`     | `#F8DCE5` | Volumes e superfícies de apoio                 |
| `--color-cherry`   | `#B92349` | CTA principal, título e pequenos acentos       |
| `--color-rose`     | `#8B5060` | Texto secundário sobre creme/papel             |
| `--color-ink`      | `#241F23` | Texto principal e interface retrô              |
| `--color-pearl`    | `#EAE6F2` | Ambiente dreamy, reflexos e objetos            |
| `--color-chrome`   | `#B7BDC7` | Reflexo metálico decorativo                    |
| `--color-line`     | `#DCCCD0` | Divisórias decorativas, não contorno funcional |
| `--color-mono-bg`  | `#ECEAE7` | Cena do cachorrinho triste                     |
| `--color-mono-ink` | `#393739` | Texto da cena monocromática                    |
| `--color-focus`    | `#B92349` | Anel de foco sobre superfície clara            |

Distribuição de referência no hero: 60% creme/papel, 25% fotografia, 10% rosa/pérola e 5% cereja/detalhes; a foto continua sendo o maior elemento individual. Não aplicar essa proporção à carta nem ao meme.

Pares de texto: ink/cream, rose/cream, cherry/cream e paper/cherry. Rosa bebê, chrome e line não são cores de texto. Conteúdo sobre fotografia usa área de papel opaca; transparência é decorativa. Meta de contraste: 4,5:1 para texto comum e 3:1 para componentes/indicadores; conferir novamente nas composições finais.

## Tipografia

| Token            | Família e fallback                 | Uso / pesos                                    |
| ---------------- | ---------------------------------- | ---------------------------------------------- |
| `--font-display` | Cormorant Garamond, Georgia, serif | Editorial 500; 500 italic em detalhes afetivos |
| `--font-ui`      | Manrope, Arial, sans-serif         | Leitura 400; labels 500; botões 600; humor 700 |
| `--font-digital` | IBM Plex Mono, monospace           | Stats e mensagens de sistema, 400/500          |

| Estilo / token de tamanho  | Mobile / desktop | Entrelinha | Tracking |
| -------------------------- | ---------------- | ---------- | -------- |
| Capa / `--text-cover`      | 64 / 144 px      | 0.9        | -0.045em |
| Display / `--text-display` | 44 / 80 px       | 1.02       | -0.03em  |
| Título / `--text-title`    | 32 / 48 px       | 1.12       | -0.02em  |
| Carta / `--text-letter`    | 20 / 24 px       | 1.65       | 0        |
| Corpo / `--text-body`      | 16 / 18 px       | 1.6        | 0        |
| Interface / `--text-ui`    | 14 / 16 px       | 1.4        | 0        |
| Legenda / `--text-caption` | 12 / 12 px       | 1.5        | 0.02em   |

- A capa usa display 500 em caixa alta. O título de oito letras deve caber sem condensação artificial; se necessário, reduzir até 56 px no frame mobile. Medir com a fonte instalada no Figma.
- Textos emocionais: alinhamento à esquerda, display na abertura e na carta, parágrafos curtos, sem caixa alta, escrita cursiva ou texto justificado. Carta com largura máxima de 560 px; altura determinada pelo conteúdo.
- Humor: UI 700 para a manchete, digital 400/500 para números e erros. Caixa alta pontual; mensagens longas quebram linha, nunca viram letreiros minúsculos.
- Botões: UI 600, 16 px, entrelinha 24 px nos dois tamanhos. Corações e emojis são acentos de conteúdo, não substitutos de labels.

## Espaço, grid e forma

| Grupo de tokens                | Valores                                     |
| ------------------------------ | ------------------------------------------- |
| `--space-1/2/3/4/6/8/12/16/24` | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px |
| `--page-gutter`                | 24 px mobile / 80 px desktop                |
| `--grid-gap`                   | 12 px mobile / 24 px desktop                |
| `--content-max`                | 1280 px                                     |
| `--section-space`              | 64 px mobile / 120 px desktop               |
| `--radius-paper`               | 2 px                                        |
| `--radius-photo`               | 8 px                                        |
| `--radius-panel`               | 24 px                                       |
| `--radius-toy`                 | 40 px                                       |
| `--radius-pill`                | 999 px                                      |
| `--target-min`                 | 44 px; ações principais com 56 px de altura |

Frame mobile 390 × 844, quatro colunas; desktop 1440 × 900, doze colunas. Desktop redistribui a cena lateralmente, preservando a hierarquia. Frames representam recortes do percurso, não obrigam seções a caber em uma tela. Não recortar carta ou controles para preservar uma altura fixa. Considerar safe areas e permitir crescimento com zoom/texto maior.

## Sombras e materiais

| Token / material   | Especificação                                                                    |
| ------------------ | -------------------------------------------------------------------------------- |
| `--shadow-paper`   | `0 4px 12px rgba(36,31,35,0.08)`                                                 |
| `--shadow-float`   | `0 20px 48px rgba(82,43,60,0.16)`                                                |
| `--shadow-contact` | `0 8px 16px rgba(82,43,60,0.12)`                                                 |
| `--shadow-button`  | `0 4px 0 #861A36`                                                                |
| Papel              | Creme quente, fibra discreta em 2–3% de opacidade; borda fina e sombra curta     |
| Plástico glossy    | Rosa/cereja, reflexo amplo de softbox, arestas arredondadas; sem brilho pulsante |
| Pérola             | Base branca, reflexo rosa/lilás sutil; evitar arco-íris saturado                 |
| Transparência      | Acrílico em bordas e objetos; sem sobrepor texto a fundos variáveis              |
| Pelúcia            | Apenas detalhe tátil, como um coração; fibra curta, silhueta simples             |
| Chrome             | Pequeno aro ou estrela; até 5% da área decorativa por cena, nunca grandes placas |

## Fotografia, stickers e cards

- Retratos preservam pele, proporções e cores naturais; não gerar ou alterar o rosto. Recorte de enquadramento no Figma é não destrutivo. Nenhum original será movido, renomeado, convertido ou comprimido no P3.
- Hero: retrato vertical 4:5, olhar/rosto no terço superior; largura mínima de 78% da área útil mobile. Objetos nunca cobrem olhos ou boca. Se a foto não permitir separar a pessoa do fundo, usar o retrato inteiro como peça central.
- Mente: três fotos legíveis no mobile e até cinco no desktop, com cinco suportes previstos: Polaroid, holográfico, foto solta, projeção e tela digital. A descoberta das demais não depende de arrastar.
- Scrapbook: Polaroid com borda de 8 px e base de 32 px; legenda curta. Máximo de ±4° de rotação e duas sobreposições; abertura de foto elimina a inclinação.
- Stickers recorrentes: laço como assinatura, coração como afeto e estrela como descoberta. Máximo de três grupos no hero, dois nas cenas lúdicas, nenhum na carta. Uma anotação desenhada por composição, no máximo.
- Sticker decorativo não recebe aparência de botão; sticker interativo exige alvo de 44 px, nome acessível e foco. Não cobrir textos, rostos ou ações.
- Cards têm função específica: `Photo/Polaroid`, `Photo/Holo`, `Panel/Digital`, `Letter/Paper`. Evitar uma mesma caixa arredondada para todas as cenas. A carta é uma superfície contínua e o hero uma composição aberta.

## Linguagem 3D

Toy/dreamy: volumes simplificados, cantos macios e proporções levemente exageradas. Cérebro com sulcos largos e acabamento de vinil rosa; sem anatomia visceral. Laço cereja, coração perolado e pequeno aro chrome formam o vocabulário inicial; não modelar uma biblioteca inteira agora.

- **Materiais de referência:** plástico com roughness 0.22–0.35 e metalness 0; pérola 0.3–0.45 e metalness 0; chrome pontual com metalness 1 e roughness 0.2–0.3. Valores são pontos de partida para o render futuro.
- **Luz:** softbox principal acima à esquerda, preenchimento frontal suave e recorte rosado discreto atrás. Branco quente neutro, sem neon ou luz colorida sobre a pele.
- **Profundidade:** três planos claros: objeto parcial em primeiro plano, fotografia/objeto protagonista em foco e halo/cenário ao fundo. Desfoque apenas no plano decorativo distante.
- **Sombras:** contato suave sob objetos apoiados; sombra ampla em peças suspensas. Mesma direção de luz em toda a composição; não aplicar sombra que simule um recorte inexistente da pessoa.
- **Foto + 3D:** objetos orbitam o enquadramento e podem cruzar sua borda, mantendo a imagem real intacta. Nada atravessa o rosto. O cenário enquadra Fernanda, não concorre com ela.
- **Alternativa estática:** composição equivalente em camadas; fotos e textos continuam acessíveis sem WebGL. Movimento reduzido elimina flutuação, parallax e viagem de câmera.

## Botões e estados

| Componente / estado | Especificação visual                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `Button/Primary`    | Cereja + texto paper, pill, 56 px, padding horizontal 24 px, shadow-button                   |
| `Button/Secondary`  | Papel + texto ink, contorno ink de 1 px, mesmas dimensões mínimas                            |
| `Button/Quiet`      | Texto rose sublinhado, área mínima 44 px; saída estável na pergunta                          |
| Hover               | Primário escurece para `#9E1D3E`; secundário ganha fundo baby; sem informação exclusiva      |
| Pressed             | Deslocamento vertical de 2 px e sombra reduzida; equivalente ao toque                        |
| Focus-visible       | Anel cherry de 2 px, afastamento de 3 px; separação paper quando necessário                  |
| Disabled            | Fundo mono-bg, texto rose, sem sombra; não usar para impedir a saída                         |
| Foto aberta         | Foto sem inclinação, superfície paper; controle fechar de 44 px, foco visível                |
| Erro lúdico         | Panel/Digital com texto ink sobre paper; nenhuma semântica de falha real ou anúncio repetido |

A pergunta tem variantes próprias documentadas no Figma: o SIM cresce dentro de uma área reservada e o NÃO muda de posição apenas nessa área. Saída e pergunta ficam estáveis. Teclado e movimento reduzido mantêm posições fixas e mostram a progressão por texto. Não usar foco como gatilho de fuga.

## Motion: vocabulário comum

Tokens futuros: `--motion-press` 120 ms; `--motion-reveal` 360 ms; `--motion-scene` 700 ms; `--ease-soft` cubic-bezier(0.22, 1, 0.36, 1). Flutuação decorativa de até 6 px em ciclos de 6–8 s, no máximo dois elementos simultâneos. Sem bounce elástico, scroll preso, flashes ou leitura temporizada. Direção por keyframe em FIGMA.md; nada implementado.
