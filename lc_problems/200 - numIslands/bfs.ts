// #200 => https://leetcode.com/problems/number-of-islands/

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

const bfs = (start: [number, number], grid: string[][]) => {
  const queue = [start];
  // initialize current position to 0 since it is 1
  grid[start[0]][start[1]] = '0';
  
  while (queue.length) {
    const [currY, currX] = queue.shift() as [number, number];
    // queue up new directions with a position of 1, ignore 0s
    for (let i = 0; i < dirs.length; i++){
      const [dX, dY] = dirs[i];
      const nX = currX + dX;
      const nY = currY + dY;
      if (
        nX < 0
        || nY < 0
        || nX >= grid[0].length
        || nY >= grid.length
        || grid[nY][nX] === '0'
        ) {
          continue;
      }
      // need to set current neighbors to 0
      grid[nY][nX] = '0';
      // since current grid item is equal to 1
      queue.push([nY, nX]);
    }
  }
}

const numIslands = function (grid: string[][]): number {
  if (!grid || !grid.length) return 0;
  let numRows = grid.length;
  let numCols = grid[0].length;
  let count = 0;

  for (let y = 0; y < numRows; y++){
    for (let x = 0; x < numCols; x++){
      if (grid[y][x] === '1') {
        count++;
        bfs([y, x], grid);
      }
    }
  }
  return count;
}

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(
  'numIslands', numIslands(grid)
);


// for namespacing
export default numIslands;