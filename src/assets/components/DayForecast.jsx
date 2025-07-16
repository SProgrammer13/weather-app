import { useState } from "react";

function DayForecast({forecastList}){
    if(!forecastList) return (<></>)

    return (
        <div className="day-forecast">
            <div className="day-times">
                {forecastList.map((item, index) => (
                        <div className="time-period" key={index}>
                             <div className="info time">
                             {new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                            <img className='info icon' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                             <p className="city-weather">{item.weather[0].main}</p>
                            <div className="info">
                                {item.main.temp}°C
                            </div>
                            <div className="info">
                                {item.wind.speed}m/s
                            </div>
                            <div className="info">
                                {item.main.humidity}%
                            </div>
                             <div className="info">
                                {Math.round(item.main.pressure * 0.7500615758)}mm
                        </div>
                    </div>
                
                    )
                )}
            </div>

        </div>
    )
}

export default DayForecast;