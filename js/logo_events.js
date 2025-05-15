window.gameState = window.gameState || {};
window.gameState.cals = window.gameState.cals || 0;
window.gameState.clicks = window.gameState.clicks || 0;
window.gameState.spend = window.gameState.spend || 0;
window.gameState.calsNow = window.gameState.calsNow || 0;
window.gameState.calsPS = window.gameState.calsPS || 0;

const logo = document.getElementById("logo");

function handleClickLogo(e, isKeyboard = false) {
  if (window.gameState.isGameOver) return;
  // 取得動畫起點
  let startX, startY;
  if (isKeyboard) {
    const rect = logo.getBoundingClientRect();
    startX = rect.left + rect.width / 2 - 18;
    startY = rect.top + rect.height / 2 - 18;
  } else {
    startX = e.clientX - 18;
    startY = e.clientY - 18;
  }

  // 點擊數量++
  window.gameState.clicks++;

  let friesCal = point[0].calories;
  let friesAnimTimes = 1; // 預設動畫次數

  // 判斷是否已購買馬鈴薯農場科技
  const farmTech = techItem.find((t) => t.id === "farm");
  if (farmTech && farmTech.owned) {
    if (Math.random() < 0.5) {
      friesCal *= 2;
      friesAnimTimes = 2; // 50% 機率動畫出現2次
    }
  }

  let nuggetCal = 0;
  // 判斷是否已購買外星雞舍科技
  const nuggetTech = techItem.find((t) => t.id === "chicken-coop");
  if (nuggetTech && nuggetTech.owned) {
    if (Math.random() < 0.5) {
      nuggetCal = point[1].calories;
      createParabolaImg(point[1].img, startX, startY);
    }
  }

  let burgerCal = 0;
  // 判斷是否已購買蟹堡配方科技
  const burgerTech = techItem.find((t) => t.id === "recipe");
  if (burgerTech && burgerTech.owned) {
    if (Math.random() < 0.1) {
      burgerCal = point[2].calories;
      createParabolaImg(point[2].img, startX, startY);
    }
  }

  // 判斷是否已購買基因研究科技
  const geneTech = techItem.find((t) => t.id === "gene-therapy");
  if (geneTech && geneTech.owned) {
    friesCal *= 2;
    nuggetCal *= 2;
    burgerCal *= 2;
  }

  window.gameState.cals += friesCal;
  const calsNow = window.gameState.cals - window.gameState.spend;

  // 這裡直接格式化顯示
  if (typeof formatNumber === "function") {
    elClicks.textContent = formatNumber(window.gameState.clicks);
    elCals.textContent = formatNumber(window.gameState.cals);
  } else {
    elClicks.textContent = window.gameState.clicks;
    elCals.textContent = window.gameState.cals;
  }
  elCalsNow.textContent = calsNow + " kcal";

  // logo 動畫
  logo.style.transition = "none";
  logo.style.transform = "scale(1)";
  void logo.offsetWidth;
  logo.style.transition = "transform 0.18s cubic-bezier(.4,1.5,.5,1)";
  logo.style.transform = "scale(1.1)";
  setTimeout(() => {
    logo.style.transform = "scale(1)";
  }, 180);

  // 薯條動畫
  for (let i = 0; i < friesAnimTimes; i++) {
    createParabolaImg(point[0].img, startX, startY);
  }

  // 更新科技狀態
  updateTechStatus();
}

// 綁定 LOGO 點擊事件
logo.addEventListener("click", (e) => handleClickLogo(e, false));
