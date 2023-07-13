const validAnagram = (s1: string, s2: string): boolean => {
  const o: {
    [key:string]: number
  } = {};
  for (let i = 0; i < s1.length; i++){
    let char = s1[i];

    o[char] = o[char] || 0;
    o[char]++;
  }

  for (let i = 0; i < s2.length; i++){
    let char = s2[i];

    o[char] = o[char] || 0;
    o[char]--;
    if (o[char] < 0) return false;
    if (o[char] === 0) delete o[char]
  }
  return Object.keys(o).length === 0;
}


const isStringAnagram = (s1: string, s2: string): boolean => {
  let map = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++){
    let s1c = s1[i];
    let s2c = s2[i];
    map[s1c.charCodeAt(0) + 97]++;
    map[s2c.charCodeAt(0) + 97]--;
  }
  for (let i = 0; i < map.length; i++){
    if (map[i] !== 0) return false;
  }
  return true;
}