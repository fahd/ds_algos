// https://leetcode.com/problems/number-of-islands/

// Time Complexity -> O(m x n)
// Space Complexity -> O(m x n)

// in this example, we didn't mutate the original matrix. 
  // we can avoid using seen array by mutating the original array if allowed.

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

function dfs(
  grid: string[][],
  curr: Point,
  end: Point,
  seen: boolean[][],
): void {
  // if out of bounds x
  if (curr.x < 0 || curr.x >= end.x) return;

  // if out of bounds y
  if (curr.y < 0 || curr.y >= end.y) return;

  // if already seen
  if (seen[curr.y][curr.x]) return;
  
  // mark item as seen to prevent revisiting in future
  seen[curr.y][curr.x] = true;
  
  // if we are at a 0, prevent recursing throughout graph
  // we only want to recurse starting from a position on the island
  if (grid[curr.y][curr.x] === '0') return;

  // if on island, recurse through graph, visit surrounding nodes up to and including adjacent non-island positions
  for (let i = 0; i < dirs.length; i++){
    let [x, y] = dirs[i];
    dfs(grid, { x: curr.x + x, y: curr.y + y }, end, seen);
  }
}

export default function numIslands(grid: string[][]): number {
  const seen: boolean[][] = new Array(grid.length).fill(false);
  let count = 0;
  for (let i = 0; i < seen.length; i++){
    seen[i] = new Array(grid[0].length).fill(false);
  }
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++){
      // root node triggers a dfs
      if (!seen[y][x] && grid[y][x] === '1') {
        count++;
        dfs(grid, { x, y }, { x: grid[0].length, y: grid.length }, seen)
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
