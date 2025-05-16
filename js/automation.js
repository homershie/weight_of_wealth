let automationInterval = null;

function startAutomation() {
  if (automationInterval) clearInterval(automationInterval);
  automationInterval = setInterval(() => {
    let totalCalsPS = 0;
    storeItem.forEach((emp) => {
      if (emp.owned > 0) {
        let empCals = Math.round(emp.calories * Math.pow(1.1, emp.level - 1));
        if (window.gameState.angelBuff && window.gameState.angelBuff.active) {
          empCals *= 5;
        }
        window.gameState.cals += empCals;
        totalCalsPS += empCals;
      }
    });

    window.gameState.calsPS = totalCalsPS;
    elCals.textContent = formatNumber(window.gameState.cals);
    elCalsPS.textContent = window.gameState.calsPS + " kcal/s";
    elCalsNow.textContent =
      window.gameState.cals - window.gameState.spend + " kcal";
    updateStoreStatus();
    updateTechStatus();
  }, 1000);
}

function stopAutomation() {
  if (automationInterval) {
    clearInterval(automationInterval);
    automationInterval = null;
  }
}
