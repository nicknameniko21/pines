# 📊 Pines - Crypto Volatility Dashboard & TradingView Pine Scripts

This repository contains **two main components**:

1. **🌐 Crypto Volatility Dashboard** - A React/TypeScript/Vite web application for real-time cryptocurrency volatility analysis
2. **📈 TradingView Pine Scripts** - A collection of 5 professional Pine Script v5 indicators for technical analysis

---

## 🌐 Crypto Volatility Dashboard

Dashboard de análise de volatilidade de criptomoedas em tempo real, planejado para rastrear os principais tokens (ex.: top 20) e escalável para monitorar centenas ou milhares de ativos conforme a API disponível.

### Live Demo

🚀 **[View Dashboard](https://nicknameniko21.github.io/pines/)**

### Estrutura do Projeto

```
src/
├── main.tsx                    # Ponto de entrada da aplicação
├── App.tsx                     # Componente principal com rotas
├── index.css                   # Estilos globais (Tailwind CSS)
├── components/
│   ├── DashboardHeader.tsx     # Cabeçalho com status e contadores
│   ├── FilterControls.tsx      # Controles de filtro e busca
│   ├── TokenCard.tsx           # Card de exibição de token
│   ├── Sparkline.tsx           # Gráfico de linha simples
│   ├── LoadingState.tsx        # Estado de carregamento (skeletons)
│   └── EmptyState.tsx          # Estados vazios e de erro
├── lib/
│   ├── queryClient.ts          # Configuração do React Query
│   └── utils.ts                # Utilitários (cn para classes)
└── pages/
    ├── Dashboard.tsx           # Página principal do dashboard
    └── not-found.tsx           # Página 404
```

## Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework de CSS utilitário
- **@tanstack/react-query** - Gerenciamento de estado do servidor
- **wouter** - Roteamento leve
- **lucide-react** - Ícones
- **shadcn/ui** - Componentes de UI

## Funcionalidades

### Dashboard Principal
- Exibição em grid de tokens de criptomoedas
- Atualização em tempo real via WebSocket
- Indicador de status de conexão (LIVE/OFFLINE)
- Contador de próxima atualização

### Filtros
- **Busca**: Pesquisa por símbolo ou nome do token
- **Ordenação**: Por volatilidade, mudança de preço, volume ou market cap
- **Timeframe**: Mudança de preço em 1h ou 24h
- **Market Cap**: Filtro por tamanho (large, mid, small, micro)
- **Alpha Only**: Mostrar apenas tokens alpha

### TokenCard
- Símbolo e nome do token
- Preço atual com formatação
- Mudança percentual com indicador visual
- Gráfico sparkline de 24h
- Score de volatilidade com barra de progresso
- Volume 24h e Market Cap
- RSI (Relative Strength Index)
- Sinal de trading (BULLISH/BEARISH/NEUTRAL)
- Timestamp da última atualização

## API Esperada

O dashboard espera uma API REST com os seguintes endpoints:

### GET /api/tokens
Retorna array de tokens com a seguinte estrutura:

```typescript
interface Token {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  currentPrice: number;
  priceChangePercentage1h: number;
  priceChangePercentage24h: number;
  volatilityScore: number;
  volume24h: number;
  marketCap: number;
  rsi: number;
  signal: "bullish" | "bearish" | "neutral";
  isAlpha: boolean;
  sparklineData: number[];
  lastUpdated: string;
}
```

### WebSocket /ws
Conexão WebSocket para atualizações em tempo real:

```typescript
// Mensagem recebida
interface UpdateMessage {
  type: "update";
  data: {
    updatedIds: string[];
  };
}
```

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Dependências Necessárias

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "@tanstack/react-query": "^5.x",
    "wouter": "^3.x",
    "lucide-react": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

## Componentes UI (shadcn/ui)

O projeto utiliza os seguintes componentes do shadcn/ui que precisam ser instalados:

- Badge
- Button
- Card
- Input
- Label
- Progress
- Select
- Skeleton
- Switch
- Toaster
- Tooltip

---

## 📈 TradingView Pine Scripts

The `pine-scripts/` directory contains **5 professional Pine Script v5 indicators** ready to use in TradingView:

1. **VolatilitySignals.pine** - Complete trading system with RSI, EMA, Bollinger Bands, ATR, and volume analysis
2. **VolatilityScore2.pine** - Adaptive multi-component volatility scoring with tunable weightings
3. **RSIDivergence.pine** - Pivot-based RSI divergence detection for trend reversals
4. **BBBreakout.pine** - Bollinger Band squeeze and breakout signals with volume confirmation
5. **VolumeProfile.pine** - Advanced volume analysis with VWAP, POC, and volume delta

### How to Use Pine Scripts

1. Open [TradingView](https://www.tradingview.com)
2. Click on "Chart" and then "Pine Editor" at the bottom
3. Copy the content of any `.pine` file from the `pine-scripts/` directory
4. Paste into the Pine Editor and click "Add to Chart"

📖 **[Full Pine Scripts Documentation](pine-scripts/README.md)**

---

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🚀 Deployment

The dashboard is automatically deployed to GitHub Pages at [https://nicknameniko21.github.io/pines/](https://nicknameniko21.github.io/pines/) when changes are pushed to the main branch.

The deployment workflow builds the Vite app and publishes the `dist/` directory to GitHub Pages.

---

## 📁 Repository Structure

```
pines/
├── src/                          # React application source code
│   ├── components/               # React components
│   ├── pages/                    # Page components
│   └── lib/                      # Utilities and configuration
├── pine-scripts/                 # TradingView Pine Script indicators
│   ├── VolatilitySignals.pine
│   ├── VolatilityScore2.pine
│   ├── RSIDivergence.pine
│   ├── BBBreakout.pine
│   ├── VolumeProfile.pine
│   └── README.md                 # Pine scripts documentation
├── dist/                         # Build output (not in git)
├── node_modules/                 # Dependencies (not in git)
├── index.html                    # HTML entry point
├── vite.config.ts                # Vite configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

---

## Licença

MIT
