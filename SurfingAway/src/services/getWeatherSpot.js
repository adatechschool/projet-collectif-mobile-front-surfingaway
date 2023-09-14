import React from "react";
import { WEATHER_API_KEY } from "@env"

const getWeatherSpot = async (lat, lon) => {
    try {
        const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=fr`
        )
        const data = await res.json()
        let arrayTemp = []
        const dataMain = data.list[0]
        console.log('fetch weather successfull');
        let temp_min = dataMain.main['temp_min']
        arrayTemp.push(temp_min)
        let temp_max = dataMain.main['temp_max']
        arrayTemp.push(temp_max)
        let windSpeed = dataMain.wind.speed
        arrayTemp.push(windSpeed)
        let weatherDescription = dataMain.weather[0].description
        arrayTemp.push(weatherDescription)
        return arrayTemp
    } catch (e) {
        console.log('errorAPI weather, did not fetch the infos !');
    }
}

export default getWeatherSpot