import React from 'react';
import { buildWhatsAppUrl } from '../utils/whatsappUrl';

/**
 * Card displaying the suggested healthy swap.
 * @param {Object} props - Component props.
 * @param {Object} props.swap - The swap data object.
 * @param {string} props.query - The original craving query.
 * @param {boolean} props.isNightMode - Whether it is currently night mode.
 * @returns {JSX.Element}
 */
export const SwapCard = React.memo(({ swap, query, isNightMode }) => {
  if (!swap) return null;

  const waUrl = buildWhatsAppUrl(query || swap.keywords[0], swap.swap, swap.benefit);

  return (
    <article style={styles.card} aria-live="polite">
      {isNightMode && (
        <div style={styles.badge}>⚠️ Late night pick</div>
      )}
      <div style={styles.cravingText}>
        Instead of <s>{query || swap.keywords[0]}</s>
      </div>
      <div style={styles.swapMain}>
        <span style={styles.emoji} aria-hidden="true">{swap.emoji}</span>
        <span style={styles.swapName}>{swap.swap}</span>
      </div>
      <p style={styles.benefit}>{swap.benefit}</p>
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share this swap on WhatsApp"
        style={styles.waButton}
      >
        <span aria-hidden="true">📲</span> Share to WhatsApp
      </a>
    </article>
  );
});

const styles = {
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #2a2a2a',
    boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
    position: 'relative',
    animation: 'fadeUp 0.3s ease forwards',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  badge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: '#f59e0b',
    color: '#0d0d0d',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  cravingText: {
    color: '#9ca3af',
    fontSize: '16px',
  },
  swapMain: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  emoji: {
    fontSize: '32px',
  },
  swapName: {
    color: '#f59e0b',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  benefit: {
    color: '#f5f5f5',
    fontSize: '16px',
    margin: 0,
  },
  waButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#25D366',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginTop: '12px',
    transition: 'opacity 0.2s',
  },
};
