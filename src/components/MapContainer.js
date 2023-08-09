import React from 'react';

const MapContainer = ({ latitude, longitude }) => {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.1},${latitude - 0.1},${longitude + 0.1},${latitude + 0.1}&layer=mapnik`;

  return (
    <div className="map-container">
      <iframe
        width="100%"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
        style={{ border: '2px solid #ccc' }} // Add this inline style
      ></iframe>
    </div>
  );
};

export default MapContainer;
