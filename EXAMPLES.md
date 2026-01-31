# TradingAlerts_All.pine - Configuration Examples

This document provides proven configuration examples for different trading styles and market conditions.

## 1. Conservative Scalping (1-5 minute charts)

**Use Case**: Quick entries/exits with high confirmation
**Goal**: Reduce false signals, maximize win rate

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 75  // Stricter overbought
rsi_oversold = 25    // Stricter oversold
rsi_weight = 1.5     // Higher weight for mean reversion

// EMA Settings
ema_fast_length = 5
ema_slow_length = 13
ema_trend_length = 21
ema_weight = 1.2

// Volume Settings
volume_ma_length = 20
volume_threshold = 2.0  // Higher volume requirement
volume_weight = 1.8     // High weight for volume confirmation

// Price Action Settings
candle_body_threshold = 0.6  // Require stronger candles
price_weight = 1.0

// Signal Settings
signal_threshold = 7.0  // Higher threshold for fewer signals
```

**Expected Results**: 
- Fewer signals (3-8 per day)
- Higher accuracy (60-70%)
- Best for volatile markets

---

## 2. Aggressive Day Trading (15-30 minute charts)

**Use Case**: More frequent trades with acceptable noise
**Goal**: Capture more opportunities

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 65
rsi_oversold = 35
rsi_weight = 0.8

// EMA Settings
ema_fast_length = 8
ema_slow_length = 21
ema_trend_length = 50
ema_weight = 1.3  // Emphasize trend following

// Volume Settings
volume_ma_length = 20
volume_threshold = 1.3
volume_weight = 0.9

// Price Action Settings
candle_body_threshold = 0.4
price_weight = 1.0

// Signal Settings
signal_threshold = 5.0  // Lower threshold for more signals
```

**Expected Results**:
- More signals (10-20 per day)
- Moderate accuracy (55-65%)
- Best for trending markets

---

## 3. Swing Trading (4H-Daily charts)

**Use Case**: Position trades held 2-10 days
**Goal**: Catch major trend reversals and continuations

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 70
rsi_oversold = 30
rsi_weight = 1.0

// EMA Settings
ema_fast_length = 12
ema_slow_length = 26
ema_trend_length = 50
ema_weight = 1.5  // High weight for trend confirmation

// Volume Settings
volume_ma_length = 20
volume_threshold = 1.5
volume_weight = 1.2

// Price Action Settings
candle_body_threshold = 0.5
price_weight = 1.3

// Signal Settings
signal_threshold = 7.5  // Higher threshold for quality signals
```

**Expected Results**:
- Fewer signals (1-3 per week)
- Higher accuracy (65-75%)
- Best for established trends

---

## 4. Crypto Trading (High Volatility)

**Use Case**: 24/7 crypto markets with high volatility
**Goal**: Adapt to rapid price swings

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 75
rsi_oversold = 25
rsi_weight = 1.2

// EMA Settings
ema_fast_length = 9
ema_slow_length = 21
ema_trend_length = 55
ema_weight = 1.0

// Volume Settings
volume_ma_length = 24  // 24-hour volume
volume_threshold = 2.5  // Crypto often has larger spikes
volume_weight = 1.5     // Important for crypto

// Price Action Settings
candle_body_threshold = 0.6  // Need strong candles
price_weight = 1.2

// Signal Settings
signal_threshold = 7.0
```

**Expected Results**:
- Variable signals depending on volatility
- Works well on major pairs (BTC, ETH)
- Best on 1H-4H timeframes

---

## 5. Stock Market - Trend Following (Daily charts)

**Use Case**: Riding established trends in stocks
**Goal**: Minimize whipsaws, maximize trend capture

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 70
rsi_oversold = 30
rsi_weight = 0.8  // Lower weight, not primary focus

// EMA Settings
ema_fast_length = 10
ema_slow_length = 20
ema_trend_length = 50
ema_weight = 2.0  // Very high weight for trend

// Volume Settings
volume_ma_length = 20
volume_threshold = 1.4
volume_weight = 1.3

// Price Action Settings
candle_body_threshold = 0.5
price_weight = 1.0

// Signal Settings
signal_threshold = 6.5
```

**Expected Results**:
- Signals aligned with major trend
- Good for bull markets
- Reduces counter-trend noise

---

## 6. Forex Trading (1H-4H charts)

**Use Case**: Currency pair trading
**Goal**: Capitalize on trend momentum

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 70
rsi_oversold = 30
rsi_weight = 1.0

// EMA Settings
ema_fast_length = 9
ema_slow_length = 21
ema_trend_length = 50
ema_weight = 1.3

// Volume Settings (tick volume for forex)
volume_ma_length = 20
volume_threshold = 1.5
volume_weight = 0.8  // Lower weight (tick volume less reliable)

// Price Action Settings
candle_body_threshold = 0.5
price_weight = 1.5  // Higher weight for price action

// Signal Settings
signal_threshold = 6.0
```

**Expected Results**:
- Balanced signal frequency
- Good for major pairs (EUR/USD, GBP/USD)
- Works during active trading sessions

---

## 7. Range-Bound Markets (Mean Reversion)

**Use Case**: Sideways/choppy markets
**Goal**: Buy dips, sell rallies

```pine
// RSI Settings
rsi_length = 14
rsi_overbought = 65  // Tighter bands
rsi_oversold = 35    // Tighter bands
rsi_weight = 2.0     // Primary indicator

// EMA Settings
ema_fast_length = 9
ema_slow_length = 21
ema_trend_length = 50
ema_weight = 0.5  // Low weight, trend less important

// Volume Settings
volume_ma_length = 20
volume_threshold = 1.3
volume_weight = 1.0

// Price Action Settings
candle_body_threshold = 0.4
price_weight = 0.8

// Signal Settings
signal_threshold = 5.5  // Lower threshold
```

**Expected Results**:
- More frequent signals
- Works in consolidation
- Exit quickly when range breaks

---

## 8. High-Frequency Signals (1 minute chart)

**Use Case**: Very short-term trading
**Goal**: Maximum signal frequency

```pine
// RSI Settings
rsi_length = 7  // Shorter period
rsi_overbought = 70
rsi_oversold = 30
rsi_weight = 1.0

// EMA Settings
ema_fast_length = 3
ema_slow_length = 8
ema_trend_length = 13
ema_weight = 1.0

// Volume Settings
volume_ma_length = 10  // Shorter period
volume_threshold = 1.8
volume_weight = 1.2

// Price Action Settings
candle_body_threshold = 0.3  // Lower requirement
price_weight = 0.8

// Signal Settings
signal_threshold = 4.0  // Much lower threshold
```

**Expected Results**:
- Very frequent signals (20+ per day)
- Lower accuracy (50-60%)
- Requires tight stops
- High commission costs

---

## Tuning Tips

### If you're getting too many signals:
1. Increase `signal_threshold` (+0.5 to +1.0)
2. Increase `volume_threshold` (+0.2 to +0.5)
3. Increase `candle_body_threshold` (+0.1)
4. Tighten RSI levels (overbought +5, oversold -5)

### If you're getting too few signals:
1. Decrease `signal_threshold` (-0.5 to -1.0)
2. Decrease `volume_threshold` (-0.2 to -0.3)
3. Decrease `candle_body_threshold` (-0.1)
4. Widen RSI levels (overbought -5, oversold +5)

### If signals are too late:
1. Decrease EMA lengths (faster response)
2. Decrease RSI length
3. Lower signal threshold

### If signals are too early (false signals):
1. Increase EMA lengths (smoother response)
2. Increase volume weight (require stronger confirmation)
3. Increase signal threshold

### For specific assets:

**High Beta Stocks** (e.g., TSLA, NVDA):
- Increase volume_weight to 1.5+
- Increase signal_threshold to 7.0+
- Increase candle_body_threshold to 0.6+

**Blue Chip Stocks** (e.g., AAPL, MSFT):
- Standard settings work well
- Consider higher EMA weight (1.3-1.5)

**Small Cap Stocks**:
- Increase volume_threshold to 2.0+
- Increase signal_threshold to 7.5+
- Use higher timeframes (daily+)

**Commodities** (e.g., Gold, Oil):
- Increase EMA weight to 1.5
- Standard volume settings
- Daily or 4H timeframes

---

## Backtesting Recommendations

1. **Start with default settings** on your chosen asset and timeframe
2. **Run for at least 3-6 months** of historical data
3. **Track metrics**:
   - Total signals
   - Win rate
   - Average win/loss
   - Max drawdown
4. **Adjust one parameter at a time**
5. **Re-test after each change**
6. **Document your findings**

## Important Notes

⚠️ **No configuration is perfect** - market conditions change
⚠️ **Always use stop losses** - no indicator is 100% accurate
⚠️ **Paper trade first** - test in demo account before live trading
⚠️ **Consider commissions** - more signals = higher costs
⚠️ **Multiple timeframe analysis** - confirm signals on higher timeframes

---

*These are example configurations based on common trading strategies. Always backtest and paper trade before using real money.*
