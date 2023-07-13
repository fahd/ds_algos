// regexp
// race a car

function isPalindrome(s: string): boolean {
  const str = s.toLowerCase().replace(/[^a-z0-9]/ig, '');
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};

console.log(
  'isPalindrome', isPalindrome("A man, a plan, a canal: Panama")
);


// regexp
function isPalindrome2(s: string): boolean {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    let lC = s[l].toLowerCase();
    let rC = s[r].toLowerCase();

    const re = new RegExp(/[a-zA-Z0-9]/);

    if (!re.test(lC)) {
      l++;
      continue;
    }
    if (!re.test(rC)) {
      r--;
      continue;
    }
    
    if (lC !== rC) return false;

    l++;
    r--;
  }
  return true;
};
