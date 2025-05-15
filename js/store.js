const elTechItem = document.querySelectorAll(".tech-item");
const elStoreItem = document.querySelectorAll(".store-item");

function updateTechStatus() {
  elTechItem.forEach((el) => {
    const id = el.getAttribute("data-id");
    const tech = techItem.find((t) => t.id === id);
    const calsNow = window.gameState.cals - window.gameState.spend;
    if (!tech.owned && calsNow >= tech.price) {
      el.active = true;
      el.classList.remove("disabled");
      el.style.filter = "grayscale(0)";
      el.style.cursor = "pointer";
    } else {
      el.active = false;
      el.style.filter = "grayscale(1)";
      el.style.cursor = "not-allowed";
    }
    if (tech.owned) {
      el.classList.add("disabled");
      el.style.filter = "grayscale(1)";
      el.style.cursor = "not-allowed";
    }
    updateScoreList();
  });
}

elTechItem.forEach((el) => {
  const id = el.getAttribute("data-id");
  const tech = techItem.find((t) => t.id === id);

  // 正確的購買判斷
  const calsNow = window.gameState.cals - window.gameState.spend;
  if (!tech.owned && calsNow >= tech.price) {
    el.active = true;
    el.classList.remove("disabled");
    el.style.filter = "grayscale(0)";
    el.style.cursor = "pointer";
  } else {
    el.active = false;
    el.style.filter = "grayscale(1)";
    el.style.cursor = "not-allowed";
  }

  // 點擊購買
  el.addEventListener("click", function () {
    if (window.gameState.isGameOver) return;
    const calsNow = window.gameState.cals - window.gameState.spend;
    if (!tech.owned && calsNow >= tech.price) {
      window.gameState.spend += tech.price;
      elCalsNow.textContent =
        window.gameState.cals - window.gameState.spend + " kcal";
      tech.owned = true;
      tech.active = false;
      tech.level = 1;

      el.classList.add("disabled");
      el.style.filter = "grayscale(1)";
      el.style.cursor = "not-allowed";

      saveGameState();
      updateTechStatus();
    }
  });

  // 若已購買，直接加上已售完
  if (tech.owned) {
    el.classList.add("disabled");
    el.style.filter = "grayscale(1)";
  }
});

function updateStoreStatus() {
  elStoreItem.forEach((el) => {
    const id = el.getAttribute("data-id");
    const store = storeItem.find((s) => s.id === id);
    updateStoreItemClass(store, el);
  });
}

// 更新商店物品的狀態
function updateStoreItemClass(store, el) {
  const calsNow = window.gameState.cals - window.gameState.spend;
  el.classList.remove("disabled", "maxed");
  if (window.gameState.isGameOver) {
    el.style.filter = "grayscale(1)";
    el.style.cursor = "not-allowed";
    return;
  }
  if (store.level >= store.maxLevel) {
    el.classList.add("maxed");
    el.style.cursor = "not-allowed";
  } else if (calsNow < store.price) {
    el.style.filter = "grayscale(1)";
    el.style.cursor = "not-allowed";
  } else {
    el.style.filter = "grayscale(0)";
    el.style.cursor = "pointer";
  }
}

elStoreItem.forEach((el) => {
  const id = el.getAttribute("data-id");
  const store = storeItem.find((s) => s.id === id);
  updateStoreItemClass(store, el);

  el.addEventListener("click", function () {
    if (window.gameState.isGameOver) return;
    const calsNow = window.gameState.cals - window.gameState.spend;
    if (calsNow >= store.price && store.level < store.maxLevel) {
      window.gameState.spend += store.price;
      elCalsNow.textContent =
        window.gameState.cals - window.gameState.spend + " kcal";
      store.owned += 1;
      store.level += 1;
      // 升級費用遞增
      store.price = Math.floor(store.price * 1.15);
      // 更新畫面
      el.querySelector(".store-level").textContent = store.owned;
      el.querySelector(".store-price").textContent = store.price;
      updateStoreItemClass(store, el);
      saveGameState();
      updateStoreStatus();
      updateScoreList();
    }
  });
});
