
# GitHub Copilot Prompt: Construção de um Crypto Volatility Dashboard Avançado

## 1. Visão Geral do Projeto

**Objetivo:** Construir um dashboard web em tempo real para análise de volatilidade de criptomoedas. O site deve ser moderno, rápido, intuitivo e, o mais importante, fornecer sinais de trading (Bullish/Bearish/Neutral) baseados em uma lógica aprimorada de múltiplos indicadores técnicos.

**Público-Alvo:** Traders de criptomoedas (iniciantes a intermediários) que buscam identificar oportunidades de trading de curto e médio prazo baseadas em momentum e volatilidade.

**Repositório de Referência (para estrutura e UI):** O projeto deve ser semelhante ou superior ao encontrado no seguinte código-fonte: `https://replit.com/@Manus-AI/Crypto-Dashboard-Base` (use a estrutura de componentes e o layout como inspiração).

---

## 2. Especificações Técnicas

**Stack de Tecnologia (Sugestão):**
- **Frontend:** React / Next.js (para SSR/SSG) com TypeScript
- **Estilização:** TailwindCSS + shadcn/ui (para componentes pré-construídos e design system)
- **Gráficos:** TradingView Lightweight Charts ou Recharts (para sparklines e gráficos detalhados)
- **State Management:** React Query (@tanstack/react-query) para data fetching, caching e state management assíncrono.
- **Roteamento:** Next.js App Router ou `wouter` (se usar Vite)
- **Build Tool:** Vite ou Next.js CLI

**Fonte de Dados:**
- **Dados de Mercado em Tempo Real:** Conectar-se a uma API de WebSocket de uma exchange de criptomoedas (ex: Binance, KuCoin) para receber atualizações de preço em tempo real.
- **Dados Históricos (OHLCV):** Utilizar uma API REST (ex: CoinGecko, API da exchange) para buscar dados históricos de velas (Open, High, Low, Close, Volume) necessários para o cálculo inicial dos indicadores.
- **Mínimo de Ativos:** O sistema deve monitorar no mínimo 1.000 criptomoedas.

---

## 3. Estrutura do Dashboard e Componentes

O dashboard deve ser organizado em uma tabela ou grid de cartões, onde cada linha/cartão representa uma criptomoeda. A interface deve ser limpa e densa em informações.

**Componentes Principais:**

1.  **`DashboardHeader.tsx`**: 
    -   Título: "Crypto Volatility Dashboard"
    -   Indicador de Status: "LIVE" com um ponto pulsante para mostrar a conexão WebSocket ativa.
    -   Indicador de Fluxo de Capital do Mercado (geral): Mostra se o sentimento geral do mercado (baseado nos top 100 ativos) é Bullish ou Bearish.

2.  **`FilterControls.tsx`**:
    -   **Campo de Busca:** Para filtrar moedas por nome ou símbolo (ex: "Bitcoin", "BTC").
    -   **Dropdown de Ordenação:** Permitir ordenar por: 
        -   `Sinal de Trading` (Bullish > Bearish > Neutral)
        -   `Volatility Score` (maior para menor)
        -   `Market Cap` (maior para menor)
        -   `Price Change 24h` (maior para menor e vice-versa)
    -   **Checkbox/Toggle:** Para "Mostrar apenas favoritos".

3.  **`TokenGrid.tsx` / `TokenList.tsx`**:
    -   Renderiza a lista de `TokenCard.tsx`.
    -   Deve ser virtualizado (usando `@tanstack/react-virtual`) para performance com mais de 1.000 itens.

4.  **`TokenCard.tsx`** (Componente central):
    -   **Informações Básicas:** Ícone da moeda, Nome (Bitcoin), Símbolo (BTC).
    -   **Preço Atual:** Com atualização em tempo real via WebSocket.
    -   **Sinal de Trading:** Um "pill" ou "badge" colorido: `🟢 BULLISH`, `🔴 BEARISH`, `⚪ NEUTRAL`.
    -   **Volatility Score:** Um número de 0 a 100 com uma barra de progresso colorida (azul para baixo, vermelho para alto).
    -   **RSI (14d):** Valor numérico do RSI.
    -   **Price Change (1h e 24h):** Variação percentual.
    -   **Volume 24h e Market Cap:** Formatados (ex: "$1.2T", "$50B").
    -   **Sparkline (7d):** Um pequeno gráfico de linha mostrando a tendência de preço dos últimos 7 dias.

5.  **`LoadingState.tsx` / `EmptyState.tsx`**:
    -   Componentes de skeleton para o estado de carregamento inicial.
    -   Mensagem amigável para quando a busca não retorna resultados ou a API falha.

---

## 4. Lógica Aprimorada para Sinais de Trading (Bullish/Bearish)

Esta é a parte mais crucial do projeto. A lógica para determinar o sinal de trading (`BULLISH`, `BEARISH`, `NEUTRAL`) deve ser implementada no backend ou em uma camada de serviço no frontend (se usar Next.js API routes). **Não deve ser calculada no lado do cliente para cada cartão.**

**Função Principal:** `calculateTradingSignal(assetData)`

Esta função receberá os dados de um ativo (preço, histórico OHLCV, volume, etc.) e retornará um objeto com o sinal e a confiança.

```typescript
interface AssetData {
  historicalData: { open: number; high: number; low: number; close: number; volume: number; timestamp: number; }[];
  currentPrice: number;
  volume24h: number;
  marketCap: number;
}

interface SignalResult {
  signal: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  confidence: number; // 0 a 1
  reason: string; // Breve explicação para o sinal
}

function calculateTradingSignal(assetData: AssetData): SignalResult {
  // Implementar a lógica abaixo
}
```

### Lógica de Pontuação para Sinais

Crie um sistema de pontuação onde diferentes condições adicionam ou removem pontos. O sinal final é baseado na pontuação total.

-   **Pontuação > 50:** `BULLISH`
-   **Pontuação < -50:** `BEARISH`
-   **-50 <= Pontuação <= 50:** `NEUTRAL`

#### Fatores de Pontuação:

1.  **RSI (14d):**
    -   RSI < 30: **+25 pontos** (Sobrevenda forte)
    -   RSI < 40: **+15 pontos**
    -   RSI > 70: **-25 pontos** (Sobrecompra forte)
    -   RSI > 60: **-15 pontos**

2.  **Divergência RSI (Análise sobre os últimos 30 períodos):**
    -   **Divergência Bullish Clássica** (preço faz mínima menor, RSI faz mínima maior): **+40 pontos**
    -   **Divergência Bearish Clássica** (preço faz máxima maior, RSI faz máxima menor): **-40 pontos**

3.  **Volume:**
    -   Volume 24h 50% acima da média dos últimos 7 dias E preço subindo: **+15 pontos**
    -   Volume 24h 50% acima da média dos últimos 7 dias E preço caindo: **-15 pontos**

4.  **Volatility Score (calculado a partir do ATR ou desvio padrão):**
    -   Volatility Score saindo de baixo (<40) para alto (>60) com movimento de preço positivo: **+20 pontos** (Breakout de volatilidade)
    -   Volatility Score saindo de baixo (<40) para alto (>60) com movimento de preço negativo: **-20 pontos**

5.  **Cruzamento de Médias Móveis (EMA):**
    -   EMA de 9 períodos cruza acima da EMA de 21 períodos: **+25 pontos** (Golden Cross de curto prazo)
    -   EMA de 9 períodos cruza abaixo da EMA de 21 períodos: **-25 pontos** (Death Cross de curto prazo)

6.  **Bollinger Bands:**
    -   Preço toca a banda inferior e começa a reverter com volume: **+15 pontos**
    -   Preço toca a banda superior e começa a reverter com volume: **-15 pontos**

### Exemplo de Implementação da Lógica:

```typescript
// Dentro de calculateTradingSignal

let score = 0;
let reasons = [];

// 1. Cálculo do RSI
const rsi = calculateRSI(assetData.historicalData);
if (rsi < 30) { score += 25; reasons.push("RSI Oversold"); }
if (rsi < 40) { score += 15; }
if (rsi > 70) { score -= 25; reasons.push("RSI Overbought"); }
if (rsi > 60) { score -= 15; }

// 2. Detecção de Divergência RSI
const bullishDivergence = detectRsiBullishDivergence(assetData.historicalData, rsiData);
if (bullishDivergence) { score += 40; reasons.push("Bullish RSI Divergence"); }

const bearishDivergence = detectRsiBearishDivergence(assetData.historicalData, rsiData);
if (bearishDivergence) { score -= 40; reasons.push("Bearish RSI Divergence"); }

// ... implementar os outros fatores de pontuação ...

// Determinar o sinal final
let finalSignal: SignalResult['signal'] = 'NEUTRAL';
if (score > 50) finalSignal = 'BULLISH';
if (score < -50) finalSignal = 'BEARISH';

return {
  signal: finalSignal,
  confidence: Math.min(Math.abs(score) / 100, 1),
  reason: reasons.join(', ')
};
```

---

## 5. Passos para o Desenvolvimento

1.  **Setup do Projeto:** Crie um novo repositório usando Next.js + TypeScript + TailwindCSS.
2.  **Estrutura de Componentes:** Crie os arquivos de componentes vazios (`TokenCard.tsx`, `FilterControls.tsx`, etc.).
3.  **Conexão com API:** Implemente a lógica para buscar dados históricos e conectar ao WebSocket para dados em tempo real.
4.  **Cálculo de Indicadores:** Crie as funções utilitárias para calcular RSI, Volatility Score, EMAs, etc.
5.  **Lógica de Sinais:** Implemente a função `calculateTradingSignal` com o sistema de pontuação detalhado acima.
6.  **UI e Frontend:** Construa a interface, conectando os dados e os sinais aos componentes React.
7.  **Otimização:** Implemente a virtualização da lista e otimize os re-renders.
8.  **Deploy:** Configure o deploy para uma plataforma como Vercel ou Netlify.

---

**Conclusão do Prompt:** Este prompt deve guiar o GitHub Copilot a gerar um projeto completo e funcional. O foco principal deve ser a qualidade e a robustez da lógica de sinais, que é o diferencial deste dashboard. Peça ao Copilot para gerar o código passo a passo, começando pela estrutura do projeto e avançando para a lógica de backend e a interface do usuário.
