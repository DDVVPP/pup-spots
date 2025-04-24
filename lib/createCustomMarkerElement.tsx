import { getIconUrlForCategory } from "./getIconUrlForCategory";
import { Category } from "./types";

export const createCustomMarkerElement = (category?: Category): HTMLElement => {
  const el = document.createElement("div");
  const imagePath = getIconUrlForCategory(category);

  el.style.backgroundImage = `url(${imagePath})`;
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "70%";
  el.style.backgroundPosition = "center";
  el.style.width = "38px";
  el.style.height = "38px";
  el.style.borderRadius = "50%";
  el.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  el.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  el.style.cursor = "pointer";
  el.className = "marker";

  return el;
};
