import React from 'react';

/**
 * Night mode warning banner. Only rendered during night mode.
 * @returns {JSX.Element}
 */
export const NightBanner = () => {
  return (
    <div style={styles.banner} role="alert" aria-live="assertive">
      🌙 Night Mode Active — Your body doesn't need heavy food right now
    </div>
  );
};

const styles = {
  banner: {
    width: '100%',
    backgroundColor: '#f59e0b',
    color: '#0d0d0d',
    textAlign: 'center',
    padding: '12px',
    fontWeight: 'bold',
    marginBottom: '24px',
    borderRadius: '8px',
    animation: 'pulse 2s infinite',
  },
};
