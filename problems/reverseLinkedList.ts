type LLNode = {
  value: number;
  next: LLNode | null;
}

function reverseLinkedList(ll: LLNode): LLNode | null{
  let prev:LLNode | null = null;
  let curr:LLcurr | null = ll;

  while (curr) {
    const next:LLNode | null = curr.next; // next candidate for reversal
    curr.next = prev; // point curr backwards
    prev = curr; // reset what previous is, iterate next prev candidate
    curr = next; // iterate next candidate
  }
  return prev; // return last node processed, which is the former tail
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
