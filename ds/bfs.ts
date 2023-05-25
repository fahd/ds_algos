type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  let stack = [head];
  let order: number[] = [];
  let bool: boolean = false;
  while (stack.length) {
    let curr: BinaryNode<number> | undefined = stack.shift();
    curr && order.push(curr.value);
    if (curr && curr.value === needle) bool = true;
    if (curr && curr.left) stack.push(curr.left);
    if (curr && curr.right) stack.push(curr.right);
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
}

console.log(
  'bfs', bfs(bst, 9)
);
