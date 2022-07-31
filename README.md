#Weather-component  package

##Installation

Before using this component you should have API key one can get after register on https://openweathermap.org/current

Next, you need to add the package folder to you project and install it as a package:

```
    npm install --save ../path/to/weather-component
```

To get a weather by geolocation from https://openweathermap.org you can use hook such as:

```
// useWeatherForecastHook

import { useState, useEffect } from 'react';
import { WeatherData } from '../utils/constants'

const API_KEY = '02c78a4dab30d92489bc5f718be93d97'

function getApiURL(apiKey: string, lat: string, lon: string) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${'38.7087276'}&lon=${'-9.4239224'}&appid=${API_KEY}&units=metric`
}

export function useWeatherForecast(apiKey: string) {
  const [weather, setWeather] = useState<WeatherData | undefined>()

  useEffect(() => {
    function getWeather() {
      const apiUrl = getApiURL(apiKey,'38.7087276', '-9.4239224')
      fetch(apiUrl)
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
```

```
import React from 'react'
import { WeatherComponent } from 'weather-component'
import { useWeatherForecast} from 'path/to/hook' 

const App = () => {
    const weather = useWeatherForecast(API_KEY, LATITUDE, LONGITUDE)

    return (
        <WeatherComponent weatherData={weather} />
    )
}
```

To get a weather by city from https://openweathermap.org you can provide changeCityHandler prop to WetaherComponent,
this will render input at the bottom of component and after user submit the form, changeCityHandler will receive the
user input.

Let the Sun Shine Down on You!!!

