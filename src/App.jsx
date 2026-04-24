import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { NightBanner } from './components/NightBanner';
import { SearchInput } from './components/SearchInput';
import { SwapCard } from './components/SwapCard';
import { CountdownTimer } from './components/CountdownTimer';
import { Footer } from './components/Footer';
import { useTime } from './hooks/useTime';
import { useSwapSearch } from './hooks/useSwapSearch';
import { SWAPS } from './data/swaps';

/**
 * Main application component.
 * @returns {JSX.Element}
 */
export default function App() {
  const { currentHour, timeString, isNightMode, currentDate } = useTime();
  const [query, setQuery] = useState('');
  
  const matchedSwap = useSwapSearch(query, SWAPS);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <main style={styles.main}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        
        body {
          margin: 0;
          background-color: #0d0d0d;
          color: #f5f5f5;
          font-family: 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        * {
          box-sizing: border-box;
        }

        :focus-visible {
          outline: 2px solid #f59e0b;
          outline-offset: 2px;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.85; }
          100% { opacity: 1; }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {isNightMode && <NightBanner />}
      
      <Header timeString={timeString} isNightMode={isNightMode} />
      
      {!isNightMode && <CountdownTimer currentDate={currentDate} />}
      
      <section>
        <SearchInput query={query} onChange={handleQueryChange} />
        
        {matchedSwap ? (
          <SwapCard swap={matchedSwap} query={query} isNightMode={isNightMode} />
        ) : query.length > 0 ? (
          <div style={styles.noMatch}>
            We don't have that one yet — but as a rule, try the baked or roasted version!
          </div>
        ) : null}
      </section>

      <Footer />
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '24px 16px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  noMatch: {
    color: '#9ca3af',
    textAlign: 'center',
    padding: '24px',
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    border: '1px solid #2a2a2a',
  }
};
