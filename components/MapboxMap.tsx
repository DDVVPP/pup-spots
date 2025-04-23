"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import MapHeader from "./MapHeader";
import AddPinDialog from "./AddPinDialog";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MapboxMap = () => {
  const mapContainerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Initialize map instance
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
      center: [-118.2437, 34.0522], // Los Angeles
      zoom: 10,
    });

    map.on("click", (e) => {
      setOpen((open) => !open);
      console.log("ive been clicked", e.lngLat);
    });

    return () => map.remove();
  }, []);

  const handleSubmit = () => {
    console.log("submitted");
    setOpen((open) => !open);
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
