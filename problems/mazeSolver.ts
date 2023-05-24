// base => where we are currently at
// recursive => requires us to walk in directions

// Example
type Point = {
  x: number;
  y: number
}

const dir = [
  [-1, 0], // left
  [1, 0], // right
  [0, -1],// up
  [0, 1] // down
];


function traverse(
  maze: string[],
  wall: string,
  current: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base Case

  // out of bounds
  if (current.x >= maze[0].length || current.x < 0) return false;
  if (current.y >= maze.length || current.y < 0) return false;
  
  // if we're at a wall
  if (maze[current.y][current.x] === wall) return false;
  
  // already seen
  if (seen[current.y][current.x]) return false;

  // if we've hit the end point
    // we know that end is valid
  if (current.x === end.x && current.y === end.y) {
    path.push(current);
    seen[current.y][current.x] = true;
    return true;
  }
  
  path.push(current);
  seen[current.y][current.x] = true;
  
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (traverse(maze, wall, { x: current.x + x, y: current.y + y }, end, seen, path)) {
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
  const path:Point[] = [];
  const seen:boolean[][] = [];

  for (let i = 0; i < maze.length; i++){
    let row = maze[i];
    seen.push(new Array(row.length).fill(false));
  }
  
  traverse(maze, wall, start, end, seen, path); 
   
  return path;
}
 