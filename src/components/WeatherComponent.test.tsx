import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { WeatherComponent } from './WeatherComponent';

const testWeather = {
  name: 'London',
  weather: [{ id: 300 }],
  main: {
    humidity: 99,
    temp: 20,
  },
  wind: {
    speed: 4
  }
}

describe('WeatherComponent', () => {
  test('renders WeatherComponent', async () => {
    render(<WeatherComponent />);
    expect(await screen.findByTestId('weather-component')).toBeInTheDocument()
  });

  test('should render loader when there is no data', async () => {
    render(<WeatherComponent />);
    expect(await screen.findByTestId('weather-loader')).toBeInTheDocument()
  });

  test('should render city name', async () => {
    render(<WeatherComponent weatherData={testWeather} />);

    expect(await screen.findByText('London')).toBeInTheDocument()
  });

  test('should render humidity', async () => {
    render(<WeatherComponent weatherData={testWeather} />);
    expect(await screen.findByText(/99/)).toBeInTheDocument()
  });

  test('should render temperature', async () => {
    render(<WeatherComponent weatherData={testWeather} />);

    expect(await screen.findByText(/20/)).toBeInTheDocument()
  });
});