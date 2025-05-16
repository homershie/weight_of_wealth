// 重新開始遊戲
const restartBtn = document.querySelector(".restart-btn");
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    window.gameState.isGameOver = true;
    if (typeof stopAutomation === "function") stopAutomation();
    if (typeof countdown !== "undefined" && countdown) clearInterval(countdown);
    resetGameData();
  });
}

// 結束遊戲
const endBtn = document.querySelector(".end-btn");
if (endBtn) {
  endBtn.addEventListener("click", () => {
    if (typeof stopAutomation === "function") stopAutomation();
    if (typeof countdown !== "undefined" && countdown) clearInterval(countdown);
    handleGameOver(false);
  });
}
