// 將全域狀態掛在 window，並只初始化一次
if (!window.gameState) {
  window.gameState = {
    clicks: 0,
    cals: 0,
    spend: 0,
    seconds: 60,
    calsPS: 0,
    topCals: 0,
    topPlayer: "Mr.FAT",
    isGameOver: true,
  };
}

// 儲存遊戲狀態到 localStorage
if (localStorage.currentScore) {
  const data = JSON.parse(localStorage.currentScore);
  window.gameState.calsNow = Number(data.calsNow) || 0;
  window.gameState.cals = Number(data.cals) || 0;
  window.gameState.spend = Number(data.spend) || 0;
  window.gameState.clicks = Number(data.clicks) || 0;
  window.gameState.calsPS = Number(data.calsPS) || 0;
  window.gameState.topPlayer = data.topPlayer || "Mr.FAT";
  window.gameState.topCals = Number(data.topCals) || 0;
}

const elClicks = document.getElementById("clicks");
const elCals = document.getElementById("cals");
const elCalsNow = document.getElementById("cals-now");
const elCalsPS = document.getElementById("cals-ps");
const elTopPlayer = document.querySelector("#top-player");
const elTopCals = document.querySelector("#top-cals");
const elCalsFry = document.querySelector("#cals-fry");
const elCalsNugget = document.querySelector("#cals-nugget");
const elCalsBurger = document.querySelector("#cals-burger");

// 讀取完 gameState 後，立即更新 DOM 顯示
if (elClicks) {
  elClicks.textContent = formatNumber(window.gameState.clicks);
}
if (elCals) {
  elCals.textContent = formatNumber(window.gameState.cals);
}
if (elCalsNow) {
  elCalsNow.textContent =
    window.gameState.cals - window.gameState.spend + " kcal";
}
if (elCalsPS) {
  elCalsPS.textContent = window.gameState.calsPS + " kcal/s";
}
if (elCalsFry) {
  elCalsFry.textContent = "+" + point[0].calories + " kcal";
}
if (elCalsNugget) {
  elCalsNugget.textContent = "+" + point[1].calories + " kcal";
}
if (elCalsBurger) {
  elCalsBurger.textContent = "+" + point[2].calories + " kcal";
}
if (elTopCals) {
  elTopCals.textContent = formatNumber(window.gameState.topCals);
}
if (elTopPlayer) {
  elTopPlayer.textContent = window.gameState.topPlayer;
}
function saveGameState() {
  localStorage.currentScore = JSON.stringify({
    topCals: window.gameState.topCals,
    topPlayer: window.gameState.topPlayer,
  });
}
