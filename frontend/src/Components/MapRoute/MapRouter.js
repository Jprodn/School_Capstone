import React from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

function MapRouter() {
  const map = useMap();
  React.useEffect(() => {
    L.Routing.control({
      waypoints: [
        L.latLng(33.212762, -97.765116),
        L.latLng(29.713837, -95.391742),
        L.latLng(32.787798, -96.801276),
      ],
      lineOptions: {
        styles: [
          {
            color: "red",
            weight: 7,
          },
        ],
      },
      //   For search with directions
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      fitSelectedRoutes: true,
      showAlternatives: true,
    }).addTo(map);
  });
  return null;
}

export default MapRouter;
