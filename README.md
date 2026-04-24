# 🌙 After 8 — Night Craving Swapper

> *Smart swaps for late-night cravings. Built for urban India.*

---

## 📌 Problem Statement

Urban Indians, especially in metro cities like Mumbai and Bangalore, face a silent health crisis after 8 PM. Long work hours, late commutes, and high stress push people toward unhealthy late-night snacking — chips, cola, maggi, sweets — at the exact time the body needs rest, not heavy food. No existing app addresses this specific time-of-day eating behavior with culturally relevant, affordable alternatives.

---

## 💡 Solution

**After 8** is a time-aware web app that detects when it's past 8 PM and nudges users toward healthier Indian food swaps whenever they feel a craving. Type what you're craving — the app instantly suggests a smarter alternative with a one-line health benefit and a WhatsApp share button to keep yourself (or a friend) accountable.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🌙 **Night Mode** | Automatically activates after 8 PM with an ambient warning banner |
| 🔍 **Live Craving Search** | Fuzzy, real-time matching as you type — no submit button needed |
| 🔄 **20 Indian Swap Pairs** | Curated alternatives using locally available, affordable ingredients |
| 📲 **WhatsApp Share** | One-tap share of your swap to a friend or yourself |
| ⏳ **Day Mode Countdown** | Before 8 PM, shows a live countdown to when Night Mode activates |
| 🕐 **Live Clock** | Displays current time, glowing amber in Night Mode |

---

## 🎯 Target Users

- Urban working professionals in Indian metro cities
- Age group: 22–40
- People with late dinner habits, high screen time, and food delivery app dependency
- Middle-income households seeking affordable healthy alternatives

---

## 🧠 How It Works

```
User opens app
      │
      ▼
App checks current time
      │
   ┌──┴──┐
   │     │
< 8 PM  ≥ 8 PM
   │     │
Day Mode  Night Mode
(soft)    (amber warning banner)
   │     │
   └──┬──┘
      │
User types craving (e.g. "chips")
      │
      ▼
Fuzzy match against 20 swap pairs
      │
      ▼
Swap card appears with:
  - Healthy alternative
  - One-line benefit
  - WhatsApp share button
  - ⚠️ "Late night pick" badge (Night Mode only)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Inline styles — dark night-mode aesthetic |
| State management | `useState`, `useEffect`, `useMemo`, `useCallback` |
| Custom hooks | `useTime`, `useSwapSearch` |
| Testing | Plain JS unit tests (no framework) |
| Deployment | Netlify / Vercel (static, no backend) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App name, live clock, tagline
│   ├── NightBanner.jsx     # Amber warning banner (night mode only)
│   ├── SearchInput.jsx     # Accessible controlled input
│   ├── SwapCard.jsx        # Result card with badge + WhatsApp button
│   ├── CountdownTimer.jsx  # Day mode countdown to 8 PM
│   └── Footer.jsx          # App footer
├── data/
│   └── swaps.js            # 20 curated craving → swap pairs
├── hooks/
│   ├── useTime.js          # Live clock + night mode detection
│   └── useSwapSearch.js    # Real-time fuzzy search logic
├── utils/
│   ├── formatTime.js       # Date → "10:34 PM" formatter
│   ├── matchSwap.js        # Pure matching function
│   └── whatsappUrl.js      # Safe WhatsApp URL builder
└── tests/
    ├── matchSwap.test.js   # Unit tests for search logic
    ├── formatTime.test.js  # Unit tests for time formatter
    ├── whatsappUrl.test.js # Unit tests for URL encoding
    └── run.js              # Test runner (node tests/run.js)
```

---

## 🏆 Rubric Coverage

### ✅ Code Quality
- Modular file structure with single-responsibility components
- Custom hooks isolate all stateful logic
- JSDoc comments on every exported function
- Named exports, descriptive variable names, max 40 lines per component

### ✅ Security
- User input sanitized before matching (HTML tags and special characters stripped)
- WhatsApp URLs built with `encodeURIComponent()` — no raw input in URLs
- All external links use `rel="noopener noreferrer"`
- Input capped at `maxLength={100}`
- No `dangerouslySetInnerHTML` used anywhere

### ✅ Efficiency
- `SWAPS` array defined outside components — never re-instantiated on render
- Search logic wrapped in `useMemo` — only recalculates when query changes
- Single shared `setInterval` for clock and countdown
- `SwapCard` wrapped in `React.memo` to prevent unnecessary re-renders
- `handleQueryChange` wrapped in `useCallback`

### ✅ Testing
- Plain JS unit tests runnable with just `node tests/run.js`
- Covers exact match, partial match, case insensitivity, no match, empty input, and malicious input
- Time formatter tested for AM/PM edge cases including midnight
- WhatsApp URL tested for encoding correctness and no `undefined` leaks

### ✅ Accessibility
- Explicit `<label>` for all inputs — no placeholder-only labeling
- `role="alert"` + `aria-live="assertive"` on Night Mode banner
- `aria-live="polite"` on swap result so screen readers announce matches
- Keyboard navigable with visible amber `:focus-visible` outlines
- Night Mode communicated via icon + text + color — never color alone
- Contrast ratio ~8.5:1 (amber `#f59e0b` on black `#0d0d0d`) — exceeds WCAG AA
- Live clock has `aria-live="off"` to prevent screen reader spam
- Semantic HTML: `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`

---

## 🚀 Getting Started

```bash
# 1. Create project
npm create vite@latest after8 -- --template react
cd after8

# 2. Replace src/ with project files

# 3. Run locally
npm install
npm run dev

# 4. Run tests
node tests/run.js

# 5. Build for deployment
npm run build
# → drag dist/ folder to netlify.com/drop for instant live URL
```

---

## 🌍 Why This Matters

India has one of the fastest-growing rates of lifestyle diseases — diabetes, obesity, and hypertension — largely driven by poor dietary habits formed in urban environments. **After 8** doesn't lecture or track calories. It meets the user at the exact moment of temptation and offers one better choice. Small nudges, repeated nightly, build lasting habits.

---

*Built for urban India 🇮🇳 · Hackathon Project*
