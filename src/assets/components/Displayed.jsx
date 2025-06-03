import { useState } from "react";

function DisplayedWeather(weatherSearch){
    return (
        <div className="displayed-weather">
            <h3 className="city-name" weatherSearch = {weatherSearch}></h3>
        </div>
    )
}

export default DisplayedWeather;