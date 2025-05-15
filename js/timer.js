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

  // 禁用 LOGO 點擊
  const logo = document.getElementById("logo");
  if (logo) logo.style.pointerEvents = "none";

  Swal.fire({
    title: "遊戲結束",
    text: "時間到！",
    icon: "info",
    iconColor: "#db0007",
    background: "#000",
    color: "#fff",
    confirmButtonText: "確定",
    customClass: {
      confirmButton: "w-confirm",
    },
  }).then(() => {
    // 判斷是否破紀錄
    if (window.gameState.cals > window.gameState.topCals) {
      Swal.fire({
        title: "新紀錄！",
        text: "請輸入你的名字：",
        input: "text",
        background: "#FFF",
        color: "#000",
        inputPlaceholder: "你的名字",
        confirmButtonText: "儲存",
        customClass: {
          confirmButton: "w-save",
          input: "w-input",
        },
        inputAttributes: {
          maxlength: 8,
        },
        allowOutsideClick: false,
      }).then((result) => {
        // 無論如何都要存
        window.gameState.topCals = window.gameState.cals;
        // 若沒輸入或取消，預設為 Mr.FAT
        let name =
          result.isConfirmed && result.value && result.value.trim()
            ? result.value.trim()
            : "Dr.FAT";
        window.gameState.topPlayer = name;
        if (typeof elTopCals !== "undefined" && elTopCals)
          elTopCals.textContent = formatNumber(window.gameState.topCals);
        if (typeof elTopPlayer !== "undefined" && elTopPlayer)
          elTopPlayer.textContent = window.gameState.topPlayer;
        if (typeof saveGameState === "function") saveGameState();
        resetGameData();
      });
    } else {
      resetGameData();
    }
  });
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

// 綁定開始遊戲按鈕
const startBtn = document.querySelector(".start-btn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.gameState.isGameOver = false;
    showTimer();
    startCountdown();
    startAutomation();
    // 你可以在這裡隱藏開始按鈕或做其他初始化
    startBtn.style.userSelect = "none";
    startBtn.style.pointerEvents = "none";
    startBtn.style.opacity = "0";
  });
}
