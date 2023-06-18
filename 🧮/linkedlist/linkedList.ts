// more usable than arrays, require less memory allocation up front
// downside -> have to traverse each item in the list until you find what you're looking for
// you have to walk the whole thing

// ArrayList, you get random access. LinkedList => must traverse
// Access is bad on LinkedList, removing is bad on ArrayLists (have to move/shift everything over)

// An array does not have a capacity versus a length
  // An array is a contiguous spot of memory

// JavaScript arrays (ArrayList) with a reference to length are dynamic arrays that can be resized
  // There are extra operations on top to kind of dynamically "accordion" your array
  // according to what you need.

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

  // O(1) once we're at the parent, much better than an array
  // especially if we are doing operations in the middle of a list
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