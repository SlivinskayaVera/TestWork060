import React from 'react';
import { useWeatherStore } from '@/store/useWeatherStore';
import ForecastItem from '../ForecastItem/ForecastItem';
import { Stack } from 'react-bootstrap';
import Link from 'next/link';

const ForecastList = () => {
  const { forecast } = useWeatherStore();

  if (!forecast)
    return (
      <div>
        Go back to the <Link href='/'> home page</Link> and enter the name of the city.
      </div>
    );

  return (
    <Stack gap={3}>
      {forecast.map((item, index) => {
        return <ForecastItem key={index} weather={item} />;
      })}
    </Stack>
  );
};

export default ForecastList;
