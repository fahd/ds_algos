// https://leetcode.com/problems/clone-graph/
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

type GraphNode = {
  [key: number]: Node;
}

function walk(node:Node | null, seen: GraphNode): Node | null {
  if (!seen.hasOwnProperty(node.val)) {
    const clone = new Node(node.val);
    seen[node.val] = clone;
    clone.neighbors = node.neighbors.map(neighbor => walk(neighbor, seen))
  }
  return seen[node.val];
}

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return node;
  const seen:GraphNode = {};
  return walk(node, seen);
};