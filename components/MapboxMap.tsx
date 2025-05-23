"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import MapHeader from "./MapHeader";
import AddPinDialog from "./AddPinDialog";
import { Coords, Pin } from "@/lib/types";
import { preloadedPins } from "@/lib/constants";
import { addMarker } from "@/lib/addMarkerAndPopup";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MapboxMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map>(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pins, setPins] = useState<Pin[]>([]);
  const [selectedCoords, setSelectedCoords] = useState<Coords | null>(null);

  // Initialize map instance
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
      center: [-118.2437, 34.0522], // Los Angeles
      zoom: 10,
    });
    mapRef.current = map;

    map.on("click", (e) => {
      setSelectedCoords(e.lngLat);
      setOpen(true);
    });

    return () => map.remove();
  }, []);

  // Add markers and popups
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    pins.forEach((pin) => addMarker(pin, map));
  }, [pins]);

  // Load pins from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("pup-spots");
    if (stored) {
      try {
        setPins(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse stored pins:", err);
      }
    } else {
      localStorage.setItem("pup-spots", JSON.stringify(preloadedPins));
      setPins(preloadedPins);
    }
  }, []);

  // Update localStorage when a pin gets added
  useEffect(() => {
    localStorage.setItem("pup-spots", JSON.stringify(pins));
  }, [pins]);

  const handleSubmit = () => {
    if (!selectedCoords || !title.trim()) return;

    const newPin: Pin = {
      lat: selectedCoords.lat,
      lng: selectedCoords.lng,
      title,
      description,
    };

    setPins((prev) => [...prev, newPin]);
    setTitle("");
    setDescription("");
    setSelectedCoords(null);
    setOpen(false);
  };

  return (
    <section className="absolute inset-0 overflow-hidden ">
      <div ref={mapContainerRef} className="w-full h-screen" />
      <MapHeader />
      <AddPinDialog
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default MapboxMap;
