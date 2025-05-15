function createParabolaImg(imgSrc, startX, startY) {
  const deltaX = Math.random() * 160 - 80;
  const peakY = -60 - Math.random() * 40;
  const duration = 900 + Math.random() * 200;
  const rotateStart = Math.random() * 60 - 30;
  const rotateEnd = rotateStart + Math.random() * 180 + 90;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("click-img");
  img.style.left = startX + "px";
  img.style.top = startY + "px";
  document.body.appendChild(img);

  const start = performance.now();
  function animate(now) {
    const t = Math.min((now - start) / duration, 1);
    const x = startX + deltaX * t;
    const y = startY + peakY * 4 * t * (1 - t) + 120 * t * t;
    const rotate = rotateStart + (rotateEnd - rotateStart) * t;
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = `rotate(${rotate}deg) scale(${1 - 0.3 * t})`;
    img.style.opacity = (1 - t).toString();
    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      img.remove();
    }
  }
  requestAnimationFrame(animate);
}
