/*
Node<T>
 value: T
 children: Node<T>[]
*/

/*
  
*/

type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
}

class Tree<T> {
  public value: T;
  public children: TreeNode<T>[];
  
  constructor(item:T) {
    this.value = item;
    this.children = [];
  }

  add(item: T): void {
    const treeNode = new Tree(item);
    this.children.push(treeNode);
  }

  // root is at beginning
  preOrderTraversal(): void {
    // print node
    // recurse and visit children
    
  }
  // root is at middle
  inOrder(): void {
    // keep recursing left until no leave on left
    // print node
    // keep recursing right until no leaves on right
    // return back up
  }
  
  // root is at end
  postOrderTraversal(): void {
    // recurse left
    // recurse right
    // print node
    // return back up

  }
}


const tree = new Tree(1);
tree.add(2);
tree.add(3);

console.log(
  'tree',tree
);
