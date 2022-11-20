import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapRoute(props) {
  return (
    <div className="map-container">
      <MapContainer
        center={[props.latitude, props.longitude]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.latitude, props.longitude]}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapRoute;
