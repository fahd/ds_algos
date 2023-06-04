function getNextStates(combo: string): string[] {
  const newCombos: string[] = [];

  for (let i = combo.length - 1; i > -1; i--) {
    const char = combo[i];

    let nextChar;
    let prevChar;

    if (char === '0') {
      prevChar = String.fromCharCode(char.charCodeAt(0) + 9);
      nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    else if (char === '9') {
      prevChar = String.fromCharCode(char.charCodeAt(0) - 1);
      nextChar = String.fromCharCode(char.charCodeAt(0) - 9)
    }
    else {
      nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
      prevChar = String.fromCharCode(char.charCodeAt(0) - 1);
    }

    const newNextCombo:string = combo.slice(0, i).concat(nextChar).concat(combo.slice(i + 1));
    const newPrevCombo:string = combo.slice(0, i).concat(prevChar).concat(combo.slice(i + 1));

    newCombos.push(newNextCombo);
    newCombos.push(newPrevCombo);
  }

  return newCombos;
}


function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  let queue:[string, number][] = [
    ["0000", 0]
  ];
  const seen = new Set(['0000']);

  while (queue.length) {
    const next: [string, number][] = [];
    
    for (const [curr, steps] of queue) {
      if (curr === target) return steps;
      if (dead.has(curr)) continue;
      
      for (let nextCombo of getNextStates(curr)) {
        if (seen.has(nextCombo)) continue;
        seen.add(nextCombo);
        next.push([nextCombo, steps + 1]);
      }
    }

    queue = next;
  }
  return -1
};
