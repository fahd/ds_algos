/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {

  if (!list1 && list2) return list2;
  if (!list2 && list1) return list1;

  let newList: ListNode = {
    val: -1,
    next: null
  };

  let nlRef = newList;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      nlRef.next = l1;
      nlRef = nlRef.next;
      l1 = l1.next;
    }
    else if (l2.val < l1.val) {
      nlRef.next = l2;
      nlRef = nlRef.next;
      l2 = l2.next;
    }
  }
  nlRef.next = !l1 ? l2 : l1;
  return newList.next;
}

export default mergeTwoLists;