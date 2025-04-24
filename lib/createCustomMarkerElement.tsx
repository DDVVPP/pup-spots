import { getIconPathAndColor } from "./getIconPathAndColor";
import { Category } from "./types";

export const createCustomMarkerElement = (category?: Category): HTMLElement => {
  const el = document.createElement("div");
  const iconPath = getIconPathAndColor(category).iconPath;
  const iconColor = getIconPathAndColor(category).color;

  el.style.backgroundImage = `url(${iconPath})`;
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "70%";
  el.style.backgroundPosition = "center";
  el.style.width = "38px";
  el.style.height = "38px";
  el.style.borderRadius = "50%";
  el.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  el.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  el.style.border = `2px solid ${iconColor}`;
  el.style.cursor = "pointer";
  el.className = "marker";

  return el;
};
