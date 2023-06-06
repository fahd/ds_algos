// '(]'
// /* 
//   [
//     ({
//   ]
// */ 
function isValid(s: string): boolean {
  const c: { [key: string]: string } = { '{': '}', '(': ')', '[': ']' }
  const r: string[] = [];
  for (let i = 0; i < s.length; i++){
    let v = s[i];
    if (c[r[r.length - 1]] === v) r.pop();
    else r.push(v);
  }
  return r.length === 0;
};
