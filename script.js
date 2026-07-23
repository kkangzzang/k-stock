document.addEventListener('DOMContentLoaded', function () {
  const priceDiv = document.getElementById('stock-price');
  // Fetch real-time stock price using Yahoo Finance API
  const ticker = '005930.KS';
  // Use cors.bridged.cc proxy to bypass CORS restrictions
  const proxyUrl = 'https://cors.bridged.cc/' + naverUrl;
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const priceElem = doc.querySelector('.no_today .blind');
      const priceText = priceElem ? priceElem.textContent.replace(/,/g, '').trim() : null;
      if (priceText) {
        const name = '삼성전자';
        priceDiv.textContent = `${name}: ${priceText} KRW`;
        const priceInput = document.getElementById('stock-input');
        priceInput.value = `${name}: ${priceText} KRW`;
      } else {
        priceDiv.textContent = `${ticker}: 데이터 불러오기 실패`;
      }
    })
    .catch(() => {
      priceDiv.textContent = `${ticker}: 데이터 불러오기 오류`;
    });
});
