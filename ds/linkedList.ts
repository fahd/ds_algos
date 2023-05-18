// interface describes the shape of an object
// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

interface LinkedList<T> {
  get length(): number;
  insertAt (item: T, index: number): void;
  remove (item: T): T | undefined;
  removeAt (index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}