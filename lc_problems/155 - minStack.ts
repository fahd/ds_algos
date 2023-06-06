/*
https://leetcode.com/problems/min-stack/description/
*/

type StackNode = {
  [key:number]:number[]
}

class MinStack {
  public min: number;
  public stack:StackNode
  public size: number;

  constructor() {
    this.min = Infinity;
    this.stack = {};
    this.size = 0;
  }

  push(val: number): void {
    this.min = Math.min(val, this.min);
    this.stack[this.size] = [val, this.min];
    this.size++;
  }

  pop(): void {
    this.size--;
    delete this.stack[this.size];
    if (this.size > 0) {
      this.min = this.getMin();
    } 
    else {
      this.min = Infinity;
    }
  }

  top(): number {
    return this.stack[this.size - 1][0];
  }

  getMin(): number {
    return this.stack[this.size - 1][1];
  }
}

const stack = new MinStack();

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/