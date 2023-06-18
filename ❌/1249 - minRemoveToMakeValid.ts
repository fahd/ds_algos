// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

function minRemoveToMakeValid(s: string): string {
  const stack: [string, number][] = [];
  let str = '';
  
  for (let i = 0; i < s.length; i++){
    let c = s[i];
    if (stack.length && stack[stack.length - 1][0] === '(' && c === ')') stack.pop();
    else if (c === '(') stack.push(['(', i]);
    else if (c === ')') stack.push([')', i]);
  }

  for (let i = 0, j = 0; i < s.length; i++){
    let char = s[i];
    if (stack.length && j < stack.length && i === stack[j][1]) {
      j++;
      continue;
    }
    str += char;
  }
  
  return str;
};

debugger;
console.log(
  'minRemoveToMakeValid', minRemoveToMakeValid(')l)ee(t(c)o)))d(e))')
);
