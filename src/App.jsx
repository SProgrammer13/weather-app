import { useState } from 'react'
import './App.css'
import SearchBar from './assets/components/SearchBar'
import Forecast from './assets/components/Forecast';
import DisplayedWeather from './assets/components/Displayed';

const apiKey = '48926b83330ccdf2c48aaf7a642e4e78';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  async function weatherSearch(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=${city}&units=metric`
    const result = await fetch(url);
    if (result.ok) {
      const data = await result.json();
     setWeather(data)
     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?&appid=${apiKey}&q=${city}&units=metric`
    const forecastResult = await fetch(forecastUrl);
    if (forecastResult.ok) {
      const data = await forecastResult.json();
      setForecast(data);
      console.log(data);
      }
      else {
      alert("This city doesn't exist! Try again.")
      setWeather(null)
      setForecast(null)
    }
  }

    else {
      alert("This city doesn't exist! Try again.")
      setWeather(null)
    }
  }
  return (
    <>
      <SearchBar weatherSearch={weatherSearch}></SearchBar>
      <div className="weather-section">
        <DisplayedWeather weather={weather}></DisplayedWeather>
        <Forecast forecastData={forecast}></Forecast>
      </div>
    </>
  )
}

export default App
