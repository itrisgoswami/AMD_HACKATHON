import { formatTime } from '../src/utils/formatTime.js';

export const runTests = () => {
  let passed = 0;
  let failed = 0;

  const assertEqual = (name, actual, expected) => {
    if (actual === expected) {
      console.log(`✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${name} | Expected: ${expected}, Got: ${actual}`);
      failed++;
    }
  };

  // 9:05 AM
  const date1 = new Date(2023, 0, 1, 9, 5);
  assertEqual('9:05 AM format', formatTime(date1), '9:05 AM');

  // 8:00 PM
  const date2 = new Date(2023, 0, 1, 20, 0);
  assertEqual('20:00 -> 8:00 PM format', formatTime(date2), '8:00 PM');

  // Midnight
  const date3 = new Date(2023, 0, 1, 0, 0);
  assertEqual('Midnight -> 12:00 AM format', formatTime(date3), '12:00 AM');

  return { passed, failed };
};
