# Pine Script Indicators

This repository contains custom Pine Script indicators for TradingView.

## VolatilityScore2.pine

A comprehensive volatility scoring indicator that combines ATR, Bollinger Bands width, and Standard Deviation into a single normalized score (0-100).

### Features

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

### Usage

1. Copy the VolatilityScore2.pine script to TradingView
2. Adjust component weights based on your trading style:
   - Higher ATR weight for trend-following strategies
   - Higher BB weight for mean-reversion strategies
   - Balanced weights for general volatility monitoring
3. Set appropriate thresholds for your timeframe and instrument
4. Enable/disable display options as needed

### Default Settings

- **ATR Weight**: 40% (captures directional volatility)
- **BB Weight**: 35% (captures price range expansion)
- **StdDev Weight**: 25% (captures statistical dispersion)
- **High Volatility Threshold**: 70
- **Low Volatility Threshold**: 30

### Pine Script v5 Best Practices

- Uses proper v5 syntax and functions
- Efficient variable declarations with `var` where appropriate
- Minimal memory usage with optimized lookback periods
- Clear code organization and comments
- No redundant calculations or excessive historical references