/*
     7
  4     8
3  5   6  9
      x <-
*/   


/*
     7
  4     8
3  5   6  
      9 <-
*/
type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

function walk(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {  
  if (a && !b || !a && b) return false;
  if (a && b) {
    if (a.value !== b.value) return false;
    if (!walk(a.left, b.left)) return false;
    if (!walk(a.right, b.right)) return false;
  }
  return true;
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  return walk(a, b);
}

const a = {
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

const b = {
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
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: null,
    },
    right: null
  }
} as BinaryNode<number>;


console.log(
  compare(b,a)
);
