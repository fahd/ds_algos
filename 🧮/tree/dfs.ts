type BinaryNode<T> = {
  value: T; 
  right: BinaryNode<T> | null;
  left: BinaryNode<T> | null;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

// no guarantee one side is perfectly equal compared to the other
// therefore, we have to walk the entire tree
function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) return false;
  if (curr.value === needle) return true;

  if (needle > curr.value) {
    return search(curr.right, needle);
  }
   if (needle < curr.value) {
    return search(curr.left, needle);
  }

  return false;
}

// function search(curr: BinaryNode<number> | null, needle: number): boolean {
//   if (!curr) return false;
//   if (curr.value === needle) return true;
//   if (needle < curr.value && search(curr.left, needle)) return true;
//   if (needle > curr.value && search(curr.right, needle)) return true;
//   return false;
// }
