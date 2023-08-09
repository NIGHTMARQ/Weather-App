import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={10} style={{ width: '100%', height: '300px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>City Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
