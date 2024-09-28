"use client";

import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngExpression } from "leaflet";

// Set up default icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for the missing icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const customIcon = new L.Icon({
  iconUrl: "/mapmarker.png",
  iconRetinaUrl: "/mapmarker.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface MapProps {
  position: LatLngExpression;
  setPosition: (position: LatLngExpression) => void;
}

const MapClickHandler: React.FC<{ setPosition: MapProps['setPosition'] }> = ({ setPosition }) => {
  useMapEvents({
    click: (e) => {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const Map: React.FC<MapProps> = ({ position, setPosition }) => {
  const [lat, lng] = position as [number, number];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Latitude: {lat.toFixed(4)} <br /> Longitude: {lng.toFixed(4)}
        </Popup>
      </Marker>
      <MapClickHandler setPosition={setPosition} />
    </MapContainer>
  );
};

export default Map;