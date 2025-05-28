import { useState } from "react";

function SearchBar({weatherSearch}){
const [city, setCity] = useState('')
    return (
        <div className="search-bar">
            <input value={city} onChange={(e) =>{setCity(e.target.value)}} type="text" placeholder="Search city..."/>
            <button onClick={() => {weatherSearch(city)}} className="srch-btn">Enter</button>
        </div>
    )
    
}

export default SearchBar;