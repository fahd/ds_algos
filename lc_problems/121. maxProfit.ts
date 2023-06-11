// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Time - O(n)
// Space - O(1)
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let mp = 0;

  for (let i = 1; i < prices.length; i++){
    let price = prices[i];
    if (price < min) {
      min = price;
      continue;
    }
    mp = Math.max(price - min, mp)
  }
  return mp;
};

console.log(
  'maxProfit', maxProfit([7,1,5,3,6,4])
);
