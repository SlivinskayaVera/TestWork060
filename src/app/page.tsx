'use client';

import { Stack } from 'react-bootstrap';
import SearchWithDropDown from './components/SearchWithDropDown/SearchWithDropDown';
import ForecastItemWrapper from './components/ForecastItemWrapper/ForecastItemWrapper';

const HomePage = () => {
  return (
    <Stack gap={3} className='col-lg-7 mx-auto'>
      <h1>Weather</h1>

      <SearchWithDropDown />
      
      <ForecastItemWrapper />
    </Stack>
  );
};

export default HomePage;
