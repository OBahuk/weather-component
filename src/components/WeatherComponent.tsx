import React from 'react'

import { WeatherIcon } from './WeatherIcon'
import { SunnySVG } from './WeatherIcons'

import { WeatherData } from '../utils/constants'

import '../styles/styles.css'

type Props = {
  changeCityHandler?: (city: string) => void
  theme?: string
  className?: string
  weatherData?: WeatherData
}

export const WeatherComponent = ({ changeCityHandler, weatherData, className, theme }: Props) => {
  return (
    <div
      className={`weather-component ${ className || ''} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
      data-testid='weather-component'
    >
      {
        !weatherData ? (
          <h2 data-testid='weather-loader'>
            <SunnySVG />Loading....
          </h2>
        ) : (
          <>
            <div className='weather-content'>
              <div className='left-column'>
                <h3>
                  Weather for <span className='city-name'>{weatherData.name}</span>
                </h3>
                <p className='temperature'>{}{Math.round(weatherData.main.temp)} &#8451;</p>
                <div className='other-conditions'>
                  <p className='wind-speed'>{weatherData.wind.speed}km/h</p>
                  <p className='humidity'>{weatherData.main.humidity}%</p>
                </div>
              </div>
              <figure className='weather-icon'>
                <WeatherIcon id={weatherData.weather[0].id} />
              </figure>
            </div>
            {changeCityHandler && (
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault()
                  const { value } = e.currentTarget.elements[0] as HTMLInputElement
                  changeCityHandler(value)
                  e.currentTarget.reset()
                }}
              >
                <input type='text' name='city' />
                <button type='submit'>Get Weather for your City</button>
              </form>
            )}
          </>
        )
      }
    </div>
  );
};
