import React from 'react';

/**
 * The app footer.
 * @returns {JSX.Element}
 */
export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Built for urban India 🇮🇳 · Hackathon Project</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    marginTop: '32px',
    padding: '16px 0',
  },
  text: {
    color: '#9ca3af',
    fontSize: '13px',
    margin: 0,
  },
};
