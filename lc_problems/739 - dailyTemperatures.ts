function dailyTemperatures(temperatures: number[]): number[] {
  const stack = [[temperatures[0], 0]];
  const o = new Array(temperatures.length).fill(0);

  for (let i = 1; i < temperatures.length; i++) {
    const currTemp = temperatures[i];    
    let prevIdx = stack.length - 1;

    while (prevIdx > -1 && stack[prevIdx][0] < currTemp) {
      let prevDay = stack[prevIdx][1];
      o[prevDay] = i - prevDay;
      stack.pop();
      prevIdx--;
    }
    stack.push([currTemp, i]);
  }
  return o;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(
  'dailyTemperatures', dailyTemperatures(temperatures)
);
