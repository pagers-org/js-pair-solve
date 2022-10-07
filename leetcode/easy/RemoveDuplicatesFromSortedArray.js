// @see: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  const nums_length = nums.length;
  const unique_nums = new Set(nums);
  nums.splice(0, nums.length);
  nums.push(...unique_nums);
  nums.push(...Array.from({ length: nums_length - unique_nums.size }, () => '_'));
  return unique_nums.size;
};

let nums1 = [1, 1, 2];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums2), nums2);
