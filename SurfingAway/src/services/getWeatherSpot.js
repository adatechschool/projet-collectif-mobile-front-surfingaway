import React from "react";
import { WEATHER_API_KEY } from "@env"

const getWeatherSpot = async () => {
    const API_KEY = "5ea9a15607cc5c592c37be3c04e6ea06"
    let lat = '47.2198'
    let lon = '-1.5334'
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
        console.log('errorAPI weather');
    }
}

export default getWeatherSpot