import axios from 'axios';

const GEO_URL = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_GEO_URL;
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_KEY;

export const convertCityNameToCityObject = async (cityName: string) => {
  const response = await axios.get(`${GEO_URL}`, {
    params: { q: cityName, limit: 5, appid: API_KEY },
  });

  if (response.data.length === 0) {
    throw 'Nothing was found for your query';
  }

  return response.data;
};
