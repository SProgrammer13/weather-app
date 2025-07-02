import DayForecast from "./DayForecast";
import { useState } from "react";
import { useEffect } from "react";


function Forecast({forecastData}){
    if(!forecastData) return (<></>)

    const daysForecast = {}
    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд']

    forecastData.list.forEach(element => {
        const date = element.dt_txt.split(' ')[0]
        if(!daysForecast[date]) daysForecast[date] = []
        daysForecast[date].push(element);

    });

    console.log(daysForecast)
    const [currentDayWeather, setCurrentDayWeather] = useState(null);
    useEffect(() => {
        setCurrentDayWeather(daysForecast[Object.keys(daysForecast)[0]])
    }, [daysForecast])

    return (
        <div className="forecast-future">
        <div className="days-row">
            {Object.keys(daysForecast).map(date =>{
                const weekday = new Date(date).toLocaleDateString('uk-UA', {weekday: "short"});
                return (
                    <div key={date} className="day-weather">
                        <button className="day-btn">{weekday}</button>
                    </div>
                )
            })}
        </div>
        <DayForecast forecastList={currentDayWeather}></DayForecast>
    </div>
    )
}

export default Forecast;