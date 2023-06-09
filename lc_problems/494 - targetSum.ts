// https://leetcode.com/problems/target-sum

// need subroutine because passing an argument that is a number won't update by reference
// need to namespace count so it's accessible in the subroutine
// naive solution
// function findTargetSumWays(nums:number[], target:number) {
//   var count = 0;
//   (function walk(nums, idx, sum, target) {
//       if (idx === nums.length) {
//           if (sum === target) {
//               count++;
//           }
//           return;
//       }
//       walk(nums, idx + 1, sum + -Math.abs(nums[idx]), target);
//       walk(nums, idx + 1, sum + Math.abs(nums[idx]), target);
//   }(nums, 0, 0, target))
//   return count;
// }

// with memoization
function findTargetSumWays(nums: number[], target: number) {
    let seen: {
        [key: string]: number
    } = {};

    function walk(idx: number, total: number):number  {
        if (idx === nums.length) return total === target ? 1 : 0;
        const key = `(${idx},${total})`;
        if (key in seen) return seen[key];
        seen[key] = (walk(idx + 1, total + nums[idx]) + walk(idx + 1, total - nums[idx]));
        return seen[key]
    }
    return walk(0, 0);
}

console.log(
    findTargetSumWays([1,1,1],3)
);
