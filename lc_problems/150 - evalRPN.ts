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

function performOperation(operation: string, first: number, second: number): number | undefined {
  switch (operation) {
    case "*":
      return first * second;
    case "/":
      return first / second;
    case "+":
      return first + second;
    case "-":
      return first - second;
  }
  return 0;
}

function roundNumber(n: number): number {
  if (Math.abs(n) < 1) return 0;
  if (n < 0) return Math.ceil(n);
  else return Math.floor(n);
}


function evalRPN(tokens: string[]): number {
  const stack:number[] = [];
  
  for (let i = 0; i < tokens.length; i++){
    const char = tokens[i];
    
    if ((parseInt(char) % 1) === 0) {
      stack.push(parseInt(char));
      continue;
    }
    // if we have an operator
    const second = stack.pop() as number;
    const first = stack.pop() as number;
    const value = performOperation(char, first, second) as number;
    let next = roundNumber(value);
    stack.push(next);
  }

  return stack.pop() as number;
};

