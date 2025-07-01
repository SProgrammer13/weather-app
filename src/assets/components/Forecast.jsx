
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
    return (
        <div className="forecast-future">
            <p className="txt-forecast">Weather forecast:</p>
            {Object.keys(daysForecast).map(date =>{
                const weekday = new Date(date).toLocaleDateString('uk-UA', {weekday: "short"});
                return (
                    <div key={date} className="day-weather">
                        <h2>{weekday}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Forecast;