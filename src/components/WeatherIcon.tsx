import React from 'react';

import * as Icons from './WeatherIcons'

/*
  Component that returns SVG icon depends on id

  All IDs for weather can be found here:
  https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/

type Props = {
  id?: number
}

export const WeatherIcon = ({id}: Props) => {
  if(Math.round(id/100) === 2) {
    return <Icons.ThunderSVG />
  }

  if(Math.round(id/100) === 3 || Math.round(id/100) === 5) {
    return <Icons.RainySVG />
  }

  if(Math.round(id/100) === 6) {
    return <Icons.SnowySVG />
  }

  if(id === 800) {
    return <Icons.SunnySVG />
  }

  return <Icons.CloudySVG />
}
