"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import MapHeader from "./MapHeader";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MapboxMap = () => {
  const mapContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  // Initialize map instance
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/dvanparijs/cm9rywpj900ht01rmfnwk0y30",
      center: [-118.2437, 34.0522], // Los Angeles
      zoom: 10,
    });

    map.on("click", (e) => {
      setShowModal((showModal) => !showModal);
      console.log("ive been clicked", e.lngLat);
    });

    return () => map.remove();
  }, []);

  return (
    <section className="absolute inset-0 overflow-hidden ">
      <div ref={mapContainerRef} className="w-full h-screen" />
      <MapHeader />

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MapboxMap;
