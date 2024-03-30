/**
 * 진법 변환: 2진수부터 9진수 사이에서 동작
 */
const Stack = require('./_01');

const mulBase = (num, base) => {
  const stack = new Stack();
  let result = num;
  while (num > 0) {
    stack.push(num % base);
    result = Math.floor((result /= base));
  }

  let converted = '';
  while (stack.length() > 0) {
    converted += stack.pop();
  }
  return converted;
};
