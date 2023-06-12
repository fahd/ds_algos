// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s:string):boolean {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    let re = /[a-zA-Z0-9]/;
    let lC = s[l].toLowerCase();
    let rC = s[r].toLowerCase();

    if (!re.test(s[l])) {
      l++;
      continue;
    }
    if (!re.test(s[r])) {
      r--;
      continue;
    }

    if (lC !== rC) return false;
    l++, r--;
  }
  return true;
};

console.log(
  'isPalindrome',isPalindrome('0P')
);
