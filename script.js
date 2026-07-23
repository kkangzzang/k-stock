document.addEventListener('DOMContentLoaded', function () {
  const priceDiv = document.getElementById('stock-price');
  // Fetch real-time stock price using Yahoo Finance API
  const ticker = 'AAPL';
  fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`)
    .then(response => response.json())
    .then(data => {
      const result = data.quoteResponse.result[0];
      const price = result?.regularMarketPrice;
      const currency = result?.currency;
      if (price !== undefined) {
        priceDiv.textContent = `${ticker}: ${price} ${currency}`;
        const priceInput = document.getElementById('stock-input');
        priceInput.value = `${ticker}: ${price} ${currency}`;
      } else {
        priceDiv.textContent = `${ticker}: 데이터 불러오기 실패`;
      }
    })
    .catch(() => {
      priceDiv.textContent = `${ticker}: 데이터 불러오기 오류`;
    });
});
