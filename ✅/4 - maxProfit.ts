function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let currMin = prices[0];
  
  for (let i = 1; i < prices.length; i++){
      const price = prices[i];
      maxProfit = Math.max(maxProfit, price - currMin);
      if (price < currMin) currMin = price;
  }
  
  return maxProfit;
};