type StackNode<T> = {
  value: T;
  prev?: StackNode<T>;
 }

export default class Stack<T> {
  public length: number;
  private head?: StackNode<T>;
  
  constructor() {
    this.length = 0;
    this.head = undefined;
  }
    
  // O(1)
  push(item: T): void {
    const node = { value:item } as StackNode<T>;
    if (!this.head) this.head = node;
    else {
      node.prev = this.head;
      this.head = node;
    }
    this.length++;
  }

  // O(1) 
  pop(): T | undefined {
    if (!this.head) return undefined;
    this.length--;

    const node = this.head;
    this.head = this.head.prev;

    // free up memory
    node.prev = undefined;
    // return value
    return node.value;
    
  }

  peek(): T | undefined {
    // if (!this.head) return undefined;
    // return this.head.value;
    return this.head?.value;  
  }

  size(): number {
    return this.length;
  }
}

/*
  interface Stack {
  // storage: {[number]: boolean};
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

  stack.pop();
  stack.pop();
  stack.pop();
  console.log(
    'stack after pop',stack
  );
*/
