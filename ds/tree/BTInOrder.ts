function walk(node: BinaryNode<number> | null, path: number[]):number[] {
  if (!node) return path;
     
  // recurse
  walk(node.left, path);

  // pre
  path.push(node.value);

  // recurse
  walk(node.right, path);

  // post
  return path;
}

export default function in_order_search(head: BinaryNode<number>):number[] {
  return walk(head, []);
}