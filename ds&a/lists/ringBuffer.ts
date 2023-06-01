type QNode = {
    next: QNode | undefined;
    value: number;
}

class MyCircularQueue {
    public head?: QNode | undefined;
    public tail?: QNode | undefined;
    public value: number;
    public maxSize: number;
    public size: number;
    
    constructor(k: number) {
        this.maxSize = k;
        this.size = 0;
    }

    enQueue(value: number): boolean {
      if (this.isFull()) return false;
      const node = { value, next: undefined } as QNode;

      this.size++;
      
      if (!this.tail) {
        this.tail = this.head = node;
        return true;
      }

      this.tail.next = node;
      this.tail = this.tail?.next;
      // if we've reached the end, set circular reference to head
      if (this.isFull()) {
        if (this.tail) this.tail.next = this.head;
      }
      return true;
    }

    deQueue(): boolean {
      // edge case => we are empty
      if (this.isEmpty()) return false;

      this.size--;

      // dequeue from head
      const node = this.head;
      this.head = this.head?.next;

      if (this.isEmpty()) {
        this.tail = this.head = undefined;
      }

      return true;
    }

    Front(): number {
      if (this.isEmpty()) return -1;
      if (this.head) return this.head.value;
      return -1;
    }
    
    Rear(): number {
      if (this.isEmpty()) return -1;
      if (this.tail) return this.tail.value;
      return -1;
    }

    isEmpty(): boolean {
      return this.size === 0;

    }

    isFull(): boolean {
      return this.size === this.maxSize;
    }
}

const ll = new MyCircularQueue(3);
