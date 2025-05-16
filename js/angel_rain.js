function spawnAngelRain() {
  const rainDuration = 10000; // 10秒
  const startTime = Date.now();

  function dropOne() {
    if (Date.now() - startTime > rainDuration) return;
    // 隨機選一個 point
    const p = point[Math.floor(Math.random() * point.length)];
    const img = document.createElement("img");
    img.src = p.img;
    img.style.position = "fixed";
    img.style.left = Math.random() * (window.innerWidth - 60) + "px";
    img.style.top = "-60px";
    img.style.width = "36px";
    img.style.opacity = "1";
    img.style.pointerEvents = "none";
    img.style.zIndex = 9998;
    document.body.appendChild(img);

    const fallTime = 2500 + Math.random() * 2500; // 5~10秒
    const start = performance.now();

    function animate(now) {
      const t = Math.min((now - start) / fallTime, 1);
      img.style.top = (window.innerHeight - 300) * t + "px";
      img.style.opacity = (1 - t).toString();
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        img.remove();
      }
    }
    requestAnimationFrame(animate);

    // 下一個掉落
    setTimeout(dropOne, Math.random() * 50);
  }

  // 開始掉落
  dropOne();
}
