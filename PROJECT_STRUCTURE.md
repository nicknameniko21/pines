# 📊 Project Structure Guide

## What This Repository Contains

This repository contains **TWO main components**:

### 🌐 1. Website - Crypto Volatility Dashboard

A real-time cryptocurrency volatility analysis dashboard built with React, TypeScript, and TailwindCSS.

**Location:** `src/` directory and related config files

**Main Files:**
- `src/` - All React components and application code
- `index.html` - Entry point for the web application
- `package.json` - Node.js dependencies
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration
- `dist/` - Production build output (generated)

**How to Run:**
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
```

**Documentation:**
- `README.md` - Main project documentation (Portuguese)
- `USAGE_GUIDE.md` - How to use the dashboard
- `TRADING_GUIDE.md` - Complete trading guide with indicators

---

### 📈 2. TradingView Pine Scripts (4 Scripts)

Four Pine Script indicators for TradingView to help with crypto trading analysis.

#### Script 1: Volatility Signals ✅
**File:** `VolatilitySignals.pine`

**Purpose:** Comprehensive volatility-based trading signals combining multiple indicators

**Features:**
- RSI (Relative Strength Index) signals
- EMA (Exponential Moving Average) crossovers
- Bollinger Bands signals
- ATR (Average True Range) for volatility
- Volume analysis
- Configurable signal filters
- Stop-loss and take-profit levels

**How to Use:**
1. Open TradingView
2. Go to Pine Editor
3. Copy the contents of `VolatilitySignals.pine`
4. Click "Add to Chart"

#### Script 2: RSI Divergence Signals ✅
**File:** `RSIDivergence.pine`

**Purpose:** Detect bullish and bearish RSI divergences for reversal trading

**Features:**
- Automatic divergence detection
- Bullish divergence signals (price lower low, RSI higher low)
- Bearish divergence signals (price higher high, RSI lower high)
- Visual markers on chart
- Customizable RSI periods and sensitivity

**Best For:** Identifying potential trend reversals

#### Script 3: Bollinger Bands Breakout ✅
**File:** `BBBreakout.pine`

**Purpose:** Identify high-probability breakout opportunities using Bollinger Bands

**Features:**
- Bollinger Band squeeze detection (low volatility periods)
- Breakout signals when price exits bands with volume
- Volatility expansion alerts
- Multi-timeframe analysis
- Configurable band settings

**Best For:** Catching explosive moves after consolidation periods

#### Script 4: Volume Profile Analysis ✅
**File:** `VolumeProfile.pine`

**Purpose:** Advanced volume analysis with support/resistance zones

**Features:**
- Volume-weighted average price (VWAP)
- High volume nodes (areas of high trading activity)
- Low volume nodes (potential breakout zones)
- Volume delta (buying vs selling pressure)
- Session volume analysis

**Best For:** Understanding market structure and key price levels

---

## 📁 Directory Structure

```
pines/
├── 🌐 WEBSITE FILES
│   ├── src/                          # React application source
│   │   ├── App.tsx                   # Main app component
│   │   ├── main.tsx                  # Entry point
│   │   ├── components/               # UI components
│   │   ├── pages/                    # Page components
│   │   └── lib/                      # Utilities
│   ├── index.html                    # HTML entry
│   ├── package.json                  # Dependencies
│   ├── vite.config.ts               # Vite config
│   ├── tailwind.config.ts           # Tailwind config
│   └── dist/                         # Build output
│
├── 📈 TRADINGVIEW PINE SCRIPTS
│   └── pine-scripts/                # All Pine scripts in one folder! ⭐
│       ├── VolatilitySignals.pine   # Script 1: Volatility signals
│       ├── RSIDivergence.pine       # Script 2: RSI divergence
│       ├── BBBreakout.pine          # Script 3: Bollinger breakout
│       ├── VolumeProfile.pine       # Script 4: Volume analysis
│       └── README.md                # Instructions for using the scripts
│
├── 📚 DOCUMENTATION
│   ├── README.md                     # Main documentation (PT-BR)
│   ├── QUICK_START.md                # Fastest way to get started ⭐
│   ├── HOW_TO_USE.md                 # Simple guide for non-coders
│   ├── DEPLOYMENT.md                 # How to deploy the website ⭐
│   ├── PROJECT_STRUCTURE.md          # This file - what is what
│   ├── TRADING_GUIDE.md              # Complete trading guide
│   ├── USAGE_GUIDE.md                # Dashboard usage guide
│   ├── QUICK_REFERENCE.md            # Quick reference
│   ├── VALIDATION.md                 # Validation guide
│   └── README_INSTRUCTIONS.md        # Setup instructions
│
└── ⚙️ CONFIGURATION FILES
    ├── eslint.config.js              # Linting rules
    ├── tsconfig.json                 # TypeScript config
    ├── postcss.config.js             # PostCSS config
    └── .github/                      # GitHub workflows
```

---

## 🚀 Quick Start

### For the Website:
```bash
cd /home/runner/work/pines/pines
npm install
npm run dev
```
Open http://localhost:5173

### For Pine Scripts:
1. Go to https://www.tradingview.com
2. Open the Pine Editor
3. Copy one of the `.pine` files
4. Paste into the editor
5. Click "Add to Chart"

---

## 📖 Learn More

- **Website Documentation:** Read `README.md` and `USAGE_GUIDE.md`
- **Trading Strategies:** Read `TRADING_GUIDE.md` for comprehensive trading education
- **Quick Reference:** Check `QUICK_REFERENCE.md` for indicator cheat sheet

---

## 💡 Summary

**You have:**
- ✅ **1 Website** - Real-time crypto volatility dashboard (React app)
- ✅ **4 Pine Scripts** - TradingView indicators for technical analysis

Each component serves a different purpose:
- **Website** = Monitor multiple coins in real-time
- **Pine Scripts** = Deep analysis of individual charts on TradingView

Use them together for comprehensive crypto trading analysis!
