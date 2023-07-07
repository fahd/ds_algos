// https://leetcode.com/problems/valid-anagram/

// anagramnagaram
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    map[sChar.charCodeAt(0) + 97]++;
    map[tChar.charCodeAt(0) + 97]--;
  }
  
  for (let i = 0; i < map.length; i++){
    if (map[i] !== 0) return false;
  }
  
  return true;
};
