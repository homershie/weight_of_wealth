const statValue = document.querySelectorAll(".statValue");
const techPrice = document.querySelectorAll(".techPrice");
// 數字格式化函式
function formatNumber(num) {
  num = Number(num);
  if (isNaN(num)) return num;
  if (num >= 1_000_000_000)
    return (num / 1_000_000_000).toFixed(3).replace(/\.?0+$/, "") + "B";
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(3).replace(/\.?0+$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(2).replace(/\.?0+$/, "") + "K";
  return num.toString();
}

// 將所有.statValue做格式化
statValue.forEach((el) => {
  // 只格式化純數字內容
  if (!isNaN(Number(el.textContent))) {
    el.textContent = formatNumber(el.textContent);
  }
});
