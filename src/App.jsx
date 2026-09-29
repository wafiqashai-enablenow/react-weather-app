import { useState, useEffect } from "react";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
function App() {
  const [city, setCity] = useState('Srinagar')
  const [weather, setWeather] = useState(null)
  useEffect(function initialize() {getWeather()}, [])
  async function getWeather() { 

    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`
    try{
    const response = await fetch(url)
    if(response.ok) {
    const data = await response.json()
    setWeather(data)
    console.log(data)}
    else {alert('Error fetching weather data')}
  } catch (error) {
    alert('Error fetching weather data')
  }}
  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button
        onClick={getWeather}
      >Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <h3>{weather.current.temp_c}°C</h3>
        </div>
      )}

    </div>

  )
}

export default App