// https://leetcode.com/problems/merge-two-sorted-lists/
/* Definition for singly-linked list*/

/*
x
4

node -> 1 - 1 - 2 - 3 -> X
L1N = 4
L2N = 4
*/
class ListNode {
  val: number
  next: ListNode | null
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 && !list2) return list1;
  if (list2 && !list1) return list2;

  let prehead = new ListNode(-1);
  let prev:ListNode | null = prehead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      if (prev) prev.next = list1;
      list1 = list1.next;
    }
    else if (list2.val < list1.val) {
      if (prev) prev.next = list2;
      list2 = list2.next;
    }
    if (prev) prev = prev.next;
  }
  if (prev) prev.next = !list1 ? list2 : list1;
  return prehead.next;
};

const l1 = new ListNode(1)
const l2 = new ListNode(2)
const l3 = new ListNode(4)
l1.next = l2;
l2.next = l3;

const l4 = new ListNode(1)
const l5 = new ListNode(3)
const l6 = new ListNode(4)
l4.next = l5;
l5.next = l6;

console.log(
  mergeTwoLists(l1, l4)
);
