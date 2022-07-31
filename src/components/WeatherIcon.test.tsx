import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { WeatherIcon } from './WeatherIcon';

describe('WeatherIcon', () => {
  test('should render default icon when no id passed', async () => {
    render(<WeatherIcon />)
    expect(await screen.findByTestId('weather-cloudy')).toBeInTheDocument()
  });

  test('should render default icon when unexpected id passed', async () => {
    render(<WeatherIcon id={247623376} />)
    expect(await screen.findByTestId('weather-cloudy')).toBeInTheDocument()
  });

  test('should render thunder icon when id is 200', async () => {
    render(<WeatherIcon id={200} />);
    expect(await screen.findByTestId('weather-thunder')).toBeInTheDocument()
  });

  test('should render rainy icon when id is 500', async () => {
    render(<WeatherIcon id={500} />);
    expect(await screen.findByTestId('weather-rainy')).toBeInTheDocument()
  });

  test('should render sunny icon when id is 800', async () => {
    render(<WeatherIcon id={800} />);
    expect(await screen.findByTestId('weather-sunny')).toBeInTheDocument()
  });
});