/**
 * Sanitizes user input by removing HTML tags and special characters.
 * @param {string} str - The raw user input.
 * @returns {string} Sanitized string.
 */
const sanitize = (str) => str.replace(/[<>"'&]/g, '').trim().slice(0, 100);

/**
 * Finds a healthy swap that matches the user's craving query.
 * Matches if the query is a substring of any keyword, or any keyword is a substring of the query.
 * @param {string} query - The user's craving input.
 * @param {Array} swaps - The list of available swaps.
 * @returns {Object|null} The matched swap object or null if no match.
 */
export const matchSwap = (query, swaps) => {
  if (!query) return null;
  const safeQuery = sanitize(query).toLowerCase();
  if (!safeQuery) return null;

  // Split query into words to match any of them (more forgiving)
  const queryWords = safeQuery.split(/\s+/);

  for (const swap of swaps) {
    for (const keyword of swap.keywords) {
      const lowerKeyword = keyword.toLowerCase();
      // Match if keyword is in safeQuery OR any safeQuery word is in keyword
      if (lowerKeyword.includes(safeQuery) || safeQuery.includes(lowerKeyword)) {
        return swap;
      }
      for (const word of queryWords) {
        if (word && (lowerKeyword.includes(word) || word.includes(lowerKeyword))) {
          return swap;
        }
      }
    }
  }
  return null;
};
