import { useState } from "react";

function DayForecast({forecastList}){
    if(!forecastList) return (<></>)

    return (
        <div className="day-forecast">
            <div className="day-times">
                {forecastList.map(item => (
                        <div className="time-period">
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                            <div>
                             {new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                            <div>
                                {item.main.temp}°C
                            </div>
                            <div>
                                {item.wind.speed}m/s
                            </div>
                            <div>
                                Humidity:{item.main.humidity}%
                            </div>
                        </div>
                
                    )
                )}
            </div>

        </div>
    )
}

export default DayForecast;