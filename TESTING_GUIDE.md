# RSI Divergence Detector - Testing Guide

## How to Test the Script

### Step 1: Load the Script in TradingView

1. Go to [TradingView](https://www.tradingview.com)
2. Open the Pine Editor (bottom panel)
3. Create a new indicator
4. Copy the entire content from `RSI_Divergence_Detec.pine`
5. Click "Add to Chart"

### Step 2: Recommended Test Scenarios

#### Test 1: Basic Functionality
- **Symbol**: BTCUSD or ETHUSD
- **Timeframe**: 1H (hourly)
- **Settings**: Default (Pivot Lookback: 5, RSI Length: 14)
- **Expected Result**: Should see divergence labels appearing at confirmed pivot points

#### Test 2: Anti-Repainting Verification
1. Load the script on a chart with historical data
2. Note down the position and count of divergence signals
3. Refresh the page and reload the script
4. **Expected Result**: Same divergence signals in the same positions (no repainting)

#### Test 3: Different Timeframes
Test on multiple timeframes to verify reliability:
- **15 minutes**: Quick signals, more frequent
- **4 hours**: Medium-term signals
- **Daily**: Long-term signals, most reliable

#### Test 4: Hidden Divergences
1. Enable "Show Hidden Divergence" in settings
2. Find a strong trending market (e.g., strong uptrend)
3. **Expected Result**: 
   - Hidden bullish divergences during uptrend pullbacks
   - Hidden bearish divergences during downtrend pullbacks

#### Test 5: Visual Clarity
1. Enable all visual options
2. Check that chart remains readable
3. Disable "Show Divergence Lines" if too cluttered
4. **Expected Result**: Clean, non-overlapping labels with clear tooltips

#### Test 6: Alert Testing
1. Enable alerts in script settings
2. Create a TradingView alert on the script
3. Set condition to "Any alert() function call"
4. **Expected Result**: Alerts fire when new divergences are detected

### Step 3: Parameter Optimization

#### For Day Trading (Short-term)
```
RSI Length: 14
Pivot Lookback: 3-4
Timeframe: 5m, 15m
```

#### For Swing Trading (Medium-term)
```
RSI Length: 14
Pivot Lookback: 5-7
Timeframe: 1H, 4H
```

#### For Position Trading (Long-term)
```
RSI Length: 14
Pivot Lookback: 7-10
Timeframe: Daily, Weekly
```

### Step 4: Backtesting

1. Use TradingView's replay feature
2. Load historical data
3. Step through bars one by one
4. Verify that:
   - Divergences appear only after pivot confirmation
   - Signals don't disappear or change on refresh
   - Alert timing is consistent

### Expected Visual Elements

When properly loaded, you should see:

1. **On Price Chart**:
   - Green "⊕ Bull" labels below bullish divergence lows
   - Red "⊗ Bear" labels above bearish divergence highs
   - Optional: "H-Bull" and "H-Bear" for hidden divergences

2. **On RSI Pane** (if enabled):
   - Blue RSI line
   - Overbought (70) and Oversold (30) levels
   - Divergence lines connecting pivot points
   - Small circles marking RSI pivots

3. **Information Table** (top-right):
   ```
   Metric          | Status
   ----------------|--------
   RSI (45.23)     | Neutral
   Bull Div        | -
   Bear Div        | -
   Total Count     | Bull:5 / Bear:3
   ```

### Verification Checklist

- [ ] Script loads without errors
- [ ] RSI pane displays correctly
- [ ] Divergence labels appear on confirmed pivots
- [ ] Divergence lines draw between correct points
- [ ] Information table shows accurate data
- [ ] Alerts can be created and fire correctly
- [ ] No repainting occurs on page refresh
- [ ] Tooltips provide detailed information
- [ ] Different timeframes work correctly
- [ ] Parameter changes take effect immediately

### Common Issues and Solutions

**Issue**: No signals appearing
- **Solution**: Increase chart history, lower pivot lookback, or check that signals are enabled

**Issue**: Too many signals
- **Solution**: Increase pivot lookback for more reliable signals

**Issue**: Script error on load
- **Solution**: Ensure you're using Pine Script v5, check for copy-paste errors

**Issue**: Divergence lines too cluttered
- **Solution**: Disable "Show Divergence Lines" or use higher pivot lookback

**Issue**: Table not showing
- **Solution**: Enable "Show Signal Table" in settings

### Performance Benchmarks

Expected performance metrics:
- **Load Time**: < 2 seconds on most charts
- **Recalculation Time**: < 1 second when changing parameters
- **Memory Usage**: Low (uses efficient var declarations)
- **Visual Elements**: Max 50 labels and 50 lines to prevent clutter

### Integration with Other Indicators

Test combining with:
1. **Moving Averages**: Confirm trend direction
2. **Volume**: Verify divergence strength
3. **Support/Resistance**: Find optimal entry/exit points
4. **MACD**: Cross-verify divergences

## Conclusion

This testing guide ensures the RSI Divergence Detector works correctly and helps you understand its behavior across different market conditions. Always backtest thoroughly before using in live trading.
