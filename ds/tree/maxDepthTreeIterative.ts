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

// stacks are used in converting recursive functions to iterative functions
export default function maxDepth(tree:TreeNode<number> | undefined, depth:number = 0):number {
  if (!tree) return depth;
  const stack: Array<[TreeNode<number> | undefined, number]> = [[tree, 1]]
  
  while (stack.length) {
    // as => ensure variables are treated with correct types during compilation
    const [node, currDepth] = stack.pop() as [TreeNode<number> | undefined, number];

    depth = Math.max(depth, currDepth);
    
    node?.left && stack.push([node.left, currDepth + 1]);
    node?.right && stack.push([node.right, currDepth + 1]);    
  }
  return depth;
}

/*
          1
      2       3
    4  5   6     7
   8        10
  9           11
                12
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
tree.right.left.right = new Tree(10);

// 5th level
tree.left.left.left.left = new Tree(9);
tree.right.left.right.right = new Tree(11);

// 6th level
tree.right.left.right.right.right = new Tree(12);

console.log(
  'maxDepth', maxDepth(tree)
);
