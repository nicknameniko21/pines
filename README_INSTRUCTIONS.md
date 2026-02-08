# Pacote de Construção do Crypto Volatility Dashboard

Este pacote contém todos os recursos necessários para guiar o GitHub Copilot na criação de um Crypto Volatility Dashboard avançado.

## Conteúdo do Pacote

1.  **`copilot_prompt.md`**: Este é o arquivo principal. Contém um prompt extremamente detalhado e estruturado para ser usado com o GitHub Copilot. Ele descreve o projeto, as especificações técnicas, a arquitetura dos componentes e, mais importante, a lógica aprimorada para a geração de sinais de trading.

2.  **`TRADING_GUIDE.md`**: Um guia completo que explica as teorias e estratégias por trás dos indicadores utilizados no dashboard (RSI, Volatilidade, Sinais Bullish/Bearish). Este documento serve como a base teórica para a lógica implementada no prompt.

3.  **`QUICK_REFERENCE.md`**: Uma "cheat sheet" ou folha de consulta rápida para traders, resumindo os principais sinais e setups de trading. Ótimo para referência rápida durante o uso do dashboard.

4.  **`src/` (diretório)**: Contém o código-fonte de um projeto de referência. Use-o como inspiração para a estrutura de componentes e o layout da interface do usuário.

## Como Utilizar

1.  **Descompacte o arquivo .zip** em seu ambiente de desenvolvimento.

2.  **Abra o arquivo `copilot_prompt.md`** em seu editor de código (como o VS Code com a extensão do GitHub Copilot instalada).

3.  **Use o prompt em partes:** Copie e cole seções do prompt no chat do GitHub Copilot ou use-o como um guia enquanto você codifica. Siga os passos sugeridos na seção "5. Passos para o Desenvolvimento" do prompt.

    -   **Exemplo de como começar:**
        > "Olá, Copilot. Quero construir um Crypto Volatility Dashboard. Vamos começar com o setup do projeto. Crie um novo repositório usando Next.js com TypeScript e TailwindCSS."

    -   **Para a lógica de sinais:**
        > "Agora, vamos focar na lógica de sinais de trading. Preciso de uma função chamada `calculateTradingSignal` que receba dados de um ativo e retorne um sinal (BULLISH, BEARISH, ou NEUTRAL) e uma pontuação de confiança. A lógica deve ser baseada em um sistema de pontuação que considera RSI, divergências, volume e outros indicadores, conforme descrito neste documento: [cole aqui a seção 4 do `copilot_prompt.md`]"

4.  **Consulte os Guias:** Use o `TRADING_GUIDE.md` e o `QUICK_REFERENCE.md` para entender o porquê por trás da lógica e para refinar as estratégias que o dashboard irá sinalizar.

5.  **Use o Código de Referência:** Explore o diretório `src/` para ver exemplos de como os componentes React (`TokenCard`, `DashboardHeader`, etc.) podem ser estruturados.

O objetivo é que, ao final do processo, você tenha um repositório completo e funcional de um dashboard de criptomoedas, construído com as melhores práticas e uma lógica de trading sólida e bem fundamentada.
