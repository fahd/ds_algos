// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let s:number[][] =  [[prices[0], 0]];
  let mp: number = 0;

  for (let i = 1; i < prices.length; i++){
    let price = prices[i];
    if (price <= s[s.length - 1][0]) {
      s.pop();
      s.push([price, i]);
      continue;
    }
    mp = Math.max(mp, price - s[s.length - 1][0]);
  }
  return mp;
};

/* 
7,1,5,3,6,4
          ^

mp = [5,1]

s = [
  [1, 1]
]
*/

console.log(
  'maxProfit', maxProfit([7,1,5,3,6,4])
);
