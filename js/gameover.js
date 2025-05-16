let hasGameStarted = false;
function handleGameOver(isTimeout = false) {
  if (window.gameState.isGameOver) return;
  window.gameState.isGameOver = true;
  // 禁用 LOGO 點擊
  const logo = document.getElementById("logo");
  if (logo) logo.style.pointerEvents = "none";

  // 禁用科技與商店
  document.querySelectorAll(".tech-item, .store-item").forEach((el) => {
    el.style.pointerEvents = "none";
    el.style.filter = "grayscale(1)";
    el.style.cursor = "not-allowed";
  });

  const swalOptions = isTimeout
    ? {
        title: "遊戲結束",
        text: "時間到！",
        icon: "info",
        iconColor: "#db0007",
        background: "#000",
        color: "#fff",
        confirmButtonText: "確定",
        customClass: { confirmButton: "w-confirm" },
      }
    : {
        title: "遊戲結束",
        text: "你已結束本次遊戲！",
        icon: "info",
        iconColor: "#db0007",
        background: "#000",
        color: "#fff",
        confirmButtonText: "確定",
        customClass: { confirmButton: "w-confirm" },
      };

  Swal.fire(swalOptions).then(() => {
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
        inputAttributes: { maxlength: 8 },
        allowOutsideClick: false,
      }).then((result) => {
        window.gameState.topCals = window.gameState.cals;
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
        hasGameStarted = false;
      });
    } else {
      resetGameData();
      hasGameStarted = false;
    }
  });
}
