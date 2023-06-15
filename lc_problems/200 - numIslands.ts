// #200 => https://leetcode.com/problems/number-of-islands/

// Time Complexity -> O(m x n)
// Space Complexity -> O(m x n)

type Point = {
  x: number;
  y: number;
}

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

const dfs = (grid:string[][], curr: Point, end: Point): void => {
  const { x, y } = curr;
  // if out of bounds, return
  if ((x < 0 || x >= end.x) || (y < 0 || y >= end.y )) {
    return;
  }  
  // if position is already 0, return
  if (grid[y][x] === '0') {
    return;
  }
  
  // if position is 1, set it to 0
  grid[y][x] = '0';
  
  // go through directions
  for (const dir of dirs) {
    let [dX, dY] = dir;
    dfs(grid, { x: x + dX, y: y + dY }, end);
  }
}

const numIslands = function (grid: string[][]): number {
  let count = 0;
  const endRow = grid.length;
  const endCol = grid[0].length;

  for (let y = 0; y < endRow; y++){
    for (let x = 0; x < endCol; x++){
      if (grid[y][x] === '1') {
        count++;
        dfs(grid, { x, y }, { x: endCol, y: endRow });
      }
    }
  }
  return count;
};