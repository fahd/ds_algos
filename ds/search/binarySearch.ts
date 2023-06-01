// they ask this a lot

function binarySearch(haystack: number[], needle: number): boolean {
  let left = 0;
  // use .length for inclusive,exclusive paradigm
  let right = haystack.length;
  
  // [l, r)
  // left inclusive, right exclusive
  // lo              hi
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (haystack[mid] === needle) return true;
    else if (needle > haystack[mid]) {
      left = mid + 1;
    }
    else if (needle < haystack[mid])
      right = mid;
    
  }
  return false;
}

// console.log(
//   // binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 0)
//   binarySearch([1,2,3,4,5], 4 )
// );

function binarySearch2(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];
    if (v === needle) return true;
    else if (v > needle) hi = m;
    else lo = m + 1;
  } while (lo < hi)
  
  return false;
}

console.log(
  // binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 0)
  binarySearch2([1,2,3,4,5], 4 )
);



