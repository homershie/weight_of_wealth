const techItem = [
  {
    id: "farm",
    name: "馬鈴薯農場",
    description: "擴大馬鈴薯生產。<br>有50%的機率讓薯條一次生成2倍。",
    img: "./images/farm.png",
    active: false,
    owned: false,
    price: 2500,
    level: 0,
    maxLevel: 1,
  },
  {
    id: "chicken-coop",
    name: "外星雞舍",
    description: "解鎖雞塊。<br>每次點擊有50%機率額外生成雞塊。",
    img: "./images/chicken-coop.png",
    active: false,
    owned: false,
    price: 10000,
    level: 0,
    maxLevel: 1,
  },
  {
    id: "recipe",
    name: "蟹堡配方",
    description: "解鎖超級蟹堡。<br>每次點擊有10%機率額外生成超級蟹堡。",
    img: "./images/recipe.png",
    active: false,
    owned: false,
    price: 50000,
    level: 0,
    maxLevel: 1,
  },
  {
    id: "gene-therapy",
    name: "基因研究",
    description: "讓全種類食物的產量翻倍。",
    img: "./images/gene-therapy.png",
    active: false,
    owned: false,
    price: 100000,
    level: 0,
    maxLevel: 1,
  },
];

const storeItem = [
  {
    id: "emp_fry",
    name: "薯條妹妹",
    description: "雇用一位薯條妹妹。<br>每秒生產1份薯條的卡路里。",
    img: "./images/emp_fry.png",
    price: 2500,
    owned: 0,
    level: 0,
    maxLevel: 1000,
    calories: 241,
  },
  {
    id: "emp_nugget",
    name: "雞塊阿婆",
    description: "雇用一位雞塊阿婆。<br>每秒生產1份雞塊的卡路里。",
    img: "./images/emp_nugget.png",
    price: 5000,
    owned: 0,
    level: 0,
    maxLevel: 5000,
    calories: 444,
  },
  {
    id: "emp_burger",
    name: "漢堡大盜",
    description: "雇用一位漢堡大盜。<br>每秒偷取對手生產的1個漢堡的卡路里。",
    img: "./images/emp_burger.png",
    price: 9000,
    owned: 0,
    level: 0,
    maxLevel: 100,
    calories: 602,
  },
];

const point = [
  {
    id: "pt_fry",
    name: "薯條",
    description: "速食店的基礎食物，高油高碳水。",
    img: "./images/french-fries.png",
    calories: 241,
  },
  {
    id: "pt_nugget",
    name: "雞塊",
    description: "你永遠不知道裡面是什麼肉。",
    img: "./images/nuggets.png",
    calories: 444,
  },
  {
    id: "pt_burger",
    name: "超級蟹堡",
    description: "這是你吃過最好吃的化學組成漢堡。",
    img: "./images/burger.png",
    calories: 602,
  },
];

// storeItem 綁定到 DOM 元素
storeItem.forEach((item) => {
  const el = document.querySelector(`.store-item[data-id="${item.id}"]`);
  if (el) {
    const title = el.querySelector(".store-text .store-title");
    const price = el.querySelector(".store-text .store-price");
    const level = el.querySelector(".store-level");
    const img = el.querySelector(".store-img");

    if (title) title.textContent = item.name;
    if (price) price.textContent = item.price;
    if (level) level.textContent = item.owned;
    if (img) img.querySelector("img").src = item.img;
  }
});

// techItem 綁定到 DOM 元素
techItem.forEach((item) => {
  const el = document.querySelector(`.tech-item[data-id="${item.id}"]`);
  if (el) {
    const price = el.querySelector(".tech-price-container .tech-price");
    const img = el.querySelector(".tech-img");
    if (price) price.textContent = formatNumber(item.price);
    if (img) img.querySelector("img").src = item.img;
  }
});

// === 載入完資料後再更新 DOM ===
storeItem.forEach((item) => {
  const el = document.querySelector(`.store-item[data-id="${item.id}"]`);
  if (el) {
    const title = el.querySelector(".store-text .store-title");
    const price = el.querySelector(".store-text .store-price");
    const level = el.querySelector(".store-level");
    const img = el.querySelector(".store-img");

    if (title) title.textContent = item.name;
    if (price) price.textContent = item.price;
    if (level) level.textContent = item.owned;
    if (img) img.querySelector("img").src = item.img;
  }
});

// techItem 綁定到 DOM 元素
techItem.forEach((item) => {
  const el = document.querySelector(`.tech-item[data-id="${item.id}"]`);
  if (el) {
    const price = el.querySelector(".tech-price-container .tech-price");
    const img = el.querySelector(".tech-img");
    if (price) price.textContent = formatNumber(item.price);
    if (img) img.querySelector("img").src = item.img;
  }
});
