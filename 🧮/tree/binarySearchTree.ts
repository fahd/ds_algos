// Append -> O(h) (down one branch), worst case O(log n) (balanced)

type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) return false;
  if (curr.value === needle) return true;

  // go left
  if (needle < curr.value) {
    return search(curr.left, needle);
  }
  // go right
  if (needle > curr.value) {
    return search(curr.right, needle);
  }

  return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}