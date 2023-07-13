class MyQueue {
  public stack1: number[];
  public stack2: number[];
  public front: number | null;

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.front = null;
  }

  push(x: number): void {
    if (!this.front) this.front = x;    
    this.stack1.push(x);
  }

  pop(): number | undefined{
    // we have to transfer if we havent popped before, or once
    // we have already popped off all from our second array
    if (this.stack2.length === 0){
      while (this.stack1.length > 0) {
        let stack1Last = this.stack1.pop();
        if (stack1Last) this.stack2.push(stack1Last)
      }
    }
    // if transfer completed
    const val = this.stack2.pop();
    
    // set our front if more items to be popped
    if (this.stack2.length) {
      this.front = this.stack2[this.stack2.length - 1]
    }
    // set our front if no items to be popped, and items in stack1
    else if (this.stack1.length) {
      this.front = this.stack1[0]
    }
    // if no items in stack1 or stack2, we are empty now
    else {
      this.front = null;
    }
    // last element from stack2
    return val;
  }

  peek(): number | null {
    return this.front;
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}


/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/