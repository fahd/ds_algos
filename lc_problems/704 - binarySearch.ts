// https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    let m = Math.floor(l + ((r - l) / 2));
    if (nums[m] === target) return m;
    else if (nums[m] > target) r = m;
    else l = m + 1;
  }
  return -1;
};