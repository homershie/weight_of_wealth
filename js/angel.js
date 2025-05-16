function spawnAngel() {
  if (document.getElementById("angel-buff")) return; // 避免同時多個
  const angel = document.createElement("img");
  angel.src = "./images/calories_angel.gif";
  angel.id = "angel-buff";
  angel.style.position = "fixed";
  angel.style.width = "150px";
  angel.style.zIndex = 9999;
  angel.style.cursor = "pointer";
  // 隨機位置
  angel.style.left = Math.random() * (window.innerWidth - 80) + "px";
  angel.style.top = Math.random() * (window.innerHeight - 180) + 60 + "px";
  document.body.appendChild(angel);

  angel.addEventListener("click", () => {
    angel.remove();
    triggerAngelBuff();
  });

  // 10秒後自動消失
  setTimeout(() => angel.remove(), 10000);
}

// 每30~60秒隨機生成一次
setInterval(() => {
  if (!window.gameState.isGameOver && !window.gameState.angelBuff.active) {
    if (Math.random() < 0.5) spawnAngel();
  }
}, 10000);

function triggerAngelBuff() {
  window.gameState.angelBuff.active = true;
  window.gameState.angelBuff.endTime = Date.now() + 10000;

  // 產生隨機掉落動畫
  spawnAngelRain();

  // 10秒後自動關閉
  setTimeout(() => {
    window.gameState.angelBuff.active = false;
  }, 10000);
}
