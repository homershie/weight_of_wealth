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

  // 初始化 tippy
  tippy(angel, {
    content() {
      const a = window.angel;
      if (!a) return "";
      return `
        <div style="
          display: flex;
          align-items: center;
          padding: 12px;
          font-family: 'Press Start 2P', monospace;
          font-size: 12px;
          color: white;
        ">
          <img src="${a.img}" alt="${a.id}" style="
            width: 100px;
            height: auto;
            margin-right: 16px;
            display: inline-block;
          " />
          <div style="
            flex: 1;
            text-align: left;
          ">
            <h4 style="
              font-size: 16px;
              margin: 0 0 8px 0;
              color: white;
            ">
              ${a.name}
            </h4>
            <p style="margin: 0;">
              <i style="color: var(--yellow);">${a.subtitle}</i><br />
              <span style="color: white;">${a.description}</span>
            </p>
          </div>
        </div>
      `;
    },
    allowHTML: true,
    placement: "right",
    animation: "fade",
    delay: [100, 0],
    followCursor: true,
    theme: "wow-dark",
  });

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
