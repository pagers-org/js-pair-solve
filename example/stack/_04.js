const Stack = require('./_01');

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

const factorial2Stack = (n) => {
  const stack = new Stack();
  while (n > 1) {
    stack.push(n--);
  }

  let result = 1;
  while (stack.length() > 0) {
    result += stack.pop();
  }

  return result;
};
