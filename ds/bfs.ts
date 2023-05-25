type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  let queue:(BinaryNode<number> | null)[] = [head];
  let order: number[] = [];
  let bool: boolean = false;
  while (queue.length) {
    // pretend this is a shorthand for a queue. we could implement the entire queue.
    // the runtime with a javascript array is O((n times to shift items over) * (n items visited))
      // as a result, we end up with O(n^2)
    let curr: BinaryNode<number> | null | undefined = queue.shift();
    curr && order.push(curr.value);
    if (curr && curr.value === needle) bool = true;
    if (curr && curr.left) queue.push(curr.left);
    if (curr && curr.right) queue.push(curr.right);
  }

  console.log(
    'order',order
  );
  
  return bool;
}

/*
     7
  4     8
3  5   6  9
*/
// each level of the tree is approximately half of the entire tree, when including up to that level and above it
// that means that at each level of bfs, we'd have to do shift around half the size of the tree when visiting 
// all the nodes at a certain level
  // n amount of work, n times
  // O(n^2)
const bst = {
  value: 7,
  left: {
    value: 4,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 8,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 9,
      left: null,
      right: null
    }
  }
} as BinaryNode<number>;

console.log(
  'bfs', bfs(bst, 9)
);
