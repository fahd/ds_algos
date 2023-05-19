class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> implements LinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private count: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get length(): number {
    return this.count;
  }

  insertAt(item: T, index: number): void {
    if (index < 0 || index > this.count) {
      throw new Error("Index out of range");
    }

    const newNode = new ListNode<T>(item);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.count) {
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      const prevNode = this.getNodeAtIndex(index - 1);
      newNode.next = prevNode!.next;
      prevNode!.next = newNode;
    }

    this.count++;
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === item) {
      const removedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.count--;
      return removedNode.value;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;
    while (currentNode) {
      if (currentNode.value === item) {
        prevNode.next = currentNode.next;
        if (!prevNode.next) {
          this.tail = prevNode;
        }
        this.count--;
        return currentNode.value;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return undefined;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.count) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head!.next;
      if (!this.head) {
        this.tail = null;
      }
      this.count--;
      return removedNode!.value;
    }

    const prevNode = this.getNodeAtIndex(index - 1);
    const removedNode = prevNode!.next;
    prevNode!.next = removedNode!.next;
    if (!prevNode!.next) {
      this.tail = prevNode;
    }
    this.count--;
    return removedNode!.value;
  }

  append(item: T): void {
    const newNode = new ListNode<T>(item);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
  }

  prepend(item: T): void {
    const newNode = new ListNode<T>(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.count++;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.count) {
      throw new Error("Index out of range");
    }
  }
}