# Figma — Nandinha

> **Status:** P3 — especificação de montagem e handoff concluída. Nenhum arquivo nativo ou protótipo Figma foi criado nesta etapa; link ainda não disponível.
> Base consultada: STORYBOARD.md, DESIGN-SYSTEM.md e este documento. `docs/CURRENT.md` não foi encontrado na cópia local; não foi criado um substituto.

## Organização do arquivo

Nome recomendado: **Nandinha / Visual Direction / P3**. Medidas em px. Foundations e componentes seguem [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md), fonte única dos tokens.

| Página             | Conteúdo                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `00 Foundations`   | `Color/Palette`, `Type/Scale`, `Layout/Mobile`, `Layout/Desktop`, `Material/Swatches`, `Elevation`, `Accessibility/States`               |
| `01 Components`    | Botões, suportes de foto, painel digital, carta, stickers e variantes da pergunta                                                        |
| `02 Mobile`        | Seis keyframes principais 390 × 844, mais estados de pergunta e celebração                                                               |
| `03 Desktop`       | Seis adaptações 1440 × 900 e os mesmos estados funcionais                                                                                |
| `04 Motion`        | Uma ficha por keyframe: entrada, scroll, toque, saída e versão reduzida; ligações narrativas anotadas                                    |
| `05 3D References` | Pranchas `ToyBrain`, `CherryBow`, `PearlHeart`, `LightRig`, `PhotoDepth`; especificações de material, sem exigir modelagem               |
| `06 Assets`        | Apenas fotos selecionadas para os keyframes, meme triste/feliz quando escolhidos e elementos gráficos usados; manter nome/path de origem |

Variáveis: coleção `Nandinha/Primitives` para cores, espaço, radius e sombras; coleção `Nandinha/Layout` com modos `Mobile` e `Desktop` para valores responsivos. Estilos de texto `Type/Cover`, `Type/Display`, `Type/Title`, `Type/Letter`, `Type/Body`, `Type/UI`, `Type/Caption`, com variantes de viewport. Exemplo de mapeamento futuro: `color/cherry` → `--color-cherry`; não editar tokens CSS nesta etapa.

Layers de cena: `Background`, `Depth/Back`, `Photo/Main`, `Depth/Front`, `Type`, `Controls`, `Annotations`. Auto Layout em textos e controles; posição livre somente na camada decorativa. Anotações de produção ficam fora do frame visível. Sem substituir a experiência por uma imagem única achatada.

## Seis keyframes

Numeração KF identifica os frames prioritários; S identifica a cena original. Os saltos entre keyframes não removem cenas do storyboard.

### KF01 — Hero / S02

**Frames:** `KF01/S02/Hero/Mobile/Default` e `KF01/S02/Hero/Desktop/Default`.

- **Mobile:** creme, margem de 24 px. `FERNANDA` em display cherry no topo, largura útil de 342 px; subtítulo `como o Cauê vê ela ♡` em UI 16 px logo abaixo. Retrato central 304 × 380 px, aproximadamente em x43/y220, borda photo. Um laço glossy no alto à direita, um coração perolado parcialmente à frente da borda inferior e uma pequena estrela ao fundo. Rodapé com espaço de respiro e indicação discreta de continuidade.
- **Profundidade:** halo perolado atrás do retrato, objetos em escalas distintas e sombra de contato; rosto completamente livre. O retrato é o maior elemento, sem moldura de dashboard nem CTA comercial.
- **Desktop:** título de 144 px ocupa o alto; retrato 520 × 650 px à direita, x760/y150; subtítulo à esquerda, x100/y330. Laço atrás do canto superior e coração no primeiro plano inferior; manter a área do rosto livre mesmo se o enquadramento mudar.
- **Material necessário:** uma foto vertical real a selecionar. A geometria proposta é ajustável ao enquadramento, sem retocar o rosto. Os mockups nativos deverão usar a foto escolhida; nenhum arquivo foi selecionado ou alterado nesta especificação.

### KF02 — Cauê Brain / S03

**Frames:** `KF02/S03/Brain/Mobile/Default` e `KF02/S03/Brain/Desktop/Default`.

- **Mobile:** fundo cream migrando suavemente para pearl no centro. Pergunta `O que passa na cabeça do Cauê?` em display 44 px, três linhas, no terço superior. Cérebro toy rosa de aproximadamente 240 × 220 px no centro de um aro perolado de 312 px; o aro sugere uma abertura com profundidade escura rose, sem aparência médica. CTA `entrar na mente`, 240 × 56 px, centralizado abaixo.
- **Desktop:** pergunta em bloco de 480 px à esquerda; portal de 560 px à direita e CTA sob a pergunta. Repetir o laço em miniatura na base do portal para conectar ao hero.
- **Profundidade:** cérebro em primeiro plano, aro intermediário e abertura ao fundo. A aproximação deve revelar que há fotografias além do portal. Alternativa estática preserva essa leitura sem exigir câmera 3D.

### KF03 — Dentro da mente / S04

**Frames:** `KF03/S04/Mind/Mobile/Default` e `KF03/S04/Mind/Desktop/Default`; variantes `PhotoOpen` e `Static`.

- **Mobile:** ambiente pearl, horizonte sem linha dura; `Fernanda 97.8%` no alto em digital. Polaroid principal de 200 × 258 px no centro; foto solta de 100 × 140 px recuada à esquerda; card holográfico de 112 × 156 px à direita. Bordas podem sair da tela, mas nenhum controle ou rosto principal fica cortado.
- **Interface:** stats secundários abaixo da composição: `Código 1%`, `Cálculo 0.7%`, `Comida 0.5%`. Faixa digital paper de 342 px com `ERROR: nandinha.exe está consumindo memória demais`, quebrando em até três linhas. O erro faz parte da piada, não bloqueia a galeria.
- **Desktop:** composição espacial com cinco suportes: Polaroid central de 320 × 410 px, card holográfico à direita, foto solta à esquerda, projeção distante acima e tela digital pequena abaixo. Cinco posições podem reutilizar três fotos, sem sugerir cinco memórias distintas.
- **Toque:** tocar foto abre variante frontal legível; fechar retorna à composição. Suportes adicionais aparecem na continuação mobile, sem carrossel obrigatório ou arraste 3D. A projeção usa imagem decorativa; não contém texto essencial.

### KF04 — Cauê sem ela / S05

**Frames:** `KF04/S05/Without/Mobile/Default` e `KF04/S05/Without/Desktop/Default`.

- **Mobile:** fundo mono-bg; `CAUÊ SEM NANDINHA` em UI 700 de 32 px, alinhado à esquerda. Meme do cachorrinho triste/enrolado numa área de 286 × 286 px central, preservando proporção com contain. Sem brilho, confete ou objetos flutuantes.
- **Stats:** duas linhas digitais abaixo, `felicidade 2%` e `saudade 100%`, com traços horizontais de preenchimento correspondente. Muito vazio ao redor; aparência de boletim de sistema abatido.
- **Desktop:** headline de 64 px à esquerda, meme de até 400 × 400 px no centro-direita e stats sob a headline. Composição seca, sem aumentar a quantidade de ornamentos.
- **Material necessário:** meme triste a confirmar. Usar tratamento monocromático apenas na apresentação futura; preservar o arquivo original. A próxima cena real é S06, Cauê com ela, que devolverá a cor.

### KF05 — Pedido de desculpas / S12

**Frames:** `KF05/S12/Letter/Mobile/Default` e `KF05/S12/Letter/Desktop/Default`.

- **Mobile:** fundo cream e folha paper quase fundida ao fundo, x24, largura 342 px; padding interno de 16 px e início após 96 px de respiro. Sem fita, laço, personagem, sticker ou ornamento 3D. Uma pequena dobra ou sombra-paper basta.
- **Tipografia:** carta em display 20/33 px, ink, à esquerda. Reserva de conteúdo marcada no Figma como `Carta — conteúdo de Cauê pendente`; usar blocos neutros de composição somente na anotação, sem redigir uma falsa carta ou renderizar lorem ipsum como texto definitivo.
- **Desktop:** folha de 688 px centralizada, padding 64 px, coluna de texto de 560 px em 24/39.6 px. A altura será ajustada à carta real; o frame de 900 px é viewport, não limite de leitura.
- **Ritmo:** herda o silêncio de S11, sem nova abertura teatral. Um separador de papel ao fim leva às ações de S13; nenhum botão de resposta junto à carta.

### KF06 — Pergunta final / S14 + celebração S15

**Frames base:** `KF06/S14/Question/Mobile/Q0` e `KF06/S14/Question/Desktop/Q0`.

- **Mobile:** cream com halo baby suave. Pergunta exata `Nandinha, você ainda quer continuar comigo? ♡` em display 36 px/1.12, bloco de 342 px, x24/y112. Laço pequeno acima, dois elementos perolados laterais fora da área de leitura. Mensagens digitais reservam 64 px a partir de y300.
- **Área de resposta:** x24/y396, 342 × 288 px. SIM cherry centrado na faixa superior; NÃO paper na inferior. `encerrar por aqui`, Quiet, mantém alvo 180 × 44 px centralizado em y724, separado da área móvel. Em viewport menor, os blocos seguem no fluxo e a página cresce.
- **Desktop:** pergunta central de até 760 px em 64 px; área de resposta de 560 × 288 px centralizada abaixo; saída estável fora dela. Ornamentos ocupam as laterais, sem criar uma segunda coluna de conteúdo.
- **Crescimento:** altera a largura do SIM e seu tamanho de texto até 20 px; altura fixa de 64 px evita invadir a pergunta ou a saída. NÃO mantém 88 × 48 px. Posições abaixo são relativas à área de resposta mobile e representam destinos, não animação pronta.

| Variante | Mensagem                    | SIM: largura mobile / desktop | NÃO: x / y mobile |
| -------- | --------------------------- | ----------------------------- | ----------------- |
| `Q0`     | Sem mensagem                | 160 / 200 px                  | 127 / 192         |
| `Q1`     | Sem mensagem; primeira fuga | 176 / 224 px                  | 238 / 136         |
| `Q2`     | Sem mensagem; segunda fuga  | 192 / 248 px                  | 16 / 216          |
| `Q3`     | `🤨`                        | 208 / 272 px                  | 238 / 216         |
| `Q4`     | `Fernanda...`               | 224 / 296 px                  | 16 / 136          |
| `Q5`     | `para`                      | 240 / 320 px                  | 127 / 216         |
| `Q6`     | `você tá tentando demais`   | 264 / 352 px                  | 238 / 176         |
| `Q7`     | `APERTE O SIM, SEJA FELIZ.` | 288 / 384 px                  | 127 / 192         |

SIM centralizado em y24 em todos os estados. No desktop, preservar y e mapear x do NÃO proporcionalmente ao espaço horizontal disponível. Todas as variantes conservam a saída estável e os labels. Q7 encerra a progressão; não repetir em loop. Para toque futuro, definir a progressão por acionamento, sem exigir hover. `Input=Keyboard` e `Motion=Reduced` mantêm NÃO na posição Q0 e apresentam apenas mensagens/estados estáticos, sem perseguição ou deslocamento do foco. Não implementar comportamento no P3.

**Celebração:** frames `KF06/S15/Celebration/{Mobile,Desktop}/C1` com `EU SABIA.` e `C2` com `TE AMO, NANDINHA ♡`. C1: display cherry 64/112 px, um grande coração perolado ao fundo. C2: display 44/80 px, meme feliz central de 240/360 px e poucos laços/corações nas bordas. Só SIM explícito chega a C1; a passagem a C2 mantém `EU SABIA.` como pequena legenda para não perder conteúdo. Reservar `Exit` para encerramento discreto, sem celebração; texto pendente de Cauê.

## Componentes e variantes

| Nome                | Propriedades / medidas essenciais                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `Button/Action`     | Kind=Primary/Secondary/Quiet; State=Default/Hover/Pressed/Focus/Disabled; altura 56 px, mínimo 44 px |
| `Photo/Frame`       | Kind=Polaroid/Holo/Loose/Projection/Digital; State=Default/Open; preservar proporção da imagem       |
| `Panel/Digital`     | Kind=Stat/Error; largura Fill; texto com quebra, padding 16 px                                       |
| `Letter/Paper`      | Viewport=Mobile/Desktop; altura Hug; conteúdo pendente                                               |
| `Sticker/Mark`      | Kind=Bow/Heart/Star; Role=Decorative/Interactive; alvo interativo mínimo 44 px                       |
| `Question/Stage`    | Progress=Q0–Q7; Input=Touch/Keyboard; Motion=Full/Reduced; saída fora da área móvel                  |
| `Celebration/Stage` | Phase=C1/C2; Motion=Full/Reduced                                                                     |
| `Photo/Viewer`      | Foto frontal, fechamento de 44 px e legenda opcional; prever foco e retorno à origem                 |

Botões de Question usam as medidas específicas da tabela de estados. Criar variantes, não duplicar componentes sem vínculo; agrupar Q0–Q7 fora dos seis frames principais para facilitar comparação.

## Motion por keyframe — apenas especificação

| Keyframe | Entrada                                              | Durante scroll                                     | Microinteração touch                                       | Transição para a próxima cena real                                |
| -------- | ---------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| Hero     | Foto e título revelados em 360 ms; objetos em 700 ms | Planos decorativos variam até 16 px, rosto estável | Indicação de continuidade responde ao toque                | Halo se concentra no portal de S03                                |
| Brain    | Aro e cérebro surgem em 700 ms                       | Aproximação sutil, sem prender rolagem             | CTA comprime 2 px                                          | Portal amplia em 700 ms e revela fotos de S04                     |
| Mente    | Fotos distribuídas em profundidade em 700 ms         | Deslocamento decorativo até 24 px                  | Foto abre frontal em 360 ms; fechar restaura               | Saída do espaço e corte seco para S05, sem flash                  |
| Sem ela  | Corte direto, sem bounce                             | Cena praticamente parada                           | Feedback simples apenas se houver controle de continuidade | S06 recupera cor em 360 ms e inverte o humor                      |
| Carta    | Conteúdo já legível, sem efeito de digitação         | Rolagem natural                                    | Nenhum efeito obrigatório                                  | Espaço de papel conduz às ações de S13                            |
| Pergunta | Halo e laço retornam em 360 ms                       | Texto e área de resposta estáveis                  | Estados Q; fuga futura até 180 ms, crescimento em 240 ms   | SIM abre C1; C2 emerge em 700 ms, sem ocultar a mensagem anterior |

Movimento reduzido: sem parallax, flutuação, câmera, fuga ou confetes; usar cortes/estados estáticos. A carta permanece integralmente legível em qualquer modo. Animações nunca são requisito para avançar ou responder.

## Assets e handoff

- Banco disponível: `public/assets/photos/fernanda/`. Sem inventário completo, seleção ou transformação de originais neste P3 documental.
- Seleção mínima para montagem: um retrato hero, três fotos para a mente (podendo reutilizar o hero), meme triste e meme feliz. Confirmar enquadramentos com Cauê; não inferir qualidade ou conteúdo pelo nome do arquivo.
- Registrar na camada de cada foto o path original e o enquadramento escolhido. Exportar futuramente apenas derivados em destino separado; nunca sobrescrever originais.
- Stickers vetoriais: SVG; referência de objeto 3D: PNG transparente em 2× do tamanho exibido; preview de composição: PNG 390 × 844 ou 1440 × 900. São especificações de exportação futura, não arquivos produzidos agora.
- Pronto para implementação: direção, tokens, geometrias, componentes e estados especificados. Ainda não verificados visualmente em Figma: fontes reais, recortes fotográficos, render toy, contraste sobre composição e encaixe da carta final.
- Dependências de Cauê: escolha das fotos/memes; carta e ações definitivas; ajuste pessoal das provocações/stats e mensagens finais. A paleta, os materiais e a hierarquia já ficam definidos por esta direção.
