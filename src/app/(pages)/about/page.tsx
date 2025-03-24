import Link from 'next/link';
import { Stack } from 'react-bootstrap';

const AboutAppPage = () => {
  return (
    <Stack gap={2} className='col-lg-7 mx-auto'>
      <Stack gap={3}>
        <h1>Weather Forecast</h1>
        <p>
          The application is a simple web application for viewing the current weather and forecast for several days
          ahead, developed using Next.js and TypeScript. It allows users to search for the weather in different cities,
          view a detailed forecast, and save their favorite cities for quick access. The selected cities are saved in
          localStorage to remain accessible after the page is reloaded.
        </p>
        <p>The OpenWeatherMap API is used to get weather data.</p>
      </Stack>

      <Stack gap={3}>
        <h2>The main pages of the application</h2>
        <p>
          <Link href={'/'} target='_blank'>
            Home page
          </Link>
          : The user can enter the name of the city and get the current weather (temperature, humidity, wind speed,
          etc.). The &quot;Add to Favorites&quot; button: Allows you to save the city to your favorites list. Navigation
          to go to the weather forecast page for five days ahead. Weather forecast page: The forecast is displayed as
          information cards for each day.
        </p>
        <p>
          <Link href={'/favorites'} target='_blank'>
            Favorites Page
          </Link>
          : Displays saved cities with brief information about the current weather.
        </p>
      </Stack>

      <Stack gap={3}>
        <h2>Tech stack</h2>

        <p>Next.js TypeScript Axios Zustand SCSS Modules Bootstrap</p>
      </Stack>

      <Stack gap={3}>
        <h2>Contacts and additional links</h2>
        <Link href={'https://github.com/SlivinskayaVera/TestWork060'} target='_blank' rel='noopener noreferrer'>
          View the repository on github
        </Link>
        <Link
          href={'https://hh.ru/resume/350560b3ff0413b0de0039ed1f7a4d344a5472'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Link to resume
        </Link>
      </Stack>
    </Stack>
  );
};

export default AboutAppPage;
