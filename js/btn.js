// 重新初始化遊戲資料與畫面
function resetGameData() {
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
}

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
    window.gameState.isGameOver = true;
    // 禁用 LOGO 點擊
    const logo = document.getElementById("logo");
    if (logo) logo.style.pointerEvents = "none";

    Swal.fire({
      title: "遊戲結束",
      text: "你已結束本次遊戲！",
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
  });
}
