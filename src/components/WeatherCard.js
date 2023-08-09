import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { main, weather, name, sys } = weatherData;

  return (
    <div className="weather-card">
      <h2>Weather in {name}, {sys.country}</h2>
      <div className="weather-info">
        <p>Temperature: {main.temp}°C</p>
        <p>Description: {weather[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
