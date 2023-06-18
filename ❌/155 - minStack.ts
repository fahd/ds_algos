/*
https://leetcode.com/problems/min-stack/description/
*/

/*
  input = 6, 12, 4, 3, 30, 1, 7
  
  Approach 1
  stack = [
    [6,6],
    [12,6],
    [4,4],
    [3,3],
    [30,3],
    [1,1],
    [7,1]
  ]
  Approach 2
  stack = [
    6,
    12,
    4,
    3,
    30,
    1,
    1,
    7
  ]
  minStack = [
    6,
    4,
    3,
    1,
    1
  ]
*/

class MinStack {
  public stack:number[]
  public minStack:number[]

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push(val);
      this.minStack.push(val);
      return;
    }
    
    if (val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
    this.stack.push(val);
  }

  pop(): void {
    if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}