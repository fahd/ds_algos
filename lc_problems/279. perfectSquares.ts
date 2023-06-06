// #279 => https://leetcode.com/problems/perfect-squares/


/*

Top down approach
L = 1       12
L = 2    11   8   3
L = 3   ...  7 4

Start with number n
Initialize levels to 1

Find all the numbers from 1 up to the sqrt of n
  No number, greater than the sqrt of n, then squared, will be less than or equal to n
  so sqrt n is our bounds for searching

For every number i from 1 to sqrt, if i**2 = target return 1
  Indicates we only needed to do one operation to reach the target

For every i, save i**2 in a set

Add n to a queue

Dequeue item as curr
  On our last loop from 1 to sqrt(curr), at the next level, 
  upon subtracting the squared number from the current number,
  if we encounter that difference in our set, we know we can get to zero
  that's our min steps

  save the diff in our queue

  After going through all of the items at the current level, increment levels
  so we know that upon iterating in our queue, we've reached the next level of our tree
*/

function numSquares(n: number): number {
  let levels = 1;
  let sqrt = Math.floor(Math.sqrt(n));
  let seen = new Set();

  for (let i = 1; i <= sqrt; i++) {
    let squared = i ** 2;
    if (squared === n) return levels;
    seen.add(squared);
  }

  const queue = [n];
  levels++;

  while (queue.length) {
    const len = queue.length;
    
    // this loop is all at one level
    // use len to reference original length of level
    for (let i = 0; i < len; i++){
      const curr = queue.shift() as number;
      const sqrt = Math.floor(Math.sqrt(curr));
      for (let j = 1; j <= sqrt; j++) {
        const squared = j ** 2;
        const diff = curr - squared;
        if (seen.has(diff)) return levels;
        queue.push(diff);
      }
    }
    levels++;
  }
  return levels;
}