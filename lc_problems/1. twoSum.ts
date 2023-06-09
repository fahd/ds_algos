// https://leetcode.com/problems/two-sum/

// Time complexity O(n)
// Space complexity O(n)

const twoSum = (array: number[], target: number): number[] | void => {
  const map:{[key:number]: number} = {};
  for (let i = 0; i < array.length; i++){
    let num = array[i];
    let diff = target - num;
    if (!(num in map)) map[num] = i;
    if (diff in map && map[diff] !== i) {
      return [map[diff], i];
    }
  }
}