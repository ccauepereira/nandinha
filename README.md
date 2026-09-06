# Nandinha 💖

Projeto web romântico e interativo de alta imersão visual, combinando narrativa sensível, computação gráfica 3D (WebGL / Three.js) e motion design refinado.

---

## 🛠️ Stack Tecnológica

- **Front-end Core:** React 19, TypeScript, Vite
- **3D & WebGL:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Motion & Animação:** Anime.js
- **Scroll Engine:** Lenis
- **Estilos:** CSS Modules + Design Tokens via CSS Custom Properties
- **Qualidade & Linting:** ESLint 9 (Flat config), Prettier
- **Deploy:** Vercel

---

## 🏛️ Arquitetura e Organização

A arquitetura do projeto prioriza desacoplamento, carregamento adaptativo e mobile-first:

- `public/assets/`: Mídias estáticas catalogadas por domínio (`photos`, `models`, `stickers`, `audio`, etc.).
- `src/components/`: Componentes reutilizáveis isolados de regras narrativas.
- `src/sections/`: Seções verticais estruturais da experiência.
- `src/features/`: Módulos interativos autônomos.
- `src/animations/`: Core e timelines do Anime.js protegidas por `prefers-reduced-motion`.
- `src/three/`: Infraestrutura 3D com container adaptativo por capacidade do dispositivo.
- `src/data/`: Conteúdo desacoplado do JSX (schemas e fontes de dados estruturados).
- `src/styles/`: Design tokens, resets e variáveis globais.

Para detalhes completos de engenharia, consulte [ARCHITECTURE.md](docs/ARCHITECTURE.md).

---

## 🌿 Estratégia de Branches

O repositório segue a regra estrita de **no máximo 3 branches ativas simultaneamente**:

1. `main`: Código de produção estável e deployado.
2. `develop`: Ramo principal de integração de desenvolvimento.
3. `feat/<nome>`: Uma única feature branch ativa por ciclo (ex.: `feat/project-foundation`).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 20+ (recomendado Node 22+)
- Gerenciador de pacotes `npm` ou `pnpm`

### Instalação e Execução
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Verificar tipagem TypeScript
npm run typecheck

# Executar linter
npm run lint

# Formatar código
npm run format
```

---

## ⚡ Performance & Mobile-First

- **Ergonomia Móvel:** Base de cálculo primária em `390 × 844` com alvos de toque mínimos de `44px`.
- **DPR Dinâmico:** Throttling de taxa de pixels do Canvas 3D para preservar bateria e temperatura em celulares.
- **Code Splitting:** Empacotamento inteligente de bibliotecas pesadas (`vendor-three`, `vendor-motion`, `vendor-react`).
- **Respeito à Acessibilidade:** Conformidade com preferências de movimento reduzido no sistema operacional.

---

## 📄 Licença
Projeto privado e autoral. Todos os direitos reservados.
