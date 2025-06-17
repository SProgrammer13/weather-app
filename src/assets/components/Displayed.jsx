import { useState } from "react";

function DisplayedWeather({weather}){
    if(!weather){
        return <div className="enter">Enter the city!</div>
    }

    return (
        <div className="displayed-weather">
            <p className="city-name">Weather in {weather.name}:</p>
            <div className="forecast">
                <p className="city-weather">Weather:{weather.weather[0].main}</p>
                <p className="temp">Temperature:{weather.main.temp}°C</p>
                <p className="wind">Wind:{weather.wind.speed}m/s</p>
                {weather.rain && weather.rain['1h'] && (
                    <div>Rain amount: {weather.rain['1h']}</div>
                )}
            </div>
        </div>
    )
}

export default DisplayedWeather;