import React from 'react';

/**
 * Search input component for finding craving swaps.
 * @param {Object} props - Component props.
 * @param {string} props.query - Current search query.
 * @param {function} props.onChange - Handler for input changes.
 * @returns {JSX.Element}
 */
export const SearchInput = ({ query, onChange }) => {
  return (
    <div style={styles.container}>
      <label htmlFor="craving-input" style={styles.label}>What are you craving?</label>
      <input
        id="craving-input"
        type="text"
        role="searchbox"
        aria-label="Search your craving"
        autoComplete="off"
        spellCheck="false"
        maxLength={100}
        value={query}
        onChange={onChange}
        placeholder="e.g. chips, chocolate, maggi..."
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '24px',
  },
  label: {
    color: '#f5f5f5',
    fontSize: '16px',
    fontWeight: '500',
  },
  input: {
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid #2a2a2a',
    backgroundColor: '#141414',
    color: '#f5f5f5',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
};
