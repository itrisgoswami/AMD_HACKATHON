import React from 'react';
import { NIGHT_HOUR } from '../hooks/useTime';

/**
 * Displays a countdown to 8 PM during daytime.
 * @param {Object} props - Component props.
 * @param {Date} props.currentDate - The current Date object.
 * @returns {JSX.Element}
 */
export const CountdownTimer = ({ currentDate }) => {
  const currentHour = currentDate.getHours();
  
  if (currentHour >= NIGHT_HOUR) return null;

  const targetDate = new Date(currentDate);
  targetDate.setHours(NIGHT_HOUR, 0, 0, 0);

  const diffMs = targetDate - currentDate;
  const hrs = Math.floor(diffMs / (1000 * 60 * 60));
  const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div style={styles.container}>
      🌙 Night Mode activates in {hrs}hr {mins}mins
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '24px',
    backgroundColor: '#1a1a1a',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #2a2a2a',
  },
};
