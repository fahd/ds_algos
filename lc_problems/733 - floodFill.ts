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

function bfs(image: number[][], start: Point, end: Point, color: number, startValue: number):void {
  let q = [start];
  image[start.y][start.x] = color;
  
  while (q.length){
    let { x, y } = q.shift() as Point;

    for (const dir of dirs) {
      let [dX, dy] = dir;

      let nX = x + dX;
      let nY = y + dy;

      if (nX < 0 || nX >= end.x) continue;
      if (nY < 0 || nY >= end.y) continue;
      if (image[nY][nX] === color) continue;
      if (image[nY][nX] != startValue) continue;

      image[nY][nX] = color;
      q.push({ x: nX, y: nY });
    }
  }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  if (image[sr][sc] === color) return image;
  bfs(image, { x: sc, y: sr }, { x: image[0].length, y: image.length }, color, image[sr][sc]);
  return image;
};
