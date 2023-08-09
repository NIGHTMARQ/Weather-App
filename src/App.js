import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import MapContainer from './components/MapContainer';

const suggestedCities = ['New York', 'Delhi', 'San Francisco', 'Chicago', 'Houston', 'Mumbai']

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(0); 
  const [longitude, setLongitude] = useState(0);


  const API_KEY = '477cfb51c0f1d2621e4a47efba0609b0';
  const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = async () => {
    setError(null);
    try {
      let selectedCity = city;

    if (suggestedCities.includes(city)) {
      selectedCity = city;
      setCity(selectedCity); 
    }

      const response = await fetch(`${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setLatitude(data.coord.lat); 
      setLongitude(data.coord.lon);
    } catch (err) {
      setError('City not found');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main className="App-main">
        <div className="search-form">
        <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            list="suggestions" 
          />
          <datalist id="suggestions">
            {suggestedCities.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>

          <button onClick={fetchWeatherData}>Get Weather</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </main>
      {weatherData && (
        <div className="map-container">
          <MapContainer latitude={latitude} longitude={longitude} />
        </div>
      )}
    </div>
  );
}

export default App;
