type LLNode = {
  value: number;
  next: LLNode | null;
}

function reverseLinkedList(ll: LLNode): LLNode | null{
  let prev:null | LLNode = null;
  let node:LLNode | null = ll;

  while (node) {
    const save:LLNode | null = node.next;
    node.next = prev;
    prev = node;
    node = save;
  }
  return prev;
}

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value:3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

console.log(
  'reverseLinkedList',reverseLinkedList(linkedList)
);
