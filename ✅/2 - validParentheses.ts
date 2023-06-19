export default function isValid(str: string): boolean {
  const choices = {
    '(':')',
    '{':'}',
    '[':']',
  }

  const stack: string[] = [];
  
  for (let i = 0; i < str.length; i++){
    let el:string = str[i];
    if (choices[stack[stack.length - 1]] === el) stack.pop();
    else stack.push(el);
  }

  return stack.length === 0;
};