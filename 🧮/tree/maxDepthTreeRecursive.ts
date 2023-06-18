type TreeNode<T> = {
  value: T;
  left?: TreeNode<T> | undefined;
  right?: TreeNode<T> | undefined;
}


class Tree<T> {
  public left?: TreeNode<T>;
  public right?: TreeNode<T>;
  public value: T;
  
  constructor(value:T) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
  }
}


export default function maxDepth(tree:TreeNode<number> | undefined, depth:number = 0):number {
  // base case => if no depth remaining, return depth
  if (!tree) return depth;

  // max is max of left or right (root, which would be 0) + 1 for the current level
  return Math.max(
    maxDepth(tree.left, depth),
    maxDepth(tree.right, depth)
  ) + 1;
}

/*
        1
      2     3
    4  5   6  7
   8
  9
*/

// 1st level
const tree = new Tree(1);

// 2nd level
tree.left = new Tree(2);
tree.right = new Tree(3);

// 3rd level
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);

tree.right.left = new Tree(6);
tree.right.right = new Tree(7);

// 4th level
tree.left.left.left = new Tree(8);

// 5th level
tree.left.left.left.left = new Tree(9);

console.log(
  'maxDepth', maxDepth(tree)
);
