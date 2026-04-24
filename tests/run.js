import { runTests as testMatchSwap } from './matchSwap.test.js';
import { runTests as testFormatTime } from './formatTime.test.js';
import { runTests as testWhatsappUrl } from './whatsappUrl.test.js';

const runAll = () => {
  console.log('Running matchSwap tests...');
  const res1 = testMatchSwap();
  
  console.log('\nRunning formatTime tests...');
  const res2 = testFormatTime();
  
  console.log('\nRunning whatsappUrl tests...');
  const res3 = testWhatsappUrl();

  const totalPassed = res1.passed + res2.passed + res3.passed;
  const totalFailed = res1.failed + res2.failed + res3.failed;

  console.log(`\nTests complete. Passed: ${totalPassed}, Failed: ${totalFailed}`);

  if (totalFailed > 0) {
    process.exit(1);
  }
};

runAll();
