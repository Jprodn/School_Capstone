import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapRoute() {
  return (
    <div className="map-container">
      <MapContainer
        center={[29.55131, -95.097402]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[29.55131, -95.097402]}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapRoute;
