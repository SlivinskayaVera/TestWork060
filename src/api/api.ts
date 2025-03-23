import { ICity, IForecast } from '@/app/commonTypes/types';
import axios, { isAxiosError } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_URL;
const GEO_URL = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_GEO_URL;
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_KEY;

export const convertCityNameToCityObject = async (cityName: string) => {
  const response = await axios.get(`${GEO_URL}`, {
    params: { q: cityName, limit: 5, appid: API_KEY },
  });

  if (response.data.length === 0) {
    throw 'Nothing was found for your query';
  }

  const results = response.data.map((result: ICity, index: number) => {
    return {
      id: index + 1,
      country: result.country,
      lat: result.lat,
      lon: result.lon,
      name: result.name,
      state: result.state,
    };
  });

  return results;
};

export const fetchCurrentWeather = async (city: ICity) => {
  try {
    const response = await axios(`${BASE_URL}/weather`, {
      params: {
        lat: city.lat,
        lon: city.lon,
        appid: API_KEY,
        units: 'metric',
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 400) {
        throw 'Invalid request';
      } else if (error.status === 401) {
        throw 'Your request cannot be processed at the moment';
      } else if (error.status === 404) {
        throw 'Nothing was found for your query';
      } else if (error.status === 429) {
        throw 'Sorry, you have limited access';
      }
    } else {
      throw 'An unexpected error has occurred, please try again later';
    }
  }
};

export const fetchWeatherForecast = async (city: ICity) => {
  try {
    const response = await axios(`${BASE_URL}/forecast`, {
      params: {
        lat: city.lat,
        lon: city.lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    
    return response.data.list.filter((item: IForecast) => item.dt_txt.includes('12:00'));
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 400) {
        throw 'Invalid request';
      } else if (error.status === 401) {
        throw 'Your request cannot be processed at the moment';
      } else if (error.status === 404) {
        throw 'Nothing was found for your query';
      } else if (error.status === 429) {
        throw 'Sorry, you have limited access';
      }
    } else {
      throw 'An unexpected error has occurred, please try again later';
    }
  }
};
