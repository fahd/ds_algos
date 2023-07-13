// [1, 2, 3, 4, 5, 6]
//     
//  l
//  r

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    }
    else {
      right = mid
    }
  }
  return -1;
};