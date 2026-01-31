# Pines - TradingView Pine Scripts

A collection of professional Pine Script indicators for TradingView.

## Indicators

### VolatilityScore2.pine

A comprehensive volatility scoring indicator that combines ATR, Bollinger Bands width, and Standard Deviation into a single normalized score (0-100).

#### Features

1. **Adaptive Component Weighting**: Tune the weights of ATR, Bollinger Bands, and Standard Deviation components for different market conditions
2. **Streamlined Info Table**: Displays current volatility score, component values with their weights, volatility state, and trend
3. **Non-Redundant Signals**: High/low volatility signals only trigger on state changes, avoiding redundant alerts
4. **Visual Indicators**:
   - Main volatility score line (blue)
   - Component scores (ATR in orange, BB in purple, StdDev in teal)
   - Background coloring based on volatility level
   - Signal markers (triangles) on volatility state changes
5. **Smart Alerts**: Actionable alerts for high volatility, low volatility, and extreme volatility spikes
6. **Memory Efficient**: Optimized for Pine Script v5 best practices with minimal historical references

#### Usage

1. Copy the VolatilityScore2.pine script to TradingView
2. Adjust component weights based on your trading style:
   - Higher ATR weight for trend-following strategies
   - Higher BB weight for mean-reversion strategies
   - Balanced weights for general volatility monitoring
3. Set appropriate thresholds for your timeframe and instrument
4. Enable/disable display options as needed

#### Default Settings

- **ATR Weight**: 40% (captures directional volatility)
- **BB Weight**: 35% (captures price range expansion)
- **StdDev Weight**: 25% (captures statistical dispersion)
- **High Volatility Threshold**: 70
- **Low Volatility Threshold**: 30

#### Pine Script v5 Best Practices

- Uses proper v5 syntax and functions
- Efficient variable declarations with `var` where appropriate
- Minimal memory usage with optimized lookback periods
- Clear code organization and comments
- No redundant calculations or excessive historical references

---

### VolatilitySignals.pine

A comprehensive multi-indicator trading signal system that combines RSI, EMA crossovers, Bollinger Bands, ATR, and volume analysis to generate accurate buy/sell signals.

#### Features

##### Multiple Technical Indicators
- **RSI (Relative Strength Index)**: Identifies overbought/oversold conditions with neutral zones
- **EMA Crossovers**: Fast (9) and Slow (21) EMAs for trend identification and crossover signals
- **Bollinger Bands**: Dynamic support/resistance levels with rebound detection
- **ATR (Average True Range)**: Measures market volatility and calculates risk-adjusted levels
- **Volume Analysis**: Filters signals based on trading volume with trend detection

##### Advanced Signal Generation
- **Multi-Condition Buy Signals**: Three different buy conditions that can trigger signals:
  1. EMA bullish crossover with RSI confirmation
  2. Bollinger Band lower rebound with bullish trend
  3. Triple confirmation (RSI + EMA + BB) with volume
- **Multi-Condition Sell Signals**: Three different sell conditions:
  1. EMA bearish crossover with RSI confirmation
  2. Bollinger Band upper rebound with bearish trend
  3. Triple confirmation (RSI + EMA + BB) with volume
- **Signal Strength Indicator**: 0-4 scale showing the number of confirming indicators
- **Signal Spam Prevention**: Configurable minimum gap between signals to reduce noise
- **Configurable Filters**: Enable/disable individual indicators for signal generation

##### Risk Management
- **ATR-Based Stop Loss**: Automatic stop loss calculation using volatility
- **ATR-Based Take Profit**: 2:1 reward-risk ratio take profit levels
- **Visual Price Levels**: Optional display of stop loss and take profit on chart

##### User Interface
- **Organized Input Groups**: All parameters organized by category
- **Real-time Info Table**: Displays current values of all indicators plus signal strength
- **Color-coded Feedback**: Visual representation of market conditions
- **Trend Background**: Chart background changes based on EMA trend
- **Clear Visual Signals**: Buy/Sell labels with color coding

##### Alert System
- Buy Signal Alerts
- Sell Signal Alerts
- Bullish/Bearish EMA Cross Alerts

#### Usage

1. Open TradingView and navigate to Pine Editor
2. Copy the contents of `VolatilitySignals.pine`
3. Paste into Pine Editor
4. Click "Add to Chart"
5. Configure parameters in the indicator settings

#### Parameters

##### RSI Settings
- **RSI Length**: Period for RSI calculation (default: 14)
- **RSI Overbought**: Upper threshold for overbought condition (default: 70)
- **RSI Oversold**: Lower threshold for oversold condition (default: 30)

##### EMA Settings
- **Fast EMA Length**: Period for fast EMA (default: 9)
- **Slow EMA Length**: Period for slow EMA (default: 21)

##### Bollinger Bands
- **BB Length**: Period for BB calculation (default: 20)
- **BB Multiplier**: Standard deviation multiplier (default: 2.0)

##### ATR Settings
- **ATR Length**: Period for ATR calculation (default: 14)
- **ATR Multiplier**: Multiplier for volatility threshold (default: 1.5)

##### Volume Settings
- **Volume MA Length**: Period for volume moving average (default: 20)
- **Volume Threshold Multiplier**: Multiplier for high volume detection (default: 1.5)

##### Signal Filters
- **Enable RSI Signals**: Include RSI in signal generation
- **Enable EMA Signals**: Include EMA crossovers in signal generation
- **Enable BB Signals**: Include Bollinger Bands in signal generation
- **Enable Volume Filter**: Filter signals by volume threshold
- **Min Bars Between Signals**: Minimum gap between signals to reduce noise (default: 5)

##### Display Settings
- **Show Stop Loss/Take Profit**: Display ATR-based risk management levels
- **Show Signal Strength**: Display real-time signal strength in info table

#### Performance Optimizations

- **Efficient Calculations**: Uses Pine Script's built-in ta.* functions for optimal performance
- **Limited Lookback**: max_bars_back set to 500 for memory efficiency
- **Conditional Plotting**: Table updates only on the last bar to minimize CPU usage
- **Minimal Repainting**: Signal logic designed to minimize repainting issues
- **Smart Signal Filtering**: Prevents signal spam with configurable gap between signals
- **Optimized Indicator Combinations**: Multiple signal conditions reduce false positives
- **Variable Management**: Proper use of var keyword for efficient state management

#### Best Practices

1. **Backtesting**: Always backtest the strategy on historical data before live trading
2. **Risk Management**: Use proper stop-loss and position sizing
3. **Multiple Timeframes**: Check signals across different timeframes for confirmation
4. **Market Conditions**: Adjust parameters based on market volatility and asset characteristics
5. **Combine with Other Tools**: Use in conjunction with other analysis methods

#### Technical Details

- **Pine Script Version**: 5
- **Overlay**: True (plots on the main price chart)
- **Indicator Type**: Technical Analysis Signal Generator
- **Update Frequency**: Real-time on each bar close

#### Customization

The script is highly customizable. You can:
- Adjust all indicator parameters to match your trading style
- Enable/disable individual signal components
- Modify colors and visual elements
- Add additional indicators or filters
- Customize alert messages

---

## License

This project is provided as-is for educational and trading purposes.

## Support

For issues, improvements, or questions, please open an issue in the repository.