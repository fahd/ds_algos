// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/*
[
  "10","6","9","3","+","-11","*","/","*","17","+","5","+"                                                   ^
]
]


Loop through items in array
  Push numbers into a stack
  [ 
    
  ]

  Encounter an operand
    perform operand on last two items
    take this value and push back onto stack
*/

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    const num = parseInt(token, 10);
    if (!isNaN(num)) stack.push(num);
    else {
      const second = stack.pop() as number;
      const first = stack.pop() as number;
      if (token === '*') stack.push(first * second);
      if (token === '+') stack.push(first + second);
      if (token === '-') stack.push(first - second);
      if (token === '/') stack.push(Math.trunc(first/second));
    }
  }
  return stack.pop() as number;
};
