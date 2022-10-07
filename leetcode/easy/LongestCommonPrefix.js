// https://leetcode.com/problems/longest-common-prefix/

const strs1 = ['flower', 'flow', 'flight', 'car'];
const strs2 = ['dog', 'racecar', 'car'];
const strs3 = ['dog', 'doracecar', 'dcar'];

// LCS
console.log(longestCommonPrefix(strs1));

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];

  let result = strs.sort().shift();

  strs.forEach(target => {
    while (!target.startsWith(result)) {
      result = result.substring(0, result.length - 1);
    }
  });

  return result;
}

// // Best Practice
// var longestCommonPrefix = function(array){
//   if ( array === undefined || array.length === 0) {
//       return ""
//    }
//    A = array.sort()
//    a = A[0], b = A[A.length - 1]
//    var i = 0
//    while ( i < a.length && a.charAt(i) == b.charAt(i)) i++
//    return a.substring(0,i)
// }
