// head => B
// tail => B

// type QNode that   is a generic over T
// We create our own container, that means we can pass in any value
// We manage state ourselves
type QNode<T> = {
  value: T;
  next?: QNode<T>;
}

class Queue<T> {
  public length: number;
  // private head: QNode<T> | undefined;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }
  // O(1)
  enqueue(item: T): void {
    this.length++;
    
    const node = { value: item } as QNode<T>;

    // TypeScript -> have to intentionally check for undefined. It gets confused.
    if (!this.tail) this.tail = this.head = node;
      
    else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }
  // O(1) 
  deque(): T | undefined {
    if (!this.head) return undefined;

    this.length--;

    const head = this.head;
    
    this.head = this.head.next;
    // console.log(
    //   'head',head
    // );
    // console.log(
    //   'this.head',this.head
    // );
    head.next = undefined;
    
    if (this.length === 0) this.tail = this.head;
    
    // can't be head? because we already checked to see if it exists.
    return head.value;
  }

  peek(): T | undefined {
    // if (!this.head) return undefined;
    // return this.head.value;
    return this.head?.value;
  }
}

const queue = new Queue();
// A, B are the generics.
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");


console.log(queue.deque());
console.log(
  'queue',queue
);
// console.log(queue.deque());
// console.log(queue.deque());

