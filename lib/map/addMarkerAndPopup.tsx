import mapboxgl from "mapbox-gl";
import { Pin } from "../types";
import { createCustomMarkerElement } from "./createCustomMarkerElement";

export function addMarker(pin: Pin, map: mapboxgl.Map) {
  const el = createCustomMarkerElement(pin.category);
  const marker = new mapboxgl.Marker(el)
    .setLngLat([pin.lng, pin.lat])
    .addTo(map);

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    offset: 25,
  }).setHTML(`
    <div class="text-xs w-[200px] flex flex-col gap-y-1">
      <p class="font-bold text-red-400">${pin.title}</p>
      <p class="text-slate-600 text-wrap text-[11px]">${pin.description}</p>
    </div>
  `);

  marker.getElement().addEventListener("mouseenter", () => {
    popup.setLngLat([pin.lng, pin.lat]).addTo(map);
  });

  marker.getElement().addEventListener("mouseleave", () => {
    popup.remove();
  });
}
