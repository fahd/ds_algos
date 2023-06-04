// https://leetcode.com/problems/number-of-islands/

type Point = {
  x: number,
  y: number
}

const dirs = [
  [0, 1],  // down
  [0, -1], // up
  [1, 0], // right
  [-1, 0] // left
];

function walk(
  grid: string[][],
  curr: Point,
  end: Point,
  seen: boolean[][],
): void {
  // if out of bounds x
  if (curr.x < 0 || curr.x >= grid[0].length) return;

  // if out of bounds y
  if (curr.y < 0 || curr.y >= grid.length) return;

  // if already seen
  if (seen[curr.y][curr.x]) return;
  // if item is 1, we are at the start of an island.
    // recurse to visit all parts of island
  seen[curr.y][curr.x] = true;
  if (grid[curr.y][curr.x] === '0') return;

  // recurse through graph
  for (let i = 0; i < dirs.length; i++){
    let [x, y] = dirs[i];
    walk(grid, { x: curr.x + x, y: curr.y + y }, end, seen);
  }
}

function numIslands(grid: string[][]): number {
  const seen: boolean[][] = new Array(grid.length).fill(false);
  let count = 0;
  for (let i = 0; i < seen.length; i++){
    seen[i] = new Array(grid[0].length).fill(false);
  }
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++){
      if (!seen[y][x] && grid[y][x] === '1') {
        count++;
        walk(grid, { x, y }, { x: grid[0].length, y: grid.length }, seen)
      }
    }
  }
  
  return count;
};

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(
  'numIslands', numIslands(grid)
);
