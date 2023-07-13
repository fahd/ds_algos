// https://leetcode.com/problems/two-sum/

// Time complexity O(n)
// Space complexity O(n)


// [1,2,3,4,5]
const twoSum = (array: number[], target: number): number[] | void => {
  const set:{
    [el: string]: number;
  } = {};
  
  for (let i = 0; i < array.length; i++){
    let el = array[i];
    let diff = target - el;
    if (set.hasOwnProperty(diff)) return [i, set[diff]];
    if (!set.hasOwnProperty(el)) set[el] = i;
  }
}

console.log(
  'twoSum',twoSum([1,2,3,4,5], 4)
);


export default twoSum;