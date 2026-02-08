# Pines - Trading Tools & Analysis

This repository contains trading analysis tools including a **Crypto Volatility Dashboard** and **TradingView Pine Script indicators**.

## 📁 Repository Structure

- **`/` (root)** - Crypto Volatility Dashboard (React/TypeScript web application)
- **`/pine-scripts/`** - TradingView Pine Script indicators and documentation

---

## 🚀 Crypto Volatility Dashboard

Dashboard de análise de volatilidade de criptomoedas em tempo real, planejado para rastrear os principais tokens (ex.: top 20) e escalável para monitorar centenas ou milhares de ativos conforme a API disponível.

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

### Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework de CSS utilitário
- **@tanstack/react-query** - Gerenciamento de estado do servidor
- **wouter** - Roteamento leve
- **lucide-react** - Ícones
- **shadcn/ui** - Componentes de UI

### Funcionalidades

- Exibição em grid de tokens de criptomoedas
- Atualização em tempo real via WebSocket
- Indicador de status de conexão (LIVE/OFFLINE)
- Filtros avançados (busca, ordenação, timeframe, market cap)
- Score de volatilidade e sinais de trading
- Gráficos sparkline e indicadores técnicos

### Instalação

```bash
npm install
npm run dev        # Desenvolvimento
npm run build      # Produção
```

---

## 📊 Pine Scripts

Professional TradingView indicators for volatility analysis and trading signals.

### Indicators

- **VolatilityScore2.pine** - Multi-component volatility scoring system (ATR, Bollinger Bands, Standard Deviation)
- **VolatilitySignals.pine** - Multi-indicator trading signal system with RSI, EMA, BB, ATR, and volume analysis

### Features

- Adaptive component weighting
- Non-redundant signals
- Real-time info tables
- ATR-based risk management
- Pine Script v5 best practices

📖 **[View Pine Scripts Documentation →](pine-scripts/README.md)**

---

## 📄 License

MIT License - This project is provided as-is for educational and trading purposes.
