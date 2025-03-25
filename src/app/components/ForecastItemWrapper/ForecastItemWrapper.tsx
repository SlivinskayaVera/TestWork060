import { useWeatherStore } from '@/store/useWeatherStore';
import { Stack } from 'react-bootstrap';
import Link from 'next/link';
import ForecastItem from '../ForecastItem/ForecastItem';
import FavoriteCityButton from '../FavoriteCityButton/FavoriteCityButton';

const ForecastItemWrapper = () => {
  const { currentWeather, city } = useWeatherStore();

  if (!city || !currentWeather) return null;

  return (
    <Stack gap={3}>
      {currentWeather && city && <ForecastItem weather={currentWeather} />}

      <Stack gap={3} direction='horizontal'>
        <FavoriteCityButton />
        <Link href={`/forecast/${city.name}`}>View the forecast for five days...</Link>
      </Stack>
    </Stack>
  );
};

export default ForecastItemWrapper;
