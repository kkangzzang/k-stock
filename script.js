document.addEventListener('DOMContentLoaded', function () {
  const priceDiv = document.getElementById('stock-price');
  // 임시 데이터 (예시) - 실제 API를 호출하려면 fetch 사용
  const price = '65,000원';
  priceDiv.textContent = `삼성전자: ${price}`;
});
