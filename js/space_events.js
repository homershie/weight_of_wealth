document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (!hasGameStarted || window.gameState.isGameOver) {
      hasGameStarted = true;
      resetGameData();
      window.gameState.isGameOver = false;
      if (typeof showTimer === "function") showTimer();
      if (typeof startCountdown === "function") startCountdown();
      if (typeof startAutomation === "function") startAutomation();
    }
    // 直接呼叫 logo_anime.js 的共用 click 行為
    const logo = document.getElementById("logo");
    if (typeof handleClickLogo === "function") {
      handleClickLogo({ clientX: 0, clientY: 0 }, true);
    }
  }
});
