'use client';

import { useWeatherStore } from '@/store/useWeatherStore';
import { Stack } from 'react-bootstrap';
import SearchWithDropDown from './components/SearchWithDropDown/SearchWithDropDown';
import Link from 'next/link';
import ForecastItem from './components/ForecastItem/ForecastItem';
import FavoriteCityButton from './components/FavoriteCityButton/FavoriteCityButton';

const HomePage = () => {
  const { currentWeather, city } = useWeatherStore();

  return (
    <Stack gap={3} className='col-lg-7 mx-auto'>
      <h1>Weather</h1>

      <SearchWithDropDown />

      {currentWeather && city && <ForecastItem weather={currentWeather} />}

      <Stack gap={3} direction='horizontal'>
        <FavoriteCityButton />
        {city && <Link href={`/forecast/${city.name}`}>View the forecast for five days...</Link>}
      </Stack>
    </Stack>
  );
};

export default HomePage;
