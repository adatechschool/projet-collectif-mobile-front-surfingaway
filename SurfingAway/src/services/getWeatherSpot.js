import React from "react";
import { WEATHER_API_KEY } from "@env"

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

const getWeatherSpot = async (lat, lon) => {
    try {
        const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=fr`
        )
        const data = await res.json()
        let arrayDataWeather = []
        const dataMain = data.list[0]
        console.log(msToTime(data.city.sunrise));
        console.log('fetch weather successfull');
        // dataWeatherArray = [temp_min, temp_max, windSpeed, weatherDescription, pressure, humidity, sunrise, sunset]
        arrayDataWeather.push(dataMain.main['temp_min'])
        arrayDataWeather.push(dataMain.main['temp_max'])
        arrayDataWeather.push(dataMain.wind.speed)
        arrayDataWeather.push(dataMain.weather[0].description)
        arrayDataWeather.push(dataMain.main['pressure'])
        arrayDataWeather.push(dataMain.main['humidity'])
        arrayDataWeather.push(dataMain.main['humidity'])
        arrayDataWeather.push(dataMain.main['humidity'])

        console.log(arrayDataWeather);
        return arrayDataWeather
    } catch (e) {
        console.log('errorAPI weather, did not fetch the infos !');
    }
}

export default getWeatherSpot