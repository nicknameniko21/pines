# Crypto Volatility Dashboard

Dashboard de análise de volatilidade de criptomoedas em tempo real, rastreando os 20 principais tokens com maior probabilidade de movimentos significativos de preço.

## Estrutura do Projeto

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

## Licença

MIT
