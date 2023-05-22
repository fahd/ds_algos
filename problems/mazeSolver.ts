// base => where we are currently at
// recursive => requires us to walk in directions

type Point = {
  x: number;
  y: number
}

const dir = [
  [-1, 0], // left
  [1, 0],  // right
  [0, -1], // down
  [0, 1]   // up
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  // boolean 2d array
  seen: boolean[][],
  path: Point[]
): boolean { 
  // 1. Base Case
  // off the map
  if (
    (curr.x < 0 || curr.x >= maze[0].length) ||
    (curr.y < 0 || curr.y >= maze.length)
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // we're at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  } 
 
  if (seen[curr.y][curr.x]) {
    // don't recurse on places we've already been
    return false;
  }

  
  // 3 recurse
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // post
  for (let i = 0; i < dir.length; i++) {
    // 4 directions
    const [x, y] = dir[i];
    if (walk(
      maze,
      wall,
      {
        x: curr.x + x,
        y: curr.y + y
      },
      end,
      seen,
      path
      )) {
        return true;
      }
    }
  
  path.pop();
  
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];
  
  // create 2D array full of falses.
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  // traverse our array
  walk(maze, wall, start, end, seen, path);
  
  return path;
}