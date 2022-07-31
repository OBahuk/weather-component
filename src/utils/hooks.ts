import React from 'react';
import { WeatherData } from './constants'

const API_KEY = '02c78a4dab30d92489bc5f718be93d97'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${'38.7087276'}&lon=${'-9.4239224'}&appid=${API_KEY}&units=metric`

export function useWeatherForecast() {
    const [weather, setWeather] = React.useState<WeatherData | undefined>()

    React.useEffect(() => {
        function getWeather() {
            fetch(API_URL)
              .then(response => response.json())
              .then(data => {
                  setWeather(data)
              });
        }

        getWeather()
        const timeID = setInterval(
          getWeather,
            30000
        )
        return () => {
            clearInterval(timeID)
        };


    }, []);

    return weather
}