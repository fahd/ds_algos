interface Stack {
  storage: {
    [key: number]: number
  };
  stack_size: number;
}

class Stack {
  constructor() {
    this.storage = {};
    this.stack_size = 0;
  }
  push(value: number): void {
    this.storage[this.stack_size++] = value;
  }
  pop(): number | void {
    if (this.stack_size) {
      const val = this.storage[this.stack_size - 1];
      delete this.storage[this.stack_size - 1];
      this.stack_size--;
      return val;
    }
  }
  size(): number {
    return this.stack_size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(
  'stack',stack
);
