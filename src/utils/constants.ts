export type Weather = {
  id: number
}

export type WeatherData = {
  name: string,
  weather: Weather[]
  main: {
    humidity: number,
    temp: number,
  },
  wind: {
    speed: number
  }
}