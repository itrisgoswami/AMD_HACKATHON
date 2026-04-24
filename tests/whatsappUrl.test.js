import { buildWhatsAppUrl } from '../src/utils/whatsappUrl.js';

export const runTests = () => {
  let passed = 0;
  let failed = 0;

  const assertPass = (name, condition) => {
    if (condition) {
      console.log(`✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${name}`);
      failed++;
    }
  };

  const url1 = buildWhatsAppUrl('chips', 'makhana', 'healthy');
  assertPass('Output contains wa.me', url1.includes('wa.me'));

  const url2 = buildWhatsAppUrl('chips & dip', 'makhana', 'healthy');
  assertPass('Special characters encoded', url2.includes('%26') && !url2.includes('& dip'));

  const url3 = buildWhatsAppUrl(undefined, undefined, undefined);
  assertPass('Output never contains undefined', !url3.includes('undefined'));

  return { passed, failed };
};
