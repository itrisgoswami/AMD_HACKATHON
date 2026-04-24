import React from 'react';

/**
 * Header component displaying the app name, tagline, and live clock.
 * @param {Object} props - Component props.
 * @param {string} props.timeString - Formatted current time string.
 * @param {boolean} props.isNightMode - Whether it's night mode.
 * @returns {JSX.Element}
 */
export const Header = ({ timeString, isNightMode }) => {
  return (
    <header style={styles.header}>
      <div style={styles.titleContainer}>
        <h1 style={{ ...styles.title, ...(isNightMode ? styles.titleNight : {}) }}>
          After 8 <span aria-hidden="true">🌙</span>
        </h1>
        <div style={styles.time} aria-label="Current time" aria-live="off">
          {timeString}
        </div>
      </div>
      <p style={styles.tagline}>
        {isNightMode ? "Smart swaps for late-night cravings" : "Find your healthy swap 🥗"}
      </p>
    </header>
  );
};

const styles = {
  header: {
    marginBottom: '24px',
    textAlign: 'center',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  title: {
    fontSize: '32px',
    color: '#f59e0b',
    margin: 0,
    fontWeight: 'bold',
  },
  titleNight: {
    textShadow: '0 0 20px rgba(245,158,11,0.5)',
  },
  time: {
    fontSize: '18px',
    color: '#f5f5f5',
    backgroundColor: '#1a1a1a',
    padding: '4px 12px',
    borderRadius: '16px',
    border: '1px solid #2a2a2a',
  },
  tagline: {
    color: '#9ca3af',
    margin: 0,
    fontSize: '16px',
  },
};
