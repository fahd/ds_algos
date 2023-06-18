// Time O√n
// Space O(1)

// Jump forwards a √n amount of times
// If we run into a floor level that breaks, first ball breaks
// Jump back a distance of √n 

// Now from that position, we can move a total distance forwards of √n
// to find the floor that broke

// total is √n + √n + √n... etc. times to reach the floor.

function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount){
    if (breaks[i]) {
      i -= jumpAmount;
      break;
    }
  }
  for (let j = 0; j < jumpAmount && i < breaks.length; i++, j++){
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
