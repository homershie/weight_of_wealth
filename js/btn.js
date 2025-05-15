// 開始遊戲
const startBtn = document.querySelector(".start-btn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    resetGameData();
    window.gameState.isGameOver = false;
    showTimer();
    startCountdown();
    startAutomation();
    startBtn.style.userSelect = "none";
    startBtn.style.pointerEvents = "none";
    startBtn.style.opacity = "0";
  });
}

// 重新開始遊戲
const restartBtn = document.querySelector(".restart-btn");
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    window.gameState.isGameOver = true;
    if (typeof stopAutomation === "function") stopAutomation();
    if (typeof countdown !== "undefined" && countdown) clearInterval(countdown);
    resetGameData();
    updateStoreStatus();
  });
}

// 結束遊戲
const endBtn = document.querySelector(".end-btn");
if (endBtn) {
  endBtn.addEventListener("click", () => {
    if (typeof stopAutomation === "function") stopAutomation();
    if (typeof countdown !== "undefined" && countdown) clearInterval(countdown);
    handleGameOver(false);
    updateStoreStatus();
  });
}
