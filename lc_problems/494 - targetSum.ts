// https://leetcode.com/problems/target-sum

// need subroutine because passing an argument that is a number won't update by reference
// need to namespace count so it's accessible in the subroutine
function findTargetSumWays(nums:number[], target:number) {
  var count = 0;
  (function walk(nums, idx, sum, target) {
      if (idx === nums.length) {
          if (sum === target) {
              count++;
          }
          return;
      }
      walk(nums, idx + 1, sum + -Math.abs(nums[idx]), target);
      walk(nums, idx + 1, sum + Math.abs(nums[idx]), target);
  }(nums, 0, 0, target))
  return count;
}
