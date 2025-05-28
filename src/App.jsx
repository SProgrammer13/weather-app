import { useState } from 'react'
import './App.css'
import SearchBar from './assets/components/SearchBar'

function App() {
  function weatherSearch(city){
    console.log(city);
  
}
  return (
    <>
    <SearchBar weatherSearch = {weatherSearch}></SearchBar>
    </>
  )
}

export default App
