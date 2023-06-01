
export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }
  // Time -> O(logn) => complete tree at all ends, always fills from left to right. no gaps
  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }
  
  // Time -> O(logn) => complete tree at all ends, always fills from left to right. no gaps
  delete(): number | undefined{
    // take our head
    // get it's value out
    // take last element in array, put it into head's position
      // then heapify down
    if (!this.length) return undefined;
    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);  
    return out;
  }

  private heapifyDown(idx: number): void {
    // remove head
    // put last element into first position
    // heapify down
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    if (idx >= this.length) return; 
    if (lIdx >= this.length) return;

    const lV = this.data[lIdx];
    const rV = this.data[rIdx];
    const cV = this.data[idx];

    // if right value is the smallest, and our current value is greater than the smallest
      // heapify down
    if (lV > rV && cV > rV) {
      [this.data[idx], this.data[rIdx]] = [this.data[rIdx], this.data[idx]];
      this.heapifyDown(rIdx);
    } 
    else if (rV > lV && cV > lV) {
      [this.data[idx], this.data[lIdx]] = [this.data[lIdx], this.data[idx]];
      this.heapifyDown(lIdx);
    }    
  }

  private heapifyUp(idx: number):void {
    if (idx === 0) return;
   
    const p = this.parent(idx);
    const parentValue = this.data[p];
    const value = this.data[idx];
    
    // go up as far as we can until we are now larger than our parent
    if (parentValue > value) {
      [this.data[p], this.data[idx]] = [this.data[idx], this.data[p]];
      this.heapifyUp(p)
    }
  }
  
  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return 2 * idx + 1;
  }

  private rightChild(idx: number): number {
    return 2 * idx + 2;
  }
  
}