# TradingView Pine Scripts

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

See [ARCHITECTURE.md](ARCHITECTURE.md) for technical details and [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) for implementation notes.

---

### VolatilitySignals.pine

A comprehensive multi-indicator trading signal system that combines RSI, EMA crossovers, Bollinger Bands, ATR, and volume analysis to generate accurate buy/sell signals.

#### Features

- **Multiple Technical Indicators**: RSI, EMA crossovers, Bollinger Bands, ATR, and volume analysis
- **Advanced Signal Generation**: Multi-condition buy/sell signals with configurable filters
- **Signal Strength Indicator**: 0-4 scale showing the number of confirming indicators
- **Risk Management**: ATR-based stop loss and take profit levels
- **Real-time Info Table**: Displays current values of all indicators plus signal strength

See [USAGE_GUIDE.md](USAGE_GUIDE.md) and [VALIDATION.md](VALIDATION.md) for detailed documentation.

---

## Documentation Files

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - VolatilityScore2 architecture and component flow
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - VolatilityScore2 implementation details
- **[USAGE_GUIDE.md](USAGE_GUIDE.md)** - VolatilitySignals usage guide
- **[VALIDATION.md](VALIDATION.md)** - VolatilitySignals validation report

## Installation

1. Open TradingView and navigate to Pine Editor
2. Copy the contents of the desired `.pine` file
3. Paste into Pine Editor
4. Click "Add to Chart"
5. Configure parameters in the indicator settings

## Pine Script Version

All scripts use Pine Script v5 with proper syntax and best practices.

## License

This project is provided as-is for educational and trading purposes.
