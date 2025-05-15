const timer = document.getElementById("timer");
function pad(n) {
  return n.toString().padStart(2, "0");
}

// 初始化時先顯示一次
function showTimer() {
  const min = Math.floor(window.gameState.seconds / 60);
  const sec = window.gameState.seconds % 60;
  timer.textContent = `${pad(min)}:${pad(sec)}`;
}
showTimer();

function endGame() {
  if (typeof stopAutomation === "function") stopAutomation();
  if (typeof countdown !== "undefined" && countdown) clearInterval(countdown);
  handleGameOver(true);
}

let countdown = null;
function startCountdown() {
  if (countdown) clearInterval(countdown);
  countdown = setInterval(() => {
    if (window.gameState.seconds <= 0) {
      clearInterval(countdown);
      timer.textContent = "00:00";
      endGame();
      stopAutomation();
      startBtn.style.userSelect = "auto";
      startBtn.style.pointerEvents = "auto";
      startBtn.style.opacity = "1";
      return;
    }
    window.gameState.seconds--;
    showTimer();
  }, 1000);
}
