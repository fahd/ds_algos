// old
// function bubbleSort(array: number[]): number[] {
//   let hasSorted = false;
//   for (let i = 0; i < array.length; i++){
//     if (array[i] > array[i+1]) {
//       [array[i], array[i + 1]] = [array[i + 1], array[i]];
//       hasSorted = true;
//     }
//   }
//   return hasSorted ? bubbleSort(array) : array;
// }

// new
// Space O(1)
// Time O(n^2)
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
    for (; n > 1; n--) {
      for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  return arr;
}


console.log(
  'bubbleSort', bubbleSort([6,3,2,4,7,7,4,1,4,56,34,1,4,6,3,2,0,-1])
);
