const Stack = require('./_01');

/**
 * 회문
 */
const isPalindrome = (word) => {
  const stack = new Stack();
  for (let index = 0; index < word.length; ++index) {
    stack.push(word[index]);
  }

  let rword = '';
  while (stack.length() > 0) {
    rword += stack.pop();
  }
  return word === rword;
};

const word = 'helleh';
console.log(isPalindrome(word));
