# RSI Divergence Detector - Enhanced

## Overview

The **RSI Divergence Detector - Enhanced** is a robust TradingView Pine Script indicator designed to detect and signal bullish and bearish RSI divergences using pivot analysis and table-based signal reporting. This script emphasizes reliability, visual clarity, and anti-repainting methodology.

## Key Features

### 🛡️ Anti-Repainting Technology
- **Confirmed Pivots Only**: Uses `ta.pivothigh` and `ta.pivotlow` with proper lookback periods
- **Historical Data**: All divergence signals are based on confirmed historical pivots, not real-time developing bars
- **No Future Bias**: Signals appear only after pivot confirmation, ensuring backtest accuracy

### 📊 Divergence Types

#### Regular Divergences (Trend Reversal Signals)
- **Bullish Divergence**: Price makes lower low (LL), RSI makes higher low (HL)
  - Indicates potential upward reversal
  - Shown with green ⊕ Bull label
  
- **Bearish Divergence**: Price makes higher high (HH), RSI makes lower high (LH)
  - Indicates potential downward reversal
  - Shown with red ⊗ Bear label

#### Hidden Divergences (Trend Continuation Signals)
- **Hidden Bullish Divergence**: Price makes higher low (HL), RSI makes lower low (LL)
  - Confirms uptrend continuation
  - Shown with light green "H-Bull" label
  
- **Hidden Bearish Divergence**: Price makes lower high (LH), RSI makes higher high (HH)
  - Confirms downtrend continuation
  - Shown with light red "H-Bear" label

### 🎨 Visual Clarity

#### Clean Chart Design
- **Smart Labeling**: Compact labels with tooltips showing divergence details
- **Divergence Lines**: Optional lines connecting pivot points on RSI pane
- **Color Coding**: Distinct colors for different divergence types
- **Conditional Display**: Toggle individual visual elements on/off

#### Information Table
- **Real-time Status**: Shows current RSI value and condition (Overbought/Oversold/Neutral)
- **Active Signals**: Highlights active divergence signals
- **Signal Counter**: Tracks total bullish and bearish divergences detected
- **Compact Design**: Non-intrusive top-right placement

### ⚙️ Configuration Options

#### RSI Settings
- **RSI Length** (default: 14): Period for RSI calculation
- **Overbought Level** (default: 70): RSI threshold for overbought condition
- **Oversold Level** (default: 30): RSI threshold for oversold condition

#### Pivot Settings
- **Pivot Lookback** (default: 5, range: 2-21): Number of bars for pivot confirmation
  - Lower values: Faster signals, more false positives
  - Higher values: Slower but more reliable signals

#### Divergence Settings
- **Show Regular Divergence**: Enable/disable trend reversal signals
- **Show Hidden Divergence**: Enable/disable trend continuation signals

#### Visual Settings
- **Show Bullish/Bearish Signals**: Toggle individual signal types
- **Show Divergence Lines**: Display connecting lines on RSI pane
- **Show Signal Table**: Display information table
- **Show RSI Pane**: Toggle RSI indicator pane
- **Color Customization**: Customize colors for all divergence types

#### Alert Settings
- **Enable Alerts**: Master alert toggle
- **Alert on Regular Divergence**: Alerts for trend reversals
- **Alert on Hidden Divergence**: Alerts for trend continuations

### 🚨 Alert System

#### Alert Types
- 🟢 **Bullish Regular Divergence**: Potential buy opportunity
- 🔴 **Bearish Regular Divergence**: Potential sell opportunity
- 🟡 **Hidden Bullish Divergence**: Uptrend confirmation
- 🟠 **Hidden Bearish Divergence**: Downtrend confirmation

#### Alert Features
- Fires once per bar close (no spam)
- Includes price and RSI values
- Separate toggles for regular vs hidden divergences

### ⚡ Performance Optimizations

- **Efficient State Management**: Uses `var` declarations for persistent variables
- **Minimal Recalculation**: Pivot-based logic reduces unnecessary computations
- **Controlled Visuals**: Max 50 labels and 50 lines to prevent chart clutter
- **Conditional Rendering**: RSI pane only renders when enabled

## Usage Guide

### Installation
1. Open TradingView
2. Create a new indicator
3. Copy the entire script from `RSI_Divergence_Detec.pine`
4. Save and add to your chart

### Best Practices

#### Choosing Pivot Lookback
- **Day Trading** (1-5 min charts): 3-5 bars
- **Swing Trading** (1-4 hour charts): 5-7 bars
- **Position Trading** (daily charts): 7-10 bars

#### Interpreting Signals

**Regular Divergences** (Best for reversals):
- Wait for additional confirmation (candlestick patterns, support/resistance)
- Consider RSI overbought/oversold levels
- Higher reliability in ranging markets

**Hidden Divergences** (Best for continuations):
- Use to confirm existing trends
- Enter on pullbacks in strong trends
- Lower reliability than regular divergences

#### Risk Management
- Never trade divergences alone
- Combine with other indicators (volume, moving averages, support/resistance)
- Use proper stop-loss placement
- Consider market context and overall trend

### Troubleshooting

**No signals appearing?**
- Increase the chart history
- Lower the pivot lookback value
- Ensure "Show Bullish/Bearish Signals" is enabled

**Too many signals?**
- Increase pivot lookback for more reliable signals
- Filter by RSI overbought/oversold conditions
- Focus on regular divergences only

**Signals repainting?**
- This script uses confirmed pivots and should NOT repaint
- Ensure you're using the latest version
- Signals appear `pivotLookback` bars after the actual pivot

## Technical Implementation

### Anti-Repainting Methodology

The script prevents repainting through several key techniques:

1. **Confirmed Pivot Detection**
   ```pinescript
   pivotHigh = ta.pivothigh(rsi, pivotLookback, pivotLookback)
   ```
   - Requires `pivotLookback` bars on both sides before confirmation
   - Signal appears at `bar_index - pivotLookback`

2. **Historical Price Reference**
   ```pinescript
   currentHighPrice = high[pivotLookback]
   currentHighRSI = rsi[pivotLookback]
   ```
   - Uses historical offset to reference confirmed pivot bar

3. **State Persistence**
   ```pinescript
   var float prevHighPrice = na
   ```
   - Maintains state across bars without recalculation

4. **No Real-time Comparisons**
   - Only compares confirmed pivots to previous confirmed pivots
   - Never uses current bar data for divergence detection

### Performance Considerations

- **Memory Efficient**: Uses primitive types and minimal arrays
- **Computation Efficient**: O(1) complexity per bar
- **Visual Limits**: Caps labels and lines to prevent performance degradation

## Version History

### v1.0 (Enhanced)
- Anti-repainting pivot-based detection
- Regular and hidden divergence support
- Configurable visual elements
- Table-based signal reporting
- Comprehensive alert system
- Performance optimizations
- Extensive tooltips and documentation

## License

This script is provided as-is for educational and trading purposes. Use at your own risk. Always test thoroughly before using in live trading.

## Support & Contributing

For issues, suggestions, or improvements, please refer to the repository.

---

**Disclaimer**: Trading involves risk. Past performance does not guarantee future results. This indicator should be used as part of a comprehensive trading strategy, not as a standalone decision-making tool.
