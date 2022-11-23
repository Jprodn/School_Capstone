import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import MapRouter from "./MapRouter";

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
        {/* <Marker position={[props.latitude, props.longitude]}>
          <Popup>Your location</Popup>
        </Marker> */}
        <MapRouter />
      </MapContainer>
    </div>
  );
}

let defaulIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = defaulIcon;
export default MapRoute;
