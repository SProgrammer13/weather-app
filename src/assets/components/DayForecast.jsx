import { useState } from "react";

function DayForecast({forecastList}){
    if(!forecastList) return (<></>)

    return (
        <div className="day-forecast">
            <div className="day-times">
                {forecastList.map(item => (
                        <div className="time-period">
                            {new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                
                    )
                )}
            </div>

        </div>
    )
}

export default DayForecast;