# Motion — Nandinha

## P5.2

- **Hero:** trono 3D com resposta horizontal discreta ao pointer; retrato real integrado à composição. Sem câmera livre.
- **Brain:** dois hemisférios e sulcos procedurais. Flutuação de 0,08 unidade, respiração de 1,2%, inclinação limitada e luz/escala respondendo ao foco, pointer e toque no CTA.
- **Entrada:** timeline Anime.js em `src/animations/timelines/brainEntry.ts`; 2.100 ms, câmera de Z 5,8 a −3,7, atravessando a superfície e anéis neurais. A cena amplia para a viewport. Pular entrada permanece disponível; limite de segurança de 2.600 ms libera a navegação mesmo se RAF parar.
- **Interior:** posições XYZ, escalas e rotações distintas. Câmera deriva até 0,12 unidade em X e 0,07 em Y. Hover/foco/toque trazem a foto a Z 2,4, com inclinação e brilho sutis; frase curta na cena, sem modal.
- **Saída:** fundo profundo termina em corte escuro antes do meme triste; a cena seguinte devolve rosa, fotografia do casal e reveal leve. Rolagem permanece sob controle da visitante.
- **Carta:** CTA preservado; abertura 500 ms e parágrafos em stagger de 80 ms. Foto de infância no topo, sem movimento contínuo. Guardar devolve foco ao CTA; cleanup pausa timelines e remove estilos transitórios.
- **SIM/NÃO:** sete estados finitos, mensagens do storyboard, deslocamento de 180 ms e crescimento horizontal do SIM de 240 ms. Posições CSS limitadas à área de resposta; saída estável fora dela. Após o último estado, NÃO pode encerrar normalmente.

## Redução de movimento e custo

- Preferência reduzida ou tier baixo: câmera de entrada simplificada, sem viagem. Canvas usa renderização sob demanda; nada fica oculto esperando animação.
- Teclado e movimento reduzido mantêm NÃO fixo. Foco nunca dispara fuga. Toque aciona um estado por vez.
- Tiers baixo/médio/alto: DPR 1/1,25/1,5; 2/3/4 fotos; 8/18/30 pontos. Sem pós-processamento, HDR externo ou shaders próprios.
- Cenas carregadas perto da viewport e sem render contínuo fora dela ou em aba oculta. Geometrias, texturas, observers e timelines têm cleanup.
