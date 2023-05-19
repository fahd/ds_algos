type QNode<T> = {
  value: T;
  next?: QNode<T>;
  // enqueue(value: T): void;
  // deque(): T | undefined;
  // peek(): T | undefined;
}

export default class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as QNode<T>;
    this.length++;
    
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node; 
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(
  'queue',queue
);
console.log(
  'queue.deque', queue.deque()
);
console.log(
  'queue.deque', queue.deque()
);
console.log(
  'queue.deque', queue.deque()
);
console.log(
  'queue.peek()', queue.peek()
);




