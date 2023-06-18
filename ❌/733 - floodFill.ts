const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

type Point = {
  x: number;
  y: number;
}

function dfs(image: number[][], start: Point, end: Point, color: number, startValue: number):void {
  if (start.x < 0 || start.x >= end.x) return;
  if (start.y < 0 || start.y >= end.y) return;
  if (image[start.y][start.x] === color) return;
  if (image[start.y][start.x] != startValue) return;
  
  image[start.y][start.x] = color;

  for (const dir of dirs) {
    let [dX, dY] = dir;
    dfs(image, { x: start.x + dX, y: start.y + dY }, end, color, startValue);
  }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  if (image[sr][sc] === color) return image;
  dfs(image, { x: sc, y: sr }, { x: image[0].length, y: image.length }, color, image[sr][sc]);
  return image;
};