document.addEventListener('DOMContentLoaded', function () {
  const priceDiv = document.getElementById('stock-price');
  // Fetch real-time stock price using Yahoo Finance API
  const ticker = '005930.KS';
  // Use AllOrigins raw endpoint to bypass CORS restrictions
  const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`);
  fetch(proxyUrl)
    .then(response => response.json())
    .then(data => {
      const result = data.quoteResponse.result[0];
      const price = result?.regularMarketPrice;
      const currency = result?.currency;
      if (price !== undefined) {
        const name = result?.longName || '삼성전자';
        priceDiv.textContent = `${name}: ${price} ${currency}`;
        const priceInput = document.getElementById('stock-input');
        priceInput.value = `${name}: ${price} ${currency}`;
      } else {
        priceDiv.textContent = `${ticker}: 데이터 불러오기 실패`;
      }
    })
    .catch(() => {
      priceDiv.textContent = `${ticker}: 데이터 불러오기 오류`;
    });
});
