import { useState } from "react";

function DisplayedWeather({weather}){
    if(!weather){
        return <div className="enter">Enter the city!</div>
    }

    return (
        <div className="displayed-weather">
            <p className="city-name">Weather in {weather.name}, {new Intl.DisplayNames('en', {type: 'region'}).of(weather.sys.country)}:</p>
            <div className="forecast">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" className="weather-icon" />
                <p className="city-weather">Weather:{weather.weather[0].main}</p>
                <p className="temp">Temperature:{weather.main.temp}°C</p>
                <p className="feels-like">Feels like:{weather.main.feels_like}°C</p>
                <p className="wind">Wind:{weather.wind.speed}m/s</p>
                <p className="humidity">Humidity:{weather.main.humidity}%</p>
                <p className="pressure">Pressure:{Math.round(weather.main.pressure * 0.7500615758)}mm</p>
                {weather.rain && weather.rain['1h'] && (
                    <div>Rain amount: {weather.rain['1h']}</div>
                )}
                <p className="sunrise-sunset">Sunrise:{new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}, Sunset:{new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            </div>
        </div>
    )
}

export default DisplayedWeather;