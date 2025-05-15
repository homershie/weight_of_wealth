let automationInterval = null;

function startAutomation() {
  if (automationInterval) clearInterval(automationInterval);
  automationInterval = setInterval(() => {
    // ...自動產生熱量...
    let totalCalsPS = 0;
    storeItem.forEach((emp) => {
      if (emp.owned > 0) {
        const empCals = Math.round(emp.calories * Math.pow(1.1, emp.level - 1));
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
