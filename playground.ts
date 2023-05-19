interface StackI<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
}

export default class Stack<T> implements StackI<T> {
  private values: T[];
  public length: number;

  constructor() {
    this.values = [];
    this.length = 0;
  }

  push(item: T): void {
    this.values.push(item);
    this.length++;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    this.length--;
    return this.values.pop();
  }

  peek(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    return this.values[this.length - 1];
  }
}

const stack = new Stack<number>();
stack.push(3);