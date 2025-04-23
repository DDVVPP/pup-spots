"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
      center: [-118.2437, 34.0522], // Los Angeles
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="w-full h-screen" />;
};

export default MapboxMap;
