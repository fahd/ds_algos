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

// my solution
function walk_1(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {  
  if (a && !b || !a && b) return false;
  if (a && b) {
    if (a.value !== b.value) return false;
    if (!walk(a.left, b.left)) return false;
    if (!walk(a.right, b.right)) return false;
  }
  return true;
}

 // alternative, simpler to understand
function walk(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {  
  // if this holds true throughout both trees, then that means that all the values
  // prior to reaching null are equivalent => otherwise, we would've returned false

  // have we made it to a point in both subtrees where we both can't recurse any further
  // intimates structurally, we are the exact same
  if (a === null && b === null) return true;

  // structurally not the same
  if (a === null || b === null) return false;
  
  // no value equivalence
  if (a.value !== b.value) return false;

  return walk(a.left, b.left) && walk(a.right, b.right);
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
