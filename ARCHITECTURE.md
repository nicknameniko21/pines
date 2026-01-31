# VolatilityScore2.pine Architecture

## Component Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INPUT PARAMETERS                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ ATR Weight   │  │  BB Weight   │  │ StdDev Weight│          │
│  │  (40%)       │  │   (35%)      │  │   (25%)      │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
└─────────┼──────────────────┼──────────────────┼─────────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│              VOLATILITY COMPONENT CALCULATIONS                   │
│                                                                  │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│  │ ATR Component  │  │  BB Component  │  │StdDev Component│   │
│  │                │  │                │  │                │   │
│  │ 1. Calculate   │  │ 1. Calculate   │  │ 1. Calculate   │   │
│  │    ATR value   │  │    BB width    │  │    Std Dev     │   │
│  │ 2. Convert to  │  │ 2. Convert to  │  │ 2. Convert to  │   │
│  │    % of price  │  │    % of basis  │  │    % of price  │   │
│  │ 3. Normalize   │  │ 3. Normalize   │  │ 3. Normalize   │   │
│  │    (0-100)     │  │    (0-100)     │  │    (0-100)     │   │
│  └────────┬───────┘  └────────┬───────┘  └────────┬───────┘   │
└───────────┼──────────────────┼──────────────────┼──────────────┘
            │                  │                  │
            └──────────┬───────┴──────┬───────────┘
                       ▼              ▼
            ┌──────────────────────────────────┐
            │  WEIGHT NORMALIZATION            │
            │  (Ensure weights sum to 1.0)     │
            └──────────────┬───────────────────┘
                           ▼
            ┌──────────────────────────────────┐
            │  COMPOSITE VOLATILITY SCORE      │
            │  Score = Σ(Component × Weight)   │
            └──────────────┬───────────────────┘
                           ▼
            ┌──────────────────────────────────┐
            │  SMOOTHING (3-bar SMA)           │
            │  Reduces noise, improves clarity │
            └──────────────┬───────────────────┘
                           │
            ┌──────────────┴───────────────┐
            ▼                              ▼
┌──────────────────────┐      ┌──────────────────────┐
│  SIGNAL GENERATION   │      │   VISUALIZATION      │
│                      │      │                      │
│  • High Vol Signal   │      │  • Main Score Line   │
│  • Low Vol Signal    │      │  • Component Lines   │
│  • State Tracking    │      │  • Threshold Lines   │
│  • Non-Redundant     │      │  • Signal Shapes     │
│                      │      │  • Background Color  │
└──────────┬───────────┘      └──────────┬───────────┘
           │                             │
           ▼                             ▼
┌──────────────────────┐      ┌──────────────────────┐
│  ALERTS              │      │  INFO TABLE          │
│                      │      │                      │
│  • High Vol Alert    │      │  • Vol Score         │
│  • Low Vol Alert     │      │  • Component Values  │
│  • Extreme Spike     │      │  • Volatility State  │
│                      │      │  • Trend Indicator   │
└──────────────────────┘      └──────────────────────┘
```

## Data Flow

### 1. Input Layer
- User-configurable parameters for weights, lengths, and thresholds
- Parameters grouped logically for better UX

### 2. Calculation Layer
Each component independently:
- Calculates its raw volatility measure (ATR, BB width, StdDev)
- Converts to percentage of price/basis
- Normalizes using adaptive min/max over 100 bars
- Results in normalized 0-100 scale value

### 3. Aggregation Layer
- Weights are normalized to sum to 1.0
- Weighted average of all components creates composite score
- Score represents overall market volatility (0=low, 100=high)

### 4. Smoothing Layer
- 3-bar SMA applied to reduce noise
- Balances responsiveness with stability

### 5. Output Layer

#### Visual Output:
- **Main Plot**: Smoothed volatility score (blue line)
- **Reference Plots**: Individual components (lighter colors)
- **Threshold Lines**: High/low volatility levels (dashed)
- **Signals**: Triangle shapes on state changes only
- **Background**: Colored based on current volatility level

#### Data Output:
- **Info Table**: Real-time metrics in compact format
- **Alerts**: Triggered on significant volatility events

## State Management

The indicator uses efficient state tracking:

```
var bool wasHighVol = false  // Previous high volatility state
var bool wasLowVol = false   // Previous low volatility state
```

This enables:
- Detection of state transitions
- Non-redundant signal generation
- Memory-efficient operation

## Memory Optimization

- Fixed lookback periods (100 bars for normalization)
- `var` declarations for persistent state
- Table updates only on `barstate.islast`
- No unnecessary historical array references
- Efficient ternary operators for conditionals

## Normalization Formula

For each component:
```
normalized = ((current - min_100) / (max_100 - min_100)) × 100
```

Where:
- `current` = current component value
- `min_100` = minimum value over last 100 bars
- `max_100` = maximum value over last 100 bars

This adaptive normalization ensures:
- Consistent 0-100 scale across all market conditions
- Automatic adjustment to volatility regime changes
- Comparable values across different instruments/timeframes

## Signal Logic

### High Volatility Signal
```
Trigger when: score > threshold AND was NOT previously high
```

### Low Volatility Signal
```
Trigger when: score < threshold AND was NOT previously low
```

### Extreme Spike Alert
```
Trigger when: (score - score[1]) > 10 AND score > 75
```

This approach eliminates signal spam and provides only actionable alerts.

## Best Practices Implemented

1. **Pine Script v5 Compliance**
   - All v5 syntax and namespaces
   - Proper use of ta.* functions
   - Modern input.* parameter definitions

2. **Code Organization**
   - Clear section separators
   - Logical grouping of related code
   - Descriptive variable names

3. **Performance**
   - Minimal memory footprint
   - Efficient calculations
   - No redundant operations

4. **User Experience**
   - Grouped input parameters
   - Helpful tooltips
   - Toggle options for display elements
   - Color-coded visual feedback
