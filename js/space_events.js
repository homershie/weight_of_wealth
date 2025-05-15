document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (window.gameState.isGameOver) return;
    // 直接呼叫 logo_anime.js 的共用 click 行為
    const logo = document.getElementById("logo");
    if (typeof handleClickLogo === "function") {
      handleClickLogo({ clientX: 0, clientY: 0 }, true);
    }
  }
});
