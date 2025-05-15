function updateScoreList() {
  // 計算加成
  let fry = point[0].calories;
  let nugget = point[1].calories;
  let burger = point[2].calories;

  // gene-therapy科技：全種類食物產量翻倍
  const geneTech = techItem.find((t) => t.id === "gene-therapy");
  if (geneTech && geneTech.owned) {
    fry *= 2;
    nugget *= 2;
    burger *= 2;
  }

  if (elCalsFry) {
    elCalsFry.textContent = "+" + fry + " kcal";
  }
  if (elCalsNugget) {
    elCalsNugget.textContent = "+" + nugget + " kcal";
  }
  if (elCalsBurger) {
    elCalsBurger.textContent = "+" + burger + " kcal";
  }
}
