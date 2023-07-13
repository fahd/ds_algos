/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 
export function walk(root: TreeNode | null, depth: number): number {
  if (!root) return depth;
  let lDepth;
  let rDepth;

  lDepth = walk(root.left, depth + 1);
  rDepth = walk(root.right, depth + 1);

  return Math.max(lDepth, rDepth);

}

export function maxDepth(root: TreeNode | null): number {
  return walk(root, 0);
};