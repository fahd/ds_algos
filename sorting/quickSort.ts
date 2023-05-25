/*
  Split items that are less than pivot on one side of the array
  Then pivot
  Then items that are larger than pivot
  
             [ 0... 16...31 ]
           /                  \
        [0...8...15]          [17...24...31]
          /     \               /       \
       [0 - 6]  [ 9 - 15]   [17 - 23]   [25 - 31]
    ...etc
      [0,0]           [15,15] 
      ^ we'll have arrays of length 1 sorted


    16 is sorted because it's an array of length 1
  
 O (n log n)
 scan N times, do a log n amount of times
*/

// Need pivot index, moves items less than pivot on one side and items greater on the other side
// Then quicksort, which gets the pivot and recalls quicksort and does the recursive case
//   -1  0  1  2  3  4
// 1.   [8, 3, 2, 9, 5]
//       x  
//          i
//                   p

// 2.   [3, 5, 2, 9, 8]
//          x  
//          i
//          p

// increment idx
// arr[hi] = arr[idx]
// arr[idx] = pivot
//      [3, 8, 2, 9, 5]
//          p
// new pivot ^
// return pivot

// recursive function
function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);

  // [)
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
  
}
// how we get the pivot index
function partition(arr: number[], lo: number, hi: number): number {
  
  const pivot = arr[hi];
  let idx = lo - 1;

  // walk from lo to hi, but not including hi, because hi = pivot
  for (let i = lo; i < hi; i++){
    if (arr[i] <= pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]]; 
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  
  return idx;
}

export default function quickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
  console.log(
    'arr',arr
  );
  
}

console.log(
  'lo', quickSort([3,6,9,8,5])
);
