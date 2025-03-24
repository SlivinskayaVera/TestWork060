'use client';

import { useWeatherStore } from '@/store/useWeatherStore';
import { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '@/api/api';
import { Stack } from 'react-bootstrap';
import ForecastList from '@/app/components/ForecastList/ForecastList';
import LoadingPage from '@/app/components/LoadingPage/LoadingPage';

const ForecastPage = () => {
  const { setForecast, city } = useWeatherStore();

  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setErrorText('');

    if (!city) return;

    setIsLoading(true);

    (async () => {
      try {
        const getForecast = await fetchWeatherForecast(city);
        setForecast(getForecast);
      } catch (error) {
        if (typeof error === 'string') {
          setErrorText(error);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setForecast, city]);

  return (
    <Stack gap={3} className='col-lg-7 mx-auto'>
      <h1>Weather forecast for 5 days {city ? `in ${city?.name}` : ''}</h1>

      <ForecastList />
      {errorText && <p>{errorText}</p>}

      {isLoading && <LoadingPage />}
    </Stack>
  );
};

export default ForecastPage;
