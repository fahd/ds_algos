// 1,2,3,4


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

// Primeagen's solution
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
return arr;
}

// new
// Space O(1)
// Time O(n^2)
function bubbleSort(arr: number[]): number[] {
      for (let n = arr.length; n > 1; n--) {
        for (let i = 0; i < n; i++) {
          if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    return arr;
}



console.log(
  'bubbleSort', bubbleSort([6,3,2,4,7,7,4, -100, -2,1,4,56,34,1,4,6,3,2,0,-1])
);
