function canConstruct(ransomNote: string, magazine: string): boolean {
  const a = new Array(26).fill(0);
  
  for (let i = 0; i < magazine.length; i++) {
    let c = magazine[i];
    let lIdx = c.charCodeAt(0) - 97;
    
    a[lIdx]++;
  }

  for (let i = 0; i < ransomNote.length; i++){
    let char = ransomNote[i];
    let lIdx = char.charCodeAt(0) - 97;
    a[lIdx]--;
    if (a[lIdx] < 0) return false;
  }

  return true;
}