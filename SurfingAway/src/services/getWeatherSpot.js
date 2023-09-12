import React from "react";
import { WEATHER_API_KEY } from "@env"

const getWeatherSpot = async (lat, lon) => {
    try {
        const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        )
        const data = await res.json()
        let arrayTemp = []
        console.log('fetch weather successfull');
        let temp_min = data["list"][0].main['temp_min']
        arrayTemp.push(temp_min)
        let temp_max = data["list"][0].main['temp_max']
        arrayTemp.push(temp_max)
        let windSpeed = data["list"][0].wind.speed
        arrayTemp.push(windSpeed)
        return arrayTemp
    } catch (e) {
        console.log('errorAPI weather, did not fetch the infos !');
    }
}

export default getWeatherSpot