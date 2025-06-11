import { useState } from "react";

function DisplayedWeather({weather}){
    if(!weather){
        return <div>Enter the city!</div>
    }

    return (
        <div className="displayed-weather">
            <h3 className="city-name">Погода у місті {weather.name}</h3>
            <h3>Weather:{weather.weather[0].main}</h3>
            <h2>Temperature:{weather.main.temp}°C</h2>
            <h4>Wind:{weather.wind.speed}m/s</h4>
            {<div>Rain amount: {weather.rain['1h']}</div>} && {weather.rain}
        </div>
    )
}

export default DisplayedWeather;