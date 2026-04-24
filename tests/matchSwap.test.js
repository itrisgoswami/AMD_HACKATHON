import { matchSwap } from '../src/utils/matchSwap.js';
import { SWAPS } from '../src/data/swaps.js';

export const runTests = () => {
  let passed = 0;
  let failed = 0;

  const assertEqual = (name, actual, expected) => {
    if ((actual && actual.swap) === expected) {
      console.log(`✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${name} | Expected: ${expected}, Got: ${actual && actual.swap}`);
      failed++;
    }
  };

  const assertNull = (name, actual) => {
    if (actual === null) {
      console.log(`✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${name} | Expected null, Got: ${actual.swap}`);
      failed++;
    }
  };

  assertEqual('Exact match: "chips" -> returns makhana swap', matchSwap('chips', SWAPS), 'Roasted Makhana');
  assertEqual('Partial match: "col" -> returns nimbu pani swap', matchSwap('col', SWAPS), 'Nimbu Pani with Jeera');
  assertEqual('Case insensitive: "COLA" -> returns nimbu pani swap', matchSwap('COLA', SWAPS), 'Nimbu Pani with Jeera');
  assertNull('No match: "xyz123" -> returns null', matchSwap('xyz123', SWAPS));
  assertNull('Empty string: "" -> returns null', matchSwap('', SWAPS));
  assertNull('Sanitized malicious input: "<script>" -> returns null safely', matchSwap('<script>', SWAPS));

  return { passed, failed };
};
