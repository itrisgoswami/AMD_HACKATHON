import { useMemo } from 'react';
import { matchSwap } from '../utils/matchSwap';

/**
 * Custom hook to find a matching swap for a given query.
 * @param {string} query - The user's input query.
 * @param {Array} swaps - The array of swap objects.
 * @returns {Object|null} The matched swap object, or null.
 */
export const useSwapSearch = (query, swaps) => {
  const matchedSwap = useMemo(() => {
    return matchSwap(query, swaps);
  }, [query, swaps]);

  return matchedSwap;
};
