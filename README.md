# Pine Script Trading Indicators

This repository contains professional-grade Pine Script indicators for TradingView, optimized for live trading use.

## TradingAlerts_All.pine

A comprehensive trading signals script that generates high-quality buy/sell alerts by combining multiple technical indicators with weighted scoring.

### Features

#### Multi-Indicator Analysis
- **RSI (Relative Strength Index)**: Identifies overbought/oversold conditions
- **EMA (Exponential Moving Averages)**: Analyzes trend direction and crossovers (fast, slow, and trend EMAs)
- **Volume Analysis**: Confirms price movements with volume spikes
- **Price Action**: Evaluates candle patterns and breakouts

#### Intelligent Scoring System
- Each component contributes a weighted score (bullish or bearish)
- Configurable weights allow customization based on trading style
- Aggregated total score determines signal strength
- Prevents signal repetition and reduces noise

#### Visual Elements
- **EMA Lines**: Fast (9), Slow (21), and Trend (50) EMAs plotted on chart
- **Background Colors**: Green for bullish conditions, red for bearish
- **Signal Markers**: Clear BUY/SELL labels at entry points
- **Score Table**: Real-time display of all component scores and total

#### Alerts
- Configurable buy/sell alerts with detailed score breakdown
- One alert per bar to prevent spam
- Includes all component scores in alert message

### Configuration

#### RSI Settings
- **Length**: Period for RSI calculation (default: 14)
- **Overbought/Oversold**: Threshold levels (default: 70/30)
- **Weight**: Scoring multiplier (default: 1.0)

#### EMA Settings
- **Fast EMA**: Quick trend changes (default: 9)
- **Slow EMA**: Moderate trend (default: 21)
- **Trend EMA**: Major trend direction (default: 50)
- **Weight**: Scoring multiplier (default: 1.0)

#### Volume Settings
- **MA Length**: Volume moving average period (default: 20)
- **Spike Threshold**: Multiplier for significant volume (default: 1.5x)
- **Weight**: Scoring multiplier (default: 1.0)

#### Price Action Settings
- **Body Threshold**: Minimum candle body ratio for strong candles (default: 0.5)
- **Weight**: Scoring multiplier (default: 1.0)

#### Signal Settings
- **Signal Threshold**: Minimum total score for buy/sell signal (default: 6.0)
- **Display Options**: Toggle table, background colors, and signal markers

### Scoring Logic

#### RSI Score
- Strong Bullish (+2.0): RSI < 30 (oversold)
- Moderate Bullish (+1.0): RSI < 40
- Moderate Bearish (-1.0): RSI > 60
- Strong Bearish (-2.0): RSI > 70 (overbought)

#### EMA Score
- Golden Cross (+2.0): Fast EMA crosses above Slow EMA
- Strong Uptrend (+1.5): Fast > Slow and Price > Trend EMA
- Death Cross (-2.0): Fast EMA crosses below Slow EMA
- Strong Downtrend (-1.5): Fast < Slow and Price < Trend EMA

#### Volume Score
- Strong Confirmation (±2.0): Volume spike with strong directional candle
- Moderate Confirmation (±1.0): Above average volume with directional candle

#### Price Action Score
- Strong Breakout (+2.0): Large bullish candle breaking previous high
- Strong Breakdown (-2.0): Large bearish candle breaking previous low
- Strong Candle (±1.5): Large body candle in direction of trend

### Usage

1. Add the indicator to your TradingView chart
2. Adjust weights based on your trading style and asset class
3. Set signal threshold to filter signals (higher = fewer but stronger signals)
4. Enable alerts for automated notifications
5. Use the score table to understand signal composition

### Best Practices

- **Backtesting**: Test settings on historical data before live trading
- **Confirmation**: Use additional analysis to confirm signals
- **Risk Management**: Always use stop losses and position sizing
- **Asset Tuning**: Different assets may require different weight settings
- **Timeframe**: Higher timeframes (4H, Daily) typically produce more reliable signals

### Code Optimization

- Uses functions to eliminate code duplication
- Efficient calculations with minimal repainting
- Optimized memory usage for live trading
- Clear variable naming and documentation
- Grouped settings for easy navigation

### License

Mozilla Public License 2.0