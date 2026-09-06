# Estado atual — Nandinha

- **P5.2 concluído — experiência pronta para revisão visual final.**
- Branch: `feat/interactive-experience`; preservadas `main` e `develop`. Sem deploy ou merge em `main`.
- Hero: retrato exclusivo integrado a trono procedural com laço monumental, pérolas e acabamento glossy; referência Hello Kitty acessível no próprio Hero.
- Brain: objeto R3F procedural, resposta ao CTA e viagem de câmera de 2,1 s. Interior com fotos em XYZ, seleção por toque/foco, aproximação e legendas; Pretinha preservada em todos os tiers.
- Assets: manifest central em `src/data/content/assets.ts`; quatro fotos únicas no Brain e cinco memórias distintas da seleção do Brain. Casal retomado em Cauê com ela, álbum, antes da carta e final. Originais intactos.
- Carta: abertura existente preservada; foto de infância exclusiva revelada antes do texto, novo parágrafo fornecido por Cauê e retorno de foco ao guardar.
- Pergunta: NÃO com sete deslocamentos limitados à área de resposta, mensagens progressivas, SIM crescente e saída estável. Teclado e reduced motion mantêm NÃO fixo.
- Performance: cenas lazy, pausa fora da viewport/aba oculta, DPR 1/1,25/1,5 e 2/3/4 fotos por tier; texturas reduzidas somente em memória. Sem pós-processamento.
- Validação: typecheck, lint e build aprovados. Navegador nas larguras 360/390/430/768/1024/1440, navegação, toque, carta, SIM/NÃO, reduced motion e tier baixo; sem overflow horizontal ou erros de console no fluxo testado.
- Insumos para revisão: a foto de casal disponível enquadra a companhia parcialmente; uma foto com ambos inteiros melhoraria os callbacks. O `hellokitty.jpg` local mostra um jardim, sem trono; a composição foi reinterpretada a partir do pedido textual. Performance em aparelho físico ainda depende de revisão.
