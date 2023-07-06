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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  walk(root);
  return root;
};

function walk(node: TreeNode): void {
  if (!node) return;
  const l = node.left;
  const r = node.right;
  walk(node.left);
  walk(node.right);
  node.right = l;
  node.left = r;
}
