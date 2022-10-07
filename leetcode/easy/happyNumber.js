/**
 * 
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

1 <= n <= 2^31 - 1
 */

const addDigit = n => {
  const digits = `${n}`;
  let result = 0;

  for (const digit of digits) {
    result += Math.pow(digit, 2);
  }

  return result;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  const addedNumber = addDigit(n);
  if (addedNumber === 1) return true;
  if (addedNumber === 4) return false;

  return isHappy(addedNumber);
};

console.log(isHappy(7));
