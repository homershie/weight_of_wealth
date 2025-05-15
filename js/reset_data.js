// 重新初始化遊戲資料與畫面
function resetGameData() {
  window.gameState.isGameOver = false;
  window.gameState.isLocked = false; // 重新開始時解鎖
  // 保留 topCals, topPlayer
  const topCals = window.gameState.topCals;
  const topPlayer = window.gameState.topPlayer;

  window.gameState.clicks = 0;
  window.gameState.cals = 0;
  window.gameState.spend = 0;
  window.gameState.seconds = 60;
  window.gameState.calsPS = 0;
  window.gameState.calsNow = 0;
  window.gameState.topCals = topCals;
  window.gameState.topPlayer = topPlayer;

  // 重設科技
  techItem.forEach((t) => {
    t.owned = false;
    t.active = false;
    t.level = 0;
  });
  // 重設員工
  storeItem.forEach((s) => {
    s.owned = 0;
    s.level = 0;
    // 若有初始價格可重設
    // s.price = s.initPrice || s.price;
  });

  // 更新畫面
  if (typeof updateStoreStatus === "function") updateStoreStatus();
  if (typeof updateTechStatus === "function") updateTechStatus();
  if (typeof updateScoreList === "function") updateScoreList();
  if (typeof showTimer === "function") showTimer();

  // 重設統計數字
  if (typeof elClicks !== "undefined" && elClicks) elClicks.textContent = "0";
  if (typeof elCals !== "undefined" && elCals) elCals.textContent = "0";
  if (typeof elCalsNow !== "undefined" && elCalsNow)
    elCalsNow.textContent = "0 kcal";
  if (typeof elCalsPS !== "undefined" && elCalsPS)
    elCalsPS.textContent = "0 kcal/s";

  // 讓開始按鈕回來
  const startBtn = document.querySelector(".start-btn");
  if (startBtn) {
    startBtn.style.userSelect = "auto";
    startBtn.style.pointerEvents = "auto";
    startBtn.style.opacity = "1";
    startBtn.style.display = "";
  }
  // 讓 LOGO 可點
  const logo = document.getElementById("logo");
  if (logo) logo.style.pointerEvents = "auto";

  // 恢復科技與商店互動
  document.querySelectorAll(".tech-item, .store-item").forEach((el) => {
    el.style.pointerEvents = "auto";
    el.style.filter = "";
    el.style.cursor = "";
  });
}
