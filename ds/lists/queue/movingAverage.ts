class MovingAverage {
  public data: number[];
  public size: number;
  public movingAverage: number;

  constructor(size: number) {
    this.size = size;
    this.data = [];
    this.movingAverage = 0;
  }

  next(val: number): number {
    if (this.data.length === this.size) {
      const last = this.data.pop();
      if (last) {
        this.movingAverage -= last;
        this.data.unshift(val);
        this.movingAverage += val;
      }
      return this.movingAverage / this.size;
    }
    this.movingAverage += val;
    this.data.unshift(val);
    return this.movingAverage / this.data.length;
  }
}

const ma = new MovingAverage(3);
console.log(
  ma.next(1)
);
console.log(
  ma.next(10)
);
console.log(
  ma.next(3)
);
console.log(
  ma.next(5)
);


/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/