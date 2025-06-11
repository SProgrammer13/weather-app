import { useState } from 'react'
import './App.css'
import SearchBar from './assets/components/SearchBar'
import DisplayedWeather from './assets/components/Displayed';
import { use } from 'react';

const apiKey = '48926b83330ccdf2c48aaf7a642e4e78';

function App() {
  const [weather, setWeather] = useState(null);
  async function weatherSearch(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=${city}&units=metric`
    const result = await fetch(url);
    if (result.ok) {
      const data = await result.json();
     setWeather(data)
    }
    else {
      console.log("This city doesn't exist!")
      setWeather(null)
    }

  }
  return (
    <>
      <SearchBar weatherSearch={weatherSearch}></SearchBar>
      <DisplayedWeather weather={weather}></DisplayedWeather>
    </>
  )
}

export default App
