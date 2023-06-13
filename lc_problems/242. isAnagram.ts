// https://leetcode.com/problems/valid-anagram/

// anagramnagaram
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map:{[key:string]: number} = {};
  
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    map[sChar] = map[sChar] || 0;
    map[tChar] = map[tChar] || 0;
    map[sChar]++;
    map[tChar]--

    if (map[sChar] === 0) delete map[sChar];
    if (map[tChar] === 0) delete map[tChar];
  }
  return Object.keys(map).length === 0;
};
console.log(
  'isAnagram',isAnagram('rat','car')
);
