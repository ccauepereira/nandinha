# Estado atual — Nandinha

- **P4 concluído. Front base implementado.**
- **Próximo: P5 — 3D + interações avançadas.**
- Branch: `feat/front-base`; preservadas `main` e `develop`. Feature anterior integrada em `develop` e removida; três branches locais.
- Quinze cenas na ordem do storyboard; final exibido somente após SIM. NÃO/encerrar têm saída normal, sem fuga.
- Hero fotográfico, Brain SVG com espaço para WebGL, mente em camadas CSS, stats, reveals, álbum ampliável, carta e ações editáveis.
- Conteúdo e seleção provisória de fotos: `src/data/content/story.ts`. Carta, ações, legendas e textos pessoais aguardam revisão de Cauê; placeholders explicitamente marcados nos dados.
- Fotos originais preservadas. Fontes do P3 carregadas via Google Fonts com fallbacks locais.
- Motion leve centralizado em `src/animations/timelines/frontBase.ts`, com cleanup e movimento reduzido. Lenis existente mantido e ajustado para navegação suave curta.
- Classificação de chunks corrigida para não incluir módulos 3D não usados; nenhuma dependência adicionada ao projeto.
- Validação: typecheck, lint e build; navegador em 360, 390, 430, 768, 1024 e 1440 px, incluindo desktop 1440 × 900, toque, teclado, modal, SIM/NÃO e movimento reduzido. Sem overflow horizontal ou exceções de execução nos testes.
- P5: Brain/câmera 3D, objetos definitivos, NÃO avançado, celebração pesada e easter eggs. Sem deploy ou merge em `main` no P4.
