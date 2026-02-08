# Guia Passo a Passo: Usando o Prompt com GitHub Copilot

Este guia mostra exatamente quais comandos e prompts usar para construir o Crypto Volatility Dashboard do zero com a ajuda do GitHub Copilot.

**Pré-requisitos:**
-   Você tem o `gh` (GitHub CLI) instalado e autenticado.
-   Você tem Node.js e npm/yarn/pnpm instalados.
-   Você tem a extensão GitHub Copilot Chat em seu editor (ex: VS Code).

---

### Passo 1: Criar o Repositório e Configurar o Projeto

1.  **No seu terminal, crie o repositório no GitHub:**

    ```bash
    gh repo create crypto-dashboard --public --clone
    cd crypto-dashboard
    ```

2.  **Abra o chat do GitHub Copilot e use o seguinte prompt para iniciar o projeto:**

    > **Prompt para Copilot:**
    > "Olá! Quero criar um dashboard de criptomoedas. Configure um novo projeto Next.js com TypeScript e TailwindCSS usando o `create-next-app`. Use o App Router e as configurações padrão."

    Copilot irá fornecer o comando. Execute-o no seu terminal:

    ```bash
    npx create-next-app@latest .
    ```
    (Siga as instruções do `create-next-app`)

---

### Passo 2: Estrutura de Arquivos e Componentes

Agora, peça ao Copilot para criar a estrutura de arquivos. Isso economiza muito tempo.

> **Prompt para Copilot:**
> "Crie a seguinte estrutura de arquivos e pastas dentro do diretório `src/app/`:
> - `src/app/components/`
>   - `DashboardHeader.tsx`
>   - `FilterControls.tsx`
>   - `TokenGrid.tsx`
>   - `TokenCard.tsx`
>   - `LoadingState.tsx`
>   - `EmptyState.tsx`
> - `src/app/lib/`
>   - `utils.ts`
>   - `types.ts`
> - `src/app/services/`
>   - `cryptoApi.ts`
>   - `tradingSignals.ts`
>
> Deixe os arquivos `.tsx` com um componente React básico de exportação padrão."

---

### Passo 3: Implementar a Lógica de Sinais (O Mais Importante)

Esta é a parte central. Vamos focar no arquivo `src/app/services/tradingSignals.ts`.

1.  **Abra o arquivo `copilot_prompt.md` que você recebeu.**
2.  **Copie TODA a Seção 4 (`Lógica Aprimorada para Sinais de Trading`).**
3.  **Abra o arquivo `src/app/services/tradingSignals.ts` no seu editor.**
4.  **Cole a seção copiada no chat do Copilot e use este prompt:**

    > **Prompt para Copilot:**
    > "Implemente a lógica descrita abaixo neste arquivo (`tradingSignals.ts`). Crie a função `calculateTradingSignal` e todas as funções auxiliares necessárias (como `calculateRSI`, `detectRsiBullishDivergence`, etc.). A lógica deve seguir exatamente o sistema de pontuação fornecido. Use dados mocados (mock data) por enquanto para os cálculos."

    **(Cole a Seção 4 do `copilot_prompt.md` aqui)**

Copilot irá gerar o código para a análise dos sinais. Revise e ajuste se necessário.

---

### Passo 4: Conectar à API de Criptomoedas

Agora, vamos para o arquivo `src/app/services/cryptoApi.ts`.

> **Prompt para Copilot:**
> "Neste arquivo (`cryptoApi.ts`), crie funções para buscar dados de criptomoedas da API da CoinGecko (é gratuita e boa para começar).
> 1. Crie uma função `getMarketData` que busca a lista de moedas com preço, market cap, volume, etc.
> 2. Crie uma função `getHistoricalData` que busca os dados de velas (OHLCV) para uma moeda específica nos últimos 30 dias.
> 3. Exporte essas funções."

---

### Passo 5: Construir os Componentes da UI

Agora, construa cada componente um por um. Abra o arquivo do componente e use o prompt.

> **Exemplo de Prompt para `TokenCard.tsx`:**
> "Crie o componente `TokenCard`. Ele deve receber as propriedades de uma moeda (nome, símbolo, preço, sinal, rsi, etc.) e exibi-las em um layout de cartão usando TailwindCSS. O sinal ('BULLISH', 'BEARISH') deve ser um 'badge' colorido. Inclua uma sparkline simples (podemos usar uma biblioteca depois). Use os componentes do `shadcn/ui` para o cartão e o badge."

Repita este processo para `DashboardHeader.tsx`, `FilterControls.tsx`, e os outros componentes, usando a descrição deles na **Seção 3 do `copilot_prompt.md`** como guia.

---

### Passo 6: Juntar Tudo na Página Principal

Finalmente, vá para `src/app/page.tsx`.

> **Prompt para Copilot:**
> "Nesta página, vamos montar o dashboard.
> 1. Use o `useEffect` para chamar a função `getMarketData` do nosso serviço de API.
> 2. Para cada moeda recebida, chame a função `getHistoricalData` e, em seguida, a `calculateTradingSignal` para obter o sinal de trading.
> 3. Armazene os dados combinados em um estado (`useState`).
> 4. Renderize o componente `DashboardHeader`.
> 5. Renderize o `FilterControls` e passe as funções para atualizar o estado de filtro/ordenação.
> 6. Renderize o `TokenGrid`, passando a lista de moedas com seus sinais para que ele possa renderizar cada `TokenCard`.
> 7. Mostre o componente `LoadingState` enquanto os dados estão sendo carregados."

---

### Passo 7: Executar o Projeto

Após seguir os passos, você deve ter um projeto funcional. Execute-o no seu terminal:

```bash
npm run dev
```

Abra `http://localhost:3000` no seu navegador para ver o dashboard em ação.

Este guia fornece um caminho claro. Sinta-se à vontade para pedir ao Copilot para refatorar, adicionar testes ou melhorar o estilo conforme avança!
