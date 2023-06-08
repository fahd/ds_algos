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

function dfs(node: TreeNode, order: number[]): void {
  if (!node) return;
  dfs(node.left, order);
  order.push(node.val);
  dfs(node.right, order);
}

export function inorderTraversal(root: TreeNode | null): number[] {
  const order = [];
  dfs(root, order);
  return order;
};