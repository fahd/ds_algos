type Point = {
  x: number;
  y: number;
}

const dirs = [
  // down
  [0, 1],
  // up
  [0, -1],
  // left
  [-1, 0],
  // right
  [1, 0]
]

function bfs(
  image: number[][],
  coordinate: Point,
  startValue: number,
  color: number
) {
  const { x, y } = coordinate;
  if (x < 0 || x >= image[0].length) return;
  if (y < 0 || y >= image.length) return;

  // case: already been changed
  if (image[y][x] === color) return;
  
  // case: if its not the type of element we want to change
  if (image[y][x] !== startValue) return;
  
  image[y][x] = color;

  for (const [dx, dy] of dirs) {
    bfs(image, { x: dx + x, y: dy + y }, startValue, color);
  }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  if (image[sr][sc] === color) return image;
  bfs(image, {x:sc, y: sr}, image[sr][sc], color)
  return image;
}