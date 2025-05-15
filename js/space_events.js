document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (window.gameState.isGameOver || window.gameState.isLocked) return;
    window.gameState.isLocked = true;
    const logo = document.getElementById("logo");
    if (typeof handleClickLogo === "function") {
      handleClickLogo({ clientX: 0, clientY: 0 }, true);
    }
    setTimeout(() => {
      window.gameState.isLocked = false;
    }, 50);
  }
});
