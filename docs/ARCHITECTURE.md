# Arquitetura e Estrutura Técnica — Projeto Nandinha

## 1. Visão Geral

O projeto **Nandinha** é uma aplicação web interativa e imersiva construída com **React**, **TypeScript**, **Vite**, **Three.js / React Three Fiber (R3F)**, **Anime.js** e **Lenis**.
O objetivo primário desta arquitetura é suportar uma experiência visualmente rica e pesada em animação e 3D, mantendo ao mesmo tempo alta performance em dispositivos móveis, tempos de carregamento controlados e um codebase modular e sustentável.

---

## 2. Stack Tecnológica e Decisões

| Tecnologia               | Finalidade                     | Justificativa Técnica                                                                                 |
| :----------------------- | :----------------------------- | :---------------------------------------------------------------------------------------------------- |
| **React 19**             | Biblioteca de UI               | Concorrência moderna, suporte robusto a Suspense e Actions assíncronas.                               |
| **TypeScript 5.7+**      | Tipagem Estática               | Prevenção de bugs em tempo de compilação; contratos claros de dados e props; proibição de `any`.      |
| **Vite 6**               | Build tool & Dev server        | HMR quase instantâneo em desenvolvimento e compilação otimizada via Rollup no build.                  |
| **Three.js (0.174)**     | Renderizador WebGL             | Base para renderização 3D, shaders, iluminação e modelos GLTF/GLB.                                    |
| **@react-three/fiber**   | Reconciler React para Three.js | Permite compor cenas Three.js declarativamente dentro da árvore de componentes do React.              |
| **@react-three/drei**    | Utilitários R3F                | Abstrações de alta performance para loaders (`useGLTF`), controles, ambientes e texturas.             |
| **Anime.js 3.2**         | Motor de Animação DOM/SVG      | Controle minucioso de timelines, stagger, propriedades numéricas e transformações complexas.          |
| **Lenis**                | Smooth Scrolling               | Rolagem normalizada entre navegadores e dispositivos móveis, sem sequestrar o scroll nativo.          |
| **CSS Modules & Tokens** | Estilização Modular            | Isolamento de escopo sem overhead de runtime de CSS-in-JS; variáveis CSS para design tokens do Figma. |

---

## 3. Topologia de Diretórios e Responsabilidades

```text
nandinha/
├── docs/                       # Documentação técnica e especificações de design
│   ├── ARCHITECTURE.md         # Este documento
│   ├── FIGMA.md                # Mapeamento de tokens e frames do Figma
│   ├── DESIGN-SYSTEM.md        # Guia de componentes e átomos visuais
│   ├── STORYBOARD.md           # Roteiro narrativo e transição entre seções
│   ├── MOTION.md               # Especificações de curvas e timing
│   └── ASSETS.md               # Inventário e otimização de mídias
│
├── public/                     # Arquivos estáticos servidos diretamente
│   └── assets/
│       ├── photos/             # Imagens rasterizadas
│       │   ├── fernanda/       # Retratos individuais
│       │   └── couple/         # Momentos juntos
│       ├── videos/             # Vídeos curtos otimizados (MP4/WebM)
│       ├── audio/              # Efeitos sonoros e trilha ambiente
│       ├── stickers/           # Elementos 2D flutuantes
│       ├── textures/           # Mapas de normais, rugosidade e matcaps
│       ├── icons/              # Favicon e ícones de navegação
│       ├── models/             # Modelos 3D compactados (.glb)
│       │   ├── brain/          # Cérebro interativo
│       │   ├── hearts/         # Corações e símbolos
│       │   ├── bows/           # Laços e ornamentos
│       │   └── decorations/    # Detalhes complementares
│       └── fonts/              # Fontes locais (WOFF2)
│
├── src/
│   ├── assets/                 # SVGs e imagens importadas diretamente via bundler
│   ├── components/             # Blocos reutilizáveis sem dependência de estado global
│   │   ├── common/             # Botões, cards, frames polaroid, wrappers
│   │   └── feedback/           # Loaders, error boundaries e fallbacks
│   ├── sections/               # Grandes blocos narrativos da página (Hero, Memories, etc.)
│   ├── features/               # Módulos com regras de negócio e interações complexas
│   ├── animations/             # Motor e timelines de movimento
│   │   ├── core/               # Hook useAnime, animeEngine, verificação de reduced-motion
│   │   └── timelines/          # Orquestrações desacopladas por seção
│   ├── three/                  # Infraestrutura WebGL / R3F
│   │   ├── canvas/             # Wrapper CanvasContainer com DPR adaptativo
│   │   ├── components/         # Meshes, luzes e partículas reutilizáveis
│   │   ├── loaders/            # Indicadores de carregamento de shaders e assets 3D
│   │   ├── materials/          # Shaders customizados e materiais Three.js
│   │   └── scenes/             # Cenas completas montadas sob demanda (lazy)
│   ├── hooks/                  # Hooks utilitários (performance, scroll, visual viewport)
│   ├── data/                   # Conteúdo desacoplado de marcação JSX
│   │   ├── schemas/            # Contratos de tipagem estrita
│   │   └── mocks/              # Dados estruturados
│   ├── styles/                 # Camada de estilos globais
│   │   ├── reset.css           # Reset moderno
│   │   ├── tokens.css          # Design tokens (cores, espaçamento, fontes)
│   │   └── globals.css         # Regras base e integrações
│   ├── utils/                  # Funções puras de suporte
│   ├── types/                  # Tipos TypeScript compartilhados
│   ├── App.tsx                 # Ponto de entrada do layout e orquestração
│   └── main.tsx                # Bootstrap da aplicação React
│
├── .editorconfig
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vercel.json
├── vite.config.ts
└── README.md
```

---

## 4. Regras Arquiteturais

### 4.1. Componentes vs Sections vs Features

- **`components/`**: Átomos e moléculas puros e reutilizáveis (ex.: `Button`, `PolaroidCard`, `Modal`). Não conhecem a estrutura de seções narrativas.
- **`sections/`**: Blocos estruturais de página montados verticalmente (ex.: `HeroSection`, `BrainSection`, `MemoriesSection`). Consomem componentes e timelines.
- **`features/`**: Funcionalidades autônomas com estado e interatividade própria (ex.: player de música flutuante, botão fujão interativo, easter eggs).

### 4.2. Isolamento de Animações (Anime.js)

- Proibido instanciar `anime({...})` diretamente solto dentro do JSX de componentes.
- Toda timeline deve utilizar a abstração `src/animations/core/useAnime` ou `createSafeTimeline`, garantindo:
  1. Suporte automático a `prefers-reduced-motion`.
  2. Execução segura no ciclo de vida React.
  3. Pausa e descarte adequado no desmonte do componente (`cleanup`).

### 4.3. Isolamento e Throttling 3D (R3F)

- O canvas 3D é encapsulado em `src/three/canvas/CanvasContainer.tsx`.
- Dispositivos móveis e de menor capacidade têm DPR fixado em `[1, 1.5]` para evitar renderizações 4K inúteis que provocam aquecimento e queda de FPS.
- Cenas complexas devem ser importadas via `React.lazy()` e carregadas sob `Suspense`.

---

## 5. Estratégia de Branches (Regra das 3 Branches)

O repositório opera sob a estrita regra de **no máximo 3 branches simultâneas**:

1. **`main`**: Produção estável. Apenas código validado e pronto para deploy Vercel.
2. **`develop`**: Integração de desenvolvimento.
3. **`feat/<nome>`**: Apenas **uma** branch de feature ativa por vez (ex.: `feat/project-foundation`).
   - Ciclo: `feat/*` é finalizada -> aberta PR / merge em `develop` -> branch de feature é deletada antes de iniciar a próxima.
   - Jamais permitir 4 branches ativas simultaneamente.

---

## 6. Estratégia de Performance e Mobile-First

1. **Mobile-first**: Layout e ergonomia otimizados para telas a partir de `390px` (iPhone padrão).
2. **Code Splitting**: Chunks segmentados via Vite Rollup:
   - `vendor-react`
   - `vendor-three`
   - `vendor-motion`
3. **Assets sob demanda**: Imagens e modelos 3D não são embutidos no bundle principal JS.
4. **Respeito a Recursos**:
   - `navigator.hardwareConcurrency` para detecção de tier do dispositivo.
   - Desativação de shaders pesados em dispositivos classificados como `low-tier`.
   - Limitação de contagem de partículas em mobile.
