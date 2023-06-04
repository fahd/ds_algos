// array implementation
class MyCircularQueue {
  // private -> access within same class
  // protected -> access within same class and subclasses
  // public -> access from any location
  private size: number;
  private head: number;
  private tail: number;
  public data: number[];

  constructor(k: number) {
    this.size = k;
    this.tail = -1;
    this.head = -1;
    this.data = [];
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;
    this.tail = (this.tail + 1) % this.size;
    this.data[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = this.tail = -1;
      return true;
    }
    this.head = (this.head + 1) % this.size;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.data[this.head];
  }
  
  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.data[this.tail];
  }

  isEmpty(): boolean {
    return this.tail === -1 && this.head === -1;
  }

  isFull(): boolean {
    return ((this.tail + 1) % this.size) === this.head;
  }
}


/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/