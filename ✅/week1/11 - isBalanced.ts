// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 
export function height(root: TreeNode | null, depth: number): number {
  if (!root) return depth;
  let lH;
  let rH;

  lH = height(root.left, depth + 1);
  rH = height(root.right, depth + 1);

  return Math.max(lH, rH);
}

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  if (Math.abs(height(root.left, 0) - height(root.right, 0)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right)
};  