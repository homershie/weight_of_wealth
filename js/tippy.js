tippy(".tech-item", {
  content(reference) {
    const id = reference.getAttribute("data-id");
    const tech = techItem.find((item) => item.id === id);
    if (!tech) return "";
    return `
  <div style="display: flex; gap: 10px; align-items: left;">
    <img src="${tech.img}" width="54" height="54" />
    <div>
      <div><b>${tech.name}</b></div>
      <div style="font-size: 12px; color: white;">${tech.description}</div>
    </div>
  </div>
`;
  },
  allowHTML: true,
  theme: "wow-dark",
  placement: "right",
  animation: "fade",
  delay: [100, 0],
  followCursor: true,
});

tippy(".store-item", {
  content(reference) {
    const id = reference.getAttribute("data-id");
    const store = storeItem.find((item) => item.id === id);
    if (!store) return "";
    return `
  <div style="display: flex; gap: 10px; align-items: left;">
    <img src="${store.img}" width="54" height="54" />
    <div>
      <div><b>${store.name}</b></div>
      <div style="font-size: 12px; color: white;">${store.description}</div>
    </div>
  </div>
`;
  },
  allowHTML: true,
  theme: "wow-dark",
  placement: "right",
  animation: "fade",
  delay: [100, 0],
  followCursor: true,
});

tippy(".restart-btn", {
  content(reference) {
    const id = reference.getAttribute("data-id");
    return `
  <div style="display: flex; gap: 10px; align-items: flex-start;">
      <div><b>${id}</b></div>
    </div>
`;
  },
  allowHTML: true,
  theme: "wow-dark",
  placement: "right",
  animation: "fade",
  delay: [100, 0],
  followCursor: true,
});
tippy(".end-btn", {
  content(reference) {
    const id = reference.getAttribute("data-id");
    return `
  <div style="display: flex; gap: 10px; align-items: flex-start;">
      <div><b>${id}</b></div>
    </div>
`;
  },
  allowHTML: true,
  theme: "wow-dark",
  placement: "right",
  animation: "fade",
  delay: [100, 0],
  followCursor: true,
});
