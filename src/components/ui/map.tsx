import React, { useEffect, useRef } from "react";
import L from "leaflet";

const MapComponent = () => {
  const mapRef = useRef<L.Map | null>(null); // Keep a reference to the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only if it hasn't been initialized
      mapRef.current = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Cleanup function to destroy the map instance when the component unmounts
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" style={{ height: "100%", width: "100%" }} />;
};

export default MapComponent;
