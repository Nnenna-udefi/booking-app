import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error(
        "Mapbox access token is not defined in environment variables."
      );
    }

    mapboxgl.accessToken = accessToken;
    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as unknown as HTMLElement,
      style: "mapbox://styles/nnennaudefi/cm4mj2mv2002c01r088gz3dee",
      center: [-74.5, 40],
      zoom: 10,
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), "top");

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "8px",
      }}
    />
  );
};

export default Map;
