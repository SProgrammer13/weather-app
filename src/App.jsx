import { useState } from 'react'
import './App.css'
import SearchBar from './assets/components/SearchBar'
import DisplayedWeather from './assets/components/Displayed';

function App() {
  function weatherSearch(city){
    console.log(city);
  
}
  return (
    <>
    <SearchBar weatherSearch = {weatherSearch}></SearchBar>
    <DisplayedWeather></DisplayedWeather>
    </>
  )
}

export default App
